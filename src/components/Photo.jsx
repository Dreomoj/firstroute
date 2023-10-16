import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Photo = () => {
    const [bankData, setBankData] = useState([])
    const Api = "https://jsonplaceholder.typicode.com/photos"


    const fetchBankData = () => {
        axios.get(Api)
        .then((res) => setBankData(res.data))
        .catch((err) => console.log(err))
    }
    
    useEffect(() => {
        fetchBankData()
    }, [])
  return (
    <div className='d-flex flex-wrap gap-5 p-5 justify-content-center'>
        {
            bankData.map((bd,i) => (
                <div className="card" style={{width: '18rem'}} key={i}>
                <img src={bd.url} class="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{bd.title}</h5>
                    <p className="card-text">{bd.id}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            ))
        
}
    </div>
  )
}

export default Photo