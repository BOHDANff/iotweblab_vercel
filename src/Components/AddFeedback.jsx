import {Container} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {Form} from "./Utils/Form";
import {Input} from "./Utils/Input";
import {useForm} from "react-hook-form";
import {FormButton} from "./Utils/FormButton";
import * as yup from "yup";
import "yup-phone";
import {yupResolver} from "@hookform/resolvers/yup";
import {useFeedback} from "./Context/FeedbackContext";
import {useAuthContext} from "./Context/AuthContext";
import styles from '../css/AddFeedback.module.css'
import {useState} from "react";
import BasicModal from "./Utils/Modal";

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


export default function AddFeedback() {
    const {register, handleSubmit, formState:{errors}, reset} = useForm({
        mode: "onChange",
        resolver: yupResolver(schema),
    })
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const {createFeedback} = useFeedback()
    const [userMessage, setUserMessage] = useState(null)
    const {isLogin, token} = useAuthContext()
    const onSubmit = async (newFeedback) => {
        if(isLogin) {
            await createFeedback(newFeedback, token)
            console.log(newFeedback)
        } else {
            setUserMessage("Only authorized users can add feedbacks. Please log in to add your feedback")
            handleOpen()
        }
        reset()
    }
    return (
        <><BasicModal open={open} onClose={handleClose}>{userMessage}</BasicModal>
            <Container className={styles.root} maxWidth={'xs'}>
                <h1 className={styles.title}>Add your feedback</h1>
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
                        label={'Feedback'}
                        multiline
                        rows={4}
                        required
                        error={!!errors.description}
                        helperText={errors?.description?.message}
                        inputProps={{
                            maxLength: 300
                        }}
                    />
                    <FormButton>Send feedback</FormButton>
                </Form>
            </Container></>
    )
}
