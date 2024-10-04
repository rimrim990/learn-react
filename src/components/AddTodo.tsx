import {DataInput} from "./types";
import React, {ChangeEventHandler, MouseEventHandler, useState} from "react";
import {getNextId, useTodosDispatch} from "../context/TodosContext";

export default function AddTodo() {
    const dispatch = useTodosDispatch()

    const [input, setInput] = useState<DataInput>({
        title: '',
        content: ''
    })
    const {title, content} = input;

    const handleInputChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = e => {
        const {id, value} = e.target
        setInput(i => ({
            ...i,
            [id]: value
        }))
    }

    const handleSubmit: MouseEventHandler<HTMLButtonElement> = e => {
        e.preventDefault()
        dispatch({
            type: 'add',
            id: getNextId(),
            data: {
                title,
                content
            }
        })
    }

    return (
        <div>
            <h2>Add Todo</h2>
            <form>
                <ul>
                    <li>
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={handleInputChange} value={title}/>
                    </li>
                    <li>
                        <label htmlFor="content">Content</label>
                        <textarea id="content" onChange={handleInputChange} value={content}/>
                    </li>
                    <li>
                        <button onClick={handleSubmit}>Submit</button>
                    </li>
                </ul>
            </form>
        </div>
    )
}