import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from './Pages/Home';
import Applications from './Pages/Applicatons';
import ApplyJob from './Pages/ApplyJob';

const App =()=>{
  return (
    <div>
      <Routes>
        <Route path = '/' element={<Home />}></Route>
        <Route path = '/apply-job/:id' element={<ApplyJob />}></Route>
        <Route path = '/applications' element={<Applications />}></Route>
      </Routes>
    </div>
  )
}
export default App;

