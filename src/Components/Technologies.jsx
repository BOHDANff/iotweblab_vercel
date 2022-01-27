import {Container, Grid} from "@mui/material";
import {makeStyles} from "@mui/styles";
import TechCard from "./Utils/TechCard";
import {vueDesc, reactDesc} from "../texts/TechDescs"

const useStyles = makeStyles(() => ({
    root: {
        minHeight: '100vh',
    },
    title: {
        marginTop: '80px',
        marginBottom: '5%',
        textAlign: 'center',
    },
    cardItem: {
        display: 'flex',
        justifyContent: 'center',
    }
}))
export default function Technologies() {
    const classes = useStyles()
    return (
        <Container>
            <Grid container spacing={2} className={classes.root}>
                <Grid item xs={12}>
                    <h1 className={classes.title}>Our stack of techologies</h1>
                </Grid>
                <Grid className={classes.cardItem} item xs={12} md={6}>
                    <TechCard title={'Vue'} description={vueDesc} learnMore='https://en.wikipedia.org/wiki/Vue.js' img={'Vue.svg'}/>
                </Grid>
                <Grid className={classes.cardItem} item xs={12} md={6}>
                    <TechCard title='React' description={reactDesc} learnMore='https://reactjs.org/' img={'logo.svg'}/>
                </Grid>
                <Grid item xs={12}></Grid>
            </Grid>
        </Container>

    );
}
