import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Utils/Navbar'
import AddCard from '../Utils/NewReg';
const Dashboard = () => {
  const [data, setData] = useState([]);
  const [Contact, setContact] = useState([]);
  const[showAddNew,setShowAddNew]=useState(false);
  useEffect(() => {
    fetchData();
  }, []);
  const AddNew = () => {
    setShowAddNew(true);
    console.log("clicked");
  }
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/car-model');
      const conres = await axios.get('http://localhost:5000/contact');
      setContact(conres.data);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    };
    const tb = "whitespace-nowrap px-6 py-4 text-base";
  const clickHandler = (item) => {
    console.log(item._id)
        console.log("clicked");
    };
    return (
        <div className='h-screen relative w-full overflow-y-scroll'>
        <div className={showAddNew?`blur`:``}>
          <Navbar></Navbar>
          <div>
          <h1 className='text-bold underline text-left ml-4'>
            Cars available 
          </h1>
        </div>
            <table className='mx-4 my-6'>
        <thead>
          <tr className='border border-slate-400'>
            <th scope="col" class="px-6 py-4">Name</th>
            <th scope="col" class="px-6 py-4">Cost</th>
            <th scope="col" class="px-6 py-4">Type</th>
            <th scope="col" class="px-6 py-4">No of Doors</th>
            <th scope="col" class="px-6 py-4">No of Seats</th>
            <th scope="col" class="px-6 py-4">Remarks</th>
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
              <td class={tb}>{(item.remarks == null || item.remarks == undefined) ? "-" :
                (item.remarks.length < 35)?item.remarks:item.remarks.substring(0,35)+"..."
              }</td>
            </tr>
          ))}
        </tbody>
          <div className='w-full mt-4'>
        <button type="button" onClick={() => AddNew()} className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center  mb-2"> Add new </button>
        </div>
          </table>
        </div>
        <div>
          <h1 className='text-bold underline text-left ml-4'>
            Contact Info
          </h1>
        </div>
        <div>
          <table className='mx-4 my-6'>
            <thead>
              <tr className='border border-slate-400'>
                <th scope="col" class="px-6 py-4">Address</th>
                <th scope="col" class="px-6 py-4">Email</th>
                <th scope="col" class="px-6 py-4">Number</th>
              </tr>
          </thead>
          <tbody>
            {Contact.map((item) => (
              <tr class="border border-slate-400 hover:bg-slate-600 cursor-pointer" key={item._id}>
                <td class={tb}>{item.address}</td>
                <td class={tb}>{item.email}</td>
                <td class={tb}>{item.mobile}</td>
                </tr>
            ))}
          </tbody>
        <button type="button" onClick={() => AddNew()} className="text-white mt-4 bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center  mb-2"> Edit Contact </button>
        </table>
        </div>
          <div>
          {showAddNew ? <AddCard></AddCard> : null}
          </div>
        </div>
  );
};
export default Dashboard;
