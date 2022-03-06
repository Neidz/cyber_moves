import axios from "axios";
import { allNamesByTypeEndpoint } from "../endpoints";

export const allNamesByType = async (robotType: string) => {
    try {
        const res = await axios.get(`${allNamesByTypeEndpoint}${robotType}`);
        return res;
    } catch (err) {
        console.log(err);
    }
};
