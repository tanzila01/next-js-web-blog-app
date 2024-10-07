"use Client"
import React from 'react';

function HydrationTest() {
    const a = Math.random();
    console.log(a, "A");
  return (
    <div>{a}</div>
  )
}

export default HydrationTest;