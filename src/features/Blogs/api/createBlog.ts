import axiosInstance from "@/services/axios/axiosInstance";
import { IBlog } from "../types";
import { BlogFormData } from "@/features/Admin/components/BlogEditor";

export const createBlog = async (data: BlogFormData): Promise<IBlog> => {
    const response = await axiosInstance.post<IBlog>('/blog', data)
    return response.data;
}