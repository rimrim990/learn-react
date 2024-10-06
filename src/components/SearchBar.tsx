import {ChangeEventHandler, useState} from "react";
import SearchResult from "./SearchResult";

export default function SearchBar() {
    const [text, setText] = useState<string>("")

    const handleInputChange: ChangeEventHandler<HTMLInputElement> = e => {
        setText(e.target.value)
    }

    return (
        <div>
            <h2>Search</h2>
            <input
                style={{ width: "80%", height: "20px"}}
                type="text"
                value={text}
                placeholder={"Type the search keyword..."}
                onChange={handleInputChange}
            />
            <button type="submit" style={{ marginLeft: "10px", height: "25px" }}>Search</button>
            <SearchResult keyword={text}/>
        </div>
    )
}