import { Link } from "react-router-dom";
const Settings = () => {
  const display = () => {
    const settings = document.querySelector(".settings>ul");
    console.log("test");

    settings.style.display !== "block"
      ? (settings.style.display = "block")
      : (settings.style.display = "none");
    const elements = document.querySelectorAll("nav>h1,nav>ul");
    console.log(elements);
    if (window.screen.width < 600) {
      const elements = document.querySelectorAll("nav>h1,nav>ul");
      elements.forEach((element) => {
        if (element.style.display === "none") {
          element.style.display = "flex";
          document.querySelector(".settings").style.marginTop = "1em";
        } else {
          element.style.display = "none";
          settings.style.display = "block";
          document.querySelector(".settings").style.marginTop = "-20em";
        }
      });
    }
  };
  return (
    <div className="settings" onClick={() => display()}>
      <img src="setting.jpg" alt="" />
      <ul>
        <li>display</li>
        <li>general</li>
        <li>
          {" "}
          <Link to="/form">Book an appointment</Link>
        </li>
        <li>
          {" "}
          <Link to="/login">Login</Link>
        </li>
        <li>
          {" "}
          <Link to="/signup">SignUp</Link>
        </li>
      </ul>
    </div>
  );
};

export default Settings;
