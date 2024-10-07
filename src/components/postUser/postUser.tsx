import React from 'react';
import styles from './postUser.module.css';
import Image from 'next/image';
import { getUser } from '@/lib/data';

// const getData = async(userId: number) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, { next: {revalidate: 3600} });

//   console.log(">>>> RES single post", res);
//   if(!res.ok){
//       throw new Error("something went wrong");
//   }
//   return res.json();
// };

async function PostUser({userId}: Readonly<{userId: number}>) {

  // const user = await getData(userId);
  const user = await getUser(userId);

    return (
        <div className={styles.container}>
          <Image
            className={styles.avatar}
            src={user?.img ? user.img : "/noavatar.png"}
            alt=""
            width={50}
            height={50}
          />
          <div className={styles.texts}>
            <span className={styles.title}>Author</span>
            <span className={styles.username}>{user?.username}</span>
          </div>
        </div>
      );
}

export default PostUser;