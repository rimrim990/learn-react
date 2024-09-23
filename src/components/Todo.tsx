import {Data} from "./types";

interface Props {
    data: Data
    handleDelete: () => void
}

export default function Todo({data, handleDelete}: Props) {
    const {title, content, createdAt, finishedAt} = data;

    return (
        <li>
            <h3>{!!finishedAt ? <del>{title + ' ✅'}</del> : title}</h3>
            <span>{createdAt.toString()}</span>
            <div>{content}</div>
            <button onClick={handleDelete}>Delete</button>
        </li>
    )
}