import axios from "axios";
import configApi from './config.js'

export default class AuthService {
    static async register(user) {
        try {
            const response = await axios.post(configApi.REGISTER_URL, {...user})
            return response
        } catch (e) {
            console.log(e.response.data)
            return e.response
        }
    }
    static async login(user) {
        try {
            const response = await axios.post(configApi.LOGIN_URL, {...user})
            return response
        } catch (e) {
            console.log(e.response.data)
            return e.response
        }
    }
}