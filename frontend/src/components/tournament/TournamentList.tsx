import { List, ListItem, ListItemText, Stack } from '@mui/material'
import { TournamentDto } from '../../api/ApiClient'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'

type Props = {
  tournaments: TournamentDto[]
}

const formatDate = (date: Date): string => {
  return format(date, 'dd. MMM yyyy')
}

const TournamentList = ({ tournaments }: Props) => {
  return (
    <List>
      {tournaments.map((x) => (
        <ListItem key={x.id} component={Link} to={`tournament/${x.id}`}>
          <ListItemText primary={x.name} secondary={formatDate(x.date)} />
        </ListItem>
      ))}
    </List>
  )
}

export default TournamentList
