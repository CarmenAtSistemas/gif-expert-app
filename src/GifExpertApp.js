import { useState } from "react";
import {AgregarCategoria} from "./components/AgregarCategoria"
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['ricky and morty'])

    return(
        <>
        <h2>GiffExpertApp</h2>
        <hr />
        <AgregarCategoria setCategories = {setCategories}/>
        <hr />
        <ul>
            {
                categories.map(cat => 
                   <GifGrid  key={cat} category={cat}/>
                )
            }
        </ul>
        </>
    );
}

export default GifExpertApp;