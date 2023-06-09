import React, { useState } from "react";
import Tododelete from "./Tododelete";
import Composition from "./Composition";
const Todoform = () => {

    const [newlist, updatelist] = useState("");
    const [additem, updateditem] = useState([]);
    const inputevent = (event) => {
        updatelist(event.target.value);
    }
    const onclick = (event) => {

        updateditem((olditem) => {
            return [...olditem, newlist];
        });
        updatelist("");
        event.preventDefault();
    }
    const deleteitem = (id) => {
        updateditem((olditem) => {
            return olditem.filter((arrElem,index)=>{
                return index!== id;
            })
        })
    };


    return (
        <><Composition>
                <div className="card-body">
                    <h1 className="">ToDo Application</h1>
                    <input className="text" type="text" placeholder="Add item" onChange={inputevent} value={newlist} />
                    <button className="add-button" onClick={onclick}>Add</button>
                
                        {additem.map((itemValue, index) => {
                            return (<Tododelete
                                key={index}
                                id={index}
                                item={itemValue}
                                onSelect={deleteitem}
                            />)

                        })}
                    

                </div>
        </Composition>
        </>
    );
};
export default Todoform; 