/**
 * Data Service to manage HTTP request for account
 *
 * Created on April 25, 2019
 * @author Ralph Florent <r.florent@jacobs-university.de>
 */
import axios from 'axios';

const url = ``;

const service = {

    get: id => {
        return axios.get(`${url}/account/${id}`);
    },
    save: data => {
        return axios.post(`${url}/account`, data);
    },
    update: data => {
        return axios.put(`${url}/account/${data.id}`, data);
    },
    deleteOne: id => {
        return axios.delete(`${url}/account/${id}`);
    }
}

export default service;