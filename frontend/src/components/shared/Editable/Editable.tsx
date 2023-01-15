import React, { cloneElement, useEffect, useRef, useState } from "react";


type Props = {
    children: React.ReactElement,
    onChange: (value: string) => void
}

const Editable = ({ children, onChange }: Props) => {
    const [value, setValue] = useState(children.props.children)
    const [show, setShow] = useState(false)
    const [editMode, setEditMode] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null);
    const [inputStyles, setInputStyles] = useState<any>(null)
    const childRef = useRef(null)

    useEffect(() => {
        if (!editMode) {
            setValue(children.props.children)
        }
    }, [editMode, children.props.children])

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
                setEditMode(false)
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    })

    useEffect(() => {
        if (inputRef.current && editMode) {
            inputRef.current.focus()
        }
    }, [inputRef, editMode])

    useEffect(() => {
        const target = childRef.current as any;
        if (!target) return

        const styleMap = target.computedStyleMap()
        setInputStyles({
            fontSize: styleMap.get('font-size'),
            fontWeight: styleMap.get('font-weight'),
            height: styleMap.get('height'),
            padding: styleMap.get('padding'),
            margin: styleMap.get('margin'),
            display: styleMap.get('display'),
            width: '100%', //styleMap.get('width'),
            lineHeight: styleMap.get('line-height'),
            marginInlineEnd: styleMap.get('margin-inline-end'),
            marginInlineStart: styleMap.get('margin-inline-start'),
            marginBlockEnd: styleMap.get('margin-block-end'),
            marginBlockStart: styleMap.get('margin-block-start'),
            outline: 'none',
            "::after": {
                content: 's'
            }
        })
    }, [childRef])

    const handleMouseOver = () => {
        setShow(true)
    }

    const handleMouseLeave = () => {
        setShow(false)
    }

    const handleClick = () => {
        setEditMode(true)
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        switch (e.key) {
            case 'Enter':
                onChange(value)
                setEditMode(false)
                setShow(false)
                break;
            case 'Escape':
                setEditMode(false)
                break;
            default: break
        }
    }

    if (editMode) {
        return <><input
            ref={inputRef}
            value={value}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            style={inputStyles} />
        </>
    }

    const styles = show ? { border: '1px solid black' } : {}
    return cloneElement(children, {
        ref: childRef,
        onMouseOver: handleMouseOver,
        onMouseLeave: handleMouseLeave,
        style: styles,
        onClick: handleClick
    })
}

export default Editable