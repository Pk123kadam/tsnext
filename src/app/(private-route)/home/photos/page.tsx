"use client"
import React, { useEffect, useState } from 'react'
import axios from "axios"
const Photos = () => {
    const [photos,setPhotos] = useState(null)
    useEffect(() => {
        let call = async () => {
            let data  = await axios.get("https://jsonplaceholder.typicode.com/photos")
            if(data?.status == 200){
                setPhotos(data?.data?.slice(0,10))
            }
        }
        call()
    },[])
    console.log('photos', photos)
    const handleClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        console.log("clicked")

    }
    return (
        <>
        <button onClick={handleClick}>Click</button>
        </>
       
    )
}

export default Photos