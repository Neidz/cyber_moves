import axios from "axios";
import { userCommandsByTypeEndpoint } from "../endpoints";

export const userCommandsByType = async (robotType: string, token: string) => {
    try {
        const res = await axios.get(`${userCommandsByTypeEndpoint}${robotType}`, {
            headers: { token: `Bearer ${token}` },
        });
        return res;
    } catch (err) {
        console.log(err);
    }
};
