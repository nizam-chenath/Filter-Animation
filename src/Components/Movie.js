import React from 'react'
import { motion } from 'framer-motion'


function Movie({movie}) {
  return (
    <motion.div 
    animate={{ opacity: 1, scale: 1 }}
    initial={{ opacity: 0, scale:0 }}
    exit={{ opacity: 0 , scale:0 }}
    layout>
        <h2>{movie.Title}</h2>
        <img src={movie.Poster} alt="poster" />
    </motion.div>
  )
}

export default Movie