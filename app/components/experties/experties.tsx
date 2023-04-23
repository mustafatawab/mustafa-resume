import React from 'react'

const Experties = ({date, topic, subTopic, details}:any) => {
  return (
    <div className='hover:-translate-y-5 duration-300 flex bg-black p-5 rounded-2xl shadow-xl flex-col space-y-3'>
        <span className='p-1  bg-green-700 block w-[130px] rounded-xl text-center font-semibold'>{date}</span>
        <h1 className='text-2xl font-bold'>{topic}</h1>
        <p className='text-green-500 font-semibold'>{subTopic}</p>
        <p>{details}</p>

    </div>
  )
}

export default Experties