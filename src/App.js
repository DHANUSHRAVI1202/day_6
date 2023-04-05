import './App.css';
import Productlist from './Product';

function App() {

  return (
    <div className="App">
      <Productlist products={[{no:"1",name:"Phone", price:"25000", img:"phone.jpeg"},{no:"2",name:"Car", price:"1500000", img:"Car.png"}]}/>
    </div>
  );
}

export default App;