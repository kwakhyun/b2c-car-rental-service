import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };

  return (
    <div>
      <h1>404</h1>
      <p>Page not found</p>
      <button type="button" onClick={handleClick}>
        Go to home
      </button>
    </div>
  );
}
