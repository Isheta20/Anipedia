import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import AnimeCard from "../components/AnimeCard";
import Loader from "../components/Loader";

const Genre = () => {
  const { id } = useParams();
  const [animeList, setAnimeList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getAnimeByGenre = () => {
    setIsLoading(true);
    axios
      .get(`https://api.jikan.moe/v4/anime?genres=${id}`)
      .then((response) => {
        setAnimeList(response.data.data);
        console.log(response.data.data, "anime by genre");
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false); //to stop it from conti loading
      });
  };
  useEffect(() => {
    getAnimeByGenre();
  }, [id]);

  // if(isLoading) return <Loader/>

  return (
    <div className="container mx-auto px-4">
      {isLoading && <Loader />}
      <div className="grid grid-cols-3 mt-4 gap-10 md:grid-cols-2 sm:grid-cols-1">
        {animeList.map((anime) => {
          return <AnimeCard key={anime.name} anime={anime} />;
        })}
      </div>
    </div>
  );
};

export default Genre;
