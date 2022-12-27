import { Button, Checkbox, FormControlLabel, FormGroup, TextField } from "@mui/material"
import { Form, Formik } from "formik"
import { Link } from "react-router-dom"
import { Player, UpdatePlayer } from "../../api"
import { PlayersApi, ProfileApi } from "../../apiClient"
import { ButtonContainer } from "../shared/ButtonContainer"

type Props = {
    player: Player,
    closeLink?: string,
    asAdmin?: boolean
}
export const Profile = ({ player, closeLink, asAdmin }: Props) => {

    const handleSubmit = (values: UpdatePlayer) => {
        values.number = `${values.number}`; //convert number to string
        if (asAdmin) {
            PlayersApi.putPlayer(player.id, values)
        } else {
            ProfileApi.updateProfile(values)
        }
    }

    return <Formik
        initialValues={player}
        onSubmit={handleSubmit}>
        {({ values, handleChange }) => (
            <Form>
                <FormGroup>
                    <TextField
                        name='name'
                        label='Name'
                        value={values.name}
                        onChange={handleChange}
                        placeholder="Name" />

                    <TextField
                        name='nickname'
                        label='Nickname'
                        value={values.nickname}
                        onChange={handleChange}
                        placeholder='Nickname' />

                    <TextField
                        name='number'
                        label='Number'
                        type='number'
                        inputProps={{ step: 1, min: 0, max: 99 }}
                        value={values.number}
                        onChange={handleChange}
                    />
                </FormGroup>
                {asAdmin &&
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox disabled name='isGuest' onChange={handleChange} checked={values.isGuest} />}
                            label="Is guest player" />
                    </FormGroup>
                }
                {asAdmin &&
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox name='isAdmin' onChange={handleChange} checked={values.isAdmin} />}
                            label="Is administrator" />
                    </FormGroup>
                }
                <ButtonContainer>
                    {closeLink && <Button variant='outlined' component={Link} to={closeLink}>Close</Button>}
                    <Button type="submit" color="primary">Update</Button>
                </ButtonContainer>
            </Form>
        )}
    </Formik>
}
