import {AppBar, Button, Collapse, Container, IconButton, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {makeStyles} from "@mui/styles";
import {styled} from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {useEffect, useState} from "react";
import BasicModal from "./Utils/Modal";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import {useAuthContext} from "./Context/AuthContext";
import ContactForm from './ContactForm'

const useStyles = makeStyles(() => ({
    root: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    centeralInfoText: {
        fontSize: '30px',
        fontWeight: '500',
        textAlign: 'center',
        marginBottom: '30px',
    },
    centeralInfoWrapper: {
        // marginTop: '40%,'
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
}))

const CentralButton = styled(Button)(({ theme }) => ({
        fontSize: '25px',
        width: '80%',
        marginBottom: '10%',

    }
));


export default function Header() {
    const styles = useStyles()
    const [collapsed, setCollapsed] = useState(false)
    useEffect( () => {
        setCollapsed(true)
    })
    const [contactOpen, setContactOpen] = useState(false);
    const handleContactOpen = () => setContactOpen(true);
    const handleContactClose = () => setContactOpen(false);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [loginOrRegister, setLoginOrRegister] = useState('login')
    const {isLogin, logout} = useAuthContext()
    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
        }}>

            <AppBar>
                <Container>
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            IOT WEB LAB
                        </Typography>
                        {isLogin
                            ? <Button color="inherit" onClick={logout}>Log out</Button>
                            : <Button color="inherit" onClick={handleOpen}>Log in</Button>}
                        <BasicModal open={open}
                                    onClose={handleClose}>
                            {loginOrRegister == 'login'
                                ? <LoginForm setLoginOrRegister={setLoginOrRegister} handleClose={handleClose}/>
                                : <RegisterForm setLoginOrRegister={setLoginOrRegister}/>}
                        </BasicModal>
                    </Toolbar>
                </Container>
            </AppBar>

            <Collapse in={collapsed}
                      {...( collapsed ? {timeout: 1000} : {} )}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    <div style={{
                        fontSize: '30px',
                        fontWeight: '500',
                        textAlign: 'center',
                        marginBottom: '30px',
                    }}>
                        We are ready to help you <br/> to digitalyze your business
                    </div>
                    <CentralButton size='large' variant="outlined" onClick={handleContactOpen}>Contact us</CentralButton>
                    <BasicModal open={contactOpen}
                                onClose={handleContactClose}><ContactForm/></BasicModal>
                    <IconButton >
                        <ExpandMoreIcon fontSize='large' />
                    </IconButton>
                </div>
            </Collapse>
        </div>
    );
}
