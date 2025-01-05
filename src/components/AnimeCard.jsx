import React from "react";
import episode from "../assets/episodes.svg";
import star from "../assets/star.svg";
import { useNavigate } from "react-router-dom";

const AnimeCard = ({ anime, hero }) => {
  const navigate = useNavigate();

  return (
    <>
      <div
        onClick={() => navigate(`/anime/${anime.mal_id}`)}
        className={`${hero} relative overflow-hidden rounded-lg shadow transition hover:shadow-lg cursor-pointer`}
      >
        <img
          alt={anime.title}
          src={anime.images.jpg.large_image_url}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="relative pt-32 sm:pt-48 lg:pt-64">
          <div className="p-4 sm:p-6 bg-neutral-500/60">
            <div className="flex gap-2">
              {anime.year === null ? null : (
                <p className="block badge badge-outline text-xs text-success-content/90">
                  {anime.year}
                </p>
              )}
              <p className="block badge badge-outline text-xs text-success-content/90">
                {anime.type}
              </p>
            </div>

            <a href="#">
              <h3 className="mt-0.5 text-lg text-accent-content/80 text-left font-bold">
                {anime.title}
              </h3>
            </a>

            <p className="flex gap-2 mt-2 line-clamp-3 text-sm/relaxed text-white/95 ">
              {anime.genres.slice(0, 3).map((genre) => {
                return (
                  <span
                    key={genre.name}
                    className="text-xs badge badge-success"
                  >
                    {genre.name}
                  </span>
                );
              })}
            </p>

            <div className="flex mt-4 items-center gap-2 text-warning/95 font-semibold">
              <div className="flex gap-2 items-center">
                <img src={episode} alt="eps" />
                <p>{anime.episodes}</p>
              </div>
              <div className="flex gap-2 items-center">
                <img src={star} alt="rating" />
                <p>{anime.score}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimeCard;
