import React, { useEffect }  from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getData } from "./redux/actions/index";
import Readings from "./components/Readings"

function App() {
    const content = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getData())
    }, [])

    return (
        <div className='instructions'>

            <h1>Relayr Device Dashboard</h1>
            <Readings></Readings>
        </div>
    );
}

export default App;
