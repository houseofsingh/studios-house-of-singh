import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getNeighbors<T>(arr: readonly T[], index: number): T[] {
  if (
    !Array.isArray(arr) ||
    arr.length === 0 ||
    index < 0 ||
    index >= arr.length
  ) {
    return [];
  }

  const hasPrev = index - 1 >= 0;
  const hasNext = index + 1 < arr.length;

  // Middle: both sides exist → [prev, next]
  if (hasPrev && hasNext) {
    return [arr[index - 1], arr[index + 1]];
  }

  // Start: no previous → next two
  if (!hasPrev) {
    return arr.slice(1, Math.min(arr.length, 3)); // returns [arr[1], arr[2]?]
  }

  // End: no next → previous two
  return arr.slice(Math.max(0, index - 2), index); // returns [arr[index-2]?, arr[index-1]]
}
