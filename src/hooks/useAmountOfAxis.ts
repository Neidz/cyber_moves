import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeAmountOfAxis } from "../store/features/renderMenuSlice";

export const useAmountOfAxis = (amount: number) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(changeAmountOfAxis(amount));
    });
};
