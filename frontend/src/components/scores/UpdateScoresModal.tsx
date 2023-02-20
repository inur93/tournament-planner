import { Typography } from '@mui/material'
import { FixtureDto } from '../../api/ApiClient'
import apiClient from '../../config/apiClient'
import { useToast } from '../../hooks/useToast'
import Modal from '../shared/Modal/Modal'
import UpdateScores from './UpdateScores'

type Props = {
  fixtures: FixtureDto[]
  open: boolean
  onClose: () => void
  afterSave: () => void
}

const UpdateScoresModal = ({ fixtures, open, onClose, afterSave }: Props) => {
  const toast = useToast()
  const onSave = async (fixture: FixtureDto) => {
    apiClient.updateFixtureScores(fixture.id, fixture)
    toast('Scores have been updated')
    afterSave()
  }
  return (
    <Modal open={open} onClose={onClose} title='Update fixture scores'>
      <UpdateScores fixtures={fixtures} onSave={onSave} />
    </Modal>
  )
}

export default UpdateScoresModal
