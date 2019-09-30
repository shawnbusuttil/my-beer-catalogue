import React, { FC } from "react";
import { NavLink } from "react-router-dom";

import { Beer } from "../../models/Beer";

import "./BeerItem.scss";

const BeerItem: FC<{ beer: Beer }> = (props) => {
    return <div className="beer-item">
        <NavLink className="beer-item-content" to={{ pathname: `/${props.beer.id}`, state: { modal: true} }}>
            <img alt={props.beer.name} src={props.beer.image_url} data-testid="beer-item-img" />
            <p className="beer-item-content-name" data-testid="beer-item-name" >{props.beer.name}</p>
            <p className="beer-item-content-tagline italicize" data-testid="beer-item-tagline" >{props.beer.tagline}</p>
            <p className="beer-item-content-volume" data-testid="beer-item-volume" >Vol. {props.beer.volume.value}% per {props.beer.volume.unit}</p>
        </NavLink>
    </div>
}

export default BeerItem;