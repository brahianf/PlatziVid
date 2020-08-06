import React from 'react'

const CarouselItem =  () => (
    <div className="carousel__item">
        <img className="carousel-item__img" src="https://images.pexels.com/photos/4348226/pexels-photo-4348226.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
        <div className="carousel-item__details">
            <div>
                <img src="https://img.icons8.com/flat_round/64/000000/play--v1.png"/>
                <img src="https://img.icons8.com/flat_round/64/000000/plus.png"/>
            </div>
            <p className="carousel-item__details--title">Título Desc</p>
            <p className="carousel-item__details--subtitle">2019 16+</p>
        </div>
    </div>
)

export default CarouselItem;