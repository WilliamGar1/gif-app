import { useState } from "react";
import React from 'react'

import { AddCategory, GifGrid } from "./components";

export const GifApp = () => {

  const [categories, setCategories] = useState( [ 'One Punch' ] );


  const onAddCategory = ( newCategory ) => {

    if( categories.includes(newCategory) ) return;

    setCategories( [newCategory, ...categories] );
  }

  return ( 
    <>

        <h1>GifExpertApp</h1>

        <AddCategory 
          onNewCategory = { onAddCategory }
        />

        { categories.map( ( c ) => (

              <GifGrid
                key = { c } category = { c }
              />
          
            )
          )
        }
        
    </>
  )
}

// api_key=tWcNPABQhrxv6G1HdninSDtJpA79SozL