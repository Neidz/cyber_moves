import axios from "axios";
import { allNamesByTypeEndpoint } from "../endpoints";

export const allNamesByType = async (robotType: string): Promise<{ name: string }[]> => {
    const res = await axios.get(`${allNamesByTypeEndpoint}${robotType}`);
    return res.data;
};
