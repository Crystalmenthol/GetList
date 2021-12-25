import './App.css';
import axios from "axios";
import { useState, useEffect} from 'react';

function App() {

  const [data, setData] = useState({ Items: [] });

  const fetchData = async () => {
    const result = await axios(
      "https://eyvku76ua5.execute-api.ap-southeast-1.amazonaws.com/items"
    );
    setData(result.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <center>
        <table>
          <tbody>

          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
          {data.Items.map(function (data) {
            return (
              <tr key={data.id}>
                <td>
                  <p>{data.name}</p>
                </td>
                <td>
                  <p>{data.price}</p>
                </td>
              </tr>
            );
          })}
          </tbody>
        </table>
      </center>
    </div>
  );
}

export default App;
