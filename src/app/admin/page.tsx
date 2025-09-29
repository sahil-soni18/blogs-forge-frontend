import AdminBlogsPage from "@/features/Admin/components/Dashboard/all-blogs";
import BlogStats from "../../features/Admin/components/Dashboard/blog-stats";
import { IBlog } from "@/features/Blogs/types";

async function getBlogs(): Promise<IBlog[]> {

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}blog`, {
      cache: 'force-cache',
      next: { 
        revalidate: 30,
        tags: ['blogs']
      }
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch blogs: ${response.status}`);
    }
    
    const blogs = await response.json();
    return blogs;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
}

export default async function Admin() {

    const blogs = await getBlogs();

  return (
    <>
      <BlogStats />
      <AdminBlogsPage blogs={blogs}/>
    </>
  );
}
