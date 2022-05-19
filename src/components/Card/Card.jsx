import { useState } from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ personaje }) => {
  const { name } = personaje;
  const [nameImage, setNameImage] = useState("");

  const getNameImage = () => {
    setNameImage(name);
  };
  const getOutNameImage = () => {
    setTimeout(() => {
      setNameImage("");
    }, 100);
  };

  return (
    <div
      className="card my-3 "
      id="card"
      onMouseEnter={() => getNameImage()}
      onMouseLeave={() => {
        getOutNameImage();
      }}
    >
      <Link to={"/detail/" + personaje.id}>
        <div className="card-body">
          <img src={personaje.sprites.front_default} id="image" alt="img" />
          {nameImage && <h1>{nameImage}</h1>}
        </div>
      </Link>
    </div>
  );
};

export default Card;
