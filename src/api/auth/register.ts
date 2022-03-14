import axios from "axios";
import { registerEndpoint } from "../endpoints";

interface registerResponse {
    username: string;
    isHacker: boolean;
    isAdmin: boolean;
}

export const register = async (formLogin: string, formPassword: string): Promise<registerResponse | null> => {
    try {
        const res = await axios.post(registerEndpoint, {
            username: formLogin,
            password: formPassword,
        });
        return res.data;
    } catch (e) {
        console.log(e);
        return null;
    }
};
