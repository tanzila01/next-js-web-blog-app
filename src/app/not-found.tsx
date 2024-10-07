import Link from 'next/link'
import React from 'react'

function notFound() {
  return (
    <div>
        <h2>Not Found</h2>
        <Link href="/">Return to Home</Link>
    </div>

  )
}

export default notFound