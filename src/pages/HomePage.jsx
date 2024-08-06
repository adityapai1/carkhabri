import React, { useState } from 'react';
import bean from '../assets/khabriimag.jpeg'
import i20 from '../assets/i202.jpeg'


const carData = [
  {
    name: "Car Model 1",
    brand: "Brand 1",
    image: "https://via.placeholder.com/300x200.png?text=Car+1",
    specs: {
      engineCapacity: "1.5L",
      crashTestRating: "5 Star",
      fuelType: "Petrol",
      totalPassengers: 5
    }
  },
  {
    name: "Car Model 2",
    brand: "Brand 2",
    image: "https://via.placeholder.com/300x200.png?text=Car+2",
    specs: {
      engineCapacity: "2.0L",
      crashTestRating: "4 Star",
      fuelType: "Diesel",
      totalPassengers: 7
    }
  }
];

const HomePage = () => {
  const [currentCar, setCurrentCar] = useState(0);

  const nextCar = () => setCurrentCar((prev) => (prev + 1) % carData.length);
  const prevCar = () => setCurrentCar((prev) => (prev - 1 + carData.length) % carData.length);

  const car = carData[currentCar];

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="bg-white-200 p-4 rounded">

          <img src={bean} alt="mrbean" />
        </div>
        <div className="bg-gray-200 p-4 rounded">
          <h2 className="text-xl font-bold">Car Khaabri is your go-to spot for chill car vibes. We dish out the latest car news and reviews in plain English. </h2>
          <br />
         <h2 className="text-xl font-bold"> 
          
          Car Khaabri: Your daily dose of car crazy.
          </h2> 
          
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4">Cars launched in 2023 in Indian Market</h2>

      <div className="bg-gray-100 p-4 rounded mb-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <img src={car.image} alt={car.name} className="w-full h-auto" />
          <div>
            <h3 className="text-xl font-bold">{car.name}</h3>
            <p className="text-lg">{car.brand}</p>
          </div>
          <div>
            <h4 className="font-bold">Spec List</h4>
            <ul>
              <li>Engine capacity: {car.specs.engineCapacity}</li>
              <li>Crash Test Rating: {car.specs.crashTestRating}</li>
              <li>Fuel Type: {car.specs.fuelType}</li>
              <li>Total passengers: {car.specs.totalPassengers}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <button onClick={prevCar} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Previous</button>
        <button onClick={nextCar} className="bg-blue-500 text-white px-4 py-2 rounded">Next</button>
      </div>
    </div>
  );
};

export default HomePage;