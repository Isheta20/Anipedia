import axios from "axios";
import React, { useState } from "react";
import Loader from "../components/Loader";
import AnimeCard from "../components/AnimeCard";

const SearchAnime = () => {
  const [animeList, setAnimeList] = useState([]);
  const [query, setQuery] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getAnimeBySearch = () => {
    setIsLoading(true);
    axios
      .get(`https://api.jikan.moe/v4/anime?q=${query}`)
      .then((response) => {
        setAnimeList(response.data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error, "error in search");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    getAnimeBySearch();
  };
  console.log(query);
  console.log(animeList, "in search");

  return (
    <>
      <div className="text-center mt-10 pb-10">
        <h1 className="text-3xl font-semibold">Search Anime</h1>
        <form className="pt-2" onSubmit={handleSearch}>
          <input
            type="text"
            value={query}
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs bg-slate-600"
            onChange={(event) => {
              setQuery(event.target.value);
            }}
          />

          <button className="btn btn-outline btn-accent">Search</button>
        </form>

        <div className="container mx-auto px-4">
          {isLoading && <Loader />}
          <div className="grid grid-cols-1 mt-4 gap-10 lg:grid-cols-3 md:grid-cols-2">
            {animeList.map((anime) => {
              return <AnimeCard key={anime.name} anime={anime} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchAnime;
