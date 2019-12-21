import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getData } from "./redux/actions/index";
import Readings from "./components/Readings"
import Counter from "./components/Counter"


function App() {
    const content = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getData())
    }, [])

    return (
        <div className='instructions'>
            <h1>Relayr Device Dashboard</h1>
            <Counter />
            <Readings />
        </div>
    );
}

export default App;
