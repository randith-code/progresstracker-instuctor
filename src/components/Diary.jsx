import React from "react";
import { SearchBar, Sort } from "./SearchShortFilter";

const Diary = () => {
    return(
        <div className="w-11/12 h-full flex flex-col items-center bg-white p-2 rounded-md">
            <div className="flex flex-col md:flex-row justify-around items-center w-11/12 py-4">
                <SearchBar/>
                <Sort/>
            </div>
            <div className="flex flex-col w-11/12 h-full p-2 gap-2 items-center bg-gray-100 rounded-md">
                <section className="w-full max-h-60 md:max-h-96 overflow-y-scroll flex flex-col gap-2 items-center">
                    
                </section>
            </div>
        </div>
    )
}

export default Diary