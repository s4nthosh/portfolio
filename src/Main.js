
import Section from './Section'
import Section2 from './Section2'
import Section3 from './Section3'


const Main = ({links,datas,handleClick}) => {
  

  return (
    <main className='main-content'>
        <Section links={links}/>
        <Section2 datas={datas} handleClick={handleClick}/>
        <Section3 handleClick={handleClick}></Section3>
    </main>
  )
}

export default Main
