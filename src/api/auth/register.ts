import axios from "axios";
import { registerEndpoint } from "../endpoints";

export const register = async (formLogin: string, formPassword: string) => {
    try {
        const res = await axios.post(registerEndpoint, {
            username: formLogin,
            password: formPassword,
        });
        return res;
    } catch (err) {
        console.log(err);
    }
};
