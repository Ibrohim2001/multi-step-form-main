import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StepOne from './components/stepone/StepOne';
import StepTwo from './components/steptwo/StepTwo';
import Sidebar from './components/sidebar/Sidebar';
import StepThree from './components/stepthree/StepThree';
import StepFour from './components/stepfour/StepFour';


function App() {
  return (
    <main className="app">
      <Router>
        <Sidebar/>
        <Routes>
          <Route path='/' element={<StepOne/>}/>
          <Route path='/step-two' element={<StepTwo/>}/>
          <Route path='/step-three' element={<StepThree/>}/>
          <Route path='/step-four' element={<StepFour/>}/>
        </Routes>
      </Router>
    </main>
  );
}

export default App;
