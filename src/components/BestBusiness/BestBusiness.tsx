"use client";
import { Reveal } from "../Reveal";
import { dataFeaturesBusiness } from "./BestBusiness.data";

export function BestBusiness() {
  return (
    <div className="relative p-4 md:py-20 max-w-5xl mx-auto" id="features">
      <Reveal>
        <h2 className="text-5xl font-semibold mb-4">
          Picadas
          <span className="block degradedBlue bg-greenLight">Tablas</span>
        </h2>
      </Reveal>
      <div className="flex flex-col gap-4">
        {dataFeaturesBusiness.map((data) => (
          <div key={data.id} className="w-full md:h-[18rem] flex flex-col md:flex-row p-4 bg-[#005046] rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <img
              className="w-[30rem] h-[15rem] object-cover rounded-t-lg"
              alt="Card Image"
              src={data.img}
            />
            <div className="flex flex-col justify-center aligth-center text-center p-4 gap-8">
              <h2 className="text-2xl text-white font-semibold">
                {data.title}
              </h2>
              <p className="text-white px-4">{data.description}</p>
              <div className="flex justify-center items-center mt-4">
                <button className="w-[20rem] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 text-5xl font-light tracking-tight text-white">
                  {data.price}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
