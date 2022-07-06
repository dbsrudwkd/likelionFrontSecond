import React, { useState }from "react";



function TodoItem (props) {
    const [status, setStatus] = useState("할 일 완료!!");
    
    return (
        <div className="todo-item">
            {props.item}
            <button className="finButton" onClick={()=> { 
                setStatus(status === "할 일 완료!!" ? "해야 할 일" : "할 일 완료!!");
            }}>{status}</button>
        </div>
    )
}

export default TodoItem