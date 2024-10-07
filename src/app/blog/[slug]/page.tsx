import React, { Suspense } from 'react';
import styles from './singlePost.module.css';
import Image from 'next/image';
import PostUser from '@/components/postUser/postUser';
import { Posts } from '../page';
import { getPost } from '@/lib/data';

//in this page we are fetching same endpoint data more than once but NEXT JS takes care of it and fetchs once only

const getData = async(slug: string) => {
  console.log("slug in route", slug);

    const res = await fetch(`http://localhost:3000/api/blog/${slug}`, { cache: "no-store" });

    console.log(">>>> RES single post", res);
    if(!res.ok){
        throw new Error("something went wrong");
    }
    return res.json();
};

export const generateMetadata = async ({ params }: Readonly<{params: any}>) => {
  const { slug } = params;

  const post = await getPost(slug);

  return {
    title: post.title,
    description: post.desc,
  };
};

async function SinglePostPage({params, searchParams}: Readonly<{params: any; searchParams: object}>) {
    console.log("params", params, typeof(params), params.slug); 
    console.log("searchparamssearchParamss", searchParams, typeof(searchParams) );  //for query params at end of url

    // const post = await getData(params.slug);
    const post: Posts | any = await getPost(params.slug);
    console.log("post in the sigle", post)

    return (
        <div className={styles.container}>
          {post.img && (
            <div className={styles.imgContainer}>
              <Image src={post.img} alt="" fill className={styles.img} />
            </div>
          )}
          <div className={styles.textContainer}>
            <h1 className={styles.title}>{post?.title}</h1>
            <div className={styles.detail}>
              {post && (
                <Suspense fallback={<div>Loading...</div>}>
                  <PostUser userId={post?.userId} />
                </Suspense>
              )}
              <div className={styles.detailText}>
                <span className={styles.detailTitle}>Published</span>
                <span className={styles.detailValue}>
                    
                  {post.createdAt.toString().slice(4, 16)}
                </span>
              </div>
            </div>
            <div className={styles.content}>{post?.desc}</div>
          </div>
        </div>
      );
}

export default SinglePostPage