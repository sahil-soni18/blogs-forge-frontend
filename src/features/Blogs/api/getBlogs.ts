import axiosInstance from "@/services/axios/axiosInstance";
import { IBlog } from "../types";

export const getBlogs = async (): Promise<IBlog[]> => {
  const response = await axiosInstance.get<IBlog[]>("/blog");
  return response.data; 
};
