import React, { useEffect } from "react";
import JsBarcode from "jsbarcode";
// import { display } from "html2canvas/dist/types/css/property-descriptors/display";

const SvgBarcode = ({ barCode }) => {
	useEffect(() => {
		// This function will be called whenever the barCode prop changes
		generateBarcode();
	}, [barCode]);

	const generateBarcode = () => {
		JsBarcode("#barcode1", barCode, {
			fontSize: 40,
			// background: "#4b8b7f",
			// lineColor: "#ffffff",
			// margin: 12,
			marginLeft: 2,
			format: "EAN13",
			height: 25,
			width: 1,
			displayValue: true,
		});
	};

	return (
		<svg id="barcode1" style={{ display: "inline-block" }} x="10" y="130"></svg>
	);
};

export default SvgBarcode;
