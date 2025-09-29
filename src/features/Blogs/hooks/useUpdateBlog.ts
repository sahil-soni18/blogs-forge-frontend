import { useMutation } from "@tanstack/react-query"
import { updateBlog } from "../api/updateBlog";
import { BlogFormData } from "@/features/Admin/components/BlogEditor";

export const useUpdateBlog = () => {
    const mutation = useMutation({
        mutationKey: ['update-blog'],
        mutationFn: ({ slug, data }: { slug: string; data: BlogFormData }) => 
            updateBlog(data, slug),
        onSuccess: (data) => {
            console.log(`Blog updated: ${JSON.stringify(data)}`);
        },
        onError: (error) => {
            console.error('Failed to update blog:', error);
        }
    })

    return mutation;
}