// app/blogs/[slug]/page.tsx
import BlogDetail from "@/features/Blogs/components/BlogDetail";
import { IBlog } from "@/features/Blogs/types";

interface BlogPageProps {
  params: {
    slug: string;
  };
}

async function getBlogBySlug(slug: string): Promise<IBlog | null> {
  try {
    console.log(`${process.env.NEXT_PUBLIC_API_BASE_URL}/blog/${slug}`)
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/blog/${slug}`, {
      cache: 'force-cache',
      next: {
        revalidate: 3600,
        tags: ['blogs', slug]
      }
    });

    console.log(`response: ${JSON.stringify(response)}`)
    if (!response.ok) throw new Error('Failed to fetch the blog');

    const blog = await response.json(); // Fixed: added await
    return blog;
  } catch (error) {
    console.error('Error fetching blog:', error);
    return null;
  }
} 

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = params; // No need for use() hook in async component
  const blog = await getBlogBySlug(slug);
  
  return <BlogDetail blog={blog} slug={slug} />;
}

// Optional: Generate static params for better performance
export async function generateStaticParams() {
  // If you have a way to get all blog slugs
  try {
    const blogs = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/blogs`).then(res => res.json());
    return blogs.map((blog: IBlog) => ({
      slug: blog.slug,
    }));
  } catch (error) {
    return [];
  }
}

// Optional: Generate metadata
export async function generateMetadata({ params }: BlogPageProps) {
  const { slug } = params;
  console.log(`slug: ${slug}`)
  const blog = await getBlogBySlug(slug);

  return {
    title: blog?.title || 'Blog Not Found',
    description: blog?.description || 'Blog post not found',
  };
}