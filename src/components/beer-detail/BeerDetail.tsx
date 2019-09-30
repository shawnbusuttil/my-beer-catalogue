import React, { FC } from "react";

import { Beer } from "../../models/Beer";

import "./BeerDetail.scss";

const BeerDetail: FC<{ beer: Beer }> = (props) => {
    return (
        <div className="beer-detail">
            <div className="beer-detail-info">
                <h2 className="beer-detail-info-name" data-testid="beer-detail-name">{props.beer.name}</h2>
                <p className="beer-detail-info-tagline italicize" data-testid="beer-detail-tagline">{props.beer.tagline}</p>
                <p className="beer-detail-info-volume" data-testid="beer-detail-volume">Alcohol: {props.beer.volume.value}% ABV</p>

                <p className="beer-detail-info-description" data-testid="beer-detail-desc">{props.beer.description}</p>
                <p className="beer-detail-info-brewed" data-testid="beer-detail-brewed">First brewed on: {props.beer.first_brewed}</p>
                <p className="beer-detail-info-pairings" data-testid="beer-detail-pairings">Goes great with: <span className="capitalize italicize">{props.beer.food_pairing.join(", ")}</span></p>
            </div>

            <img className="beer-detail-image" data-testid="beer-detail-image" alt={props.beer.name} src={props.beer.image_url} />
        </div>
    )
}

export default BeerDetail;