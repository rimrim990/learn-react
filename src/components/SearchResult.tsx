import {useEffect, useState} from "react";

interface Props {
    keyword: string
}

interface Result {
    id: number
    title: string;
    content: string;
}

let nextId = 0;

const delay = (ms: number): Promise<void> => new Promise((resolve) =>
    setTimeout(() => {
        resolve()
    }, ms)
)

const fetchSlow = async (keyword: string): Promise<Result[]> => {
    await delay(3000)
    console.log('return slow result')
    return [
        {
            id: nextId++,
            title: keyword,
            content: `hello ${keyword}`
        },
        {
            id: nextId++,
            title: keyword,
            content: `hello ${keyword}`
        }
        ]
}

const fetchFast = async (keyword: string): Promise<Result[]> => {
    await delay(1000)
    console.log('return fast result')
    return [{
        id: nextId++,
        title: keyword,
        content: `hello ${keyword}`
    }]
}

export default function SearchResult({keyword}: Props) {
    const [results, setResults] = useState<Result[]>([])

    // Slow fetch can result race condition.
    useEffect(() => {
        let ignore = false;

        (async function () {
            if (keyword.length === 0) return;
            const result = Math.random() > 0.5 ?await fetchFast(keyword) : await fetchSlow(keyword)
            if (!ignore) setResults(result)
        })();

        // Ignoring unnecessary fetch results can prevent race condition.
        return () => {
            ignore = true;
        }
    }, [keyword]);

    return (
        <ul>
            {
                results.map(result => (
                    <li key={result.id}>
                        <h3>{result.title}</h3>
                        <span>{result.id}</span>
                        <p>{result.content}</p>
                    </li>
                ))
            }
        </ul>
    )
}