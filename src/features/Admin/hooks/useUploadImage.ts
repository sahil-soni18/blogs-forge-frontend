// hooks/useStorage.ts
import { useMutation } from "@tanstack/react-query"
import { IUploadResponse, uploadFile } from "../api/upload-image";

export const useUploadFile = () => {
  const mutation = useMutation({
    mutationKey: ['uploadFile'],
    mutationFn: uploadFile,
    onSuccess: (data: IUploadResponse) => {
      console.log('File uploaded successfully:', data.publicUrl);
    },
    onError: (error: Error) => {
      throw new Error(`An error occurred while uploading file: ${error.message}`);
    }
  })

  return mutation;
}