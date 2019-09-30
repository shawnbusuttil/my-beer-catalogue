import React, { FC, Fragment, useEffect, useState } from "react";

import Backdrop from "../backdrop/Backdrop";

import "./Modal.scss";

// can be moved to a separate utils folder
const useDelayedToggleHook = () => {
	const [state, setState] = useState(false);
	
	useEffect(() => {
		const delay = setTimeout(() => {
			setState(true);
		});
		
		return () => clearTimeout(delay);
	}, []);
	
	return state;
}

interface ModalProps {
	dismiss?: () => void;
}

const Modal: FC<ModalProps> = (props) => {
	const isShowing = useDelayedToggleHook();

	return <Fragment>
		<Backdrop clicked={props.dismiss} />
		<div className={["modal", isShowing && "open"].join(" ")}>
			{props.children}
			<button className="modal-exit" onClick={props.dismiss}>&#10005;</button>
		</div>
	</Fragment>
};

export default Modal;