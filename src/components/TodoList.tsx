import type {Data, DataInput} from "./types";
import Todo from './Todo'
import React, {useReducer, useState} from "react";
import {EditTodo} from "./EditTodo";
import AddTodo from "./AddTodo";
import todoReducer from "../action/reducer";

let nextId = 0;

const datas: Data[] = [
    {
        id: nextId++,
        title: 'React 스터디',
        content: 'React 공식문서 읽고 실습하기.',
        createdAt: new Date(),
        finishedAt: new Date(),
    },
    {
        id: nextId++,
        title: 'Next 스터디',
        content: 'Next 공식문서 읽고 실습하기.',
        createdAt: new Date(),
    },
    {
        id: nextId++,
        title: '수영하기',
        content: '자유형 연습하기.',
        createdAt: new Date(),
    }
]

export default function TodoList() {
    const [todos, dispatch] = useReducer(todoReducer, datas)
    const [selectedId, setSelectedId] = useState<number>(datas[0].id)

    const handleSelect = (id: number) => {
        setSelectedId(id)
    }

    const handleAdd = (data: DataInput) => {
        dispatch({
            type: 'add',
            id: nextId++,
            data: {
                title: data.title,
                content: data.content,
            }
        })
    }

    const handleDelete = (id: number) => {
        dispatch({
            type: 'delete',
            id
        })
    }

    const handleUpdate = (id: number) => (update: DataInput) => {
        dispatch({
            type: 'update',
            id,
            data: update
        })
    }

    const handleToggle = (id: number) => {
        dispatch({
            type: 'toggle',
            id,
        })
    }

    return (
        <div style={{display: 'flex'}}>
            <div>
                <h1>Roseanne's Todo</h1>
                <ul>
                    {
                        todos.map(todo => <Todo
                                data={todo}
                                handleToggle={() => handleToggle(todo.id)}
                                handleSelect={() => handleSelect(todo.id)}
                                handleDelete={() => handleDelete(todo.id)} key={todo.id}
                            />
                        )
                    }
                </ul>
            </div>
            <div>
                <EditTodo key={selectedId} data={todos.find(todo => todo.id === selectedId)}
                          handleUpdate={handleUpdate(selectedId)}/>
                <AddTodo handleAdd={handleAdd}/>
            </div>
        </div>
    )
}