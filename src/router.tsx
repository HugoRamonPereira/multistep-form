import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FormStepOne from './pages/FormStepOne';
import FormStepTwo from './pages/FormStepTwo';
import FormStepThree from './pages/FormStepThree';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<FormStepOne />} />
        <Route path='/steptwo' element={<FormStepTwo />} />
        <Route path='/stepthree' element={<FormStepThree />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
