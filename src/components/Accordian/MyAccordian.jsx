/* 
 * this component is for revision.
*/

import { useState } from "react";
import { data } from "./data";

export function MyAccordian () {
    const [selected, setSelected] = useState(null);
    function handleSingle(currId) {
        console.log(currId + ' clicked');
        setSelected(selected === currId ? null : currId);
    }
    return (
        <div className="wrapper">
            <div> my accordian</div>
            <div className="accordian">
                {
                    data && data.length > 0 
                    ? data.map(dataItem => <div className="item">
                            <div onClick={() => handleSingle(dataItem.id)} className="title">
                                <h3>{dataItem.question}</h3>
                            <span>+</span>
                            </div>
                            {
                                selected === dataItem.id ?
                                <div>{dataItem.answer}</div>
                                : null
                            }
                        </div>
                    )
                    : <div>No Data Found</div>
                }
            </div>
        </div>
    )
}