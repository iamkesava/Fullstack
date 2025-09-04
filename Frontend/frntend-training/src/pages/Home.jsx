import { MovieCard } from "../componenets/MovieCard";
import { useState } from "react";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    { id: 1, title: "Jhon wick", release_date: "2020" },
    { id: 2, title: "Terminator", release_date: "2020" },
    { id: 3, title: "The Matrix", release_date: "2020" },
  ];

  const handleSearch = () => {
    <e className="preventDefault">()</e>;
    alert(searchQuery);
  };
  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="search"
          className="search-movies"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          search
        </button>
      </form>
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
