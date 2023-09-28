import React from "react";
import {ReactComponent as Search} from '../assets/Search.svg'

export const SearchBar = () => {
    
    return(
        <div className="flex items-center rounded-2xl border border-gray-500 px-4">
            <input type="search" placeholder="Search..." className="outline-none p-1 bg-transparent w-32"/>
            <Search/>
        </div>
    )
}

export const Filter = () => {
    return(
        <div className="flex items-center gap-3">
            <label htmlFor="filter">
                filter by : &nbsp;
                <select className="border border-gray-400 rounded-sm outline-none" name="field" id="field">
                    <option value="instructor">Instructor</option>
                    <option value="dueDate">Due Date</option>
                    <option value="startDate">Assigned Date</option>
                </select>
            </label>
            <select className="border border-gray-400 rounded-sm outline-none" name="value" id="">
                <option value="severus snape">Severus snape</option>
                <option value="minerva magonical">Minerva magonical</option>
            </select>
        </div>
    )
}

export const Sort = () => {
    return(
        <label htmlFor="sort">
            Sort : &nbsp;
            <select className="border border-gray-300" name="sort" id="sort">
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
                <option value="date">Date</option>
            </select>
        </label>
    )
}