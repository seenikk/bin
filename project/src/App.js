import React, {useEffect, useState } from "react";
import axios from 'axios';
import Container from './components/Container.js'
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      
      try {
        const response = await axios.get('http://localhost:3002/data');
        setData((prev)=>response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      
      <Container image={data.image} name={data.name} />
    </div>
  );
}

export default App;
