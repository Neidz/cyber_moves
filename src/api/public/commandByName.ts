import axios from "axios";
import { commandState } from "../../store/features/commandsSlice";
import { commandByNameEndpoint } from "../endpoints";

export interface commandResponse {
    id: string;
    name: string;
    createdAt: string;
    public: boolean;
    updatedAt: string;
    username: string;
    commands: commandState[];
}

export const commandByName = async (commandName: string): Promise<commandResponse | null> => {
    try {
        const res = await axios.get(`${commandByNameEndpoint}${commandName}`);
        return res.data;
    } catch (e) {
        console.log(e);
        return null;
    }
};
