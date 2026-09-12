import { NextResponse } from "next/server";
import { writeFile, readFile, mkdir } from "fs/promises";
import path from "path";

const SUBMISSIONS_DIR = path.join(process.cwd(), "data");
const SUBMISSIONS_FILE = path.join(SUBMISSIONS_DIR, "submissions.json");

interface Submission {
  id: string;
  name: string;
  email: string;
  company: string;
  budgetRange: string;
  scheduledDate?: string;
  timeSlot?: string;
  submittedAt: string;
}

async function ensureDir() {
  try {
    await mkdir(SUBMISSIONS_DIR, { recursive: true });
  } catch {
    // directory exists
  }
}

async function readSubmissions(): Promise<Submission[]> {
  try {
    const data = await readFile(SUBMISSIONS_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, company, budgetRange, scheduledDate, timeSlot } = body;

    // Server-side validation
    if (!name || !email || !company || !budgetRange) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    const submission: Submission = {
      id: crypto.randomUUID(),
      name,
      email,
      company,
      budgetRange,
      scheduledDate,
      timeSlot,
      submittedAt: new Date().toISOString(),
    };

    // Persist to JSON file (verifiable CRM substitute)
    await ensureDir();
    const submissions = await readSubmissions();
    submissions.push(submission);
    await writeFile(SUBMISSIONS_FILE, JSON.stringify(submissions, null, 2));

    // Log to console for verification
    console.log("📥 New lead/scheduled consultation captured:", submission);

    return NextResponse.json(
      { success: true, id: submission.id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Submission error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const submissions = await readSubmissions();
    return NextResponse.json({ submissions, count: submissions.length });
  } catch {
    return NextResponse.json({ submissions: [], count: 0 });
  }
}
