import './App.css';
import Herocomponent from './Components/Hero/Herocomponent';
import Plans from './Components/Plans/Plans';
import Programs from './Components/Programs/programs';
import Reason from './Components/Reasons/reason';
import Testimonial from './Components/Testimonials/testimonial';

function App() {
  return (
    <div className="App">
     <Herocomponent/>
     <Programs/>
     <Reason/>
     <Plans/>
     <Testimonial/>
    </div>
  );
}

export default App;
