import React from "react";
import { Match, Signup } from "../api";

type Type = {
    match?: Match,
    signups: Signup[],
    updateMatch?: () => Promise<void>,
    updateSignups: () => Promise<void>
}
export const MatchContext = React.createContext<Type>({
    match: undefined,
    signups: [],
    updateSignups: async () => { }
})
