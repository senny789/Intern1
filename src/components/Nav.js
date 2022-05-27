import Settings from "./Setting";
import { Link } from "react-router-dom";
const Nav = (props) => {
  const showState = props.state.map((st) => {
    return (
      <Link to={"/" + st.name} key={st.name}>
        <li>{st.name}</li>
      </Link>
    );
  });

  return (
    <div className="nav-bar">
      <nav>
        <Link to="/">
          <h1 title="logo">NEPAL</h1>
        </Link>
        <ul>{showState}</ul>
        <Settings />
      </nav>
    </div>
  );
};

export default Nav;
