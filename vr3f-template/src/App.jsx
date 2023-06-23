import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Canvas} from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Canvas>
        <OrbitControls/>
        <pointLight intensity={0.9}/>
        <ambientLight intensity={0.7}/>
        <mesh>
          <boxGeometry/>
          <meshStandardMaterial color='white'/>
        </mesh>
      </Canvas>
    </>
  )
}

export default App
