import React from 'react'
import {useState} from 'react'


const Form = () => {

    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [address, setAddress] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log([firstname, lastname, email, password, address])
    }
    return (
        <div>
            <form className="row g-3 w-50 border shadow p-5 m-5 rounded bg-light" onChange={handleSubmit}>
                <div className="col-md-6">
                    <label for="firstname" className="form-label">First Name</label>
                    <input type="text" className="form-control" aria-label="First name" value={firstname} onChange={(e) => setFirstname(e.target.value)}/>
                </div>
                <div class="col-md-6">
                    <label for="lastname" className="form-label">Last Name</label>
                    <input type="text" className="form-control" aria-label="Last name" value={lastname} onChange={(e) => setLastname(e.target.value)}/>
                </div>
                <div className="col-md-6">
                    <label for="inputEmail4" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="col-md-6">
                    <label for="inputPassword4" className="form-label">Password</label>
                    <input type="password" className="form-control" id="inputPassword4" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="col-12">
                    <label for="inputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" value={address} onChange={(e) => setAddress(e.target.value)}/>
                </div>
                {/* <div className="col-12">
                    <label for="inputAddress2" className="form-label">Address 2</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                </div> */}
                <div className="col-md-6">
                    <label for="inputCity" className="form-label">City</label>
                    <input type="text" className="form-control" id="inputCity" />
                </div>
                <div className="col-md-4">
                    <label for="inputState" className="form-label">State</label>
                    <select id="inputState" className="form-select">
                        <option selected>Choose...</option>
                        
                                <option>Lagos</option>
                                <option>Abuja</option>
                                <option>Warri</option>
                            
                    </select>
                </div>
                <div className="col-md-2">
                    <label for="inputZip" className="form-label">Zip</label>
                    <input type="text" className="form-control" id="inputZip" />
                </div>
                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                        <label className="form-check-label" for="gridCheck">
                            Check me out
                        </label>
                    </div>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Sign in</button>
                </div>
            </form>
        </div>
    )
}

export default Form