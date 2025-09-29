import EditBlogPage from "@/features/Admin/components/EditBlog";


interface BlogPageProps {
  params: {
    slug: string;
  };
}


export default async function EditBlog({ params }: BlogPageProps) {
  const { slug } = params; 
  
  return <EditBlogPage slug={slug} />;
}

