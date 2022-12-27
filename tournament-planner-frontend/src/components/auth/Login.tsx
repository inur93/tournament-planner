import { Button, FormGroup, TextField } from "@mui/material"
import { Form, Formik } from "formik"
import { LoginDto } from "../../api"
import { AuthApi } from "../../apiClient"



export const Login = () => {

    const handleSubmit = (values: LoginDto) => {
        AuthApi.login(values).then(() => {
            AuthApi.logout();
        })
    }
    return <Formik
        initialValues={{
            email: '',
            password: ''
        }}
        onSubmit={handleSubmit}>
        {({ values, handleChange }) => (
            <Form>
                <FormGroup>
                    <TextField
                        name='email'
                        label='Email'
                        value={values.email}
                        onChange={handleChange} />
                    <TextField
                        type="password"
                        name='password'
                        label='Password'
                        value={values.password}
                        onChange={handleChange} />

                </FormGroup>
                <Button type="submit" color="primary">Login</Button>
            </Form>
        )}
    </Formik>
}