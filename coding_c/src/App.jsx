import { useState } from 'react';
import Image from './image.jsx'

function App() {
  const [color, setColor] = useState("gray");

  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <div className="relative flex flex-wrap px-0 py-25">
        <div className="relative w-screen flex items-center px-11 py-10 bg-white shadow-lg">
          <Image/>
          
          <span className="absolute right-32 text" style={{ color: "#666666" }}>
            Signed in as
          </span>
          <button className="absolute right-4 top-1/2 transform -translate-y-1/2 px-4 py-2 text-white rounded-xl uppercase shadow-md"
            style={{ backgroundColor: "#333333" }}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
