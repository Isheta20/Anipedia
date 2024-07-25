import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import AnimeCard from "../components/AnimeCard";
import Loader from "../components/Loader";

const Genre = () => {
  const { id } = useParams();
  const [animeList, setAnimeList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const firstPage = 1;

  const getAnimeByGenre = () => {
    setIsLoading(true);
    axios
      .get(`https://api.jikan.moe/v4/anime?genres=${id}&page=${currentPage}`)
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
  }, [id, currentPage]);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
    console.log(currentPage);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  // if(isLoading) return <Loader/>

  return (
    <div className="container mx-auto px-4 mt-8 pb-10">
      {isLoading && <Loader />}
      <div className="grid lg:grid-cols-3 mt-4 gap-10 md:grid-cols-2 grid-cols-1">
        {animeList.map((anime, i) => {
          return <AnimeCard key={anime.mal_id} anime={anime} hero = {`${i==0?'lg:col-span-3 md:col-span-2':''}`}/>;
        })}
      </div>

      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={handlePrevPage}
          disabled = {currentPage == firstPage}
          className=" btn btn-outline btn-accent"
        >
          &#60;
        </button>

        <div className="self-center text-accent text-lg">
            {currentPage}
        </div>
        <button
          onClick={handleNextPage}
          className=" btn btn-outline btn-accent"
        >
          &#62;
        </button>
      </div>
    </div>
  );
};

export default Genre;
