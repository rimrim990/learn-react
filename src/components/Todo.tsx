import {Data} from "./types";

interface Props {
    data: Data
}

export default function Todo({data}: Props) {
    const {title, content, createdAt, finishedAt} = data;

    return (
        <li>
            <h3>{!!finishedAt ? <del>{title + ' ✅'}</del> : title}</h3>
            <span>{createdAt.toString()}</span>
            <div>{content}</div>
        </li>
    )
}