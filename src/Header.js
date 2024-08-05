import {useState} from 'react'
import { Link } from 'react-router-dom'
import {FaSun , FaMoon} from 'react-icons/fa'
import {TbMenu} from 'react-icons/tb'
import {IoClose} from 'react-icons/io5'


const Header = ({title,currentPath,handleClick,isdark,setisDark,music,musicOn,handleMusic,getaudio}) => {
  const[navOpen,isnavOpen]=useState(false)

  return (

    <nav className='navbar '>
      <div className='wrapper'>        
        <div className='nav-content'>
          <div className={`logo ${currentPath==='/' ?`active`:''}`} >
          <Link  to='/' onClick={(e)=>{e.preventDefault();handleClick('/')}}>{title}
          <svg width="87" height="34" viewBox="0 0 87 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M60.3899 6.0428C37.4036 0.99442 0.440909 6.88871 1.21207 18.2696C1.98323 29.6506 28.6003 33.5501 42.7834 32.9388C56.9666 32.3275 69.5591 29.6691 76.5295 25.6033C83.5 21.5376 86.8001 15.2114 84.3547 10.9336C81.9093 6.65572 76.0404 1.98562 59.4119 1.15217C42.7834 0.318714 34.9583 2.98611 18.8188 7.26564" strokeWidth="2" strokeLinecap="round" vectorEffect="non-scaling-stroke"></path></svg>
        </Link>
          </div>
          <button className='menu-nav' onClick={()=>isnavOpen(!navOpen)}><div className='hamburger'><span><TbMenu/></span></div></button>
          
          <ul className='right-menu'>
            <li className={`mode ${isdark ? 'dark':'light'}`}onClick={()=>{setisDark(!isdark)}}>{isdark ? <span className='moon'><FaMoon/></span>:<span className='sun'><FaSun/></span>}</li>
            <li><Link to='/about' onClick={(e)=>{e.preventDefault();handleClick('/about')}} className={`${currentPath==='/about' ?'active':''}`} >About me
            <svg width="87" height="34" viewBox="0 0 87 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M60.3899 6.0428C37.4036 0.99442 0.440909 6.88871 1.21207 18.2696C1.98323 29.6506 28.6003 33.5501 42.7834 32.9388C56.9666 32.3275 69.5591 29.6691 76.5295 25.6033C83.5 21.5376 86.8001 15.2114 84.3547 10.9336C81.9093 6.65572 76.0404 1.98562 59.4119 1.15217C42.7834 0.318714 34.9583 2.98611 18.8188 7.26564" strokeWidth="2" strokeLinecap="round" vectorEffect="non-scaling-stroke"></path></svg></Link></li>
            <li><Link to='/project' onClick={(e)=>{e.preventDefault();handleClick('/project')}} className={`${currentPath==='/project' ?'active':''}`}>Project
            <svg width="87" height="34" viewBox="0 0 87 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M60.3899 6.0428C37.4036 0.99442 0.440909 6.88871 1.21207 18.2696C1.98323 29.6506 28.6003 33.5501 42.7834 32.9388C56.9666 32.3275 69.5591 29.6691 76.5295 25.6033C83.5 21.5376 86.8001 15.2114 84.3547 10.9336C81.9093 6.65572 76.0404 1.98562 59.4119 1.15217C42.7834 0.318714 34.9583 2.98611 18.8188 7.26564" strokeWidth="2" strokeLinecap="round" vectorEffect="non-scaling-stroke"></path></svg>
            </Link></li>
          </ul>
        </div>
        <div className='music-disc'>
            <div className={`background-music` } title='music'  onClick={handleMusic} >
            <audio src='asserts/ACloseFriend.mp3' ref={getaudio} autoPlay loop></audio>
            {music.map((prop)=>
                <div className={`music ${prop.name} ${musicOn ? 'on':'off'}`} key={prop.id}>
                  
                  <img src={prop.image}alt='broken'></img>
                </div>
                )}
                <div className={`m-btn ${musicOn ? 'on':'off'}`}>
                  {musicOn ? 'ON' : 'OFF'}
                </div>
            </div>
            
            </div>
      </div>
      <div className={`mobile-nav ${navOpen ? 'open':''}`}>
        <div className={`nav-inner ${navOpen ? 'open':''}`}>
        <button className={`musicplay ${musicOn ? 'on':'off'}`} onClick={handleMusic}>
                  {`music:${musicOn ? 'ON' : 'OFF'}`}
                </button>
                <button className='nav-close' onClick={()=>isnavOpen(!navOpen)}><IoClose/></button>
                <ul><li><Link  to='/' className={`home ${currentPath==='/' ?'active':''}`} onClick={(e)=>{e.preventDefault();isnavOpen(!navOpen);handleClick('/')}}><h1>Home</h1>
                <span className='arrow'><svg width="126" height="76" viewBox="0 0 126 76" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.0395224 29.662C-0.228533 31.2971 0.879615 32.8398 2.51464 33.1079L29.1589 37.4761C30.794 37.7441 32.3367 36.636 32.6048 35.001C32.8728 33.3659 31.7647 31.8232 30.1297 31.5551L6.44584 27.6723L10.3287 3.98845C10.5968 2.35343 9.48861 0.810673 7.85358 0.542617C6.21855 0.274561 4.6758 1.38271 4.40774 3.01774L0.0395224 29.662ZM120.326 73.3842C121.077 74.8612 122.883 75.4498 124.36 74.6989C125.837 73.948 126.425 72.142 125.674 70.6651L120.326 73.3842ZM4.75017 32.584C19.0969 22.2788 47.8613 7.29378 76.2961 19.7516L78.7039 14.2559C47.1387 0.426616 15.9031 17.1855 1.24983 27.7108L4.75017 32.584ZM76.2961 19.7516C105.049 32.349 112.939 58.8543 120.326 73.3842L125.674 70.6651C118.868 57.2768 109.951 27.9458 78.7039 14.2559L76.2961 19.7516Z" fill="#F5C3B4"/>
</svg><p>you're here</p></span>
              </Link></li>
                <li><Link to='/about'  onClick={(e)=>{e.preventDefault();isnavOpen(!navOpen);handleClick('/about')}} className={`about ${currentPath==='/about' ?'active':''}`} ><h1>About me</h1>
                <span className='arrow'><svg width="126" height="76" viewBox="0 0 126 76" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.0395224 29.662C-0.228533 31.2971 0.879615 32.8398 2.51464 33.1079L29.1589 37.4761C30.794 37.7441 32.3367 36.636 32.6048 35.001C32.8728 33.3659 31.7647 31.8232 30.1297 31.5551L6.44584 27.6723L10.3287 3.98845C10.5968 2.35343 9.48861 0.810673 7.85358 0.542617C6.21855 0.274561 4.6758 1.38271 4.40774 3.01774L0.0395224 29.662ZM120.326 73.3842C121.077 74.8612 122.883 75.4498 124.36 74.6989C125.837 73.948 126.425 72.142 125.674 70.6651L120.326 73.3842ZM4.75017 32.584C19.0969 22.2788 47.8613 7.29378 76.2961 19.7516L78.7039 14.2559C47.1387 0.426616 15.9031 17.1855 1.24983 27.7108L4.75017 32.584ZM76.2961 19.7516C105.049 32.349 112.939 58.8543 120.326 73.3842L125.674 70.6651C118.868 57.2768 109.951 27.9458 78.7039 14.2559L76.2961 19.7516Z" fill="#F5C3B4"/>
</svg><p>you're here</p></span>
            </Link></li>
            <li><Link to='/project' onClick={(e)=>{e.preventDefault();isnavOpen(!navOpen);handleClick('/project')}} className={`project ${currentPath==='/project' ?'active':''}`}><h1>Project</h1>
            <span className='arrow'><svg width="126" height="76" viewBox="0 0 126 76" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.0395224 29.662C-0.228533 31.2971 0.879615 32.8398 2.51464 33.1079L29.1589 37.4761C30.794 37.7441 32.3367 36.636 32.6048 35.001C32.8728 33.3659 31.7647 31.8232 30.1297 31.5551L6.44584 27.6723L10.3287 3.98845C10.5968 2.35343 9.48861 0.810673 7.85358 0.542617C6.21855 0.274561 4.6758 1.38271 4.40774 3.01774L0.0395224 29.662ZM120.326 73.3842C121.077 74.8612 122.883 75.4498 124.36 74.6989C125.837 73.948 126.425 72.142 125.674 70.6651L120.326 73.3842ZM4.75017 32.584C19.0969 22.2788 47.8613 7.29378 76.2961 19.7516L78.7039 14.2559C47.1387 0.426616 15.9031 17.1855 1.24983 27.7108L4.75017 32.584ZM76.2961 19.7516C105.049 32.349 112.939 58.8543 120.326 73.3842L125.674 70.6651C118.868 57.2768 109.951 27.9458 78.7039 14.2559L76.2961 19.7516Z" fill="#F5C3B4"/>
</svg><p>you're here</p></span>
            </Link></li>
            <li className={`mode ${isdark ? 'dark':'light'}`}onClick={()=>{setisDark(!isdark)}}>{isdark ? <span className='moon'><FaMoon/></span>:<span className='sun'><FaSun/></span>}</li>
                </ul> 

        </div>
      </div>
      
    </nav>
    
  )

}


export default Header
