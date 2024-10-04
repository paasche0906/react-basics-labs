import React from "react";

const Task = (props) => {
    const getPriorityStyle = (priority) => {
        switch (priority) {
            case "Low":
                return { backgroundColor: 'green', color: 'white' };
            case "Medium":
                return { backgroundColor: 'orange', color: 'white' };
            case "High":
                return { backgroundColor: 'red', color: 'white' };
            default:
                return {};
        }
    };

    return (
        <div className="card" style={{ backgroundColor: props.done ? 'lightgrey' : '#5bb4c4' }}>
            <p className="title">{props.title}</p>
            <p deadline>Due: {props.deadline}</p>
            <p className="description">{props.description}</p>
            <p className="priority" style={getPriorityStyle(props.priority)}>{props.priority}</p>
            <button onClick={props.markDone} className="doneButton">Done</button>
            <button className='deleteButton' onClick={props.deleteTask}>Delete</button>
        </div>
    )
}

export default Task;