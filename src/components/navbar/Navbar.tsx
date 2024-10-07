"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import styles from './navbar.module.css';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { handleLogout } from '@/lib/actions';

function Navbar({session}: Readonly<{session: any}>) {
    const[open, setOpen] = useState(false);
    const links = [
        {
          title: "Homepage",
          path: "/",
        },
        {
          title: "About",
          path: "/about",
        },
        {
          title: "Contact",
          path: "/contact",
        },
        {
          title: "Blog",
          path: "/blog",
        },
      ];

    const pathname = usePathname();
    console.log("path here", pathname);

    // const value = session?.value;
    // let user = JSON.parse(value);
    const admin = true;

    console.log("sess dets", session);

  return (
    <div  className={styles.container}>
        <Link href="/" className={styles.logo}>Day Blogger</Link>
        <div className={styles.container3}>
            <div className={styles.links}>
                {links.map((item) => (
                    <Link className={`${styles.container2} ${pathname === item.path ? styles.active : ""}`} key={item.path} href={item.path}>{item.title}</Link>
                ))}
                {session?.user ? (
                    <>
                    {session?.user?.isAdmin && (
                        <>
                            <Link className={`${styles.container2} ${pathname === '/admin' ? styles.active : ""}`} key='/admin' href='/admin'>Admin</Link>
                        </>
                    )}
                    <form action={handleLogout}>
                    <button className={styles.logout}>Logout</button>
                    </form>
                    </>
                ) : (
                    <Link href="/login">Login</Link>
                )}
            </div>
        </div>

        {/* <button className={styles.menuButton} onClick={() => setOpen((prev) => !prev)}>Menu</button> */}
        <Image
        className={styles.menuButton}
        src="/menu.png"
        alt=""
        width={30}
        height={30}
        onClick={() => setOpen((prev) => !prev)}
      />
        {open && (
            <div className={styles.mobileLinks}>
                {links.map((item) => (
                    <Link className={`${styles.container2} ${pathname === item.path ? styles.active : ""}`} key={item.path} href={item.path}>{item.title}</Link>
                ))}
            </div>
        )}
    </div>
  )
}

export default Navbar