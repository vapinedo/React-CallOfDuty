import axios from "axios"
import { useEffect, useState } from "react"
const charactersApiUrl = "http://localhost:4000/characters";

const Characters = () => {

    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios
            .get(charactersApiUrl)
            .then(response => {
                setCharacters(response.data);
            })
            .catch(error => setError(error.message))
            .finally(() => setIsLoading(false));
    }, []);

    if (isLoading) {
        return <div className="alert alert-primary">Loading...</div>
    }

    if (error) {
        return <div className="alert alert-danger">error</div>
    }

    return (
        <ul>
            {characters.map(char => <li key={char["id"]}>{char["name"]}</li>)}
        </ul>
    )
}
export default Characters