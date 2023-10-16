import axios from 'axios'
import React, { useEffect } from 'react'

const Photos = () => {
    // const fetchPhoto = () => {
    //     fetch('https://jsonplaceholder.typicode.com/photos')
    //     .then((response) => response.json())
    //     .then((data) => console.log(data))
    //     .catch((error) => console.log(error))
    // }
    const fetchData = () => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err))
    }
    useEffect(() => {
        fetchData()
    },[])
  return (
    <div>
        <h1>These are some cool photos</h1>
    </div>
  )
}

export default Photos