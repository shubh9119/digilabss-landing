"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CalendarProps {
  selected?: Date;
  onSelect?: (date: Date) => void;
  className?: string;
  minDate?: Date;
}

export function Calendar({
  selected,
  onSelect,
  className,
  minDate = new Date(),
}: CalendarProps) {
  const [currentMonth, setCurrentMonth] = React.useState<Date>(() => {
    return selected ? new Date(selected.getFullYear(), selected.getMonth(), 1) : new Date();
  });

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  // Days in month
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  // First day of month (0 = Sunday)
  const firstDayIndex = new Date(year, month, 1).getDay();
  // Days in previous month
  const prevMonthDays = new Date(year, month, 0).getDate();

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(year, month + 1, 1));
  };

  const isToday = (d: number) => {
    const today = new Date();
    return (
      today.getDate() === d &&
      today.getMonth() === month &&
      today.getFullYear() === year
    );
  };

  const isSelected = (d: number) => {
    if (!selected) return false;
    return (
      selected.getDate() === d &&
      selected.getMonth() === month &&
      selected.getFullYear() === year
    );
  };

  const isPast = (d: number) => {
    const dateToCheck = new Date(year, month, d, 23, 59, 59);
    const startOfToday = new Date();
    startOfToday.setHours(0, 0, 0, 0);
    return dateToCheck < startOfToday;
  };

  const isSunday = (d: number) => {
    return new Date(year, month, d).getDay() === 0;
  };

  const calendarDays = [];

  // Previous month filler days
  for (let i = firstDayIndex - 1; i >= 0; i--) {
    calendarDays.push({
      day: prevMonthDays - i,
      current: false,
      date: new Date(year, month - 1, prevMonthDays - i),
    });
  }

  // Current month days
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push({
      day: i,
      current: true,
      date: new Date(year, month, i),
    });
  }

  // Next month filler days to complete grid (42 cells: 6 rows of 7)
  const remaining = 42 - calendarDays.length;
  for (let i = 1; i <= remaining; i++) {
    calendarDays.push({
      day: i,
      current: false,
      date: new Date(year, month + 1, i),
    });
  }

  return (
    <div className={cn("p-4 bg-white rounded-2xl border border-gray-100 shadow-sm w-full max-w-[320px] select-none", className)}>
      {/* Header with navigation */}
      <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-3">
        <h4 className="text-sm font-semibold text-apple-black">
          {monthNames[month]} {year}
        </h4>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={handlePrevMonth}
            className="h-8 w-8 inline-flex items-center justify-center rounded-lg border border-gray-200 text-apple-gray-6 hover:bg-apple-gray-1 hover:text-apple-black transition-colors"
            aria-label="Previous month"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={handleNextMonth}
            className="h-8 w-8 inline-flex items-center justify-center rounded-lg border border-gray-200 text-apple-gray-6 hover:bg-apple-gray-1 hover:text-apple-black transition-colors"
            aria-label="Next month"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Weekday headers */}
      <div className="grid grid-cols-7 gap-1 text-center mb-1">
        {daysOfWeek.map((d) => (
          <span key={d} className="text-xs font-semibold text-apple-gray-4 py-1">
            {d}
          </span>
        ))}
      </div>

      {/* Days grid */}
      <div className="grid grid-cols-7 gap-1 text-center">
        {calendarDays.map((item, idx) => {
          if (!item.current) {
            return (
              <span
                key={idx}
                className="h-9 w-9 inline-flex items-center justify-center text-xs text-apple-gray-3 cursor-default"
              >
                {item.day}
              </span>
            );
          }

          const disabled = isPast(item.day) || isSunday(item.day);
          const selectedState = isSelected(item.day);
          const todayState = isToday(item.day);

          return (
            <button
              key={idx}
              type="button"
              disabled={disabled}
              onClick={() => onSelect && onSelect(item.date)}
              className={cn(
                "h-9 w-9 text-xs rounded-xl inline-flex items-center justify-center font-medium transition-all duration-150 relative",
                selectedState
                  ? "bg-apple-blue text-white shadow-md shadow-apple-blue/30 font-semibold scale-105"
                  : todayState
                  ? "border border-apple-blue text-apple-blue font-semibold hover:bg-apple-blue/10"
                  : disabled
                  ? "text-apple-gray-3 cursor-not-allowed line-through opacity-40"
                  : "text-apple-black hover:bg-apple-gray-1 hover:scale-105 active:scale-95"
              )}
            >
              {item.day}
            </button>
          );
        })}
      </div>
    </div>
  );
}
