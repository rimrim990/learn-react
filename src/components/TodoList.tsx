import Todo from './Todo'
import React, {useState} from "react";
import {EditTodo} from "./EditTodo";
import AddTodo from "./AddTodo";
import {useTodos} from "../context/TodosContext";

export default function TodoList() {
    const todos = useTodos()
    const [selectedId, setSelectedId] = useState<number>(todos[0].id)

    const handleSelect = (id: number) => {
        setSelectedId(id)
    }

    const selectedTodo = todos.find(todo => todo.id === selectedId) || todos[0]

    return (
        <div style={{display: 'flex'}}>
            <div>
                <h1>Roseanne's Todo</h1>
                <ul>
                    {
                        todos.map(todo => <Todo
                                key={todo.id}
                                data={todo}
                                handleSelect={() => handleSelect(todo.id)}
                            />
                        )
                    }
                </ul>
            </div>
            <div>
                <EditTodo key={selectedId} data={selectedTodo}/>
                <AddTodo/>
            </div>
        </div>
    )
}