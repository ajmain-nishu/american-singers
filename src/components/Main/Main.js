import React, { useEffect, useState } from 'react';
import CardItem from '../CardItem/CardItem';
import Cart from '../Cart/Cart';



//main function component
const Main = () => {

    //usestate hook
    const [singers, setSingers] = useState([])
    const [cart, setCart] = useState([])

    //api called using side effect
    useEffect(() => {
        fetch('./singerdata.JSON')
        .then(res => res.json())
        .then(data => setSingers(data))
    }, [])

    //handlebutton fuction
    const handleButton = (singer) => {
        const newCart = [...cart, singer]
        setCart(newCart)
    }

    return (
        <div>

            <div className="row pb-5">

                {/* CardItem component call and pass data */}
                <div className="col-md-9 col-sm-7 col-12">
                    <div className="row">
                    {
                    singers.map(singer => <CardItem key={singer.id} singer={singer} handleButton={handleButton}></CardItem>)
                    }
                    </div>
                    
                </div>

                {/* cart component call and passing data*/}
                <div className="col-md-3 col-sm-5 col-12">
                    <Cart cart={cart}></Cart>
                </div>

            </div>
            
        </div>
    );
};



export default Main;