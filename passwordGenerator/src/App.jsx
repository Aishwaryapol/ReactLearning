import { useEffect ,useRef} from 'react'
import { useState, useCallback } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [specialCharacterAllowed, setSpecialCharacterAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const passwordGenerator = useCallback(() => {
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    let number = '0123456789'
    let specialCharacter = '!@#$%^&*()_+'

    if (numberAllowed) str += number
    if (specialCharacterAllowed) str += specialCharacter

    let generatedPassword = ''
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * str.length)
      generatedPassword += str.charAt(randomIndex)

    }
    setPassword(generatedPassword)
  }, [length, numberAllowed, specialCharacterAllowed])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, specialCharacterAllowed, passwordGenerator])

  const passwordRef = useRef(null)
  const handleCopy = useCallback(() => {
   passwordRef.current?.select();
     
    navigator.clipboard.writeText(password).then(() => {
     
    }).catch((err) => {
      console.error('Could not copy text: ', err)
    })
   
  },[password])

  return (
    <>
      <div className="container m-8 mx-auto p-6 max-w-md rounded-lg shadow-lg bg-gray-800 text-orange-500">
        <h1 className="text-white text-center text-xl font-semibold mb-4">Password Generator</h1>
        <div className="flex items-center shadow-inner rounded-lg overflow-hidden bg-gray-700 p-2 mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-2 px-3 bg-white"
            placeholder="Password"
            readOnly
          />
          <button
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-orange-600 transition duration-300 ml-2"
            ref={passwordRef}
            onClick={handleCopy}
          >
            Copy
          </button>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg">
          <div className="flex items-center mb-4">
            <input type="range"
              min={6}
              max={40}
              value={length}
              className="cursor-pointer w-full"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label className="ml-4 text-white">Length: {length}</label>
          </div>
          <div className="flex items-center mb-4">
            <input type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              className="mr-2"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label className="text-white" htmlFor="numberInput">Number</label>
          </div>
          <div className="flex items-center">
            <input type="checkbox"
              defaultChecked={specialCharacterAllowed}
              id="characterInput"
              className="mr-2"
              onChange={() => {
                setSpecialCharacterAllowed((prev) => !prev);
              }}
            />
            <label className="text-white" htmlFor="characterInput">Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
