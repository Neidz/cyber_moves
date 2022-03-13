import axios from "axios";
import { loginEndpoint } from "../endpoints";

interface loginResponse {
    username: string;
    isHacker: boolean;
    isAdmin: boolean;
    accessToken: string;
}

export const login = async (formLogin: string, formPassword: string): Promise<loginResponse> => {
    const res = await axios.post(loginEndpoint, {
        username: formLogin,
        password: formPassword,
    });
    return res.data;
};
