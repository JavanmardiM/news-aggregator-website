import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, IRootState } from "src/store";

export const useDevDispatch = () => useDispatch<AppDispatch>();
export const useDevSelector: TypedUseSelectorHook<IRootState> = useSelector;
