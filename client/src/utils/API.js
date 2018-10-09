import axios from 'axios';


export default {
    getAllProfile: function () {
        return axios.get('/api/profile/')
    }
}