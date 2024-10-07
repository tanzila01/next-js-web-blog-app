import React from 'react';
import styles from './postCard.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { Posts } from '@/app/blog/page';

function PostCard({post} : Readonly<{post: Posts | any}>) {
    return (
        <div className={styles.container}>
          <div className={styles.top}>
            <div className={styles.imgContainer}>
              <Image src={post.img} alt="" fill className={styles.img}/>
            </div>
            <span className={styles.date}>{post.createdAt.toString().slice(4, 16)}</span>
          </div>
          <div className={styles.bottom}>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.desc}>{post.body}</p>
            <Link className={styles.link} href={`/blog/${post._id}`}>READ MORE</Link>
          </div>
        </div>
      );
}

export default PostCard