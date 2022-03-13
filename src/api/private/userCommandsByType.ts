import axios from "axios";
import { userCommandsByTypeEndpoint } from "../endpoints";
import { commandResponse } from "../public/commandByName";

export const userCommandsByType = async (robotType: string): Promise<commandResponse[]> => {
    const token = localStorage.getItem("token");
    const res = await axios.get(`${userCommandsByTypeEndpoint}${robotType}`, {
        headers: { token: `Bearer ${token}` },
    });
    return res.data;
};
