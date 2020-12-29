import React, { useRef } from 'react'
import LoadingBar from 'react-top-loading-bar'
 
const App = () => {
  const ref = useRef(null)
 
  return (
    <div>
      <LoadingBar color='#e79413' ref={ref} />
      <button onClick={() => ref.current.continuousStart()}>
        Start Continuous Loading Bar
      </button>
      <button onClick={() => ref.current.staticStart()}>
        Start Static Loading Bar
      </button>
      <button onClick={() => ref.current.complete()}>Complete</button>
      <br />
    </div>
  )
}
 
export default App