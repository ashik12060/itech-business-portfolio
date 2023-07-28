import React from 'react'

const Product = (props) => {
  console.log(props)
  return (
    <div className="">

      <div className="max-w-sm rounded overflow-hidden shadow-xl h-5/6 gap-2  mx-auto">
        <img className="w-full h-2/5 border-2 border-gray pt-2" src={props.image} alt="Sunset in the mountains"/>
          <div className="px-6 py-4">
            <h2><span className="text-[#ff5e14] text-lg font-semibold">Title: </span>{props.title}</h2>
          <h4><span className="text-[#ff5e14] text-lg font-semibold">Catagory: </span>{props.category}</h4>
          <p><span className="text-[#ff5e14] text-lg font-semibold">Price: </span>{props.price}</p>
          </div>
      </div>

    </div>
  )
}

export default Product;