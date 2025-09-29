"use client";

import { useRouter } from "next/navigation";
import { useUploadFile } from "../../hooks/useUploadImage";
import BlogEditor, { BlogFormData } from "../BlogEditor";
import { useCreateBlog } from "@/features/Blogs/hooks/useCreateBlog";

export default function CreateBlog() {
  const router = useRouter();
  const fileUpload = useUploadFile();
  const createBlog = useCreateBlog();

  const handleSubmit = async (data: BlogFormData) => {
    if (data.imageUrl instanceof File) {
      const { publicUrl } = await fileUpload.mutateAsync(data.imageUrl);
      data.imageUrl = publicUrl;
    }

    // Call API → Create Blog
    await createBlog.mutateAsync(data);

    router.push("/admin/blogs");
  };

  return <BlogEditor onSubmit={handleSubmit} />;
}
