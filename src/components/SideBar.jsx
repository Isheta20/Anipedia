import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom';
const SideBar = () => {

    const [genreList, setGenreList] = useState([]);
    const getAnimeGenre = ()=>{
        axios.get("https://api.jikan.moe/v4/genres/anime").then((response)=>{
            setGenreList(response.data.data);
        }).catch((error)=>{
            console.log(error);
        })
    }
    console.log(genreList);

    useEffect(()=>{
        getAnimeGenre();
    },[]);
  return (
    <section className={"hidden lg:flex sticky left-0 top-8 py-4 pb-6 flex-col h-screen overflow-y-auto shrink border-r border-accent p-6 lg:w-[266px]"}>
      {genreList.map((genre)=>{
        return(
            <NavLink className={({isActive})=>
                isActive? "block px-4 text-accent bg-neutral rounded-lg bg-gray-50 py-2" : "block px-4 rounded-lg text-gray-50 py-2"
            } key={genre.name} to={`/genre/${genre.mal_id}`}>
                {genre.name}
            </NavLink> 
        )
      })}
    </section>
  )
}

export default SideBar
