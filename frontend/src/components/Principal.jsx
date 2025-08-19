import React from 'react'
import { Link } from 'react-router-dom'

export default function Principal() {
  return (
    <>
        <h1 className='mb-5'>Anthony´s Garage</h1>
        <Link className='btn btn-primary' to='/cargar'>Cargar productos</Link>  
    </>
  )
}
