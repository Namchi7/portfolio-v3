"use client";
import { useEffect, useState } from "react";

const MONTHS: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

type YearMonth = { y: number; m: number }; // m is 0-based

const isPresentStr = (s: string): boolean =>
  s.trim() === "" || s.trim().toLowerCase() === "present";

// Parses "YYYY-MM" / "YYYY-MM-DD" without timezone shifts.
// Falls back to Date parsing for other formats (e.g. "June 2023").
const parseYearMonth = (s: string): YearMonth | null => {
  const match = s.trim().match(/^(\d{4})-(\d{1,2})/);
  if (match) return { y: Number(match[1]), m: Number(match[2]) - 1 };

  const d = new Date(s);
  if (Number.isNaN(d.getTime())) return null;
  return { y: d.getFullYear(), m: d.getMonth() };
};

const getDurationStr = (fromStr: string, toStr: string): string => {
  const present = isPresentStr(toStr);
  const now = new Date();

  const from = parseYearMonth(fromStr);
  const to: YearMonth | null = present
    ? { y: now.getFullYear(), m: now.getMonth() }
    : parseYearMonth(toStr);

  if (!from || !to) return `${fromStr} - ${present ? "Present" : toStr}`;

  const fromDate = `${MONTHS[from.m]} ${from.y}`;
  const toDate = present ? "Present" : `${MONTHS[to.m]} ${to.y}`;

  const totalMos = (to.y - from.y) * 12 + (to.m - from.m) + 1;
  if (totalMos < 1) return `${fromDate} - ${toDate}`;

  const yrs = Math.floor(totalMos / 12);
  const mos = totalMos % 12;

  const ymStr = [yrs > 0 ? `${yrs}yrs` : "", mos > 0 ? `${mos}mos` : ""]
    .filter(Boolean)
    .join(" ");

  return `${fromDate} - ${toDate} (${ymStr})`;
};

type Props = {
  from: string;
  to: string;
  className?: string;
};

export default function ExperienceDuration({ from, to, className }: Props) {
  const [text, setText] = useState("");

  useEffect(() => {
    setText(getDurationStr(from, to));
  }, [from, to]);

  return <span className={className}>{text}</span>;
}
