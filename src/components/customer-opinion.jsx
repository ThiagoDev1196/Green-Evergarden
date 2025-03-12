import React from "react";

function CustomerOpinion({ picture, name, text }) {
    return (
        <div className="customer__opinion__container bg-white shadow-lg shadow-black/20 m-2 flex flex-col justify-center items-center p-2 md:p-4 md:flex-row ">
             <img className="w-40 mt-4 " src={`/${picture}`} alt={name} />

             <div className="customer__text__container flex flex-col items-center p-10">
               <p className="text-xl font-bold mb-6 ">{name}</p>
               <p className="text-sm sm:text-lg">"{text}"</p>              
             </div>
             

        </div>
    );
}

export default CustomerOpinion