import PostCard from '@/components/postCard/postCard';
import styles from './blog.module.css';
import { getPosts } from '@/lib/data';
import { Metadata } from 'next';

//FETCH DATA WITH API
const getData = async() => {
    // const res = await fetch("https://jsonplaceholder.typicode.com/posts", { cache: 'no-store' });
    const res = await fetch("http://localhost:3000/api/blog", { next: {revalidate: 3600} });

    if(!res.ok){
        throw new Error("something went wrong");
    }
    return res.json();
};

export const metadata: Metadata = {
  title: "Online web blog page",
  description: "online web blog page",
};

export interface Posts {
    id: number;
    title: string;
    body: string;
    userId: number;
    img: string;
    createdAt: string;
};

async function BlogPage() {
    //FETCH DATA WITH API
    const posts = await getData();
    console.log("posts res" , posts);

    //FETCH DATA WITHOUT API
    // const posts = await getPosts();
  return (
    <div className={styles.container}>
      {posts.map((post: Posts) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post}/>
        </div>
      ))}
    </div>
  )
}

export default BlogPage