import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const dashify = (text: string) => text.toLowerCase().replaceAll(" ", "-");
export const unDashify = (text: string) => text.replaceAll("-", " ");