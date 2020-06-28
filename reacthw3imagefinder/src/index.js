import "./index.css";
import React from "react";
import { render } from "react-dom";
import "./normalize.css";
// import ImageFinder from './components/ImageFinder/ImageFinder';
// import ImageSearcher from './components/ImageFinder/ImageSearcher'
// import SearchBar from './components/ImageFinder/ImageFinderOld';
import ImageFinderApp from "./components/ImageFinderApp/ImageFinderApp";
// const App = ({submitedQuery}) =>{
//   return(
//     <>
//       <ImageSearcher />
//       <ImageFinder props={{submitedQuery}}/>
//     </>
//   )
// }

render(<ImageFinderApp />, document.querySelector("#root"));
