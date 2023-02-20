import { Card, ListItem, ListItemSecondaryAction, ListItemText, Typography, styled } from '@mui/material';

import { format, isToday } from "date-fns";
import { FixtureDto } from '../../api/ApiClient';
import ListItemAvatarSmall from '../shared/List/ListItemAvatarSmall';
import ListItemTeamName from '../team/TeamName';
import TeamScore from '../team/TeamScore';

type Props = {
    fixture: FixtureDto,
    className?: string
}

const formatDateTime = (date: Date | null | undefined, defaultValue?: string) => {
    if (!date) return defaultValue;
    if (isToday(date)) {
        return format(date, 'HH:mm')
    }
    return format(date, 'dd. MMM');
}


const FixtureListItem = ({ fixture, className }: Props) => {

    return <ListItem component={Card} className={className}>
        <ListItemAvatarSmall>
            <Typography variant="body2" fontSize={12}>
                {fixture.homeScore !== null ? 'FT' : formatDateTime(fixture.dateTime, fixture.no?.toString())}
            </Typography>
        </ListItemAvatarSmall>
        <ListItemText>
            <ListItemTeamName name={fixture.home?.name} />
            <ListItemTeamName name={fixture.away?.name} />
        </ListItemText>
        <ListItemSecondaryAction>
            <TeamScore score={fixture.homeScore} />
            <TeamScore score={fixture.awayScore} />
        </ListItemSecondaryAction>
    </ListItem>
}

const StyledFixtureListItem = styled(FixtureListItem)(
    ({ theme }) => ({
        marginBottom: theme.spacing(1)
    })
)

export default StyledFixtureListItem