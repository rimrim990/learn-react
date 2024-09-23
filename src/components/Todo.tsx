import {Data} from "./types";

interface Props {
    data: Data
    handleDelete: () => void
    handleSelect: () => void
    handleToggle: () => void
}

export default function Todo({data, handleDelete, handleSelect, handleToggle}: Props) {
    const {title, content, createdAt, finishedAt} = data;

    return (
        <li onClick={handleSelect} style={{ cursor: "pointer"}}>
            <h3>{!!finishedAt ? <del>{title + ' ✅'}</del> : title}</h3>
            <span>{createdAt.toString()}</span>
            <div>{content}</div>
            <button onClick={handleToggle}>{data.finishedAt ? 'Undone' : 'Done'}</button>
            <button onClick={handleDelete}>Delete</button>
        </li>
    )
}