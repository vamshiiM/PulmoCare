import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt, faStar as faStarEmpty , faHospital,faMapMarkerAlt,faGlobe,faCalendarCheck  } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


function DoctorCard({ imageUrl, name, specialty, rating ,hospital,location,country,tags,googleUrl }) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="duration-200 transition-shadow shadow-sm text-gray-800 bg-white border rounded-lg flex flex-col h-full">
      <div className="pb-2 p-6 flex flex-col">
        <div className="gap-6 items-start flex">
          {/* Doctor Image */}
          <div className="bg-blue-100 rounded-full overflow-hidden flex justify-center items-center w-16 h-16">
            <img className="object-cover w-full h-full block max-w-full align-middle" src={imageUrl} alt={name} />
          </div>

          {/* Doctor Info */}
          <div className="flex-1">
            <h3 className="font-bold text-lg m-0">{name}</h3>
            <p className="text-gray-500 m-0">{specialty}</p>

            {/* ⭐ Star Rating */}
            <div className="flex items-center mt-1 text-yellow-400 fill-yellow-400">
              {[...Array(fullStars)].map((_, i) => (
                <FontAwesomeIcon key={i} icon={faStar} className="w-4 h-4" />
              ))}
              {halfStar && <FontAwesomeIcon icon={faStarHalfAlt} className="w-4 h-4" />}
              {[...Array(emptyStars)].map((_, i) => (
                <FontAwesomeIcon key={i} icon={faStarEmpty} className="w-4 h-4 text-gray-300" />
              ))}
              <span className="ml-2 text-gray-500 text-sm">({rating})</span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6 pt-0 flex flex-col flex-1">
        <div className="flex-1 mb-4">
            {/* Hospital Info */}
        <div className="items-start flex mb-2">
            <FontAwesomeIcon icon={ faHospital} className="text-gray-500 mr-2 w-4 h-4" />
            <span className="text-sm text-gray-500">{hospital}</span>
          </div>
             {/* Location Info */}
          <div className="items-start flex mb-2">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-500 mr-2 w-4 h-4" />
            <span className="text-sm text-gray-500">{location}</span>
          </div>
          {/* Country Info */}
            <div className="items-start flex mb-2">
                <FontAwesomeIcon icon={faGlobe } className="text-gray-500 mt-1 mr-2" />
                <span className="text-gray-700 text-sm">{country}</span>

            </div>
            {/* Tag info */ }
            <div className="mt-3">
                {
                    tags.map((taginfo)=>{
                        return (
                            <div className="transition-colors text-foreground font-semibold text-xs py-0.5 px-2.5 border rounded-full items-center inline-flex mr-1 mb-1">
                            {taginfo}
                          </div>
                        )

                    })
                }

            </div>
        </div>

        <div className="mt-auto">
        <button className="text-white inline-flex items-center justify-center gap-2 w-full h-10 px-4 py-2 mt-2 text-sm font-medium text-primary-foreground bg-blue-600 rounded-md transition-colors whitespace-nowrap">
        <FontAwesomeIcon icon={faCalendarCheck} className="w-4 h-4 text-white" />
         <Link to={googleUrl} >Book Appointment</Link>

        </button>
      </div>
      </div>
    </div>
  );
}

export default DoctorCard;
