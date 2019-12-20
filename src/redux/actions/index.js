import { FETCH_DATA, FETCH_DATA_ERROR } from "../constants/action-types";
import axios from 'axios'

export function getData() {
    return function (dispatch) {
        return axios.get('http://127.0.0.1:8888/devices')
            .then(res => {
                dispatch({ type: FETCH_DATA, payload: res.data })
            })
            .catch((err) => {
                dispatch({ type: FETCH_DATA_ERROR, payload: err })
            })
    }
}
