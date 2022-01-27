import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Button, CardActionArea, CardActions} from '@mui/material';

export default function TechCard(props) {
    return (
        <Card sx={{ maxWidth: 345}} variant='outlined'
              style={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={process.env.PUBLIC_URL + '/img/' + props.img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" href={props.learnMore}>
                    Learn more
                </Button>
            </CardActions>
        </Card>
    );
}
