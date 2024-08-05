import React from 'react'

const Image = () => {
  return (
    <>
    <img 
            src="https://creativereview.imgix.net/content/uploads/2011/03/logo_square_dbb_01.jpg?auto=compress,format&q=60&w=460&h=460" 
            alt="logo" 
            className="h-20 w-20 mr-4"
          />
          <span className="text-3xl font-bold uppercase" style={{ color: "#333333" }}>
            Deutsche Bank
          </span>
   </>
  )
}

export default Image