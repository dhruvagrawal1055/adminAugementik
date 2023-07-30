import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Utils/Navbar'
const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/car-model');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    };
    const tb = "whitespace-nowrap px-6 py-4 ";
  const clickHandler = (item) => {
    console.log(item._id)
        console.log("clicked");
    };
    return (
        <div className='h-screen w-full '>
            <Navbar></Navbar>
            <table className='mx-auto my-4 '>
        <thead>
          <tr className='border border-slate-400'>
            <th scope="col" class="px-6 py-4">Name</th>
            <th scope="col" class="px-6 py-4">Cost</th>
            <th scope="col" class="px-6 py-4">Type</th>
            <th scope="col" class="px-6 py-4">No of Doors</th>
            <th scope="col" class="px-6 py-4">No of Seats</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
              <tr class="border border-slate-400 hover:bg-slate-600 cursor-pointer" onClick={()=>clickHandler(item)} key={item._id}>
              <td class={tb}>{item.name}</td>
              <td class={tb}>{item.cost}</td>
              <td class={tb}>{item.type}</td>
              <td class={tb}>{item.noOfSeats}</td>
              <td class={tb}>{item.noOfDoors}</td>
            </tr>
          ))}
        </tbody>
      </table>
        </div>
  );
};

export default Dashboard;
