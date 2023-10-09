import React, {useState, useContext} from "react";
import Tasks from "./Tasks";
import Diary from "./Diary";
import InternContext from "../store/Intern/InternContext";


const TabContainer = () => {

    const [selectTab, setSelectTab] = useState("tasks")
    const ctx = useContext(InternContext)


    return(
        <div className="w-full h-full flex flex-col gap-4">
            <div className="bg-white rounded-md drop-shadow-md w-1/6 py-5 grid place-items-center text-center text-gray-600 text-lg">
                {ctx.user ? ctx.user.name : null}
            </div>
            <div className="flex-1 flex flex-col">
                <section className="flex justify-center">
                    <div className="w-11/12 h-full flex items-center">
                        <span className="bg-white px-5 rounded-tr-2xl cursor-pointer text-gray-600 hover:text-blue-700 drop-shadow-md" 
                            onClick={() => setSelectTab("tasks")}
                        >
                            Tasks
                        </span>
                        <span className="bg-white px-5 rounded-tr-2xl cursor-pointer text-gray-600 hover:text-blue-700 drop-shadow-md" 
                            onClick={() => setSelectTab("diary")} 
                        >
                            Diary
                        </span>
                    </div>
                </section>
                <section className="flex-1 flex justify-center">
                    {
                        (selectTab == "tasks") ? <Tasks/> : <Diary/>
                    }
                </section>
            </div>
        </div>
    )
}

export default TabContainer