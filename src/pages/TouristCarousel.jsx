import React, { useEffect, useState } from 'react';
import { Link } from 'react-router'; // corrected import for React Router

const TouristCarousel = () => {
  const [touristSpots, setTouristSpots] = useState([]);

  useEffect(() => {
    fetch('/places.json')
      .then(res => res.json())
      .then(data => setTouristSpots(data));
  }, []);

  return (
    <div className="bg-[#CFDDE8] text-black py-3 px-4 rounded-lg max-w-5xl h-[400px] mx-auto">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-2 text-center">Tourist Spots</h1>

      <div className="carousel w-full rounded-lg shadow-lg h-[300px]">
        {touristSpots.map((spot, index) => {
          const prevId = index === 0 ? touristSpots.length : index;
          const nextId = index === touristSpots.length - 1 ? 1 : index + 2;
          return (
            <div
              id={`slide${index + 1}`}
              key={spot.id}
              className="carousel-item relative w-full h-[300px]"
            >
              <Link to={`/tourist/${spot.id}`} className="block w-full h-full">
                <img
                  src={spot.image_url}
                  className="w-[300px] h-[200px] hover:w-[350px] hover:h-[250px] object-cover mx-auto rounded-t-lg"
                  alt={spot.name}
                />
                <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white px-4 py-1 rounded w-[300px] text-center">
                  <h2 className="text-lg font-semibold">{spot.name}</h2>
                  <button className='btn btn-accent'>Booking</button>
                </div>
              </Link>

              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between w-full px-4">
                <a
                  href={`#slide${prevId}`}
                  className="btn btn-circle bg-black bg-opacity-50 text-white border-none hover:bg-black"
                >
                  ❮
                </a>
                <a
                  href={`#slide${nextId}`}
                  className="btn btn-circle bg-black bg-opacity-50 text-white border-none hover:bg-black"
                >
                  ❯
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TouristCarousel;
