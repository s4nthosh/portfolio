import {useRef,useEffect} from 'react'
import { gsap } from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {IoClose} from 'react-icons/io5'

  gsap.registerPlugin(ScrollTrigger);

const About = ({tools,isOpen,setisOpen}) => {

  const about = useRef()
  const profile =useRef()
  const clone = useRef()
  
  
  

  useEffect(()=>{

    const cloneitems = Array.from(clone.current.children)
    var clonehead = clone.current
    cloneitems.forEach((item)=>{
      const duplicate = item.cloneNode(true);
      clonehead.appendChild(duplicate)
    })
    

    const t1 = gsap.timeline();
    const box = about.current
    t1.to(box,{opacity:1,y:0,duration:1,transition:1})

    const pro = profile.current
    gsap.fromTo(pro,{opacity:0,y:60},{opacity:1,y:0,duration:1,scrollTrigger:{
      trigger:pro,
      start:'top 80%',
      end:'top 70%',
      scrub:true,
    }})  
    const items = clone.current
    gsap.to(items,{translateX:'-50%',duration:20,repeat:-1,ease:'linear'})
  },[])
  return (
    <section className='about-section'>
                <div className={`showtools ${isOpen ? 'open':''}`}>
                  <button title='close' className={`${isOpen ? 'close':''}`}onClick={()=>setisOpen(!isOpen)}>
                    <IoClose/>
                  </button>
                    <div className='toolcircle'>
                        <div className='toolcontent'>
                        <h1>’’</h1>
                          {tools.map((tool)=>
                          <div className='id' key={tool.id}>
                            <ul className='tool-ul'>
                              <li className='tool-li'>{tool.tool}</li>
                            </ul>
                          
                          </div>
                          )}
                        </div>
                    </div>
              </div>
      <div className='inner' >
      <h1 ref={about}>
      Designing meaningful experiences for <span className='c-svg'>brands<svg width="368" height="152" viewBox="0 0 368 152" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M218.836 12.6244C154.191 2.42497 -4.34503 21.9736 2.19648 83.5947C8.73798 145.216 112.248 156.69 203.829 146.916C295.41 137.142 362.365 93.3695 365.828 55.9715C369.291 18.5734 320.037 2 265.781 2C211.525 2 156.115 8.37462 89.1602 28.7734"  strokeWidth="4" strokeLinecap="round" vectorEffect="non-scaling-stroke" ></path></svg></span> & <span>businesses<svg width="504" height="28" viewBox="0 0 504 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 25.1847C60.9623 19.1647 132.16 13.6506 204.83 8.62805C277.5 3.6055 415.679 0.0895689 426.057 3.60546C436.434 7.12135 346.811 14.6551 326.057 20.6822C305.302 26.7093 448.698 15.6597 502 11.1394" strokeWidth="4" strokeLinecap="round" vectorEffect="non-scaling-stroke" ></path></svg></span>
      </h1>
      </div>
      <div className='profile' ref={profile}>

        <div className='img-con'>
          <img className='img-p' src='asserts/profile.jpg' alt='broken'></img>
          <div className='p-d'>
            <div className='d'>
            <h1>I’m an web developer with a passion for solving
            problems through simple & interactive
            designs.</h1>
            <p>learn HTML & CSS. Then, I learned basic of UX/UI design, Reactjs and currently, I’m exploring
            music and audio effects on websites.</p>
            </div>
            <button className={`fg ${isOpen ? 'open':''}`} onClick={()=>setisOpen(!isOpen)}>
              skills..
            </button>
            <div className='p-circle'>
            <div className='c-a'>
              <h4>Who I am</h4>
            </div>
          </div>
        </div>

          </div>
      </div>
      <div className='tools'>
        <div className='tool-marquee' >
          <div className='all-tools' ref={clone} >
          {tools.map((toolname)=>
          <div className='t-l'  key={toolname.id}>
            <h1>{toolname.tool}</h1>
            <div className='tool-img'>
              <img src={toolname.icon} alt='broken'></img>
              </div>
          </div>
          )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
