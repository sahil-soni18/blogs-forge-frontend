import { IUser } from "@/features/User/types"
import axiosInstance from "@/services/axios/axiosInstance";

interface ILoginResponse {
    user: IUser,
    token: string;
}


export const login = async (data: IUser): Promise<ILoginResponse> => {
    const response = await axiosInstance.post('auth/login', data)
    return response.data;
}