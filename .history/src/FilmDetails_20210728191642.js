import useFetch from "./useFetch";
import { useHistory, useParams } from "react-router-dom";

const FilmDetails = () => {
    const {id} = useParams();
    const {data, error, isPending} = useFetch("http://localhost:8000/films/"+id);
    const history = useHistory();
    const handleClick = () => {
    fetch('http://localhost:8000/films/' + data.id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    }) 
  }
    return (
        <div className="film-details">
            {error && <div>{error}</div>}
            {isPending && <div>Ładowanie informacji o filmie...</div>}
            {data && <div className="film-list">
                <h2>{data.title}</h2>
                <h1
                <p>{data.description}</p>
                <button onClick={handleClick}>Usuń film</button>
            </div>
            }
        </div>
      );
}
 
export default FilmDetails;