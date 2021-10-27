import React from "react";
import { Link } from "react-router-dom";
export default function Button({ isActive, children, handleCLick, index, path}) {
  return (
    <Link
      className={`button ${isActive ? 'active' : ''}`}
      onClick={() => handleCLick(index)}
      to={path}
    >
      {children}
    </Link>
  )
}
