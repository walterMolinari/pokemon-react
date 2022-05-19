import { useState, useEffect } from "react";
import { getByIndex } from "../../Services/CharactersServices";
import Card from "../Card/Card";

const MainPage = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      for (let index = 1; index < 91; index++) {
        const response = await getByIndex(index);
        if (response) {
          setData((data) => data.concat(response.data));
        }
      }
    };
    fetchData();
  }, []);

  const filter = (searchBy) => {
    setSearch(searchBy);
  };

  return (
    <div id="back">
      <input
        type="text"
        placeholder="pikachu"
        onChange={(e) => {
          filter(e.target.value);
        }}
        className="form-control"
      />
      <div className="row">
        {data &&
          data.map((item, id) => {
            if (item.name.toLowerCase().includes(search.toLowerCase())) {
              return (
                <div className="col-lg-2 col-md-4 col-sm-6 col-xs-12" key={id}>
                  <Card personaje={item} />
                </div>
              );
            }
          })}
      </div>
    </div>
  );
};

export default MainPage;
