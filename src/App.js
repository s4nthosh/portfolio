import './App.css';
import Header from './Header.js'
import Footer from './Footer.js'
import Main from './Main.js'
import About from './About.js'
import Project from './Project.js';
import {Routes,Route, useLocation,useNavigate} from 'react-router-dom'
import { useEffect, useRef, useState } from 'react';
import Pagetransition from './Pagetransition.js';
import Loading from './Loading.js';


function App() {

  const location = useLocation()
  const currentPath = location.pathname
  const[isdark,setisDark]=useState(false)
  const[isOpen,setisOpen] = useState(false)
  const[musicOn,setmusicOn]=useState(false)
  const[trans,setTrans]=useState(false)
  const[nxtpath,setnxtPage]=useState(null)
  const[loading,isLoading]=useState(true)
  const nav =useNavigate()

  const links =[{
    id:1,
    icon:'/asserts/links-icons/g-mail.svg',
    icon_Outer:'/asserts/links-icons/badge-email.svg',
    link:'mailto:santhoshshr43@gmail.com'
  },
  {
    id:2,
    icon:'/asserts/links-icons/instagram.svg',
    icon_Outer:'/asserts/links-icons/badge-instagram.svg',
    link:'https://www.instagram.com/ig_santhosh.exe/?next=%2F'
  },
  {
    id:3,
    icon:'/asserts/links-icons/linkedin.svg',
    icon_Outer:'/asserts/links-icons/badge-linkedin-fa.svg',
    link:'https://www.linkedin.com/in/santhosh-kumar-11201a242/'
  },
  {
    id:4,
    icon:'/asserts/links-icons/icons8-github.svg',
    icon_Outer:'/asserts/links-icons/github.svg',
    link:'https://github.com/s4nthosh'
  },
]
const datas =[
  {
    id:1,
    name:"Nike-Slider",
    data:"/asserts/project/nike/nike.html",
    thumbnail:'/asserts/project/thumbnail/nikeslider.PNG'
  },
  {
    id:2,
    name:"Bugatti-clone",
    data:"/asserts/project/bugatti/clone.html",
    thumbnail:'/asserts/project/thumbnail/bugatti.PNG'
  },
  {
    id:3,
    name:"Foodslider",
    data:"https://food-slider.web.app/",
    thumbnail:'/asserts/project/thumbnail/foodslider.PNG'
  },
  {
    id:4,
    name:"Coffee",
    data:"/asserts/project/coffee/test.html",
    thumbnail:'/asserts/project/thumbnail/coffee.PNG'
  }, 
  {
    id:5,
    name:"Building",
    data:"/asserts/project/building/sample.html",
    thumbnail:'/asserts/project/thumbnail/building.PNG'
  },
  {
    id:6,
    name:"watch",
    data:"/asserts/project/swatch/sample.html",
    thumbnail:'/asserts/project/thumbnail/watch.PNG'
  }, 
]
const music =[
  {
    id:1,
    name:'disc',
    image:'/asserts/disc.svg',
  },
  {
    id:2,
    name:'line',
    image:'/asserts/line.svg'
  },
]

const tools = [
  {
    id:1,
    tool:'React',
    icon:'/asserts/toolicons/react.svg'
  },
  {
    id:2,
    tool:'Figma',
    icon:'/asserts/toolicons/figma.svg'
  },
  {
    id:3,
    tool:'Gsap',
    icon:'/asserts/toolicons/gsap.svg'
  },
  {
    id:4,
    tool:'Html',
    icon:'/asserts/toolicons/htmllogo.svg'
  },
  {
    id:5,
    tool:'Css',
    icon:'/asserts/toolicons/csslogo.svg'
  },
  {
    id:6,
    tool:'JavaScript',
    icon:'/asserts/toolicons/jslogo.svg'
  },
  {
    id:7,
    tool:'Python',
    icon:'/asserts/toolicons/pylogo.svg'
  },
  {
    id:8,
    tool:'Django',
    icon:'/asserts/toolicons/djlogo.svg'
  },
]


var handleClick=(path)=>{
  if(location.pathname !==path){
    setTrans(true)
    setnxtPage(path)
    setTimeout(()=>{
      setTrans(false);
      nav(path)
    },1500)
    return()=>clearTimeout()
  }
}

const getaudio = useRef(null)

useEffect(()=>{
  window.scrollTo(0,0)
  if(nxtpath && location.pathname !== nxtpath ){
    setTrans(true)
  const timer=setTimeout(()=>{
    setTrans(false)
  },1500)
  return()=>clearTimeout(timer)
}
},[location.pathname,nxtpath])





var handleMusic=()=>{
  if(musicOn){
    getaudio.current.pause()
    setmusicOn(false)
  }else{
    getaudio.current.currentTime =0;
    getaudio.current.play()
    setmusicOn(true)
  }
  setmusicOn(!musicOn)
}


useEffect(() => {
  // Simulate a data fetch
  setTimeout(() => {
    isLoading(false);
  }, 2000);
}, []);



// if(loading){
//   return <Loading/>
// }







  return (
    <div className={`App ${isdark ? 'dark' : ''}`}>
      {trans &&
      <Pagetransition/>
      }
      
      <Header title='Santhosh Kumar' getaudio={getaudio} musicOn={musicOn} handleMusic={handleMusic} setmusicOn={setmusicOn} music={music} currentPath={currentPath} isdark={isdark} setisDark={setisDark} handleClick={handleClick} />
      <Routes>
        <Route path='/' element={<Main links={links} datas={datas.slice(0,4)} handleClick={handleClick}/>}/>
        <Route path='/about' element={<About tools ={tools} isOpen={isOpen} setisOpen={setisOpen} />}/>
        <Route path='/project' element={<Project datas={datas}/>}/>
      
      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;
