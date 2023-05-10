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

export function getScrollbarWidth() {
  // Creating invisible container
  const outer = document.createElement('div')
  outer.style.visibility = 'hidden'
  outer.style.overflow = 'scroll' // forcing scrollbar to appear
  // outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
  document.body.appendChild(outer)

  // Creating inner element and placing it in the container
  const inner = document.createElement('div')
  outer.appendChild(inner)

  // Calculating difference between container's full width and the child width
  const scrollbarWidth = outer.offsetWidth - inner.offsetWidth

  // Removing temporary elements from the DOM
  if (outer.parentNode) outer.parentNode.removeChild(outer)

  return scrollbarWidth
}
