import React, { useEffect, useState } from "react";
import "./Player.css";
import back_arrow_icon from "../../assets/assets/back_arrow_icon.png";
import { useNavigate, useParams } from "react-router-dom";

const API_KEY = "b0abff41";

const Player = ({ searchTerm = "Avengers" }) => {
  const { imdbID } = useParams();
  const navigate = useNavigate();
  const [apiData, setApiData] = useState({
    Title: "",
    // key: "",
    Type: "",
    Released: "",
  });
  const [movies, setMovies] = useState([]);
  const fetchMovies = async () => {
    try {
      const res = await fetch(
        `https://www.omdbapi.com/?s=${category}&apikey=${API_KEY}`
      );
      const data = await res.json();

      if (data.Response === "True") {
        // setMovies(data.Search);
        setApiData({
          Title: data.Title,
          Type: data.Type,
          Released: data.Released,
        });
      } else {
        setMovies([]); // No results
        console.log("OMDB ERROR", data.Error);
      }
    } catch (error) {
      console.error("Fetch error", error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [searchTerm]);

  return (
    <div className="player">
      <img
        src={back_arrow_icon}
        alt=""
        onClick={() => {
          if (window.history.length > 1) {
            navigate(-1);
          } else {
            navigate("/"); // or navigate to a safe default
          }
        }}
      />
      <iframe
        width="90%"
        height="90%"
        // klhZeA61TWw?si=68PHDJC6cZ1iKS1q
        src={`https://www.youtube.com/embed/klhZeA61TWw?si=68PHDJC6cZ1iKS1q`}
        frameborder="0"
        title="movie"
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{apiData.Released.slice(0, 10)}</p>
        <p>{apiData.Title}</p>
        <p>{apiData.Type}</p>
      </div>
    </div>
  );
};

export default Player;

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom"; // ← add this
// import "./Player.css";
// import back_arrow_icon from "../../assets/assets/back_arrow_icon.png";

// const API_KEY = "b0abff41";

// const Player = () => {
//   const { imdbID } = useParams(); // ← get imdbID from URL

//   const [apiData, setApiData] = useState(null);

//   const fetchMovieDetails = async () => {
//     try {
//       const res = await fetch(
//         `https://www.omdbapi.com/?i=${imdbID}&apikey=${API_KEY}`
//       );
//       const data = await res.json();
//       if (data.Response === "True") {
//         setApiData(data);
//       } else {
//         console.error("OMDB ERROR:", data.Error);
//       }
//     } catch (error) {
//       console.error("Fetch error:", error);
//     }
//   };

//   useEffect(() => {
//     fetchMovieDetails();
//   }, [imdbID]);

//   if (!apiData) return <div>Loading...</div>;

//   return (
//     <div className="player">
//       <img src={back_arrow_icon} alt="Back" className="back-icon" />
//       {/* Simulated video embed via YouTube search */}
//       <iframe
//         width="90%"
//         height="90%"
//         src={`https://www.youtube.com/embed?listType=search&list=${encodeURIComponent(
//           apiData.Title + " trailer"
//         )}`}
//         frameBorder="0"
//         title="movie"
//         allowFullScreen
//       ></iframe>

//       <div className="player-info">
//         <p>
//           <strong>Released:</strong> {apiData.Released}
//         </p>
//         <p>
//           <strong>Title:</strong> {apiData.Title}
//         </p>
//         <p>
//           <strong>Type:</strong> {apiData.Type}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Player;
