import useFetch from "./useFetch";
import {Link} from "react-router-dom";

const Films = () => {
    const {data, error, isPending} = useFetch("http://localhost:8000/films");

    return (
        <div className="films">
            {error && <div>{error}</div>}
            {isPending && <div>Ładowanie listy filmów...</div>}
            {data && <div className="film-list">
                <h2>Lista filmów</h2>
                {data.map(film=>(
                    <div className="film-item" key={film.id}>
                        <Link to={`/films/${film.id}`}> <img src={film.photoUrl} alt={film.title}/> </Link>
                    </div>
                ))}
            </div>
            }
        </div>
      );
}
 
export default Films;