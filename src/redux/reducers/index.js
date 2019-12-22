import { VisibilityFilters } from '../constants/action-types'

const { SHOW_ALL } = VisibilityFilters

const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    data: [],
    fetching: false,
    fetched: false,
    error: null,
    active: null,
    inactive: null,
    filter: ''
};


function rootReducer(state = initialState, action) {
    switch (action.type) {
        // case 'SET_VISIBILITY_FILTER':
        //     return {
        //         ...state,
        //         visibilityFilter: visibilityFilter(state.visibilityFilter, { type, payload })
        //     }
        case 'SET_VISIBILITY_FILTER':
            return {
                ...state,
                filter: action.value
            }
        case 'FETCH_DATA_PENDING':
            return { ...state, fetching: true }
        case 'FETCH_DATA_FULLFILLED':
            return {
                ...state,
                data: action.payload,
                fetching: false,
                fetched: true
            }
        case 'FETCH_DATA_REJECTED':
            return {
                ...state,
                error: action.payload,
                fetching: false,
            }
        case 'PATCH_DATA_PENDING':
            return {
                ...state, fetching: true,
                data: state.data.map((reading) =>
                    reading.name === action.payload
                        ? { ...reading, active: !reading.active }
                        : reading
                ),
            }
        case 'PATCH_DATA_FULLFILLED':
            return {
                ...state,
                fetching: false,
                fetched: true
            }
        case 'PATCH_DATA_REJECTED':
            return {
                ...state,
                data: state.data.map((reading) =>
                    reading.name === action.payload
                        ? { ...reading, active: !reading.active }
                        : reading
                ),
                fetching: false,
                // error: err
            }

        default:
            return state;
    }

};



export default rootReducer; 
