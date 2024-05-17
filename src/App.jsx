import { useEffect, useState } from 'react'
import { ContextProducts } from '../Context'
import './App.css'
import Header from './Components/Header'
import MainPage from './Components/MainPage'

// import React Context 


function App() {
    const [Product, setProducts] = useState([]);
    const [Team, setTeams] = useState([]);

    const Products = async ()=>{
        const Res = await fetch('http://localhost:9000/posts')
        const data = await Res.json()

        const Resp = await fetch('http://localhost:9000/Teams')
        const Team = await Resp.json()

        setProducts(data)
        setTeams(Team)
    }


    useEffect(() => {
        Products()
    },[])

    

    return (
        <>
            <ContextProducts.Provider value={{Product , setProducts , Team}} >
                <div className="componentes relative">
                    <Header />
                    <MainPage/>
                </div>
            </ContextProducts.Provider>

        </>
    )
}

export default App
