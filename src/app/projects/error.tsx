'use client' // Error components must be Client Components
 



//important! if we change file name homeerror.tsx to error.tsx, it overide ErrorBoundary wrapper and run function in it and ErrorBoundary will not effect.

import { useEffect } from 'react'
 
export default function ProjectError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div style={{ height: '1000px'}}>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}