import React from 'react';
import './CardItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'



// carditem function
const CardItem = (props) => {

    //font awesome stored in a variable
    const musicIcon = <FontAwesomeIcon icon={faMusic} />
    
    // destructuring object
    const {name, age, img, birth, country, salary, gender} = props.singer
    return (
        <div className="col-4 g-4">
            
            {/* card img and text part */}
            <div className="card p-2 h-100 carditem__bg--color shadow-sm">
                <img className="rounded-circle carditem__img" src={img} alt="singer" />
                <div className="p-2">
                    <p><b>Name:</b> {name}</p>
                    <p><b>Birth:</b> {birth}</p>
                    <p><b>Age:</b> {age}</p>
                    <p><b>Gender:</b> {gender}</p>
                    <p><b>Salary:</b> ${salary}</p>
                    <p><b>Country:</b> {country}</p>
                </div>
                
                {/* card button part */}
                <div className="text-center mb-1">
                <button className="btn carditem__btn--color" onClick={() => props.handleButton(props.singer)}>{musicIcon} Add To Cart</button>
                </div>
                
            </div>

        </div>
    );
};



export default CardItem;