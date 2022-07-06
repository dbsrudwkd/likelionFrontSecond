import React, { useState }from "react";

function TodoItem (props) {
    const [status, setStatus] = useState("해야 할 일");
    const [show, setShow] = useState("자세히");
    
    return (
        <div className="todo-item">
            <button className="finButton" onClick={()=> { 
                setStatus(status === "해야 할 일" ? "할 일 완료!!" : "해야 할 일");
            }}>{status}</button>
            
            {props.item}

            <button className="detail" onClick={()=> { 
                setShow(show === "자세히" ? "설명 닫기" : "자세히");
            }}>{show}</button>
        </div>
    )
}

export default TodoItem