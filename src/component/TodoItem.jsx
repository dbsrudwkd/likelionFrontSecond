import React from "react";

function TodoItem (props) {

    return (
        <div className="todo-item">
            {props.item}
            <button className="finButton">할 일 완료!</button>
        </div>
    )
}

export default TodoItem