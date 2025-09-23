// app/blogs/[slug]/page.tsx
import BlogDetail from "@/features/Blogs/components/BlogDetail";

interface BlogPageProps {
  params: {
    slug: string;
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
    const slug = await params.slug;
  return <BlogDetail slug={slug} />;
}