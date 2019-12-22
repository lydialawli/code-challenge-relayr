import * as action from '../constants/action-types'
import axios from 'axios'

export function getData() {
    return function (dispatch) {
        dispatch({ type: action.FETCH_DATA_PENDING })
        return axios.get('http://127.0.0.1:8888/devices')
            .then(res => {
                dispatch({ type: action.FETCH_DATA_FULLFILLED, payload: res.data.data })
            })
            .catch((err) => {
                dispatch({ type: action.FETCH_DATA_REJECTED, payload: err })
            })
    }
}

export function patchReading(readingName, stateValue) {
    return function (dispatch) {
        dispatch({ type: action.PATCH_DATA_PENDING, payload: readingName })
        return axios.patch(`http://127.0.0.1:8888/devices/${readingName}?active=${stateValue}`)
            .then(res => {
                dispatch({
                    type: action.PATCH_DATA_FULLFILLED,
                })
            })
            .catch((err) => {
                console.log('==> patch error')
                dispatch({
                    type: action.PATCH_DATA_REJECTED,
                    // err: err,
                    payload: readingName
                })
            })
    }
}

export function setVisibilityFilter(filter) {
    return { type: action.SET_VISIBILITY_FILTER, filter }
}



export function setFilter(value) {
    return function (dispatch) {
        console.log('changing filter!=>' + value)
        dispatch({ type: action.SET_VISIBILITY_FILTER, value: value })
    }
}
