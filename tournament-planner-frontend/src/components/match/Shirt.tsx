import { Theme } from '@mui/material';
import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { Player } from '../../api';

type PlayerShirtProps = {
    player?: Player,
    isGoalie?: boolean,
    scale?: number,
    onClick?: (id?: number) => void
}
export const PlayerShirt = ({ player, isGoalie, scale, onClick }: PlayerShirtProps) => {
    const name = player?.nickname || player?.name || '';
    const number = !!player ? `${player.number || ''}` || '0' : '+';
    const color = !!player ? (isGoalie ? '#5182eb' : '#0F2147') : '#eee';

    const handleClick = () => {
        onClick && onClick(player?.id);
    }
    return <Shirt
        onClick={handleClick}
        scale={scale}
        name={name}
        number={number}
        shirtColor={color}
    />
}

type ShirtProps = {
    scale?: number,
    number?: string,
    name?: string,
    showShorts?: boolean,
    shirtColor?: string,
    onClick?: () => void
}

export const Shirt = ({ scale, number, name, showShorts, shirtColor, onClick }: ShirtProps) => {
    const { classes, cx } = useStyles({ scale: scale || 0.5, shirtColor: shirtColor || "#639" });

    return <div className={classes.kit}>
        <p className={classes.shirtNumber} onClick={onClick}>{number}</p>
        <div className={classes.shirt} onClick={onClick}></div>
        <div className={cx(classes.sleeve, 'left')}></div>
        <div className={cx(classes.sleeve, 'right')}></div>
        {showShorts &&
            <React.Fragment>
                <div className={classes.waist}></div>
                <div className={cx(classes.shorts, 'left')}></div>
                <div className={cx(classes.shorts, 'right')}></div>
            </React.Fragment>
        }
        <p className={classes.shirtName}>{name}</p>
    </div>
}

type StyleProps = {
    scale: number,
    shirtColor: string
}
const useStyles = makeStyles<StyleProps>()((theme: Theme, { scale, shirtColor }) => {
    return {
        kit: {
            margin: `${scale * 30}px auto`,
            position: "relative",
            width: `${scale * 90}px`
        },
        shirt: {
            position: "relative",
            cursor: 'pointer',
            zIndex: "1",
            height: `${scale * 140}px`,
            background: `${shirtColor}`,
            "WebkitClipPath": "polygon(30% 0, 50% 10%, 70% 0, 100% 0, 100% 100%, 0 100%, 0 0)",
            clipPath: "polygon(30% 0, 50% 10%, 70% 0, 100% 0, 100% 100%, 0 100%, 0 0)"
        },
        sleeve: {
            width: `${scale * 40}px`,
            height: `${scale * 60}px`,
            background: `${shirtColor}`,
            position: "absolute",
            top: 0,
            '&.left': {
                left: 0,
                transformOrigin: "0 0",
                transform: "rotate(45deg)"
            },
            '&.right': {
                right: 0,
                transformOrigin: "100% 0",
                transform: "rotate(-45deg)"
            }
        },
        waist: {
            background: "#0f0",
            width: `${scale * 90}px`,
            height: `${scale * 30}px`,
        },
        shorts: {
            display: "inline-block",
            width: `${scale * 45}px`,
            height: `${scale * 42}px`,
            background: "#0f0",
            transformOrigin: "0 0",
            '&.left': {
                transform: "skew(-10deg)"
            },
            '&.right': {
                transform: "skew(10deg)"
            }
        },
        shirtNumber: {
            position: "absolute",
            cursor: 'pointer',
            fontSize: "2.5rem",
            zIndex: 2,
            margin: "auto 0",
            width: "100%",
            textAlign: "center",
            color: 'white',
            mixBlendMode: 'difference'
        },
        shirtName: {
            margin: 0,
            width: `${180 * scale}px`,
            marginLeft: "-50%",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textAlign: 'center'
        }
    }
})
