import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import {red} from '@mui/material/colors';
import {Button, CardActions} from "@mui/material";
import {useFeedback} from "../Context/FeedbackContext";
import {useAuthContext} from "../Context/AuthContext";

export const FdbkCard = (props) => {

    const {deleteFeedback} = useFeedback()
    const {token} = useAuthContext()
    return (
        <Card style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            maxWidth: "300px",
            minWidth: "250px",
            maxHeight: "400px"
        }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                    </Avatar>
                }
                title={props.title}
                subheader={props.date.slice(0, 10)}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {props.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary" onClick={() => deleteFeedback(props.id, token)}>
                    Delete
                </Button>
            </CardActions>

        </Card>
    );
}
