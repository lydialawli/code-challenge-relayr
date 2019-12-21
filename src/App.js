import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getData } from "./redux/actions/index";
import Readings from "./components/Readings"
import Counter from "./components/Counter"
import Search from "./components/Search"

function App() {
    const content = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getData())
    }, [])

    return (
        <div className='layout'>
            <div className='box1'><h1>Relayr Device Dashboard</h1></div>
            <div className="box2">
                <Search />
                <Counter />
            </div>
            <div className="box3">
                <Readings />
            </div>
        </div>
    );
}

export default App;


