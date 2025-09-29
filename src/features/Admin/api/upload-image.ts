// services/api/storage.ts
import axiosInstance from "@/services/axios/axiosInstance";

export interface IUploadResponse {
  result: any; // You might want to type this more specifically based on your storage service response
  publicUrl: string;
}

export const uploadFile = async (file: File | string): Promise<IUploadResponse> => {
  const formData = new FormData();
  formData.append('file', file);

  const response = await axiosInstance.post('storage/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  
  return response.data;
}