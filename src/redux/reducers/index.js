
const initialState = {
    data: [],
    fetching: false,
    fetched: false,
};

function rootReducer(state = initialState, { type, payload }) {
    switch (type) {
        case 'FETCH_DATA':
            return {
                ...state,
                data: state.data.concat(payload),
                fetching: true
            }
        case 'FETCH_DATA_ERROR':
            return {
                ...state,
                data: state.data.concat(payload),
                fetching: false
            }
        default:
            return state;
    }

};



export default rootReducer; 
