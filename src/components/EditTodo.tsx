import React, {ChangeEventHandler, MouseEventHandler, useState} from "react";
import type {Data, DataInput} from "./types";

interface Props {
    data?: Data
    handleUpdate: (update: DataInput) => void
}

export function EditTodo({data, handleUpdate}: Props) {
    const [input, setInput] = useState<DataInput>({
        title: data?.title || '',
        content: data?.content || ''
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
        handleUpdate(input)
    }

    return (
        <div>
            <h1>Edit Todo</h1>
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