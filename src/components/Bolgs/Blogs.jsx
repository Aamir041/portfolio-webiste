import React from 'react'
import "./Bolgs.css";
import { useNavigate } from 'react-router';

export default function Blogs() {
  const navigate = useNavigate();
  const blogs = [
    {title: "Temp Blog", id:"1"},
  ]

  return (
    <div className='blogs'>
      {
        blogs.map(ele => {
          return(
            <div className='blog' onClick={() => navigate(`/blog/${ele.id}`)} >
              {ele.title}
            </div>
          )
        })
      }
    </div>
  )
}
