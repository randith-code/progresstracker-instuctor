import React,{ useEffect, useState, useContext} from "react";
import { SearchBar, Sort } from "./SearchShortFilter";
import { db } from "../firebase/firebaseConfig";
import { collection, query, where, getDocs } from 'firebase/firestore'
import InternContext from "../store/Intern/InternContext";
import DocumentThread from "./DocumentThread";
import { sortByField } from "./SearchShortFilter";

const Diary = () => {

    const diaryCollectionRef = collection(db, "diarynotes")
    const ctx = useContext(InternContext)
    const [notes, setNotes] = useState([])
    const [value, setValue] = useState('ascending')
    const [sortedArray, setSortedArray] = useState([]);

    useEffect(() => {
        if(ctx.user != null){
            const q = query(diaryCollectionRef, where("owner", '==', ctx.user.name))
            const getDiaryNotes = async() => {
            try{
                const res = await getDocs(q)
                setNotes(res.docs.map((doc) => ({...doc.data(), id: doc.id}))) 
            }
            catch{
                console.log('couln\'t fetch notes..!')
            }
            }
            getDiaryNotes()
        }
    },[ctx.user])

    useEffect(() => {
        setSortedArray(sortByField(notes, "tittle", value))
    },[value,notes])



    return(
        <div className="w-11/12 h-full flex flex-col items-center bg-white p-2 rounded-md">
            <div className="flex flex-col md:flex-row justify-around items-center w-11/12 py-4">
                <SearchBar/>
                <Sort setValue={setValue}/>
            </div>
            <div className="flex flex-col w-11/12 h-full p-2 gap-2 items-center bg-gray-100 rounded-md">
                <section className="w-full max-h-60 md:max-h-96 overflow-y-scroll flex flex-col gap-2 items-center">
                    {sortedArray.map((note) => (
                        <DocumentThread key={note.id} title={note.tittle} wroteDate={note.createdDate} content={note.content} />
                    ))}
                </section>
            </div>
        </div>
    )
}

export default Diary