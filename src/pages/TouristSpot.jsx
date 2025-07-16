import { FaCalendar } from 'react-icons/fa6';
import Navbar from './shared/Navbar';
import { useLoaderData, useParams } from 'react-router';

const TouristSpot = () => {
    // useLoaderData and useParams hook
    const touristSpots = useLoaderData();
    console.log(touristSpots);

    const { id } = useParams()
    const _id = Number(id);
    console.log(_id);

    console.log(Array.isArray(touristSpots));
    const touristSpot = touristSpots.find(touristSpot => touristSpot.id === _id);
    console.log(touristSpot);

    return (
        <div className="relative h-screen">
            {/* Background image */}
            <div className="fixed inset-0 bg-[url('/Rectangle1.png')] bg-cover bg-center z-0"></div>

            {/* Overlay */}
            <div className="fixed inset-0 bg-black bg-opacity-80 z-10"></div>

            {/* Content */}
            <div className="relative z-20">

                <div className="lg:max-w-7xl max-w-[350px] mx-auto">
                    <div className='sticky top-2 bg-[#160929] z-50 '>
                        <Navbar></Navbar>
                    </div>
                    <div className='lg:mt-16 mt-10 grid grid-rows-1 lg:grid-cols-2 gap-6 lg:gap-36 rounded-2xl'>
                        <div className='text-white'>
                            <h1 className='lg:text-left text-center text-3xl mb-5 lg:text-5xl'>{touristSpot?.name}</h1>
                            <p className=''>{touristSpot?.description}</p>
                        </div>
                        <div className='p-6 bg-white text-black flex flex-col gap-3 rounded-2xl'>
                            <p className='text-[#818181] font-medium'>Origin</p>
                            <h3 className='bg-[#F2F2F2] font-bold p-5 rounded-md'>Dhaka</h3>
                            <p className='text-[#818181] font-medium'>Destination</p>
                            <h3 className='bg-[#F2F2F2] font-bold p-5 rounded-md'>{touristSpot?.name}</h3>
                            <div className='flex gap-3'>
                                <div className='w-full'>
                                    <p className='text-[#818181] font-medium'>From</p>
                                    <div className='flex justify-between bg-[#F2F2F2] font-bold p-5 rounded-md'>
                                        <h4>20/07</h4>
                                        <FaCalendar></FaCalendar>
                                    </div>
                                </div>
                                <div className='w-full'>
                                    <p className='text-[#818181] font-medium'>To</p>
                                    <div className='flex justify-between bg-[#F2F2F2] font-bold p-5 rounded-md'>
                                        <h4>23/07</h4>
                                        <FaCalendar></FaCalendar>
                                    </div>
                                </div>
                            </div>
                            <button className='btn w-full p-5 bg-orange-500 hover:bg-orange-300'>Start Booking</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TouristSpot;