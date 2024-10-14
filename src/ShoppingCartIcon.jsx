import React from "react";

export default function ShoppingCartIcon({ quantity }) {
    return (
        <h1 className='cart'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="IconChangeColor"
                 height="68" width="68">
                <rect width="156" height="156" fill="none"></rect>
                <circle cx="80" cy="216" r="12"></circle>
                <circle cx="184" cy="216" r="12"></circle>
                <path
                    d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8"
                    fill="none" stroke="#faf9f9" strokeLinecap="round" strokeLinejoin="round"
                    strokeWidth="2" id="mainIconPathAttribute"></path>
                <text textAnchor="middle" x="50%" y="50%" dy=".35em" fontFamily="sans-serif" fontSize="90px"
                      fill="white">{quantity}
                </text>
            </svg>
        </h1>
    );
}