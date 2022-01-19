import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import {GifGrid} from './components/GifGrid';

export const GifExpertApp = () => {


    const [categories, setCategories] = useState(['One Punch']);
     // agregar un nuevo nombre 
   
             // const handleAdd=()=>{
            // siempre debemos usar el setcatergories para agreegar uno nuevo 
             //setCategories([...categories,'HunterXHunter']);
   return (
       <>
     <h2> GifExpertApp  </h2>  
           <AddCategory setCategories={setCategories} />
            <hr />

            
            <ol>
            {
                categories.map( category => (
                <GifGrid 
                key={category}
                category = {category}
                   />
                  
                 ) )
// no se debe hacer key para direccionar es mejor hacer de esa manera en category    
            }
              
            </ol>
        </>
    );
};
