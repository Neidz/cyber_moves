import axios from "axios";
import { userNamesByTypeEndpoint } from "../endpoints";

export const userNamesByType = async (robotType: string): Promise<{ name: string }[] | null> => {
    try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`${userNamesByTypeEndpoint}${robotType}`, {
            headers: { token: `Bearer ${token}` },
        });
        return res.data;
    } catch (e) {
        console.log(e);
        return null;
    }
};
