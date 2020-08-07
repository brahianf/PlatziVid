import React from 'react'

import playIcon from '../assets/static/play-icon.png'
import plusIcon from '../assets/static/plus-icon.png'

const CarouselItem =  () => (
    <div className="carousel__item">
        <img className="carousel-item__img" src="https://images.pexels.com/photos/4348226/pexels-photo-4348226.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
        <div className="carousel-item__details">
            <div>
                <img src={playIcon}/>
                <img src={plusIcon}/>
            </div>
            <p className="carousel-item__details--title">Título Desc</p>
            <p className="carousel-item__details--subtitle">2019 16+</p>
        </div>
    </div>
)

export default CarouselItem;