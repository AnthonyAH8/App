import { Outlet } from "react-router-dom";
import Header from "./component/header";


function App() {
  return (
    <div className="container">
      <Header title='Beer App !' className='title'/>
      <Outlet/>
    </div>
  );
}

export default App;
