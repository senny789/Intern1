import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const City = (props) => {
  const ParaCity = useParams();
  const currentState = props.state.filter((st) => {
    if (st.name === ParaCity.state) {
      if (
        st.cities.filter((s) => {
          return s === ParaCity.city;
        }).length > 0
      ) {
        return true;
      }
    }
  });
  const city = Object.entries(props.city);
  const currentCity = city.filter(([key, value]) => {
    return key === ParaCity.city;
  });
  let [cityName, data] = [...currentCity[0]];

  const handleChange = () => {
    const checkbox = document.querySelector("#visited");

    if (checkbox.checked === true) {
      data.visited = true;
      let newObj = {
        ...props.city,
        [cityName]: data,
      };

      props.changeCity(newObj);
    } else {
      data.visited = false;
      let newObj = {
        ...props.city,
        [cityName]: data,
      };
      props.changeCity(newObj);
    }
  };

  // get weather
  const [weather, changeWeather] = useState({});
  useEffect(() => {
    const weatherData = async () => {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=9da046cc7bce0605c0f17cc58abf3f37`
      )
        .then((res) => res.json())
        .then((data) => {
          let newWeather = {
            weather: data.weather[0].main,
            icon: data.weather[0].icon,
            temp: Math.floor(data.main.temp - 272.15),
          };

          changeWeather(newWeather);
        });
    };
    weatherData();
  }, [cityName]);

  let weatherIcoUrl = `http://openweathermap.org/img/wn/${weather.icon}@2x.png`;
  return (
    <div>
      {currentState.length > 0 ? (
        <div className="CityDetails">
          <h1 className="link">
            {" "}
            Welcome to {ParaCity.city} of{" "}
            <Link to={"/" + ParaCity.state}>{ParaCity.state}</Link>
          </h1>
          <img src={data.img} alt="" />
          <p>
            Located at {data.District} District of {data.country} with an Area
            of {data.area}
            <br></br>
            With a population of {data.population} <br></br>
            Postal Code No:{data["postal code"]}
          </p>
          <div className="Visited">
            <label for="visited">VISITED</label>
            <input
              type="checkbox"
              name="visited"
              id="visited"
              checked={data.visited ? true : false}
              onChange={() => {
                handleChange();
              }}
            ></input>
          </div>
          <div className="cityContent">
            <div className="Weather">
              <h1> Current Weather :</h1>

              {weather && (
                <div>
                  <img src={weatherIcoUrl} alt="" />
                  <h2>{`${weather.weather}`}</h2>
                  <h2>Temp:{weather.temp}&#176 C </h2>
                </div>
              )}
            </div>
            <div className="keyStops">
              <h1> Key Stops:</h1>
              <ol>
                {data.keystops.map((element) => {
                  return <li>{element}</li>;
                })}
              </ol>
              <h1> Hotels to rest to:</h1>
              {data.hotels.map((hotel) => {
                return <h3>{hotel}</h3>;
              })}
            </div>
            <div className="Attractions">
              <h1> Attractions :</h1>
              <h2>Zoo: </h2>
              <h3>{data.attractions.zoo ? "avialable" : "not avialable"}</h3>

              <h2>Stadiums:</h2>
              <ol>
                {data.attractions.stadium.map((stad) => {
                  return <li>{stad}</li>;
                })}
              </ol>
              <h2>Parks :</h2>
              <ol>
                {data.attractions.parks.map((park) => {
                  return (
                    <li>
                      {park.name} located at {park.address}
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </div>
      ) : (
        <h1>404 not found</h1>
      )}
    </div>
  );
};
export default City;
