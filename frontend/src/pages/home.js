import * as xlsx from "xlsx";
import axios from "axios";

const Home = () => {
  const readUploadFile = (e) => {
    const json = e.preventDefault();
    if (e.target.files) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target.result;
        const workbook = xlsx.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonName = xlsx.utils.sheet_to_json(worksheet);

        console.log(jsonName);
        var axios = require("axios");

        var config = {
          method: "get",
          url: "http://127.0.0.1:8000/exel?id=" + JSON.stringify(jsonName),
          headers: {
            Cookie:
              "XSRF-TOKEN=eyJpdiI6Iit1Z2VEWDNDSnVSRXZ4WVliWlNZN0E9PSIsInZhbHVlIjoibFF6SU00bzVQWS9sRkVmc0tpOTJLdlVmME8xZk55YnkwM2o1ZGNFZ3dSekprOXlqT0l6Zk5wcUpzSy80MXVNcGxHOWRlc285QlJ1K0VMMzQ4SVpIbmx1NWxQcGFiU1E4SWF5L21zSnFIb2U3dGJYMUsySGJ3V01yd1JTUTNTcXMiLCJtYWMiOiIzNTliNzFlMTAyYTQzZThhNTdmZGI2MmNkNmUyZjc3ZWNkYjgxYjA1YjA5MzY3Nzg3ZmU5NjJiNDc2ZjVhYTg4In0%3D; laravel_session=eyJpdiI6Im4rZU9laUVqdVRMMFVYS3BXUHZJMFE9PSIsInZhbHVlIjoiYWpGd2d0K1dsSitTTittLzZJUVg5K3dYUlNDa0VNWDF3bmdzOGVqOTJvVHQ0TFR3dUZhQ2tRQ3ArUEZ3RG9waUJvUXR5aUhZcGxranAvWmQ4T1llSS9zTnR2TTZTVWl3b2dNcFRaQ2dtY0Fnb1J0KytMN2wremREZjhWRVdUOUUiLCJtYWMiOiI1MWExNjZmNjc1ZGU4OGZjYjU2YmMyNDRkMGQ5ODgwMjE0NzE3NGVjYjkzOWMwYjBiMjE0N2U0Mjk0ZDgwM2RiIn0%3D",
          },
        };

        axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
          })
          .catch(function (error) {
            console.log(error);
          });
      };
      reader.readAsArrayBuffer(e.target.files[0]);
    }
  };

  return (
    <div>
      <legend>Add Excel Sheet</legend>
      <label for="basic-url" class="form-label fixed-bottom-50">Upload</label>
      <div class="input-group mb-3" >
        <input
          type="file"
          class="form-control"
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={readUploadFile}
        />
        
      </div>
    </div>
  );
};

export default Home;
