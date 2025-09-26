import { IUser } from "@/features/User/types"
import axiosInstance from "@/services/axios/axiosInstance";

interface ISignupResponse {
    user: IUser,
    token: string;
}


export const signup = async (data: IUser): Promise<ISignupResponse> => {
    const response = await axiosInstance.post('auth/signup', data)
    return response.data;
}