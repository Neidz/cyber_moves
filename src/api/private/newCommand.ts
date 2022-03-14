import axios from "axios";
import { commandState } from "../../store/features/commandsSlice";
import { newCommandEndpoint } from "../endpoints";

export interface newCommandData {
    name: string;
    commands: commandState[];
    robotType: string;
    category: string[];
}

export const newCommand = async (newCommandData: newCommandData): Promise<any> => {
    try {
        const token = localStorage.getItem("token");
        const res = await axios.post(
            newCommandEndpoint,
            {
                name: newCommandData.name,
                commands: newCommandData.commands,
                robotType: newCommandData.robotType,
                category: newCommandData.category,
            },
            {
                headers: { token: `Bearer ${token}` },
            }
        );
        return res.data;
    } catch (e) {
        console.log(e);
        return null;
    }
};
