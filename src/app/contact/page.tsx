// "use client"
import Image from "next/image";
import styles from "./contact.module.css";
import { useEffect, useState } from "react";
import { Metadata } from "next";
// import HydrationTest from "@/components/hydrationTest";
// import dynamic from "next/dynamic";

// const HydrationTestNoSSR = dynamic(() => import("@/components/hydrationTest"), {ssr: false});
//next js dynamic import allowed us to import a component that has random value and can cause hydration problem bcz html on server and clint won't match due to a random value

export const metadata: Metadata = {
  title: "Online web blogs Contact page",
  description: "online web blogs Contacg page",
};

function ContactPage() {
    console.log("right here on")
    // const a = Math.random();
    // console.log(a, "A");
    //this a that is random will cause issue in the returned html file as file returned form server and created by client will have diff random val
    //even the client component is rendered on server the first time
    // const[isClient, setIsClient] = useState(false);
    // useEffect(() => {
    //     setIsClient(true);
    // });
    //to stop that we can use useeffect and put some condition like dont render a value untill a certain usestate is true
    return (
        <div className={styles.container}>
          <div className={styles.imgContainer}>
            <Image src="/contact.png" alt="" fill className={styles.img} />
          </div>

          {/* {isClient && a} */}
          {/* <div suppressHydrationWarning>{a}</div> */}
          {/*  "suppressHydrationWarning"  works as error hidding agent*/}
           {/* <HydrationTestNoSSR/> */}

          <div className={styles.formContainer}>
            <form action="" className={styles.form}>
              <input type="text" placeholder="Name and Surname" />
              <input type="text" placeholder="Email Address" />
              <input type="text" placeholder="Phone Number (Optional)" />
              <textarea
                name=""
                id=""
                // cols="30"
                // rows="10"
                placeholder="Message"
              ></textarea>
              <button>Send</button>
            </form>
          </div>
        </div>
      );
}

export default ContactPage