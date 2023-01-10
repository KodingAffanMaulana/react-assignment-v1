import "./App.css";
import { useState, useEffect } from "react";

const App = () => {
  const [resData, setResData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error] = useState(null);

  const fetchData = () => {
      return fetch(`https://jsonplaceholder.typicode.com/todos`)
        .then((response) => response.json())
        .then((data) => {
          setResData(data);
          setLoading(false);
        });
    }
  useEffect(() => {
    fetchData()
  }, []);

  if (loading) return <h1>Loading...</h1>
  if (error) return "Error!";
  return (
    <main className="App">
      {
        resData.map((dataObj) => (
          <div className="container">
            <div className="todo-card" onClick={() => alert(`todo dengan id ${dataObj.id} telah di clicked`)}>
              <h2>{dataObj.title}</h2>
              {dataObj.completed ? <p>Completed</p> : <p>Not Completed</p>}
            </div>
          </div>
        ))
      }
    </main>
  );
};

export default App;