import { Grid } from "@mui/material"
import { makeStyles } from "tss-react/mui"
import { CupMatch } from "../match/CupMatch"

type StyleProps = {
    index: number,
    spacing?: number,
}
const useStyles = makeStyles<StyleProps>()((_, { index, spacing }) => {
    
    const hSpacing = spacing ?? 30;
    const vSpacing = spacing ?? 15;

    const o1 = 45 + vSpacing / 2;
    const o2 = 90 + vSpacing;

    const baseOffset = -1 - vSpacing / 2;
    const baseHeight = 88 + vSpacing;

    let forkOffset = baseOffset;
    let forkHeight = baseHeight;
    for (let i = 0; i < (index - 2); i++) {
        forkOffset -= (o1 * Math.pow(2, i));
        forkHeight += (o2 * Math.pow(2, i))
    }

    let space1 = vSpacing;
    let space2 = vSpacing;
    for (let i = 0; i < (index - 1); i++) {
        space1 += (o1 * Math.pow(2, i));
        space2 += (o2 * Math.pow(2, i));
    }

    return {
        match: {
            marginRight: `${hSpacing}px`,
            [`&>.MuiPaper-root:first-of-type`]: {
                marginTop: `${space1}px`,
            },
            [`&>.MuiPaper-root:not(:first-of-type)`]: {
                marginTop: `${space2}px`,
            },

            // fork
            [`&> .MuiPaper-root::before`]: {
                position: 'absolute',
                content: '""',
                marginLeft: `-${hSpacing}px`,
                width: `${hSpacing / 2}px`,
                borderTop: '1px solid black',
                borderBottom: '1px solid black',
                borderRight: '1px solid black',
                marginTop: `${forkOffset}px`,
                height: `${forkHeight}px`,
            },
            //line
            [`> .MuiPaper-root::after`]: {
                position: 'absolute',
                content: '""',
                marginLeft: `-${hSpacing / 2}px`,
                marginTop: '-45px',
                borderTop: '1px solid black',
                width: `${hSpacing / 2}px`,
                height: '1px',
            }
        },
    }
})

type StageProps = {
    children: React.ReactNode,
    index: number
}
const Stage = ({ children, index }: StageProps) => {
    const { classes } = useStyles({
        index: index,
    });
    return <Grid item className={classes.match}>
        {children}
    </Grid>
}

export const KnockoutStage = () => {

    return <Grid container alignItems='top'>
        <Stage index={1}>
            <CupMatch />
            <CupMatch />
            <CupMatch />
            <CupMatch />
            <CupMatch />
            <CupMatch />
            <CupMatch />
            <CupMatch />
        </Stage>
        <Stage index={2}>
            <CupMatch />
            <CupMatch />
            <CupMatch />
            <CupMatch />
        </Stage>
        <Stage index={3}>
            <CupMatch />
            <CupMatch />
        </Stage>
        <Stage index={4}>
            <CupMatch />
        </Stage>
    </Grid>
}
