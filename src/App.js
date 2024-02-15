import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Menu } from './Components/Menu/menu';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Banner } from './Components/Banner/Banner';
import { About_us } from './Components/About_Us/about';
import { Testimonial } from './Components/testimonial/testimonial';
import { Login } from './Components/Login/login';
import { Businessregister } from './Components/BussinessRegistration/businessregister';
import { Learnerregister } from './Components/LearnerRegistration/learnerregister';
import { Bussinessplan } from './Components/Bussinessplan/Bussinessplan';
import { Paymentsuccess } from './Components/payment/paymentsuccess';
import { Indiviualmenu } from './Components/Dashboard/Indiviual_Dashboard/indiviualmenu/indiviualmenu';
import { Message, MessageHistory, NotEnrolled, Overall, Overviewplan } from './Components/Dashboard/Bussiness_Dashboard/overall/overall';
import { Dashboardpage } from './Components/Dashboard/super Admin/pages/overallsperadmin';

function App() {
  return (
      <>
         <BrowserRouter>
          
          <Routes>
            <Route path='/' element={[<Menu/>,<Banner/>,<About_us/>,<Testimonial/>]}/>
            <Route path='/login' element={[<Menu/>,<Login/>]}/>
            <Route path='/businessregistration' element={[<Menu/>,<Businessregister/>]}/>
            <Route path='/learnerregistration' element={[<Menu/>,<Learnerregister/>]}/>
            <Route path='/bussinessplan/:id' element={[<Menu/>,<Bussinessplan/>]}/>
            <Route path='/success' element={[<Menu/>,<Paymentsuccess/>]}/>
            <Route path='/cancel' element={[<Menu/>,<Bussinessplan/>]}/>
            <Route path='/bussinessdashboard/:id' element={<Overall/>}/>
            <Route path='/superadmin/:id' element={<Dashboardpage/>}/>
            <Route path='/indiviualdashboard' element={[<Indiviualmenu/>]}/>
            <Route path="/message/:id" element={[<Message/>]}/>
            <Route path="/messagehistory/:id" element={[<MessageHistory/>]}/>
            <Route path="/notenrolled/:id" element={[<NotEnrolled/>]}/>

          </Routes>
        </BrowserRouter> 
      </>
  );
}

export default App;
