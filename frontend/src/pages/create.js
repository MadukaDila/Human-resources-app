import { useState } from "react";
import axios from "axios";


const Create = () => {
  const [userName, setUserName] = useState();
  const [userEmail, setEmail] = useState();
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

  

    try {
      const res = await axios.get("http://127.0.0.1:8000/test", {params:{
        username: userName,
      email: userEmail,
      }});
      // res.data && window.location.replace("/create");
      console.log(res);
    } catch(err) {
      setError(true);
    }
  };
 
    

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Add</legend>
          <div class="mb-3">
            <label class="form-label">User Name</label>
            <input
              type="text"
              id="username"
              class="form-control"
              placeholder=" User Name"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Email</label>
            <input
              type="text"
              id="useremail"
              class="form-control"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
          {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong!!</span>}
        </fieldset>
      </form>
    </div>
  );
};

export default Create;
