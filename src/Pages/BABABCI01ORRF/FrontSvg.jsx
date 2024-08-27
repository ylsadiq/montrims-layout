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
<g>
	<path fill="#D0D0D0" d="M205.39,387.98c-4.91,0.17-9.83,0.19-14.76,0.16v-21.47c4.18,0.2,8.52-0.02,13.48,0.11
		c6.37,0.05,14.43,0.69,16.22,6.46C224.5,386.77,212.71,387.71,205.39,387.98 M190.49,336.58c0.92,0.03,1.84,0.02,2.77,0.06
		c6.25,0.29,15.73-0.39,21.01,3.52c5.16,3.83,5.96,12.91-1.55,15.56c-2.89,1.02-6.76,0.94-9.75,0.92
		c-4.16-0.02-8.32-0.07-12.48-0.11V336.58z M228.77,368.39c-1.84-3.1-4.42-4.99-7.16-6.49c5.71-2.96,6.97-7.86,7-15.85
		c0.16-23.19-42.57-19.29-60.26-18.72v8.79c2.35-0.08,10.44-0.11,12.78-0.14v52.7c-3.78-0.04-8.49-0.08-12.25-0.08v8.74
		c13.41,0.02,28.03,0.78,41.39-0.18c7.4-0.53,14.5-2.86,18.46-9.68C232.06,381.75,232.15,374.08,228.77,368.39"/>
	<path fill="#DADADA" d="M274.53,355.48c1.13-3.51,2.28-7.04,3.44-10.62c1.37,3.59,2.6,7.13,3.76,10.64
		C279.33,355.49,276.93,355.48,274.53,355.48 M317.04,346.99c-2.39-5.92-7.38-7.01-13.08-6.88c-0.43,2.83-0.67,5.69-0.91,8.55
		c10.65,0.51,11.29,7.09-6.2,7.09c-2.19-0.07-4.39-0.11-6.6-0.15c-2.19-6.8-4.53-13.59-7.47-20.47h12.94
		c-0.2-2.79-0.38-5.59-0.55-8.39h-32.39c0.16,2.8,0.2,5.59,0.18,8.39h9.59c-2.31,7.04-4.47,13.72-6.6,20.31
		c-6.82-0.14-16.03-1.39-21.85,2.31c-10.94,6.97-4.78,19.88,5.43,21.7c0.65-1,1.13-3.51,1.46-4.83c0.26-1.1,0.46-2.22,0.68-3.34
		l-0.04-0.01c-7.5-0.29-6.7-7.05,1.14-7.14c1.63-0.04,3.26-0.09,4.9-0.13c1.66-0.41,3.65-0.38,5.62-0.3
		c-2.34,7.24-4.69,14.52-7.2,22.21h-11.65v8.39h30.15v-8.39h-9.91c2.47-7.58,4.81-14.83,7.15-22.05c4.19-0.02,8.38-0.02,12.56,0.04
		c2.24,7.29,4.37,14.55,6.97,22.01h-9.77v8.39h29.52v-8.39h-11.08c-2.64-7.32-4.83-14.51-7.05-21.65
		c7.18,0.53,15.67,1.09,20.91-3.12C318.09,357.75,319.05,351.92,317.04,346.99"/>
	<path fill="#DADADA" d="M465.1,377.41l-25.53-0.34c0.29-3.75,0.37-7.51,0.63-11.06c0.71-9.69,1.61-19.31,0.9-28.98h10.09v-8.59
		h-28.9v8.59h9.25c-0.37,10.09-1.66,27.49-14.11,27.67c-12.79,0.18-12.43-17.61-11.96-27.67h11.24v-8.59h-31.1v8.59h10.98
		c-0.29,14.5,1.18,36.48,20.84,36.26c6.46-0.07,11.07-2.66,14.41-6.56c-0.24,3.48-0.57,6.91-1.02,10.09
		c-6.73-0.2-13.69-0.09-19.64,2.68c-9.4,4.37-14.69,17.31-3.28,22.97c10.84,5.39,24.41-2.02,28.76-11.86
		c0.71-1.61,1.23-3.3,1.66-5.03c1.98,0.05,3.95,0.1,5.91,0.12c6.99,0.08,13.97,0.16,20.96,0.24
		C465.19,385.95,465.1,378.83,465.1,377.41 M421.4,395.45c-13.07,4.7-14.33-6.81-3.98-9.12c3.68-0.7,7.38-0.96,11.12-0.8h0.56
		C427.68,390.62,424.71,394.54,421.4,395.45"/>
	<path fill="#D0D0D0" d="M359.86,388.16c-4.87,0.17-9.75,0.19-14.64,0.16v-21.06c4.14,0.19,8.44-0.02,13.36,0.11
		c6.32,0.05,14.31,0.68,16.07,6.33C378.81,386.97,367.11,387.91,359.86,388.16 M345.08,337.76c0.92,0.03,1.83,0.01,2.74,0.06
		c6.2,0.28,15.6-0.39,20.83,3.45c5.12,3.76,5.92,12.66-1.53,15.27c-2.86,1.01-6.7,0.92-9.67,0.9c-4.12-0.01-8.25-0.06-12.37-0.11
		V337.76z M383.04,368.95c-1.83-3.04-4.39-4.9-7.1-6.37c5.66-2.91,6.9-7.71,6.94-15.54c0.15-22.74-42.2-18.92-59.74-18.36v8.62
		c2.32-0.08,10.34-0.11,12.66-0.14v51.69c-3.75-0.04-8.43-0.07-12.15-0.07v8.57c13.28,0.01,27.79,0.77,41.04-0.17
		c7.34-0.52,14.38-2.81,18.3-9.49C386.3,382.06,386.38,374.53,383.04,368.95"/>
	<path fill="#DADADA" d="M450.79,432.43c-3.87,5.16-8,10.08-12.41,14.9c-5.65-7.14-10.02-11.34-15.68-19.44
		c-3.69-5.28-5.26-11.2,0.89-15.2c5.39-3.52,13.11,2.27,14.26,9.55c0.95-10.04,11.24-15.93,16.94-6.66
		C458.56,421.73,454.34,427.68,450.79,432.43"/>
