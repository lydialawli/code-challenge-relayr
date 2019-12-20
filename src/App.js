import React, { useEffect }  from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getData } from "./redux/actions/index";

function App() {
    const content = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getData())
    }, [])

    return (
        <div className='instructions'>

            <h1>Relayr Device Dashboard</h1>
            <p>Fk yeaa.</p>

        </div>
    );
}

export default App;
