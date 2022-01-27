import axios from "axios";
import configApi from './config.js'

export default class FeedbackService {
    static async getAll() {
        try {
            const response = await axios.get(configApi.FDBK_URL)
            return response.data
        } catch (e) {
            console.log(e.response.data)
        }
    }
    static async delete(id, token) {
        try {
            const response = await axios.delete(configApi.FDBK_URL + '/' + id, {
                headers: {
                    'Authorization': `Bearer ` + token
                }
            })
            return response.data
        } catch (e) {
            console.log(e.response.data)
            return e.response
        }
    }
    static async create(newFeedback, token) {
        try {
            const response = await axios.post(configApi.FDBK_URL, {...newFeedback}, {
                headers: {
                    'Authorization': `Bearer ` + token
                }
            })
            return response.data
        } catch (e) {
            console.log(e.response.data)
            return e.response
        }
    }
}