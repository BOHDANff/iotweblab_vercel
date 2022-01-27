import React, {useState} from "react"
import {Form} from "./Utils/Form";
import {Input} from "./Utils/Input";
import {FormButton} from "./Utils/FormButton";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import * as yup from "yup";
import AuthService from "../API/AuthService";
import {Link} from "@mui/material";

const schema = yup.object().shape({
    username: yup
        .string()
        .required("This is a required field"),
    password: yup
        .string()
        .min(4, `Must be more than 4 characters`)
        .required("This is a required field"),
});
const RegisterForm = (props) => {
    const [registerMessage, setRegisterMessage] = useState(null)
    const {register, handleSubmit, formState:{errors}, reset} = useForm({
        mode: "onChange",
        resolver: yupResolver(schema),
    })
    const userRegister = async (user) => {

       return await AuthService.register(user)
    }

    const onSubmit = async (user) => {
        await userRegister(user).then((res) => {
            setRegisterMessage(res.data.message)
            console.log(res)
        })
        reset()
    }
    return (registerMessage
            ? <h1>{registerMessage}</h1>
            : <>
                <h1>Registration</h1>
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
                    <FormButton>Register</FormButton>
                    Already have the account?
                    Please <Link onClick={() => props.setLoginOrRegister('login')}>Login</Link>
                </Form>
            </>
        )
}

export default RegisterForm