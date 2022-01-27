import React from "react"
import {Form} from "./Utils/Form";
import {Input} from "./Utils/Input";
import {FormButton} from "./Utils/FormButton";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import * as yup from "yup";

const schema = yup.object().shape({
    author: yup
        .string()
        .max(29, `Must be less than 30 characters`)
        .matches(/^([^0-9]*)$/, "Name should not contain numbers")
        .required("First name is a required field"),
    description: yup
        .string()
        .max(299, `Must be less than 300 characters`)
        .required("Feedback is a required field"),
    email: yup
        .string()
        .email("Email should have correct format"),
    phone: yup
        .string()
        .matches(/^([+]?[0-9]{10,14})?$/, "Write your phone number correctly")
});
const ContactForm = (props) => {
    const {register, handleSubmit, formState:{errors}, reset} = useForm({
        mode: "onChange",
        resolver: yupResolver(schema),
    })
    const onSubmit =  (apply) => {
        console.log(apply)
        reset()
    }
    return ( <>
            <h1>Contact us</h1>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    {...register('author')}
                    id={'author'}
                    type={'text'}
                    label={'Your name'}
                    required
                    error={!!errors.author}
                    helperText={errors?.author?.message}
                    inputProps={{
                        maxLength: 30
                    }}
                />
                <Input
                    {...register('email')}
                    id="email"
                    type="email"
                    label="Email"
                    error={!!errors.email}
                    helperText={errors?.email?.message}
                />
                <Input
                    {...register('phone')}
                    id="phone"
                    type="tel"
                    label="Phone Number"
                    error={!!errors.phone}
                    helperText={errors?.phone?.message}
                />
                <Input
                    {...register('description')}
                    id={'description'}
                    type={'text'}
                    label={'Your apply'}
                    multiline
                    rows={4}
                    required
                    error={!!errors.description}
                    helperText={errors?.description?.message}
                    inputProps={{
                        maxLength: 300
                    }}/>
                <FormButton>Send apply</FormButton>
                Thank you for apply!
                We will phone you or give our answer by email durning 30 minutes
            </Form>
        </>
    )
}

export default ContactForm