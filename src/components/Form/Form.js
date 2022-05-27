import FormData from "./FormData";
import { useState } from "react";
const Form = () => {
  const [showForm, ToggleForm] = useState(false);
  const handleClick = () => {
    ToggleForm(!showForm);
  };
  const [Data, changeData] = useState({});
  return (
    <div>
      {showForm ? (
        <FormData
          toggle={ToggleForm}
          display={showForm}
          data={Data}
          changeData={changeData}
        />
      ) : (
        <div>
          <h1>Want to Book an Appointment ?</h1>
          <p>
            {" "}
            By booking an appointment you can get help and guide to travel
            various parts of nepal .
          </p>
          <button onClick={handleClick}>Book Now!</button>
        </div>
      )}
    </div>
  );
};

export default Form;
