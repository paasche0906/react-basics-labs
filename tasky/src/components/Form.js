import React from "react";

const AddTaskForm = (props) => {

    return (
        <div>
            <form onSubmit={props.submit}>
                <label>
                    <p>Task title:</p>
                    <input type="text" name="title" required onChange={(event) => props.change(event)} />
                </label>
                <br />
                <label>
                    <p>Due date:</p>
                    <input type="date" name="deadline" required onChange={(event) => props.change(event)} />
                </label>
                <br />
                <label>
                    <p>Details:</p>
                    <input type="text" name="description" required onChange={(event) => props.change(event)} />
                </label>
                <label>
                    <p>Priority:</p>
                    <select id="priority" name="priority" onChange={(event) => props.change(event)}>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                </label>
                <p></p>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
};

export default AddTaskForm;