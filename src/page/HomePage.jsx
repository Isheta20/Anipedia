import React, { useEffect, useState } from "react";
import Axios from "axios";
import AnimeCard from "../components/AnimeCard";
import Loader from "../components/Loader";

const HomePage = () => {
  const [animeList, setAnimeList] = useState([]);
  const [isLoading, setIsLoading] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); //first pg
  const [totalPage, setTotalPage] = useState(1);
  const getAnimeData = () => {
    setIsLoading(true);
    Axios.get(`https://api.jikan.moe/v4/top/anime?page=${currentPage}`)
      .then((response) => setAnimeList(response.data.data))
      .catch((error) => {
        console.log("error", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  useEffect(() => {
    getAnimeData();
  }, [currentPage]);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
    console.log(currentPage);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  console.log(animeList);
  return (
    <div className="container mx-auto px-4">
      {isLoading && <Loader />}
      <section className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  mt-4 gap-10">
        {animeList.map((anime) => {
          return <AnimeCard anime={anime} key={anime.mal_id} />;
        })}
      </section>

      <div className="flex justify-center gap-4 mt-5">
        <button
          onClick={handlePrevPage}
          disabled = {currentPage == totalPage}
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

export default HomePage;
