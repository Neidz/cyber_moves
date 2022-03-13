import axios from "axios";
import { commandState } from "../../store/features/commandsSlice";
import { commandByNameEndpoint } from "../endpoints";

export interface responseCommands extends commandState {
    _id: string;
}

export interface commandResponse {
    id: string;
    name: string;
    createdAt: string;
    public: boolean;
    updatedAt: string;
    username: string;
    commands: responseCommands[];
}

export const commandByName = async (commandName: string): Promise<commandResponse> => {
    const res = await axios.get(`${commandByNameEndpoint}${commandName}`);
    return res.data;
};
