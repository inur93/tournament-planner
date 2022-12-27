import React from "react";
import { ProfileDto } from "../api";

type Type = {
    profile?: ProfileDto,
    update?: (profile?: ProfileDto) => void
}
export const ProfileContext = React.createContext<Type>({
    profile: undefined
})
