import {Data} from "./types";
import {useTodosDispatch} from "../context/TodosContext";

interface Props {
    data: Data
    handleSelect: () => void
}

export default function Todo({data, handleSelect}: Props) {
    const {title, content, createdAt, finishedAt} = data;

    const dispatch = useTodosDispatch()

    const handleDelete = () =>
        dispatch({
            type: 'delete',
            id: data.id
        })

    const handleToggle = () =>
        dispatch({
            type: 'toggle',
            id: data.id,
        })

    return (
        <li onClick={handleSelect} style={{cursor: "pointer"}}>
            <h3>{!!finishedAt ? <del>{title + ' ✅'}</del> : title}</h3>
            <span>{createdAt.toString()}</span>
            <div>{content}</div>
            <button onClick={handleToggle}>{data.finishedAt ? 'Undone' : 'Done'}</button>
            <button onClick={handleDelete}>Delete</button>
        </li>
    )
}