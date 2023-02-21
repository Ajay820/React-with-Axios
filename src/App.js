import Navbar from './component/Navbar'
import axios from "axios"


import { useEffect, useState } from "react"
function App(){

  const [details,setDetails] =useState({})
 
  const fetchDetails = async ()=>{
    const {data} = await axios.get("https://randomuser.me/api/")

     const details = data.results[0]
     setDetails(details)
  }

  useEffect(()=>{

    fetchDetails()
  },[])

  return (
    <Navbar details={details}/>
  )
}

export default App
