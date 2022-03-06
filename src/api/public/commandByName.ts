import axios from "axios";
import { commandByNameEndpoint } from "../endpoints";

export const commandByName = async (commandName: string) => {
    try {
        const res = await axios.get(`${commandByNameEndpoint}${commandName}`);
        return res;
    } catch (err) {
        console.log(err);
    }
};
