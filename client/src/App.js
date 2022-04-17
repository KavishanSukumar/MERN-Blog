import Home from "./components/pages/home/Home";
import Login from "./components/pages/login/Login";
import Register from "./components/pages/Register/Register";
import Settings from "./components/pages/settings/Settings";
import Single from "./components/pages/single/Single";
import Write from "./components/pages/write/Write";
import TopBar from "./components/topbar/TopBar";
import { BrowserRouter as Router,Routes ,Route } from 'react-router-dom';
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const {user}= useContext(Context);
  return (
    <Router>
      <TopBar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/login" element={user ? <Home/>:<Login/>}/>
        <Route exact path="/register" element={user ? <Home/>:<Register/>}/>
        <Route exact path="/write" element={user ? <Write/>:<Register/>}/>
        <Route exact path="/settings" element={user ? <Settings/>:<Register/>}/>
        <Route exact path="/post/:postid" element={<Single/>}/>
      </Routes>
    </Router>
  );
}

export default App;
