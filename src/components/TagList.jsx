import React, { useState } from 'react'
import './TagList.css'


function TagList({slNo,links,prefix,tags}) {
    const [selectTag,setSelectedTags]=useState([])
    const tagSelected=(e)=>{
        if(selectTag.indexOf(e.target.value)<0)
        {
            setSelectedTags([...selectTag,e.target.value])
        }
        else{
            console.log("aleready there")
        }
        //
    }

    const removetags=(tagIndex)=>{
        setSelectedTags([...selectTag.slice(0,tagIndex),...selectTag.slice(tagIndex+1)])
    }
  return (
    <div className='flex rounded-[8px] overflow-scroll scrollbar-hide  h-[58px] bg-[#fff] mb-3  items-center  '>
       <div className='min-w-[50px] ml-7 db '>{slNo-1}</div>
              <a target='blank' className='sp links' href={links}>{links}</a>
              <div className='sp db '>{prefix}</div>
              <select 
              className='db  p-1' onChange={(e)=>{tagSelected(e)}} >
                {
                    tags.map((tagd,index)=>{
                        return <option key={index}>{tagd}</option>
                    })
                }
              </select>
              <div className='   flex  ml-[60px]'>

              {
                selectTag?.map((tagse,tgIndex)=>{
                  return <div
                  
                  className='p-3 db tag bg-[#605BFF] m-2'
                   key={tgIndex} >
                    
                    <span className='tagtext db  ' >
                      {tagse}
                      </span>
                   <div
                   onClick={()=>{removetags(tgIndex)}}>
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M5 5L8 8M8 8L5 11M8 8L11 11M8 8L11 5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                   </div>
                   </div>
                })
              }
              </div>
    </div>
  )
}

export default TagList
