import React from "react";
import './CreateToDoButton.css'

function CreateToDoButton() {
    const onClickButton = (msg) => {
        alert(msg);
    }

    return(
        <button 
            className="CreateToDoButton"
            onClick={() => onClickButton('clic')}
        >
            +
        </button>
    );
}

export {CreateToDoButton}