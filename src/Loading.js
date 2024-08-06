import React from 'react'

const Loading = () => {
  return (
    <div className='loading'>
      <div className='loadingscreen'>
        <div className='load-con'>
          <div className='video'>
            <video src='asserts/rotine.mp4' loop muted autoPlay></video>
          </div>
          <h1>loading...</h1>
        </div>
      </div>
    </div>
  )
}

export default Loading
