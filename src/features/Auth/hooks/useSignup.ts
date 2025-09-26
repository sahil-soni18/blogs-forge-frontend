import { useMutation } from "@tanstack/react-query"
import { signup } from "../api/signup"

export const useSignup = () => {
    const mutation = useMutation({
        mutationKey: ['signup'],
        mutationFn: signup,
        onSuccess: (data) => {
            localStorage.setItem('token', data.token);
        },
        onError: (error: Error) => {
            throw new Error(`An error occurred while signing up: ${error.message}`);
        }
    })

    return mutation;
}