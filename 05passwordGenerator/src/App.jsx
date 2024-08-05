import { useState,useCallback,useEffect,useRef} from 'react'
//useref: kisi bhi cheez ko reference dene ke liye
//iski need esliye pdi kyuki hme password copy krna hoga 
//to the clipboard 

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed,setNumberAllowed]=useState(false)

  const [charAllowed,setCharAllowed]=useState(false)
  const[password,setPassword]=useState("")
 
  //useref hook
 const passwordRef= useRef(null)
//use callback memoziation ke liye use kr re jo bhi changes ho re sbk
//sbko cache me rkh do
  const passwordGenerator= useCallback(()=>{
    let pass=""
    let str=
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed)
       str+= "0123456789"
    
    if(charAllowed)
        str+="!@#$%^&*-_+=[]{}~`"

    for (let i=1;i<=length;i++)
    {
      let char=Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char);
    }

    setPassword(pass)

  },[length,numberAllowed,charAllowed,setPassword] )

  const copyPasswordToClipboard = useCallback(()=>{

      //yha password ref use krenge jisse pta chlega current object h ya nhi hai
      //etc etc
      passwordRef.current?.select()
      passwordRef.currebt?.setLength(0,999)
      window.navigator.clipboard.writeText(password)
  },[password])

  //changes hone ke baad re ender kro jitni baar ho ra ho
 useEffect(()=>{
  passwordGenerator()
 },[length,numberAllowed,charAllowed,passwordGenerator])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-5 py-8
       text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center font-sans'>Password Generator</h1>
        <div className="flex  shadow rounded-lg overflow-hidden mb-5 ">
          <input 
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={passwordRef}
          />
          <button onClick={copyPasswordToClipboard}
          className='outline-none text-white px-3 py-0.5 shrink-0  bg-blue-600'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
           <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e)=>{setLength(e.target.value)}}        
           />
           <label>Length:{length}</label>
            
          </div>
          <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input
              type="checkbox"
               defaultChecked={numberAllowed}
               id="numberInput"
               onChange={()=>{
                setNumberAllowed((prev)=>!prev);
               }}
              />
              <label
                htmlFor="numberInput">
                Numbers
              </label> 
            </div>

            <div className='flex items-center gap-x-1'>
              <input
                type="checkbox"
                defaultChecked={charAllowed}
                id="characterInput"
                onChange={()=>{
                  setCharAllowed((prev)=>!prev);
                }}
              />
              <label 
                htmlFor="characterInput">Characters
              </label>
            </div>
          </div>

        </div>

       </div>
    </>
  )
}

export default App

