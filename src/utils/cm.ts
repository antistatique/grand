import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const cm = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export default cm;
