import {createContext, Dispatch, PropsWithChildren, useContext, useReducer} from "react";
import {Data} from "../components/types";
import todoReducer, {Action} from "../action/reducer";

let id = 0;
export const getNextId = () => id++

export const initialTodos: Data[] = [
    {
        id: getNextId(),
        title: 'React 스터디',
        content: 'React 공식문서 읽고 실습하기.',
        createdAt: new Date(),
        finishedAt: new Date(),
    },
    {
        id: getNextId(),
        title: 'Next 스터디',
        content: 'Next 공식문서 읽고 실습하기.',
        createdAt: new Date(),
    },
    {
        id: getNextId(),
        title: '수영하기',
        content: '자유형 연습하기.',
        createdAt: new Date(),
    }
]

const TodosContext = createContext<Data[]>([])
const TodosDispatchContext = createContext<Dispatch<Action> >(() => {})

interface Props {
    initialValue: Data[]
}

export default function TodosProvider({children, initialValue}: PropsWithChildren<Props>) {
    const [todos, dispatch] = useReducer(todoReducer, initialValue)
    return (
        <TodosContext.Provider value={todos}>
            <TodosDispatchContext.Provider value={dispatch}>
                {children}
            </TodosDispatchContext.Provider>
        </TodosContext.Provider>
    )
}

export const useTodos = () => useContext(TodosContext)
export const useTodosDispatch = () => useContext(TodosDispatchContext)