import  { useState, createContext } from "react";

const ChatterContext = createContext('')

const ChatterProvider = () => {
    const [users, setUsers] = useState([])
}