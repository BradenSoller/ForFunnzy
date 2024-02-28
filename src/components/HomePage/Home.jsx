import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import "./Home.css";
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import Button from "@mui/material/Button";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";



function HomePage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const Animes = useSelector((store) => store.AllAnime)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_ALL_ANIME" });

    window.scrollTo(0, 0);
  }, []);
  const StatusChange = (id) => {
    dispatch({
      type: "CHANGE_STATUS",
      payload: id,
    });
  };



  return(
  <div>
      {Animes.map((anime) => {
        return (
          <div  className = "AnimeDisplay"key={anime.id}>
            <h1>{anime.title}</h1>
            <Button onClick={() => StatusChange(anime.id)}>
              {anime.is_liked ? (
                <StarOutlinedIcon className="star"></StarOutlinedIcon>
              ) : (
                <StarBorderOutlinedIcon className="star"></StarBorderOutlinedIcon>
              )}
            </Button>
          </div>

        )
          
  })}


  </div>
  )
}

// this allows us to use <App /> in index.js
export default HomePage;
