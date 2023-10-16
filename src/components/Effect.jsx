import React, { useEffect } from 'react'

const Effect = () => {



    const fetchData = () => {
        fetch('https://nigerianbanks.xyz') //fetching data from this api
            .then((response) => response.json()) //converting response gotten from api into json
            .then((data) => console.log(data))
            .catch((error) => console.log(error))
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div>
            <div className="card" style={{width: '18rem'}}>
                <img src="..." class="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            
        </div>
    )
}

export default Effect