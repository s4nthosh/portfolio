import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FaArrowRight } from 'react-icons/fa'

gsap.registerPlugin(ScrollTrigger);

const Section2 = ({ datas, handleClick }) => {

  const con = useRef()
  con.current = []

  const addtoref = (el) => {
    if (el && !con.current.includes(el)) {
      con.current.push(el);
    }
  }
  useEffect(() => {

    con.current.forEach((box) => {
      gsap.fromTo(box, { opacity: 0, y: 50 }, {
        opacity: 1, y: 0, scrollTrigger: {
          trigger: box,
          start: 'top 80%',
          end: 'top 70%',
          scrub: true

        }
      })
    })

  })

  return (
    <section className='second-container'>
      <div className='cards'>
        {datas.map((data =>
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
      <div className='btn'>
        <button onClick={() => { handleClick('/project') }}>For-More<span><FaArrowRight /></span></button>
      </div>
    </section>
  )
}

export default Section2
