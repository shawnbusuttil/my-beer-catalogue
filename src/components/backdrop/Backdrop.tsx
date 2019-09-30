import React, { FC } from "react";

import "./Backdrop.scss";

const Backdrop: FC<{ clicked?: () => void }> = (props) => (
	<div className="backdrop" onClick={props.clicked}></div>
);

export default Backdrop;