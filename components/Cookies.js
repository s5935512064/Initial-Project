import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
const Cookies = () => {

    return (
        <>
            <div className="fixed bottom-3 left-3">
                <div className="group relative flex h-full items-center">
                    <button
                        id="show-preferencesModal"
                        data-cc="c-settings"
                        className="w-12 h-12 bg-white rounded-full drop-shadow hover:scale-125 duration-300">
                        <Image
                            src="/assets/cookie.png"
                            alt="cookie"
                            layout="fill"
                            objectFit="contain"
                            className="scale-75"
                        />
                    </button>
                    <div className="hidden group-hover:block ml-3 -mt-2 border shadow-sm px-3 py-1 rounded-xl text-sm bg-white text-[#7b7c80] whitespace-nowrap duration-300 font-light">
                        Consent Summary
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cookies;