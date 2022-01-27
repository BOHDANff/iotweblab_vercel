import React, {useState} from "react"
import {Form} from "./Utils/Form";
import {Input} from "./Utils/Input";
import {FormButton} from "./Utils/FormButton";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import * as yup from "yup";
import AuthService from "../API/AuthService";
import {Link} from "@mui/material";
import {useAuthContext} from "./Context/AuthContext";

const schema = yup.object().shape({
    username: yup
        .string()
        .required("This is a required field"),
    password: yup
        .string()
        .min(4, `Must be more than 4 characters`)
        .required("This is a required field"),
});
const LoginForm = (props) => {
    const [loginMessage, setLoginMessage] = useState(null)
    const {register, handleSubmit, formState:{errors}, reset} = useForm({
        mode: "onChange",
        resolver: yupResolver(schema),
    })
    const {login} = useAuthContext()
    const userLogin = async (user) => {
        return await AuthService.login(user)
    }
    const onSubmit = async (user) => {
        await userLogin(user).then((res) => {
            if (res.data.hasOwnProperty('token')) {
                login(res.data.token)
                props.handleClose()
            }
            console.log(res)
            setLoginMessage(res.data)
        })
        reset()
    }
    return (loginMessage
            ? <h1>{loginMessage.message}</h1>
            : <>
                <h1>Login</h1>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        {...register('username')}
                        id={'username'}
                        type={'text'}
                        label={'Your username or email'}
                        inputProps={{
                            maxLength: 30
                        }}
                        error={!!errors.username}
                        helperText={errors?.username?.message}
                    />
                    <Input
                        {...register('password')}
                        id="password"
                        type="password"
                        label="Password"
                        error={!!errors.password}
                        helperText={errors?.password?.message}
                    />
                    <FormButton>Login</FormButton>
                    Don`t have the account?
                    Please <Link onClick={() => props.setLoginOrRegister('register')}>Register</Link>
                </Form>
            </>
    )
}

export default LoginForm