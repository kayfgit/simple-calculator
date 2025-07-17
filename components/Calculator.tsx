'use client'

import { useState } from 'react'

function Calculator() {
  const [input, setInput] = useState("")

  const handleClick = (value: string) => {
    if (value === "=") {
      try {
        setInput(eval(input).toString())
      } catch {
        setInput("Error")
      }
    } else {
      setInput((prev) => prev + value)
    }
  }

  const handleClear = () => setInput("")

  return (
    <div className='backdrop-blur-xl border-2 border-zinc-900 rounded-xl h-155 w-100 z-999 shadow-sm flex justify-center items-center flex-col'>
      <div className=' w-full flex justify-center items-center'>
        <div className='text-white border-zinc-800 border-1 w-full mx-2 h-25 rounded-xl flex justify-end items-center text-4xl p-3 overflow-auto'>
          {input || "0"}
        </div>
      </div>

      <div className='w-100 h-125 grid grid-cols-4 grid-rows-4 justify-center items-center p-2'>
        <div className='justify-center items-center w-full h-25 col-span-5 grid grid-cols-4 gap-2 p-2'>
          <div onClick={handleClear} className='select-none hover:border-1 hover:border-zinc-800 border-zinc-900 border-1 hover:rounded-xl duration-300 cursor-pointer hover:scale-102 flex justify-center items-center rounded-xl  w-full h-20 col-span-2'>
            <span className='text-3xl font-bold text-red-500'>
              Clear
            </span>
          </div>
          <div key={'='} onClick={() => handleClick('=')} className='select-none hover:border-1 hover:border-zinc-800 border-zinc-900 border-1 hover:rounded-xl duration-300 cursor-pointer hover:scale-105 flex justify-center items-center rounded-xl  w-full h-20 col-span-2'>
            <span className='text-4xl font-bold text-white'>
              Enter
            </span>
          </div>
        </div>
        <div className='select-none p-2 items-center w-full h-full row-span-3 col-span-3 grid grid-cols-3 grid-rows-4 gap-2'>
          <div key={7} onClick={() => handleClick('7')} className=' hover:border-1 hover:border-zinc-800 hover:rounded-xl duration-300 cursor-pointer hover:scale-105 flex justify-center items-center rounded-xl  w-22 h-22 col-span-1'>
            <span className='text-4xl font-bold text-white'>
              7
            </span>
          </div>
          <div key={8} onClick={() => handleClick('8')} className=' hover:border-1 hover:border-zinc-800 hover:rounded-xl duration-300 cursor-pointer hover:scale-105 flex justify-center items-center rounded-xl  w-22 h-22 col-span-1'>
            <span className='text-4xl font-bold text-white'>
              8
            </span>
          </div>
          <div key={9} onClick={() => handleClick('9')} className=' hover:border-1 hover:border-zinc-800 hover:rounded-xl duration-300 cursor-pointer hover:scale-105 flex justify-center items-center rounded-xl  w-22 h-22 col-span-1'>
            <span className='text-4xl font-bold text-white'>
              9
            </span>
          </div>
          <div key={4} onClick={() => handleClick('4')} className=' hover:border-1 hover:border-zinc-800 hover:rounded-xl duration-300 cursor-pointer hover:scale-105 flex justify-center items-center rounded-xl  w-22 h-22 col-span-1'>
            <span className='text-4xl font-bold text-white'>
              4
            </span>
          </div>
          <div key={5} onClick={() => handleClick('5')} className=' hover:border-1 hover:border-zinc-800 hover:rounded-xl duration-300 cursor-pointer hover:scale-105 flex justify-center items-center rounded-xl  w-22 h-22 col-span-1'>
            <span className='text-4xl font-bold text-white'>
              5
            </span>
          </div>
          <div key={6} onClick={() => handleClick('6')} className=' hover:border-1 hover:border-zinc-800 hover:rounded-xl duration-300 cursor-pointer hover:scale-105 flex justify-center items-center rounded-xl  w-22 h-22 col-span-1'>
            <span className='text-4xl font-bold text-white'>
              6
            </span>
          </div>
          <div key={1} onClick={() => handleClick('1')} className=' hover:border-1 hover:border-zinc-800 hover:rounded-xl duration-300 cursor-pointer hover:scale-105 flex justify-center items-center rounded-xl  w-22 h-22 col-span-1'>
            <span className='text-4xl font-bold text-white'>
              1
            </span>
          </div>
          <div key={2} onClick={() => handleClick('2')} className=' hover:border-1 hover:border-zinc-800 hover:rounded-xl duration-300 cursor-pointer hover:scale-105 flex justify-center items-center rounded-xl  w-22 h-22 col-span-1'>
            <span className='text-4xl font-bold text-white'>
              2
            </span>
          </div>
          <div key={3} onClick={() => handleClick('3')} className=' hover:border-1 hover:border-zinc-800 hover:rounded-xl duration-300 cursor-pointer hover:scale-105 flex justify-center items-center rounded-xl  w-22 h-22 col-span-1'>
            <span className='text-4xl font-bold text-white'>
              3
            </span>
          </div>
          <div key={0} onClick={() => handleClick('0')} className=' hover:border-1 hover:border-zinc-800 hover:rounded-xl hover:scale-105 duration-300 cursor-pointer flex justify-center items-center rounded-xl  w-full h-full col-span-2'>
            <span className='text-4xl font-bold text-white'>
              0
            </span>
          </div>
          <div key={'.'} onClick={() => handleClick('.')} className=' hover:border-1 hover:border-zinc-800 hover:rounded-xl hover:scale-105 duration-300 cursor-pointer flex justify-center items-center rounded-xl  w-full h-full col-span-1'>
            <span className='text-4xl font-bold text-white'>
              .
            </span>
          </div>
        </div>
        <div className='select-none justify-center items-center w-full h-full row-span-3 col-span-1 grid grid-col-2 grid-rows-4 p-1'>
          <div key={'/'} onClick={() => handleClick('/')} className='hover:scale-105 hover:border-1 hover:border-zinc-900 cursor-pointer duration-300 w-20 h-20  rounded-xl flex justify-center items-center'>
            <span className='text-4xl font-bold text-white'>
              ÷
            </span>
          </div>
          <div key={'*'} onClick={() => handleClick('*')} className='hover:scale-105 hover:border-1 hover:border-zinc-900 cursor-pointer duration-300 w-20 h-20  rounded-xl flex justify-center items-center'>
            <span className='text-4xl font-bold text-white'>
              x
            </span>
          </div>
          <div key={'-'} onClick={() => handleClick('-')} className='hover:scale-105 hover:border-1 hover:border-zinc-900 cursor-pointer duration-300 w-20 h-20  rounded-xl flex justify-center items-center'>
            <span className='text-4xl font-bold text-white'>
              -
            </span>
          </div>
          <button key={'+'} onClick={() => handleClick('+')} className='hover:scale-105 hover:border-1 hover:border-zinc-900 cursor-pointer duration-300 w-20 h-20  rounded-xl flex justify-center items-center'>
            <span className='text-4xl font-bold text-white'>
              +
            </span>
          </button>
        </div>
      </div>
    </div>
  )

}

export default Calculator
