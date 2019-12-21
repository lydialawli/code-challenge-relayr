
const initialState = {
    data: [],
    fetching: false,
    fetched: false,
    error: null,
};

function rootReducer(state = initialState, { type, payload }) {
    switch (type) {
        case 'FETCH_DATA_PENDING':
            return { ...state, fetching: true }
        case 'FETCH_DATA_FULLFILLED':
            return {
                ...state,
                data: payload,
                fetching: false,
                fetched: true
            }
        case 'FETCH_DATA_REJECTED':
            return {
                ...state,
                error: payload,
                fetching: false,
                error: payload
            }
        case 'PATCH_DATA_PENDING':
            return { ...state, fetching: true }
        case 'PATCH_DATA_FULLFILLED':
            return {
                ...state,
                fetching: false,
                fetched: true
            }
        case 'PATCH_DATA_REJECTED':
            return {
                ...state,
                data: state.data,
                fetching: false,
                error: payload
            }

        default:
            return state;
    }

};



export default rootReducer; 
