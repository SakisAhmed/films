import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Card from '../Components/Card';
import Header from '../Components/Header';

function User() {
    const [listData,setListData]=useState([]);
    let moviesId = useSelector((state) => state.moviesReducers.favList);
    useEffect(() => {      
        for (let i = 0; i < moviesId.length; i++) {
          axios
            .get(
              `https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=ed82f4c18f2964e75117c2dc65e2161d&language=fr-FR`
            )
            .then((res) => setListData((listData) => [...listData, res.data]));
        }
      },[]);

      return (
        <div className="user-list-page">
          <Header />
          <h2>
            Coups de coeur <span>💖</span>
          </h2>
          <div className="result">
            {listData.length > 0 ? (
              listData.map((movie) => <Card movie={movie} key={movie.id} />)
            ) : (
              <h2>Aucun coup de coeur pour le moment</h2>
            )}
          </div>
        </div>
      );
}

export default User;
