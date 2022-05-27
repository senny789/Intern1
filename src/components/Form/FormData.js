const FormData = (props) => {
  const handleChange = (event) => {
    let newObj = {
      ...props.data,
      [event.target.name]: event.target.value,
    };
    props.changeData(newObj);
  };
  const handleSubmit = () => {
    const formInputs = Array.from(document.querySelectorAll(".Form>input"));
    const EmptyFields = formInputs.filter((input) => {
      return input.value === "";
    });
    if (EmptyFields.length > 0) {
      alert("invalid submition");
    } else {
      console.log(props.data);
      props.toggle(!props.display);
      props.changeData({});
    }
  };
  return (
    <div className="FormContainer">
      <h1>Book Appointment</h1>
      <div className="Form">
        <label htmlFor="">First Name</label>
        <input
          type="text"
          name="Fname"
          onChange={(e) => handleChange(e)}
          value={props.data.Fname ? props.data.Fname : ""}
        />
        <label htmlFor="" name>
          Last Name
        </label>
        <input
          type="text"
          name="Lname"
          onChange={(e) => handleChange(e)}
          value={props.data.Lname ? props.data.Lname : ""}
        />
        <label htmlFor="" name>
          Email Address
        </label>
        <input
          type="text"
          name="Email"
          onChange={(e) => handleChange(e)}
          value={props.data.Email ? props.data.Email : ""}
        />
        <label htmlFor="" name>
          Date
        </label>
        <input
          type="date"
          name="Date"
          onChange={(e) => handleChange(e)}
          value={props.data.Date ? props.data.Date : ""}
        />
        <label htmlFor="" name>
          Address
        </label>
        <input
          type="text"
          name="Address"
          onChange={(e) => handleChange(e)}
          value={props.data.Address ? props.data.Address : ""}
        />
        <label htmlFor="" name>
          PhoneNo
        </label>
        <input
          type="text"
          name="PhoneNo"
          onChange={(e) => handleChange(e)}
          value={props.data.PhoneNo ? props.data.PhoneNo : ""}
        />
        <input
          type="submit"
          value="Submit"
          onClick={() => {
            console.log(props.data);
            handleSubmit();
          }}
          id="submit"
        />
        <input
          type="submit"
          value="cancel"
          onClick={() => props.toggle(!props.display)}
          id="cancel"
        />
      </div>
    </div>
  );
};

export default FormData;
