import React from 'react';
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const ScribbleStar = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("w-10 h-10", className)}>
    <path d="M50 5C50 5 45 35 20 40C20 40 45 45 50 80C50 80 55 45 80 40C80 40 55 35 50 5Z" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const WineStain = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 200 200" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={cn("w-32 h-32 text-[var(--color-wine)] opacity-80", className)}>
    <path d="M60.5 45.5C40.1 52.3 25.4 75.8 30.2 96.5C34.4 114.7 58.1 123.6 72.5 136C86.9 148.4 92.1 165.6 110 169.5C130.6 174 153.5 159.2 161.5 139.5C169.5 119.8 162.8 95.1 146.5 80C130.2 64.9 104.5 56.6 88.5 44.5C72.5 32.4 80.9 38.7 60.5 45.5Z" />
    <circle cx="150" cy="50" r="10" />
    <circle cx="30" cy="140" r="15" />
    <circle cx="170" cy="160" r="6" />
    <circle cx="40" cy="30" r="8" />
  </svg>
);

export const RoughArrow = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("w-20 h-10", className)}>
    <path d="M5 25C25 20 50 25 80 20" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    <path d="M65 5C75 15 80 20 95 20" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    <path d="M65 40C75 30 80 20 95 20" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
  </svg>
);

export const StrikeThrough = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 20" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className={cn("absolute w-full h-full left-0 top-0", className)}>
    <path d="M5 10C30 5 60 15 95 10" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
  </svg>
);
