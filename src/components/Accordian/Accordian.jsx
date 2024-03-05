/*
    types of accordian
        - single selection
        - multiple selection
*/

import { useState } from "react";
import { data } from "./data";
import './style.css'

export function Accordian() {
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const[multiple, setMultiple] = useState([]);

    function handleSingleSelection(currentId){
        console.log(currentId);
        setSelected(currentId === selected ? null : currentId);
    }

    function handleMultiSelection(currId) {
        let cpyMultiple = [...multiple];
        const findIndexOfCurrId = cpyMultiple.indexOf(currId);

        console.log(findIndexOfCurrId);
        if(findIndexOfCurrId === -1) {
            cpyMultiple.push(currId);
        } else {
            cpyMultiple.splice(findIndexOfCurrId, 1);
        }
        setMultiple(cpyMultiple);
    }

    console.log(selected, multiple);
    return(
        <div className="wrapper">
            {/* <button>Enable Single Selection</button> */}
            <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable Multiple Selections</button>
            <div className="accordian">
                {
                    data && data.length > 0 ?
                    data.map(dataItem => <div className="item">
                        <div 
                            onClick={ 
                                enableMultiSelection 
                                ? () => handleMultiSelection(dataItem.id) 
                                : () => handleSingleSelection(dataItem.id)
                            } 
                            className="title">
                            <h3>{dataItem.question}</h3>
                            <span>+</span>
                        </div>
                        {
                            enableMultiSelection ? multiple.indexOf(dataItem.id) !== -1 && (
                                <div className="content">{dataItem.answer}</div>
                            )
                            :  selected === dataItem.id && (
                                <div className="content">{dataItem.answer}</div>
                            )
                        }
                        {/* {
                            selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ?
                            (<div className="content">{dataItem.answer}</div>) 
                            : null
                        } */}
                        </div>)
                    : <div>No data Found</div>
                }
            </div>
        </div>
    )
}