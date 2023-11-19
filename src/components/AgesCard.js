import React from "react";
import { Link } from "react-router-dom";

const AgesCard = () => {
  return (
    <div class="col-12">
      <div class="agesCardSection d-flex justify-content-center ">
        <Link href="#">
            <svg class="bd-placeholder-img rounded-circle my-5 border border-2 border-$--color-1FB36E" 
            width="180" height="180" xmlns="http://www.w3.org/2000/svg" 
            role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" 
            focusable="false"><title>Placeholder</title><rect width="100%" height="100%"
            fill="none"></rect>
            <text className="svg-text" x="50%" y="50%" font-size="40" dominant-baseline="middle" text-anchor="middle">
                <tspan x="50%" y="40%">De 0 à</tspan>
                <tspan x="50%" y="60%">1 an</tspan>
            </text>
            </svg>
        </Link>    
      </div>
    </div>
  )
}

export default AgesCard