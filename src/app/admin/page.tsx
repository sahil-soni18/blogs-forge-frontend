import AdminBlogsPage from "@/features/Admin/components/Dashboard/all-blogs";
import BlogStats from "../../features/Admin/components/Dashboard/blog-stats";

export default function Admin() {
  return (
    <>
      <BlogStats />
      <AdminBlogsPage />
    </>
  );
}
