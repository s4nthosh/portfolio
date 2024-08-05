import React from 'react'

const Footer = () => {
  const today = new Date()
  return (
    <footer>
      <div className='cont'>
      <h1>Have a project in mind?</h1>
      <p>Reach out for collaboration or say hi at</p>
      <div className='mail'>
        <a href='mailto:santhoshshr43@gmail.com'><span>santhoshshr43@gmail.com</span></a>
      </div>
      <h5>copyrights&copy;{today.getFullYear()}</h5>
      </div>
    </footer>
  )
}

export default Footer
