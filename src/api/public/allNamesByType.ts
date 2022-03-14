import axios from "axios";
import { allNamesByTypeEndpoint } from "../endpoints";

export const allNamesByType = async (robotType: string): Promise<{ name: string }[] | null> => {
    try {
        const res = await axios.get(`${allNamesByTypeEndpoint}${robotType}`);
        return res.data;
    } catch (e) {
        console.log(e);
        return null;
    }
};
