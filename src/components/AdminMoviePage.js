// AdminMoviePage.js
import React, { useEffect, useState } from 'react';
import { Button, Form } from "react-bootstrap";
import axios from "axios"
import AdNav from './AdNav';

function AdminMoviePage() {
  const [cats, setCats] = useState([
    {
      image: '',
      price: '',
      theatre: '',
    },
  ]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND}/api/auth/getmovie`)
      .then((res) => res.json())
      .then((jsonRes) => setCats(jsonRes));

      console.log(cats);

  }, []);

  console.log(cats);

  const deletePost = (id) => {
    console.log("delete------movie-------qwerty");
    console.log(id);

    axios
      .delete(`${process.env.REACT_APP_BACKEND}/api/auth/deletemovie/${id}`)
      .then((res) => 
      {
        alert("Movie Deleted")
        console.log(res)})
      .catch((err) => {
        alert("Movie Not Deleted")
        console.log(err)
      });

  };

  return (
    <>
    <AdNav/>
    <div >
    <br></br>
      <br></br>
      <br></br>
    <h1>MOVIE PAGE</h1>
      <div className="movie-container">
        
        {cats.map((cat) => (
          <div key={cat._id} className="movie-item">
            <h3 className="movie-price">Price: {cat.price}</h3>
            <h3 className="theatre-price">Theatre: {cat.theatre}</h3>
            <img src={cat.image} alt="Movie" className="movie-image" />
            <Button
                    onClick={() => deletePost(cat._id)}
                    variant="outline-danger"
                    style={{ width: "100%" }}
                  >
                    DELETE
            </Button>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default AdminMoviePage;
