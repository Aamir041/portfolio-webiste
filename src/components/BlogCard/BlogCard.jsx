import React from 'react'
import "./BlogCard.css"
export default function BlogCard() {

  const blog = {__html:`<h1 id="sample-markdown">Sample Markdown</h1> <p>This is some basic, sample markdown.</p> <h2 id="second-heading">Second Heading</h2> <ul> <li>Unordered lists, and:<ol> <li>One</li> <li>Two</li> <li>Three</li> </ol> </li> <li>More</li> </ul> <blockquote> <p>Blockquote</p> </blockquote> <p>And <strong>bold</strong>, <em>italics</em>, and even <em>italics and later <strong>bold</strong></em>. Even <del>strikethrough</del>. <a href="https://markdowntohtml.com">A link</a> to somewhere.</p>  <p>Or an image of bear</p> <p><img src="http://placebear.com/200/200" alt="bears"></p> <p>The end ...</p>`}



  return (
    <div className='blog-card'>
      <h1 className='blog-title'>Simple HTML be like</h1>
      <p className='blog-date'><em></em>14-07-2024</p>
      <div className='blog-content' dangerouslySetInnerHTML={blog} />
    </div>
  )
}
