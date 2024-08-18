import React from "react";
import { Outlet } from "react-router-dom";

const DataView = ({ item }) => {
	return (
		<div>
			<Outlet />
		</div>
	);
};

export default DataView;
