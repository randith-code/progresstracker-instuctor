import React from "react";
import { SearchBar, Sort } from "./SearchShortFilter";
import DocumentThread from "./DocumentThread";
import ToDoAddButton from "./ToDoAddButton";

const ToDo = () => {
    return(
        <div className="w-11/12 h-5/6  my-auto bg-white rounded-md flex flex-col items-center p-4">
            <section className="flex flex-col md:flex-row gap-4 md:gap-0 justify-around items-center w-11/12 py-4">
                <SearchBar/>
                <Sort/>
                <ToDoAddButton/>
            </section>
            <section className="flex flex-col w-full h-full max-h-full overflow-y-scroll p-2 gap-2 items-center bg-gray-100 rounded-md">
                <DocumentThread title='Finished UI' wroteDate='19.09.2023' />
            </section>
        </div>
    )
}

export default ToDo