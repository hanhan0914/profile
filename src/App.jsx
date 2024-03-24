import './App.css'
import Navbar from './component/navbar'
import Info from './pages/about'
import Content from './pages/content'
import Contact from './pages/contact'
import MyFooter from './pages/footer'
// import Info from './pages/info'




function App() {
  

  return (
    <>
   
    {/* <div className='bg-black bg-cover h-auto w-auto'> */}
    {/* <div className="flex-grow  justify-between bg-black text-center"> */}
     {/* <div className="flex flex-col h-screen  bg-black " > */}
        <Navbar  />
      
          <Info/>
          <Content /> 
          <Contact/>
          <MyFooter/>
         
        {/* </div> */}
        
      
     
 
  
  {/* </div> */}
{/* </div> */}
    </>
  )
}

export default App
