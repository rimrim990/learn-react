import React, {ChangeEventHandler, MouseEventHandler, useState} from "react";
import type {Data, DataInput} from "./types";
import {useTodosDispatch} from "../context/TodosContext";

interface Props {
    data: Data
}

export function EditTodo({data}: Props) {
    const dispatch = useTodosDispatch()

    const [input, setInput] = useState<DataInput>({
        title: data.title || '',
        content: data.content || ''
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
            type: 'update',
            id: data.id,
            data: input
        })
    }

    return (
        <div>
            <h2>Edit Todo</h2>
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