import type {Data, DataInput} from "./types";
import Todo from './Todo'
import React, {useState} from "react";
import {EditTodo} from "./EditTodo";
import AddTodo from "./AddTodo";

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
    const [todos, setTodos] = useState(datas)
    const [selectedId, setSelectedId] = useState<number>(datas[0].id)

    const handleSelect = (id: number) => {
        setSelectedId(id)
    }

    const handleAdd = (data: DataInput) => {
        setTodos(t => [...t, {
            id: nextId++,
            title: data.title,
            content: data.content,
            createdAt: new Date()
        }])
    }

    const handleDelete = (id: number) => {
        setTodos(t => t.filter(todo => todo.id !== id))
    }

    const handleUpdate = (id: number) => (update: DataInput) => {
        setTodos(t => t.map(todo => {
            if (todo.id === id)
                return {
                    ...todo,
                    ...update,
                }

            return todo;
        }))
    }

    const handleToggle = (id: number) => {
        setTodos(t => t.map(todo => {
            if (todo.id === id)
                return {
                    ...todo,
                    finishedAt: todo.finishedAt ? undefined : new Date()
                }

            return todo;
        }))
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