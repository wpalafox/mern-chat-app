import { Button } from '@chakra-ui/react';
import { Route } from "react-router-dom";
import  HomePage from "./Pages/HomePage.js";
import ChatPage from "./Pages/ChatPage.js";
import './App.css';



function App() {
  return (
    <div className="App">Hello Will

       <Route path="/" component={HomePage} />
       <Route path='/chats' component={ChatPage} /> 
    
    </div>
  );
}

export default App;
