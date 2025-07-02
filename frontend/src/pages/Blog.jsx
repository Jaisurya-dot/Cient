import React from 'react'
import BlogLayout from '../component/Blog1'

const Blog = () => {
  return (
    <div>
      
      <div className="flex flex-col md:flex-row items-center justify-center py-8 bg-[#f8f9fb]">
        {/* Left line and purple block */}
        <div className="flex items-center flex-1 max-w-[180px] md:max-w-[300px] w-full gap-2 mb-4 md:mb-0">
          <div className="h-0.5 bg-[#23184b] flex-1"></div>
          <div className="h-4 bg-[#6d4cff] w-12 md:w-20 rounded-bl-2xl rounded-tr-2xl"></div>
        </div>
        {/* Center heading */}
        <h2 className="mx-0 md:mx-6 text-3xl md:text-5xl font-extrabold text-[#23184b] text-center mb-4 md:mb-0">
          Blog
        </h2>
        {/* Right purple block and line */}
        <div className="flex items-center flex-1 max-w-[180px] md:max-w-[300px] w-full gap-2">
          <div className="h-4 bg-[#6d4cff] w-12 md:w-20 rounded-bl-2xl rounded-tr-2xl"></div>
          <div className="h-0.5 bg-[#23184b] flex-1"></div>
        </div>
      </div>

      <BlogLayout  />

    </div>
  )
}

export default Blog
