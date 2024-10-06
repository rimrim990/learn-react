import React from 'react';
import TodosProvider, {initialTodos} from "./context/TodosContext";
import TodoList from "./components/TodoList";
import Carousel from "./components/Carousel";
import {useOnlineStatus} from "./hooks/useOnlineStatus";
import SearchBar from "./components/SearchBar";

function App() {
    const isOnline = useOnlineStatus()

    return (
        <div className="App" style={{ margin: "0 auto", width: "600px"}}>
            <Carousel />
            <p style={{ color: isOnline ? "green" : "red"}}>
                {isOnline ? "Online" : "Offline"}
            </p>
            <SearchBar />
            <TodosProvider initialValue={initialTodos}>
                <TodoList/>
            </TodosProvider>
        </div>
    );
}

export default App;
