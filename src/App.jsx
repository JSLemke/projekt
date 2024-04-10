import React from 'react'
import{BrowserRouter, Route, Routes} from 'react-router-dom'
const App = () => {
  return (
  <>
  <BrowserRouter>
  <Route path='/' element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/blogs" element={<Blogs/>}/>
    <Route path="/blogs/:id" element={<BlogDetails/>}/>
    <Route path="/places" element={<PlacesRoute/>} />
    <Route path="*" element={<NoPage/>}/>  
    </Route>
  </BrowserRouter>
  </> 
);
};

export default App;
