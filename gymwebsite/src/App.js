import './App.css';
import Herocomponent from './Components/Hero/Herocomponent';
import Plans from './Components/Plans/Plans';
import Programs from './Components/Programs/programs';
import Reason from './Components/Reasons/reason';
import Testimonial from './Components/Testimonials/testimonial';
import Join from './Components/JOin/Join'
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
     <Herocomponent/>
     <Programs/>
     <Reason/>
     <Plans/>
     <Testimonial/>
     <Join/>
     <Footer/>
    </div>
  );
}

export default App;
