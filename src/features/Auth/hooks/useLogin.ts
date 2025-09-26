import { useMutation } from "@tanstack/react-query"
import { login } from "../api/login";

export const useLogin = () => {
    const mutation = useMutation({
        mutationKey: ['login'],
        mutationFn: login,
        onSuccess: (data) => {
            localStorage.setItem('token', data.token);
        },
        onError: (error: Error) => {
            throw new Error(`An error occurred while login in: ${error.message}`);
        }
    })

    return mutation;
}