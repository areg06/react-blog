import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./images/logo/logo.png";
import { FaSearch } from "react-icons/fa";
import Post from "./components/post.js";
import Category from "./components/category";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="Row d-flex">
          <div className="Row col-9 headerandmain">
            <div className="col-12 header pt-4 pl-5">
              <div className="Row d-flex comp_logo">
                <img className="logo" src={logo} />
                <div className="d-flex  logo_text mt-auto mb-auto ml-3">
                  <p className="p-0 m-0 sa">սա</p>
                  <p className="p-0 m-0 blog">Blog</p>
                </div>
              </div>
            </div>
            <div className="Row d-flex align-items-end col-12 main p-1">
              <div className="Row d-flex justify-content-around flex-wrap col-12 mt-5 mb-3">
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
              </div>
            </div>
          </div>
          <div className="col-3 search">
            <div className="Row searchbar d-flex justify-content-center align-items-center col-12"> 
                <input type="search" className="searchbox p-2 pl-3 m-2 col-7" placeholder="Որոնել․․․"/>   
                <button type="submit" className="submitbtn p-2 btn-warning fas fa-search"><FaSearch className="searchico" /></button>          
            </div>
            <div className="Row suggests col-12">
              <Category />
              <Category />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
