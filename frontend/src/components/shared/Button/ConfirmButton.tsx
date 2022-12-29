import { Button, ButtonProps } from "@mui/material"
import React, { useState } from "react"
import ButtonContainer from "../ButtonContainer/ButtonContainer"
import Modal from "../Modal/Modal"

type Props = ButtonProps & {
    text: string
}

export const ConfirmButton = ({ text, children, onClick, ...props }: Props) => {

    const [show, setShow] = useState(false);

    return <React.Fragment>
        <Button {...props} onClick={() => setShow(true)}>{text}</Button>
        <Modal open={show} onClose={() => setShow(false)}>
            {children}
            <ButtonContainer>
                <Button onClick={onClick}>Confirm</Button>
            </ButtonContainer>
        </Modal>
    </React.Fragment>
}