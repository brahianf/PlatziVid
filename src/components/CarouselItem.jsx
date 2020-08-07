import React from 'react'

import playIcon from '../assets/static/play-icon.png'
import plusIcon from '../assets/static/plus-icon.png'

const CarouselItem =  ({cover, title, year, contentRating, duration}) => (
    <div className="carousel__item">
        <img className="carousel-item__img" src={cover} alt={title}/>
        <div className="carousel-item__details">
            <div>
                <img src={playIcon}/>
                <img src={plusIcon}/>
            </div>
            <p className="carousel-item__details--title">{title}</p>
            <p className="carousel-item__details--subtitle">
                {`${year} ${contentRating} ${duration}`}
            </p>
        </div>
    </div>
)

export default CarouselItem;