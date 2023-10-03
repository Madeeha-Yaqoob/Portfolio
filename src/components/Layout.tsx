import React from 'react'

const Layout = (props:{children:any,className?:any}) => {
  return (
    <div className={`w-full h-full inline-block z-0 bg-white p-32 dark:bg-black   ${props.className}`}>{props.children}</div>
  )
}

export default Layout