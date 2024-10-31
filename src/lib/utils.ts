import { ClassValue, clsx } from 'clsx'
import { isUndefined } from 'lodash-es'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function stringEllipsis(value?: string, length = 5) {
  if (isUndefined(value)) return '...'
  if (value.length <= length * 2) return value
  return `${value.slice(0, length)}...${value.slice(-length)}`
}
