import React from 'react'

const FruitsCard = ({fruit}) => {
  return (
    <div className=' rounded-xl overflow-hidden shadow-lg transform hover:scale-110 duration-100 relative group'>
        <img src={require(`../assets/${fruit.image}.jpeg`)} alt={`${fruit.image}`} className=' w-full h-52 object-cover' />
  <div className='flex flex-col items-center my-1  space-y-1'>
    <span className='font-body text-slate-500 block'>{fruit.name}</span>
    <span className='font-body text-slate-500 block'>₹{fruit.price}</span>
    <span className='font-body  block uppercase text-lime-400 text-xs invisible group-hover:visible '>Add to cart</span>
  </div>
  <span className=' absolute top-3 right-3 bg-sky-300 text-white  border-sky-300 p-1 rounded-lg text-sm'>1% off</span>

    </div>
  )
}

export default FruitsCard