</g>
<g>
	<text transform="matrix(1 0 0 1 207.7334 550.9791)" fill="#878787" font-family="'DINSKICASUALCONDENSED'" font-size="38.1198px">100% Cotton</text>
</g>
<text transform="matrix(1 0 0 1 190.0938 643.9283)" fill="#878787" font-family="'FuturaPT-Medium'" font-size="44.4731px">
	<tspan dx="10">{size[0]}</tspan>
	<tspan dx="10">{size[1]}</tspan>
</text>
<text transform="matrix(1 0 0 1 213.9717 741.5318)"><tspan x="0" y="0" fill="#878787" font-family="'FuturaPT-Book'" font-size="51.6497px" letter-spacing="-1">£</tspan><tspan x="25.87" y="0" fill="#878787" font-family="'FuturaPT-Medium'" font-size="95.2995px" letter-spacing="-2">{priceMain}</tspan><tspan x="129.37" y="0" fill="#878787" font-family="'FuturaPT-Book'" font-size="47.6497px" letter-spacing="-1"></tspan></text>
<rect x="139.4" y="83.26" fill="none" stroke="#009FE3" stroke-width="0.5" width="342.18" height="675.37"/>
<line fill="none" stroke="#009640" stroke-width="0.5" stroke-dasharray="1.9501,1.9501,1.9501" x1="139.26" y1="659.61" x2="481.44" y2="659.61"/>
<g>
	<rect x="139.4" y="83.27" fill="none" stroke="#009FE3" stroke-width="0.5" width="342.18" height="675.35"/>
	<path fill="none" stroke="#009FE3" stroke-width="0.5" d="M323.99,131.69c0,7.46-6.05,13.51-13.51,13.51
		c-7.46,0-13.5-6.05-13.5-13.51c0-7.46,6.04-13.51,13.5-13.51C317.94,118.18,323.99,124.23,323.99,131.69z"/>
</g>
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
