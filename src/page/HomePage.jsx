import React, { useEffect, useState } from "react";
import Axios from "axios";
import AnimeCard from "../components/AnimeCard";
import Loader from "../components/Loader";
import Seo from "../components/Seo";

const HomePage = () => {
  const [animeList, setAnimeList] = useState([]);
  const [isLoading, setIsLoading] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); //first pg
  const [totalPage, setTotalPage] = useState(1);

  const getAnimeData = () => {
    setIsLoading(true);
    Axios.get(`https://api.jikan.moe/v4/top/anime?page=${currentPage}`)
      .then((response) => {
        setAnimeList(response.data.data);
      })
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

  return (
    <div className="container mx-auto px-4 pb-10">
      <Seo
        title="Home Page"
        description="Discover a world of captivating anime at our site. Explore the latest series, classic favorites, and exclusive content. From action-packed shonen to heartwarming slice-of-life, find your next anime obsession here."
      />
      {isLoading && <Loader />}
      <section className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2  mt-4 gap-10">
        {animeList.map((anime, i) => {
          return (
            <AnimeCard
              anime={anime}
              key={anime.mal_id}
              hero={`${i == 0 ? "lg:col-span-3 md:col-span-2" : ""}`}
            />
          );
        })}
      </section>

      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={handlePrevPage}
          disabled={currentPage == totalPage}
          className=" btn btn-outline btn-accent"
        >
          &#60;
        </button>

        <div className="self-center text-accent text-lg">{currentPage}</div>
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
