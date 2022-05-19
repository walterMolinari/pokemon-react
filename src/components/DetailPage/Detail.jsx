import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getByIndex } from "../../Services/CharactersServices";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const Detail = () => {
  const { id } = useParams();
  const [info, setInfo] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const response = await getByIndex(id);
      if (response) {
        setInfo(response.data);
        console.log(info);
      }
    };
    fetchData();
  }, []);

  return (
    <Card sx={{ maxWidth: 445 }}>
      <CardActionArea>
        <CardMedia
          className="card-body"
          component="img"
          image={info.sprites?.other?.dream_world?.front_default}
          alt="pokemon image"
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Detail;

//  return <h1>{info.name}</h1>;
