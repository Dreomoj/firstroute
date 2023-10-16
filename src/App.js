// import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// import Home from './components/pages/home/Home'
// import About from './components/pages/about/About'
// import Services from './components/pages/services/Services'
// import Testimonials from './components/pages/testimonials/Testimonials'
// import Contact from './components/pages/contact/Contact'

// const App = () => {
//   return (
//     <div>
//       <Router>
//           <Routes>
//             <Route path='/' element={<Home />}/>
//             <Route path='/about' element={<About />}/>
//             <Route path='/services' element={<Services />}/>
//             <Route path='/testimonials' element={<Testimonials />}/>
//             <Route path='/contact' element={<Contact />}/>
//           </Routes>
//       </Router>
//     </div>
//   )
// }

// export default App

import React from 'react'
import States from './components/States'
import Form from './components/Form'
import Learn from './components/Learn'
import Effect from './components/Effect'
import Photos from './components/Photos'
import Photo from './components/Photo'

const App = () => {
  return (
    <div>
      {/* <Learn/> */}
      {/* <States/> */}
      {/* <Form/> */}
      {/* <Effect/> */}
      {/* <Photos/> */}
      <Photo/>
    </div>
  )
}

export default App