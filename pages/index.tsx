import React from "react";
import { useState, useEffect } from "react";

import NavBar from "../components/NavBar/navbar.component";

const Home = () => {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        window
            .fetch('/api/avo')
            .then(response => response.json())
            .then(({ data, length }) => {
                setProductList(data);
            })
    }, []);

    return (
        <div>
            <NavBar />
            <h1>Hola Platzi</h1>
            {
                productList.map((product) => (
                    <div>
                        <span>{product.name}</span>
                    </div>)
                )
            }
        </div>
    )
}

export default Home;