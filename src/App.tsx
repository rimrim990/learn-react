import React from 'react';
import TodosProvider, {initialTodos} from "./context/TodosContext";
import TodoList from "./components/TodoList";

function App() {
    return (
        <div className="App">
            <TodosProvider initialValue={initialTodos}>
                <TodoList/>
            </TodosProvider>
        </div>
    );
}

export default App;
