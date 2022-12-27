import React, { useContext } from "react"
import { ProfileContext } from '../../contexts/ProfileContext';

export const Authenticated: React.FC = ({ children }) => {
    const { profile } = useContext(ProfileContext);
    return profile ? <>{children}</> : null;
}