import './App.css'
import Navbar from './component/navbar'
import About from './pages/about'
import Content from './pages/content'
import Contact from './pages/contact'




function App() {
  

  return (
    <>
    <div className='bg-black bg-cover h-auto w-auto'>
    
     <div className="flex flex-col h-screen bg-black ">
        <Navbar className="flex-none mb-10" />
       
        <div className="flex-grow  justify-between bg-black text-center">
          <About/>
          <Content/>
          <Contact/>
         
        </div>
        
      
     
 
  
  </div>
</div>
    </>
  )
}

export default App
