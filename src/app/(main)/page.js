
import { fetchPosts } from "@/utils/fetchData";
import PostList from "@/components/main/PostList";

export async function generateMetadata() {

    const posts = await fetchPosts();
    const firstPost = posts[0];

    return {
        title: firstPost ? `Next Js + Antd - ${firstPost.title}` : 'Next Js + Antd - Home Page',
        description: firstPost ? firstPost.body : 'A user admin dashboard configured with Next.js, Antd, JavaScript, and Prettier.'
    };
}

export default async function Home() {

    const posts = await fetchPosts();

    return <>
        Home Page List !!
        <PostList records={posts} />
    </>
};
