import React, { FC, Fragment } from "react";
import { RouteComponentProps } from "react-router-dom";

import useBeerCatalogueService from "services/BeerCatalogue";

import BeerItem from "../beer-item/BeerItem";
import BeerDetail from "../beer-detail/BeerDetail";
import Modal from "../modal/Modal";
import Spinner from "../spinner/Spinner";

import "./BeerCatalogue.scss";

interface BeerCatalogueParams {
    id?: string;
}

const BeerCatalogue: FC<RouteComponentProps<BeerCatalogueParams>> = (props) => {
    const state = useBeerCatalogueService();
    const closeDetailedView = () => props.history.goBack();

    let beerView = state.isBusy ? <Spinner data-testid="spinner" /> : <p>The keg is empty at this time. Please try again later.</p>;

    let modal = null;

    if (state.data && state.data.payload) {
        beerView = <div className="beer-catalogue" data-testid="beer-items">
            {state.data.payload.map(item => <BeerItem key={item.id} beer={item} />)}
        </div>;

        modal = props.match.params.id && <Modal dismiss={closeDetailedView}>
            <BeerDetail beer={state.data.payload[+props.match.params.id - 1]} />
        </Modal>;
    }

    return (<Fragment>
        {beerView}
        {modal}
    </Fragment>);
}

export default BeerCatalogue;