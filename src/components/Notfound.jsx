import { Link } from 'react-router-dom'; 
import "../styling/App.css";


const NotFound = () => {
  return (
    <div className="Notfound"> 
      <h2>Sorry</h2>
      <p>Page cannot be found</p>
      <Link to="/">Back to the Homepage</Link>
    </div>
  );
}

export default NotFound;
