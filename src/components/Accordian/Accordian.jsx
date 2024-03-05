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
    // const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    // const[multi]

    function handleSingleSelection(currentId){
        console.log(currentId);
        setSelected(currentId === selected ? null : currentId);
    }
    console.log(selected);
    return(
        <div className="wrapper">
            {/* <button>Enable Multiple Selections</button> */}
            <div className="accordian">
                {
                    data && data.length > 0 ?
                    data.map(dataItem => <div className="item">
                        <div onClick={() => handleSingleSelection(dataItem.id)} className="title">
                            <h3>{dataItem.question}</h3>
                            <span>+</span>
                        </div>
                        {
                            selected === dataItem.id ?
                            <div className="content">{dataItem.answer}</div> 
                            : null
                        }
                        </div>)
                    : <div>No data Found</div>
                }
            </div>
        </div>
    )
}