import {Container, Grid} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {Slider} from "./Utils/Slider";
import {FdbkCard} from "./Utils/FdbkCard";
import {useCallback, useEffect, useState} from "react";
import FeedbackService from "../API/FeedbackService";
import {FeedbackProvider} from "./Context/FeedbackContext";
import AddFeedback from "./AddFeedback";
import BasicModal from "./Utils/Modal";

const useStyles = makeStyles(() => ({
    root: {
        // display: 'flex',
        minHeight: '100vh',
    },
    title: {
        marginTop: '80px',
        marginBottom: '5%',
        textAlign: 'center',
    },
    cardItem: {
        display: 'flex',
        // justifyContent: 'center',
    }
}))
export default function Feedback() {
    const classes = useStyles()

    const [feedbacks, setFeedbacks] = useState([])
    const [adminMessage, setAdminMessage] = useState(null)
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    useEffect(() => {
        fetchFeedbacks()
    }, [])

    async function fetchFeedbacks() {
        await FeedbackService.getAll().then((res) => {
            setFeedbacks(res)
            console.log(res.length)
        })
    }

    const deleteFeedback = useCallback(async (id, token) => {
        await FeedbackService.delete(id, token).then(async (res) => {
            if (!res.data) {
                await fetchFeedbacks()
            }
            else {
                console.log(res.data.message)
                setAdminMessage(res.data.message)
                handleOpen()
            }
        })
    }, [])

    const createFeedback = useCallback(async (newFeedback, token) => {
        await FeedbackService.create(newFeedback, token).then((res) => {
            if (!res.data) {
                setFeedbacks([...feedbacks, res])
                console.log([...feedbacks, res].length)
            }
            }
        )
    }, [feedbacks])

    //useCallback
    const feedbacksCardArr = feedbacks.map(el => {
       return (<FdbkCard title={el.author} description={el.description} date={el.date} img={'logo.svg'} id={el._id}/>)
    })

    return (
        <FeedbackProvider value={{
            deleteFeedback,
            createFeedback
        }}>
            <BasicModal open={open} onClose={handleClose}>{adminMessage}</BasicModal>
            <Container>
                <Grid container spacing={2} className={classes.root}>
                    <Grid item xs={12}>
                        <h1 className={classes.title}>Feedback from our clients</h1>
                    </Grid>
                    <Grid className={classes.cardItem} item xs={12}>
                        <Slider props={feedbacksCardArr}/>
                    </Grid>
                    <Grid item xs={12}></Grid>
                </Grid>
            </Container>
            <AddFeedback/>
        </FeedbackProvider>
    );
}
