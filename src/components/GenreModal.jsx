import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const GenreModal = () => {
  const [genreList, setGenreList] = useState([]);
  const getAnimeByGenre = () => {
    axios
      .get("https://api.jikan.moe/v4/genres/anime")
      .then((response) => setGenreList(response.data.data))
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAnimeByGenre();
  }, []);

  return (
    <section className="sticky left-0 top-8 py-4 flex flex-col h-screen shrink p-6 lg:w-[266px]">
      {genreList.map((genre) => {
        return (
          <NavLink className={({isActive})=>
            isActive? "block px-4 text-gray-800 rounded-lg bg-gray-50" : "block px-4 rounded-lg text-gray-50"
          } key={genre.name} to={`/genre/${genre.mal_id}`}>
              {genre.name}
          </NavLink> 
        );
      })}
    </section>  
  );
};

export default GenreModal;
