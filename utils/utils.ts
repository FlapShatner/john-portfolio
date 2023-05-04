import { CoversImagesArray } from '@/lib/covers'

export function getNeighbors(arr: CoversImagesArray, index: number) {
  if (!Array.isArray(arr) || arr.length < 3 || index < 0 || index >= arr.length) {
    console.log('Invalid input')
  }
  const length = arr.length
  const prevIndex = (index - 1 + length) % length
  const nextIndex = (index + 1) % length
  return [arr[prevIndex], arr[nextIndex]]
}
