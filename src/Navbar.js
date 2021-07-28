import { Link } from 'react-router-dom';

const Navbar  = () => {
    return (
        <nav className="navbar">
            <Link to="/">
            <h1>Filmoteka</h1>
            </Link>
            <div className="links">
                <Link to="/">Filmy</Link>          
                <Link to="/new-film">Dodaj film</Link>
            </div>
        </nav>
      );
}
 
export default Navbar ;