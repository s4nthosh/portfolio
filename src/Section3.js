import {useRef,useEffect} from 'react'
import { gsap } from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {FaArrowRight} from 'react-icons/fa'

gsap.registerPlugin(ScrollTrigger);

const Section3 = ({handleClick}) => {
    const ball = useRef()
    const text = useRef()

    useEffect(()=>{
        gsap.fromTo(ball.current,{ scale:0,duration:1 },{scale:1,duration:1,scrollTrigger:{
            trigger:ball.current,
            start:'top 100%',
            scrub:true
        }})
        gsap.fromTo(text.current,{ opacity:0,y:-50,duration:1 },{opacity:1,y:0,duration:1,scrollTrigger:{
            trigger:ball.current,
            start:'top 40%',
            scrub:true

        }})
    })

  return (
    <section className='third-container'>
        <div className='third-wrapper'>
            <div className='ball' ref={ball}>
                <div className='tag'>
                    <p>What I Offer</p>
                </div>
            </div>
            <div className='third-disc'>
                    <div className='third-detail' ref={text}>
                        <h1>
                        Delivering modern<span>, </span>
                        cohesive <span>&</span> intuitive
                        web solutions<span>.</span>
                        </h1>
                        <p>I enjoy designing meaningful experiences for brands &
                        businesses to help them serve their target users.</p>
                        <button className='go-to-about' onClick={()=>handleClick('/about')}>About me<span><FaArrowRight/></span></button>
                    </div>
                    <div className='third-detail'>
                        <div className='square'>
                    
                            <h1>Design</h1>
                    
 
                        </div>
                        <div className='square'>
                        
                            <h1>Development</h1>
                            
                        </div>
                        <div className='square'>
                            
                            <h1>Design & Dev</h1>
                            
                            
                        </div>
                    </div>

                </div>
        </div>
    </section>
  )
}

export default Section3
