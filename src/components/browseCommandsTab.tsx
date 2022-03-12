import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { userCommandsByType } from "../api/private/userCommandsByType";
import { RootState } from "../store/store";
import "../styles/sections/browseCommandsTab.scss";

export const BrowseCommandsTab = () => {
    const { robotType } = useSelector((state: RootState) => state.commands);
    const [listOfNames, setListOfNames] = useState<string[]>([]);

    const fetchNames = async () => {
        const data = userCommandsByType(robotType);
        setListOfNames(await data);
    };

    useEffect(() => {
        fetchNames();
    }, [robotType]);

    return <div className="browseCommandsTab"></div>;
};
