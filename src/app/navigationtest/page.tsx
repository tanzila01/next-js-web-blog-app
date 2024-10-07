"use client"
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

function NavigationTestPage() {
  const router = useRouter();

  const pathName = usePathname();//curretn path withour query params

  const searchParam = useSearchParams(); //for params like in this url "http://localhost:3000/navigationtest?price=free&n=asi"
  const name = searchParam.get("n");

  console.log("name", name);


  const handleClick = () => {
    console.log("clicked");
    router.push("/");
    //router.replace("/"); //doesn't ass new entry to browser history stack
    // router.refresh(); //refreshes current route
    //router.back();
    //router.foreard();
  }
  return (
    <div>
      <Link href="/" prefetch={false}>Home page</Link> 
      {/* as all teh links on the page are prefetched, to reduce load on that page set prefetch of some links to false */}
      <button onClick={() => handleClick()}>click and redirect</button>
    </div>
  )
}

export default NavigationTestPage