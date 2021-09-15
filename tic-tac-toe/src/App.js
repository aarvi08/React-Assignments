import React, { useState } from 'react';
import Icon from "./Components/Icon";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';

import "./style.css"

const tictakArray = new Array(9).fill("")

const App=()=> {
    let[isCross, setIsCross]= useState(true)
    let[winMessage, setWinMessage]= useState("")

    const PlayAgain=()=>{
        setIsCross(true)
        setWinMessage("")
        tictakArray.fill("")
    }


    return(
        <div>
            <Icon choice=""/>
        </div>
    )
}

export default App; 