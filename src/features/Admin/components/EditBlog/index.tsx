"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import BlogEditor, { BlogFormData } from "../BlogEditor";
import { useUploadFile } from "../../hooks/useUploadImage";
import { useUpdateBlog } from "@/features/Blogs/hooks/useUpdateBlog";

export default function EditBlogPage({ slug }: { slug: string } ) {
  const [blog, setBlog] = useState<BlogFormData | null>(null);
  const router = useRouter();
  const fileUpload = useUploadFile();
  const updateBlog = useUpdateBlog();

  useEffect(() => {
    const fetchBlog = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}blog/${slug}`);
      const data = await res.json();
      setBlog(data);
    };
    fetchBlog();
  }, [slug]);

  const handleSubmit = async (data: BlogFormData) => {
    if (data.imageUrl instanceof File) {
      const { publicUrl } = await fileUpload.mutateAsync(data.imageUrl);
      data.imageUrl = publicUrl;
    }

    // Call API → Update Blog
    await updateBlog.mutateAsync({slug, data})

    router.push("/admin/blogs");
  };

  if (!blog) return <div>Loading...</div>;

  return <BlogEditor initialValues={blog} onSubmit={handleSubmit} />;
}
