import React from "react"

const Tagline = ({ text, secondText }) => {
  return (
    <div className="tagline">
      <p className="tag text-light bold">{text}</p>
      <p className="tag text-light">{secondText}</p>
    </div>
  )
}

export default Tagline
