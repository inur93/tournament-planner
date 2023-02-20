import { List } from '@mui/material'
import { useEffect, useRef } from 'react'
import { FixtureDto } from '../../api/ApiClient'
import UpdateFixtureScore from './UpdateFixtureScore'

type Props = {
  fixtures: FixtureDto[]
  onSave: (fixture: FixtureDto) => Promise<void>
}

const UpdateScores = ({ fixtures, onSave }: Props) => {
  const ref = useRef<HTMLUListElement>(null)
  useEffect(() => {
    const target = fixtures.find((x) => x.awayScore === undefined)
    if (!target?.id) return
    if (!ref.current?.children) return

    //TODO this is an antipattern - we don't care for now
    const element = document.getElementById(target.id)
    element?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }, [ref])
  return (
    <List ref={ref}>
      {fixtures.map((fixture) => (
        <UpdateFixtureScore id={fixture.id} key={fixture.id} fixture={fixture} onSave={onSave} />
      ))}
    </List>
  )
}

export default UpdateScores
