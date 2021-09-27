import * as React from "react"

const CallToAction = ({ children }) => {

  const handleClick = () => {
    console.log('Clicked!');
  }

  return (
    <button type="button" className="ads-cta" onClick={handleClick}>
      {children}
    </button>
  )
}

export default CallToAction
