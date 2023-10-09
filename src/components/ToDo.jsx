import React, { useState, useEffect } from "react";
import { SearchBar, Sort } from "./SearchShortFilter";
import DocumentThread from "./DocumentThread";
import ToDoAddButton from "./ToDoAddButton";
import { collection, query, where, getDocs } from 'firebase/firestore'
import { db } from "../firebase/firebaseConfig";
import { sortByField } from "./SearchShortFilter";

const ToDo = () => {

    const todoCollectionRef = collection(db, "todos")
    const [todos, setTodos] = useState([])
    const user = JSON.parse(localStorage.getItem("user"))
    const [update, setUpdate] = useState(false)
    const [value, setValue] = useState('ascending')
    const [sortedArray, setSortedArray] = useState([]);

    useEffect(() => {
        const gettasks = async() => {
                const q = query(todoCollectionRef,where("owner", "==", user.displayName))
                try{
                    const res = await getDocs(q)
                    setTodos(res.docs.map((doc) => ({...doc.data(), id: doc.id})))
                }
               catch{
                    console.log('adding todo is unsuccessfull..!')
               }
        }

        gettasks()
    },[])

    useEffect(() => {
        setSortedArray(sortByField(todos, "title", value))
    },[value,todos])

    return(
        <div className="w-11/12 h-5/6  my-auto bg-white rounded-md flex flex-col items-center p-4">
            <section className="flex flex-col md:flex-row gap-4 md:gap-0 justify-around items-center w-11/12 py-4">
                <SearchBar/>
                <Sort setValue={setValue}/>
                <ToDoAddButton setUpdate={setUpdate}/>
            </section>
            <section className="flex flex-col w-full h-full max-h-full overflow-y-scroll p-2 gap-2 items-center bg-gray-100 rounded-md">
                {sortedArray.map((todo) => (
                    <DocumentThread key={todo.id} title={todo.title} wroteDate={todo.date} />
                ))}
            </section>
        </div>
    )
}

export default ToDo