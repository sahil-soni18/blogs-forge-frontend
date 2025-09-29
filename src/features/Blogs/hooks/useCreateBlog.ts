import { useMutation } from "@tanstack/react-query"
import { createBlog } from "../api/createBlog"

export const useCreateBlog = () => {
    const mutation = useMutation({
        mutationKey: ['create-blog'],
        mutationFn: createBlog,
        onSuccess: (data) => {
            console.log(`blog create: ${JSON.stringify(data)}...`);
        }
    })

    return mutation;
}