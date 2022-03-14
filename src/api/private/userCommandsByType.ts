import axios from "axios";
import { userCommandsByTypeEndpoint } from "../endpoints";
import { commandResponse } from "../public/commandByName";

export const userCommandsByType = async (robotType: string): Promise<commandResponse[] | null> => {
    try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`${userCommandsByTypeEndpoint}${robotType}`, {
            headers: { token: `Bearer ${token}` },
        });
        return res.data;
    } catch (e) {
        console.log(e);
        return null;
    }
};
