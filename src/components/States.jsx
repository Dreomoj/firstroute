// import {useState} from 'react'

// const States = () => {
//     const[name, setName] = useState("Balablu")
//     const[job, setJob] = useState("Godfather")
//     const[pow, setPow] = useState("INEC")
//     const[now, setNow] = useState(1000)
//     const[status, setStatus] = useState("pool")
//     const election =() =>{
//         setName("Tinubu")
//         setJob("President")
//         setPow("Nigeria")
//         setNow(7000)
//         setStatus("rich")
//     }
//   return (
//     <div>
//         <h1>My name is {name}, I am the {job} of {pow}, I have over {now} loyalist, I am very {status}</h1>
//         <button onClick={election}>Change State</button>
//     </div>
//   )
// }

// export default States




// import {useState} from 'react'

// const States = () => {
//     const [count, setCount] = useState(0)
//     const increase =() => {
//         setCount(count + 1)
//     }
//     const decrease =() => {
//         setCount(count - 1)
//     }
//     const reset =() => {
//         setCount(count * 0)
//     }
//   return (
//     <div>
//         <h1>counter : {count}</h1>
//         <button onClick={increase}>Increase</button>
//         <button onClick={decrease}>Decrease</button>
//         <button onClick={reset}>Reset</button>
//     </div>
//   )
// }

// export default States

import {useState} from 'react'

const States = () => {
    // const cars = ["Honda", "Mercedes", "Corolla", "Chevrolet", "Camry", "Volvo", "BMW", "Mazda", "Opel", "Audi"]
    const [action, setAction] = useState("protesting")
    const [person, setPerson] = useState("a student")
    const [update, setUpdate] = useState("decent learning")
    const [course, setCourse] = useState("frontend")
    const ajala = () => {
        setAction("celebrating")
        setPerson("an instructor")
        setUpdate("Updated pay")
        setCourse("Fullstack")
    }
  return (
    <div>
        {/* {
            cars.map((car,i) => (
                <h1 key={i}>
                    {car}
                </h1>
            ))
        } */}
        <h1>I am {action} as {person} at Gomycode about {update} in {course} </h1>
        <button onClick={ajala}>Change Me</button>
    </div>
  )
}

export default States