import {useEffect, useRef} from "react";

const catImgPaths = [
    'cat1',
    'cat2',
    'cat3',
    'cat4',
    'cat5',
    'cat6',
]

export default function Carousel() {
    const timer = useRef<number | null>(null)
    const index = useRef(0)
    const imgRef = useRef(new Map())

    useEffect(() => {
        timer.current = window.setInterval(() => {
            const imgPath = catImgPaths[(index.current++) % catImgPaths.length]
            const nextElem = imgRef.current.get(imgPath)

            nextElem.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "center",
            })
        }, 5000)

        return () => clearInterval(timer.current!)
    }, [])

    return (
        <div>
            <h1>Welcome to React!</h1>
            <ul style={{display: "flex", overflow: "hidden"}}>
                {
                    catImgPaths.map(imgPath =>
                        <li key={imgPath}
                            style={{display: "inline-block"}}
                            ref={elem => imgRef.current.set(imgPath, elem)}>
                            <img src={`/images/${imgPath}.jpg`} alt={imgPath} style={{height: "200px"}}/>
                        </li>)
                }
            </ul>
        </div>
    )
}