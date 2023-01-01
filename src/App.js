import './App.css';
import React from 'react';
import Header from './Components/Header/Header';
import Routers from './Utils/Routes/Routers';
import Sidebar from './Components/Sidebar/Sidebar';
import { useGlobalContext } from './Contexts/GlobalContext';




function App() {

const {toggleSidebar} = useGlobalContext()

  return (
<React.Fragment>
 <Header></Header>
 {toggleSidebar&&<Sidebar></Sidebar>}
 <main><Routers></Routers></main>
</React.Fragment>
  );
}

export default App;
