import { useState } from 'react';
import './App.css';

function App() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className={'main'}>
      <div className={`icon-container ${isHovered ? 'hovered' : 'not-hovered'}`} onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="icon"
        >
          <path
            className="star-fill-smaller"
            d="M8.0289 6.93704C8.06111 6.84998 8.18425 6.84998 8.21647 6.93704L8.47932 7.64739C8.48945 7.67476 8.51103 7.69634 8.5384 7.70647L9.24875 7.96933C9.33581 8.00154 9.33581 8.12468 9.24875 8.1569L8.5384 8.41975C8.51103 8.42988 8.48945 8.45146 8.47932 8.47883L8.21647 9.18918C8.18425 9.27624 8.06111 9.27624 8.0289 9.18918L7.76604 8.47883C7.75591 8.45146 7.73433 8.42988 7.70696 8.41975L6.99661 8.1569C6.90955 8.12468 6.90955 8.00154 6.99661 7.96933L7.70696 7.70647C7.73433 7.69634 7.75591 7.67476 7.76604 7.64739L8.0289 6.93704Z"
            fill="rgba(52, 131, 250, 1)"
          />
          <path
            className="star-fill"
            d="M13.135 1.48441C13.1672 1.39735 13.2903 1.39735 13.3225 1.48441L13.7792 2.7184C13.7893 2.74577 13.8109 2.76735 13.8382 2.77748L15.0722 3.2341C15.1593 3.26631 15.1593 3.38945 15.0722 3.42167L13.8382 3.87828C13.8109 3.88841 13.7893 3.90999 13.7792 3.93736L13.3225 5.17135C13.2903 5.25842 13.1672 5.25842 13.135 5.17135L12.6784 3.93736C12.6682 3.90999 12.6466 3.88841 12.6193 3.87828L11.3853 3.42167C11.2982 3.38945 11.2982 3.26631 11.3853 3.2341L12.6193 2.77748C12.6466 2.76735 12.6682 2.74577 12.6784 2.7184L13.135 1.48441Z"
            fill="#737373"
          />
          <path
            className="star-outline"
            d="M8.00708 1.8689L9.8114 6.745L14.6875 8.54932L9.8114 10.3536L8.00708 15.2297L6.20276 10.3536L1.32666 8.54932L6.20276 6.745L8.00708 1.8689Z"
            stroke="#737373"
            stroke-width="1.2"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

export default App;
