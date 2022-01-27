import {AppBar, Container, Grid, IconButton, Toolbar, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const useStyles = makeStyles(() => ({
    gridItemWrap: {
        display: 'flex',
        justifyContent: 'center',
    },
    title: {
        marginTop: '80px',
        marginBottom: '5%',
        textAlign: 'center',
    },
    iconItem: {
        paddingLeft: '10px',
        // margin: '20px',
    },
    gridItem: {
        // display: 'flex',
        // justifyContent: 'center',
        padding: '10px',
    }
}))
export default function Footer() {
    const classes = useStyles()
    return (
        <AppBar position="static" color="primary">
            <Container maxWidth="md">
                <Toolbar>
                    <Grid container spacing={2}>
                        <Grid item xs={12}></Grid>
                        <Grid item xs={12} className={classes.gridItemWrap}>
                            <Typography fontSize={30} color="inherit" className={classes.gridItem}>
                                IOT WEB LAB
                            </Typography>
                        </Grid>
                        <Grid item xs={12} className={classes.gridItemWrap}>
                            <IconButton href={'https://www.facebook.com/'} color={'inherit'}><FacebookIcon fontSize="large" className={classes.iconItem}/></IconButton>
                            <IconButton href={'https://www.facebook.com/'} color={'inherit'}><LinkedInIcon fontSize="large" className={classes.iconItem}/></IconButton>
                            <IconButton href={'https://www.facebook.com/'} color={'inherit'}><InstagramIcon fontSize="large" className={classes.iconItem}/></IconButton>
                            <IconButton href={'https://www.facebook.com/'} color={'inherit'}><TwitterIcon fontSize="large" className={classes.iconItem}/></IconButton>
                        </Grid>
                        <Grid item xs={12} className={classes.gridItemWrap}>
                            <Typography variant="body1" color="inherit" className={classes.gridItem}>
                                © 2022 IOT WEB LAB
                            </Typography>
                        </Grid>
                        <Grid item xs={12}></Grid>
                    </Grid>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
