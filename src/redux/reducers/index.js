
const initialState = {
    data: [],
    error: null,
};

function rootReducer(state = initialState, { type, payload }) {
    switch (type) {
        case 'FETCH_DATA':
            return {
                ...state,
                data: payload,
            }
        case 'FETCH_DATA_ERROR':
            return {
                ...state,
                error: payload,
            }
        default:
            return state;
    }

};



export default rootReducer; 
