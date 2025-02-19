import React from 'react';
import useAllTrainers from '../Hooks/useAllTrainers';
import Loading from './Loading';


const Teams = () => {
    const [allTrainersData,isAllTrainerFetching] = useAllTrainers();
    if(isAllTrainerFetching){
        return <Loading></Loading>
    }
    return (
        <div className='container mx-auto my-32'>
            <p className='text-4xl font-light dark:text-white'>Meet with our team of world class <i> <strong>trainers,</strong> </i> <br /> <i>physician, </i> and <i>Yoga Master</i></p>
            <p className='sm:w-full lg:w-1/3 mt-2 dark:text-white'>We ensure your class take with our famous world class trainer. Our team is here to help you.</p>
            <div className='md:grid mt-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-10'>
                {allTrainersData.map((data, index )=>{
                    if(index<4){
                        return(
                            <div className='sm:w-full p-4 flex flex-col border shadow rounded-xl justify-center items-center text-center gap-2 dark:border-gray-800  '>
                                <img className="rounded-full mx-auto p-1 border-black dark:border-gray-800 border-2 w-36 h-36" src={data.photoUrl} ></img>
                                <h1 className='text-center mt-4 dark:text-white'>{data.name}</h1>
                                <span className=" mx-auto bg-blue-100 text-blue-800 text-xs font-medium  px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Trainer</span>
                            </div>
                        )
                    }
                    
                })}
            </div>
        </div>
    );
};

export default Teams;