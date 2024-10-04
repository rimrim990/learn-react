import React from 'react';
import TodosProvider, {initialTodos} from "./context/TodosContext";
import TodoList from "./components/TodoList";
import Carousel from "./components/Carousel";

function App() {
    return (
        <div className="App" style={{ margin: "0 auto", width: "600px"}}>
            <Carousel />
            <TodosProvider initialValue={initialTodos}>
                <TodoList/>
            </TodosProvider>
        </div>
    );
}

export default App;
