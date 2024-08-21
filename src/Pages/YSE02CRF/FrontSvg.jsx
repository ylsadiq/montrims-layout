import React, { useRef } from "react";

const FrontSvg = ({ data }) => {

	const size = data.size;
	const storyName = data.storyName;
	const priceMain = data.priceMain;
	const seasonCode = data.seasonCode;
	const gender = data.gender;
	const barcode = data.barcode;
	// const barcodeTwo= data.barcodeTwo;
	const sevenBarcode = data.sevenBarcode;
	const fiveBarcode = data.fiveBarcode;
	const soNumber = data.soNumber;
	const quantity = data.quantity;
	const sellingfeature = data.sellingfeature;

	
	const svgRef = useRef(null);
	const downloadSVG = () => {
		if (svgRef.current) {
			// Get the SVG content as a string
			const svgContent = new XMLSerializer().serializeToString(svgRef.current);

			// Create a Blob from the SVG content
			const blob = new Blob([svgContent], { type: "image/svg+xml" });

			// Create a URL for the Blob
			const url = URL.createObjectURL(blob);

			// Create a temporary anchor element to trigger the download
			const downloadLink = document.createElement("a");
			downloadLink.href = url;
			downloadLink.download = "image.svg"; // Set the filename for the downloaded file
			document.body.appendChild(downloadLink);

			// Click the download link programmatically to start the download
			downloadLink.click();

			// Remove the temporary anchor element
			document.body.removeChild(downloadLink);

			// Release the URL object
			URL.revokeObjectURL(url);
		} else {
			console.error("SVG not found");
		}
	};
	return (
		<div>
			<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 595.28 841.89" enable-background="new 0 0 595.28 841.89" xmlSpace="preserve">
<rect x="185.74" y="63.33" fill="none" width="244.29" height="580.18"/>
<path fill="#363D47" d="M271.24,39.94v83.45c0,6.1,4.33,11.09,9.62,11.09h53.97c5.29,0,9.62-4.99,9.62-11.09l0.08-83.45H271.24z"/>
<text transform="matrix(1 0 0 1 240.8848 627.835)"><tspan x="0" y="0" fill="#363D47" font-family="'FuturaPT-Book'" font-size="34.3172px">£</tspan><tspan x="17.55" y="0" fill="#363D47" font-family="'FuturaPT-Medium'" font-size="67.6344px" letter-spacing="-1">{priceMain}</tspan><tspan x="87.74" y="0" fill="#363D47" font-family="'FuturaPT-Book'" font-size="32.3172px"></tspan></text>
<g>
	<circle fill="none" stroke="#FFFFFF" stroke-width="0.25" stroke-miterlimit="10" cx="307.94" cy="97.44" r="27.48"/>
	<g>
		<path fill="#FFFFFF" d="M289.88,94.73c0.36,0.29,0.54,0.7,0.54,1.16c0,0.56-0.26,1.02-0.91,1.65c-0.04,1.4-1.07,2.42-2.44,2.42
			c-1.39,0-2.43-1.07-2.43-2.52c0-1.43,1.04-2.5,2.44-2.5c1.22,0,2.16,0.82,2.38,1.98c0.38-0.36,0.56-0.7,0.56-1.04
			c0-0.36-0.14-0.66-0.44-0.91L289.88,94.73z M289.06,97.45c0-1.15-0.84-2-1.98-2.01c-1.13,0-1.98,0.85-1.99,2
			c0,1.15,0.84,2.02,1.98,2.02C288.21,99.46,289.06,98.6,289.06,97.45z"/>
		<path fill="#FFFFFF" d="M287.84,92.93l-2.61-0.87l0.16-0.48l2.59,0.86c1.08,0.36,1.74,0.02,2.04-0.87
			c0.29-0.89-0.03-1.56-1.11-1.92l-2.59-0.86l0.16-0.47l2.61,0.87c1.31,0.44,1.75,1.37,1.36,2.53
			C290.06,92.88,289.14,93.37,287.84,92.93z"/>
		<path fill="#FFFFFF" d="M292.62,84.99l-1.55,2.18l0.71,1.21l-0.3,0.43l-2.64-4.56l0.29-0.41l5.18,0.99l-0.31,0.44L292.62,84.99z
			 M292.18,84.9l-2.76-0.55l1.43,2.43L292.18,84.9z"/>
		<path fill="#FFFFFF" d="M292.14,80.43l0.39-0.32l2.77,3.36l2.07-1.71l0.28,0.34l-2.46,2.03L292.14,80.43z"/>
		<path fill="#FFFFFF" d="M296.52,77.29l0.44-0.24l2.3,4.21l-0.45,0.24L296.52,77.29z"/>
		<path fill="#FFFFFF" d="M300.65,75.95l-1.6,0.5l-0.13-0.42l3.69-1.17l0.13,0.42l-1.61,0.51l1.31,4.14l-0.48,0.15L300.65,75.95z"/>
		<path fill="#FFFFFF" d="M306.77,77.52l0.11,1.65l-0.5,0.03l-0.1-1.65l-2.11-3.01l0.54-0.03l1.81,2.58l1.47-2.78l0.5-0.03
			L306.77,77.52z"/>
		<path fill="#FFFFFF" d="M316.14,78.44l0.46,0.16l-0.61,1.72c-0.56,0.23-1.24,0.21-1.86-0.02c-1.37-0.49-2.03-1.82-1.56-3.14
			c0.47-1.32,1.82-1.94,3.2-1.45c0.68,0.24,1.2,0.67,1.44,1.25l-0.4,0.2c-0.25-0.51-0.64-0.82-1.17-1.01
			c-1.12-0.4-2.21,0.11-2.6,1.18c-0.38,1.07,0.15,2.16,1.26,2.55c0.43,0.15,0.86,0.2,1.3,0.07L316.14,78.44z"/>
		<path fill="#FFFFFF" d="M318.49,79.52c0.85-1.11,2.33-1.29,3.48-0.41c1.14,0.87,1.37,2.34,0.52,3.46
			c-0.85,1.12-2.33,1.28-3.47,0.41C317.86,82.1,317.64,80.63,318.49,79.52z M322.08,82.27c0.69-0.91,0.53-2.09-0.39-2.79
			c-0.92-0.7-2.11-0.56-2.81,0.35c-0.69,0.9-0.52,2.1,0.4,2.8C320.19,83.32,321.39,83.18,322.08,82.27z"/>
		<path fill="#FFFFFF" d="M323.69,83.88c1.16-0.78,2.62-0.46,3.43,0.74c0.8,1.2,0.53,2.67-0.63,3.44c-1.17,0.78-2.63,0.46-3.43-0.74
			C322.25,86.12,322.52,84.65,323.69,83.88z M326.2,87.64c0.95-0.63,1.18-1.81,0.54-2.77c-0.64-0.96-1.82-1.21-2.77-0.58
			c-0.95,0.63-1.17,1.82-0.53,2.78C324.07,88.03,325.25,88.28,326.2,87.64z"/>
		<path fill="#FFFFFF" d="M329.64,89.5l0.51,1.89c0.4,1.48-0.28,2.74-1.65,3.1c-1.36,0.37-2.58-0.37-2.98-1.86l-0.51-1.88
			L329.64,89.5z M325.93,92.49c0.33,1.23,1.33,1.81,2.44,1.51c1.11-0.3,1.68-1.3,1.35-2.53l-0.37-1.37l-3.78,1.02L325.93,92.49z"/>
		<path fill="#FFFFFF" d="M326.8,96.16l0.39,0.21c-0.34,0.33-0.6,0.94-0.62,1.57c-0.02,0.9,0.35,1.29,0.82,1.3
			c1.31,0.03,0.57-2.94,2.34-2.9c0.71,0.02,1.3,0.58,1.27,1.79c-0.01,0.54-0.18,1.1-0.46,1.47l-0.4-0.18
			c0.28-0.4,0.42-0.88,0.43-1.3c0.02-0.88-0.36-1.28-0.84-1.29c-1.31-0.03-0.58,2.94-2.33,2.9c-0.7-0.02-1.29-0.59-1.27-1.81
			C326.15,97.21,326.42,96.51,326.8,96.16z"/>
	</g>
	<g>
		<path fill="#FFFFFF" d="M287.33,108.15l0.43-0.08c-0.05,0.48,0.13,1.11,0.52,1.61c0.55,0.7,1.09,0.78,1.46,0.49
			c1.03-0.81-1.42-2.64-0.03-3.73c0.56-0.44,1.37-0.38,2.13,0.58c0.33,0.43,0.56,0.97,0.58,1.43l-0.42,0.12
			c-0.04-0.49-0.24-0.94-0.5-1.28c-0.54-0.69-1.09-0.76-1.47-0.46c-1.04,0.81,1.41,2.64,0.04,3.72c-0.55,0.44-1.38,0.37-2.13-0.6
			C287.5,109.37,287.26,108.66,287.33,108.15z"/>
		<path fill="#FFFFFF" d="M294,109.42l0.38,0.34l-3.2,3.57l-0.38-0.34L294,109.42z"/>
		<path fill="#FFFFFF" d="M299.31,113.09l-2.42,4.13l-0.36-0.21l-0.69-4.91l-1.97,3.35l-0.44-0.25l2.42-4.13l0.36,0.21l0.7,4.91
			l1.96-3.35L299.31,113.09z"/>
		<path fill="#FFFFFF" d="M300.07,115.98c0.36-1.36,1.66-2.08,3.06-1.71c0.68,0.18,1.22,0.57,1.52,1.13l-0.39,0.23
			c-0.28-0.49-0.69-0.77-1.22-0.92c-1.12-0.3-2.18,0.3-2.47,1.4c-0.29,1.1,0.33,2.15,1.45,2.44c0.53,0.14,1.04,0.1,1.52-0.19
			l0.23,0.39c-0.53,0.34-1.2,0.41-1.88,0.23C300.47,118.61,299.71,117.34,300.07,115.98z"/>
		<path fill="#FFFFFF" d="M309.58,119.27l0,0.44l-3.38-0.04l0.05-4.78l3.28,0.03l-0.01,0.44l-2.78-0.03l-0.02,1.7l2.47,0.03l0,0.43
			l-2.47-0.03l-0.02,1.78L309.58,119.27z"/>
		<path fill="#FFFFFF" d="M314.37,113.89l1.39,4.58l-0.47,0.14l-1.26-4.16l-1.08,0.33l-0.13-0.42L314.37,113.89z"/>
		<path fill="#FFFFFF" d="M320.02,113.91c0.75,1.45,0.34,2.62-0.82,3.21c-0.39,0.2-0.78,0.32-1.13,0.29l-0.01-0.45
			c0.29,0.04,0.62-0.06,0.93-0.23c0.92-0.47,1.21-1.37,0.61-2.52c-0.05-0.1-0.12-0.22-0.2-0.34c0.03,0.58-0.34,1.1-0.93,1.4
			c-0.85,0.43-1.69,0.24-2.1-0.54c-0.41-0.8-0.05-1.63,0.78-2.06C318.31,112.09,319.32,112.56,320.02,113.91z M318.98,113.37
			c-0.24-0.47-0.86-0.71-1.6-0.33c-0.62,0.31-0.86,0.89-0.57,1.46c0.29,0.56,0.89,0.71,1.55,0.37
			C319.01,114.53,319.25,113.9,318.98,113.37z"/>
		<path fill="#FFFFFF" d="M322.47,109l0.23,0.27l1.32,4.7l-0.41,0.34l-1.29-4.61l-1.89,1.58l0.58,0.69l-0.37,0.31l-0.86-1.02
			L322.47,109z"/>
		<path fill="#FFFFFF" d="M327.83,107.86c0.63,0.49,0.76,1.33,0.05,2.24c-0.43,0.54-1.02,0.92-1.54,0.98l-0.16-0.43
			c0.44-0.04,0.97-0.34,1.35-0.83c0.49-0.62,0.47-1.2,0-1.56c-0.45-0.35-1-0.27-1.54,0.43l-0.21,0.27l-0.29-0.22l-0.49-2.07
			l-1.51,1.93l-0.35-0.27l1.89-2.42l0.27,0.21l0.51,2.11C326.48,107.46,327.23,107.39,327.83,107.86z"/>
	</g>
</g>
<g>
	<text transform="matrix(1 0 0 1 268.0518 374.6304)"><tspan x="0" y="0" fill="#363D47" font-family="'HoeflerText-Regular'" font-size="19.3903px" letter-spacing="1">est.</tspan><tspan x="35.58" y="0" fill="#363D47" font-family="'HoeflerText-Regular'" font-size="19.3903px" letter-spacing="1"> </tspan><tspan x="41.61" y="0" fill="#363D47" font-family="'HoeflerText-Regular'" font-size="19.3903px" letter-spacing="1">197</tspan><tspan x="77.27" y="0" fill="#363D47" font-family="'HoeflerText-Regular'" font-size="19.3903px">3</tspan></text>
	<path fill="#363D47" d="M250.26,339.93h-17.55v14.46h19.22l-0.39,2.46h-21.49v-34.42h21.09v2.46h-18.44v12.59h17.55V339.93z
		 M278.1,344.94l-4.38,11.9h-2.7l12.64-34.42h3.15l13.18,34.42h-2.9l-4.47-11.9H278.1z M291.72,342.48
		c-3.83-10.23-5.8-15.14-6.49-17.45h-0.05c-0.84,2.61-3.05,8.7-6.15,17.45H291.72z M321.67,347.6c1.03,4.57,4.08,7.28,9.74,7.28
		c6.29,0,8.7-3.15,8.7-6.88c0-3.88-1.72-6.29-9.29-8.16c-7.28-1.82-10.42-4.18-10.42-9.15c0-4.52,3.29-8.75,10.67-8.75
		c7.57,0,10.77,4.62,11.21,8.8h-2.75c-0.79-3.69-3.2-6.34-8.6-6.34c-4.97,0-7.67,2.31-7.67,6.15c0,3.79,2.26,5.26,8.6,6.83
		c9.69,2.41,11.11,6.29,11.11,10.42c0,5.06-3.69,9.44-11.65,9.44c-8.6,0-11.75-5.02-12.39-9.64H321.67z M373.16,356.84v-12.93
		c0-0.3-0.1-0.64-0.2-0.79l-12.29-20.7h3.1c3.44,5.85,9.44,16.03,10.92,18.59c1.48-2.56,7.52-12.64,11.21-18.59h2.95l-12.83,20.9
		c-0.1,0.2-0.15,0.39-0.15,0.74v12.78H373.16z"/>
</g>
<path fill="none" stroke="#009FE3" stroke-width="0.5" d="M317.05,97.44c0,5.06-4.1,9.16-9.16,9.16c-5.06,0-9.16-4.1-9.16-9.16
	c0-5.06,4.1-9.16,9.16-9.16C312.94,88.28,317.05,92.38,317.05,97.44z"/>
<rect x="185.74" y="63.33" fill="none" stroke="#009FE3" stroke-width="0.5" width="244.29" height="580.18"/>
<line fill="none" stroke="#009640" stroke-width="0.5" stroke-linejoin="round" stroke-dasharray="2,2,2" x1="185.84" y1="570.48" x2="429.93" y2="570.48"/>
</svg>

			<button
				className="text-sm bg-orange-500 px-2 py-1 my-5 rounded text-white"
				onClick={downloadSVG}
			>
				Download
			</button>
		</div>
	);
};

export default FrontSvg;
