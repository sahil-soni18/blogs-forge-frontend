import axiosInstance from "@/services/axios/axiosInstance";
import { IBlog } from "../types";
import { BlogFormData } from "@/features/Admin/components/BlogEditor";

export const updateBlog = async (data: BlogFormData, slug: string): Promise<IBlog> => {
    const response = await axiosInstance.patch<IBlog>('/blog', data, {
        params: { slug }
    })
    return response.data;
}