import type {Data} from "./types";
import Todo from './Todo'
import React, {useState} from "react";

const datas: Data[] = [
    {
        id: 0,
        title: 'React 스터디',
        content: 'React 공식문서 읽고 실습하기.',
        createdAt: new Date(),
        finishedAt: new Date(),
    },
    {
        id: 1,
        title: 'Next 스터디',
        content: 'Next 공식문서 읽고 실습하기.',
        createdAt: new Date(),
    },
    {
        id: 2,
        title: '수영하기',
        content: '자유형 연습하기.',
        createdAt: new Date(),
    }
]

export default function TodoList() {
    const [todos, setTodos] = useState(datas)

    const handleDelete = (id: number) => {
        setTodos(t => t.filter(todo => todo.id !== id))
    }

    return (
        <>
            <h1>Roseanne's Todo</h1>
            <ul>
                {
                    todos.map(todo => <Todo data={todo} handleDelete={() => handleDelete(todo.id)} key={todo.id}/>)
                }
            </ul>
        </>
    )
}