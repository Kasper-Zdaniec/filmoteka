import { useState } from "react";
import { useHistory } from "react-router-dom";

const NewFilm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [photoUrl, setPhotoUrl] = useState('');
    const history = useHistory();
    const handleSubmit = (e) => {
    e.preventDefault();
    const film = { title, description, photoUrl};

    fetch('http://localhost:8000/films/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(film)
    }).then(() => {
      history.push('/');
    })
    }
    return (
        <div className="new-film">
            <h2>Dodaj nowy film</h2>
        <form onSubmit={handleSubmit}>
        <label>Tytuł filmu:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Opis filmu:</label>
        <textarea
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <label>Link do zdjęcia filmu:</label>
         <input 
          type="text" 
          required 
          value={photoUrl}
          onChange={(e) => setPhotoUrl(e.target.value)}
          />
        <button>Dodaj film</button>
      </form>
      </div>
      );
}
 
export default NewFilm
