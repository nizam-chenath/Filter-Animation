import React from 'react'
import { useState, useEffect} from 'react'
import Movie from './Movie';
import './Home.css'
import Filter from './Filter';
import { motion, AnimatePresence } from "framer-motion"

function Home() {

    const [popular, setPopular] = useState([]);
    const [filtered, setFiltered] = useState([]);
    

    useEffect(()=>{
        fetchPopular();
    },[]);

    const fetchPopular = async()=>{
        const data = await fetch(' http://www.omdbapi.com/?s=spider&apikey=e2fae478');
        const movies = await data.json();
        console.log(movies.Search)
        setPopular(movies.Search)
        setFiltered(movies.Search)
    }
    const maxSize= 9 ;
  return (
    <div className="main">
        <Filter popular={popular} setFiltered={setFiltered}/>
        <motion.div 
       
         layout 
         className="movies">
             <AnimatePresence>
            
            {popular.map((movie, index) => {
                if( index < maxSize){

                    return(
                      
                        <Movie key={movie.poster} movie={movie}/>
                   
                    )
                }
            })}

             </AnimatePresence>
        </motion.div>
    </div>
  )
}

export default Home