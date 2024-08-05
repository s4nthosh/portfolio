import {useRef,useEffect} from 'react'
import { gsap } from 'gsap'


const Section = ({links}) => {
  const home = useRef()
  const svgref = useRef()
  useEffect(()=>{
    const t1 = gsap.timeline();
    const box = home.current
    t1.to(box,{opacity:1,y:0,duration:1,transition:1})
    t1.to(svgref.current,{opacity:1})

  },[])

  return (
    <section className='first-container'>
    <div className='first-content'>
        <h1 ref={home}><div className='inner'>UI/UX designer,</div>
        <div className='inner'><span>Creative
        <svg ref={svgref} width="368" height="152" viewBox="0 0 368 152" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M218.836 12.6244C154.191 2.42497 -4.34503 21.9736 2.19648 83.5947C8.73798 145.216 112.248 156.69 203.829 146.916C295.41 137.142 362.365 93.3695 365.828 55.9715C369.291 18.5734 320.037 2 265.781 2C211.525 2 156.115 8.37462 89.1602 28.7734"  strokeWidth="4" strokeLinecap="round" vectorEffect="non-scaling-stroke" ></path></svg></span> developer</div>
        </h1>
        <p>Specialised in</p>
        <h3><span>Websites<svg width="374" height="7" viewBox="0 0 374 7" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M2 4.99996C38.0976 3.02671 137.366 3.02684 181.761 3.02671C237.048 3.02655 323.631 0.716691 353.835 3.02671M368.973 4.44925L372 5"  strokeWidth="4" strokeLinecap="round" vectorEffect="non-scaling-stroke" ></path></svg></span></h3>
    </div>
    <div className='links'>
        {links.map((link)=>
        <a href={link.link} className='link' key={link.id}><img className='icon' src={link.icon} alt='broken'/>
            <img src={link.icon_Outer} className='badge' alt='badge'/></a>
        )}

        
    </div>
    <div className='mobile-links'>
      
        {links.map((link)=>
        <a href={link.link} className='mobile-link' key={link.id}><img className='icon' src={link.icon} alt='broken'/>
            <img src={link.icon_Outer} className='badge' alt='badge'/></a>
        )}
      
    </div>
    </section>
  
  )
}

export default Section
