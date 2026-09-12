import { z } from "zod";

export const leadFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long"),
  email: z
    .string()
    .email("Please enter a valid email address"),
  company: z
    .string()
    .min(2, "Company name must be at least 2 characters")
    .max(100, "Company name is too long"),
  budgetRange: z
    .string()
    .min(1, "Please select a budget range"),
  scheduledDate: z.string().optional(),
  timeSlot: z.string().optional(),
});

export type LeadFormData = z.infer<typeof leadFormSchema>;

export const budgetOptions = [
  { value: "", label: "Select your monthly budget" },
  { value: "5k-10k", label: "$5K – $10K / month" },
  { value: "10k-25k", label: "$10K – $25K / month" },
  { value: "25k-50k", label: "$25K – $50K / month" },
  { value: "50k+", label: "$50K+ / month" },
] as const;

export const timeSlots = [
  "09:00 AM - 09:30 AM EST",
  "11:00 AM - 11:30 AM EST",
  "02:00 PM - 02:30 PM EST",
  "04:30 PM - 05:00 PM EST",
] as const;
