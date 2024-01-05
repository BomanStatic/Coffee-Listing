import React from "react";
import FilledStar from "../../public/Star_fill.svg";

function CoffeeCard({ coffee }) {
    return (
        <article className="coffee-card fade-in">
            <img className="coffee-card__img" src={coffee.image} alt={coffee.name} />
            {coffee.popular ? <span className="coffee-card__popular">Popular</span> : ""}
            <div className="coffee-card__wrapper--upper">
                <h2 className="coffee-card__title">{coffee.name}</h2>
                <p className="coffee-card__price">{coffee.price}</p>
            </div>
            <div className="coffee-card__wrapper--lower">
                <img src={FilledStar} alt="" />
                <p>
                    {coffee.rating} <span className="text-light-gray">{coffee.votes > 0 ? `(${coffee.votes} votes)` : "No rating"}</span>
                </p>
                {coffee.available ? "" : <p className="coffee-card__sold-out">Sold out</p>}
            </div>
        </article>
    );
}

export default CoffeeCard;
