import {useRef,useEffect} from 'react'
import { gsap } from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const Project = ({datas}) => {

  const con = useRef()
  const text =  useRef()
  con.current =[]
  const link = useRef()

  const addtoref=(el)=>{
    if(el&& !con.current.includes(el)){
      con.current.push(el);
    }
  }

  useEffect(()=>{
    const t1 = gsap.timeline();
    con.current.forEach((box)=>{
      gsap.fromTo(box,{opacity:0,y:50},{opacity:1,y:0,scrollTrigger:{
        trigger:box,
        start:'top 60%',
        end:'top 50%',
        scrub:true
    
      }})
    })
    t1.to(text.current,{y:0,opacity:1,duration:1,transition:1})
    t1.fromTo(link.current,{y:'-150px',opacity:0,duration:1},{y:0,opacity:1,scrollTrigger:{
      trigger:link.current,
      start:'top 120%',
      scrub:true,
    }})
  })

  return (
<section className='second-container'>
  <h1 className='project-title' ref={text}>Projects</h1>
        <div className='cards'>
        {datas.map((data=>
            <div className='container' ref={addtoref} key={data.id}>
              <a href={data.data}>
                <div className='thumbnail'>
                    <img src={data.thumbnail} alt='broken'></img>
                </div>
                <h3>{data.name}</h3>
                </a>
            </div>
            ))}
        </div>
        <div className='project-for-more'>
              <a ref={link} href='https://github.com/s4nthosh'>for-more-visit..</a>
        </div>
    </section>
  )
}

export default Project
