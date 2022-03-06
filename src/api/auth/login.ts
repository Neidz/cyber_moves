import axios from "axios";
import { loginEndpoint } from "../endpoints";

export const login = async (formLogin: string, formPassword: string) => {
    try {
        const res = await axios.post(loginEndpoint, {
            username: formLogin,
            password: formPassword,
        });
        return res;
    } catch (err) {
        console.log(err);
    }
};
