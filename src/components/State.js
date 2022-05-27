import { useParams, Link, Outlet } from "react-router-dom";
const State = (props) => {
  const state = useParams();
  const currentState = props.state.filter((st) => {
    return st.name === state.state;
  })[0];
  return (
    <div className="State">
      {currentState ? (
        <div>
          <h1>The cities contained within {currentState.name} are :</h1>
          {currentState.cities.map((city) => (
            <h2 className="link">
              <Link to={"/" + currentState.name + "/" + city}> {city} </Link>
            </h2>
          ))}
        </div>
      ) : (
        <h1> 404 not found</h1>
      )}
    </div>
  );
};

export default State;
