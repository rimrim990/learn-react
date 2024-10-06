import Todo from './Todo'
import React, {useState} from "react";
import {EditTodo} from "./EditTodo";
import AddTodo from "./AddTodo";
import {useTodos} from "../context/TodosContext";

export default function TodoList() {
    const todos = useTodos()
    const [selectedId, setSelectedId] = useState<number | undefined>(todos[0]?.id)

    const handleSelect = (id: number) => {
        setSelectedId(id)
    }

    const selectedTodo = todos.find(todo => todo.id === selectedId) || todos[0]

    return (
        <div style={{display: 'flex'}}>
            <div>
                <h2>Roseanne's Todo</h2>
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
                <EditTodo key={selectedTodo?.id} data={selectedTodo}/>
                <AddTodo/>
            </div>
        </div>
    )
}