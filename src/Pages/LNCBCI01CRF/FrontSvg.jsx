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
<rect x="141.12" y="49" fill="#12284C" width="314.1" height="698"/>
<g>
	<g>
		<g>
			<g>
				<defs>
					<path id="SVGID_81_" d="M248.29,446.52c1.08-1.28,1.87-2.43,2.42-3.9c1.32-4.25-1.48-7.84-5.03-10.81
						c-1.8,3.23-2.65,7.18-1.21,10.57C245.3,444.19,246.5,445.29,248.29,446.52"/>
				</defs>
				<use xlinkHref="#SVGID_81_"  overflow="visible" fill="#85754E"/>
				<clipPath id="SVGID_1_">
					<use xlinkHref="#SVGID_81_"  overflow="visible"/>
				</clipPath>
			</g>
			<g>
				<defs>
					<path id="SVGID_83_" d="M254.31,435.23c2.46-1.83,4.11-3.64,4.55-6.36c0.49-2.93-1.1-6.01-3.04-8.44
						c-2.48,2.96-4.67,6.47-4.11,10.13C252.01,432.39,252.95,433.78,254.31,435.23"/>
				</defs>
				<use xlinkHref="#SVGID_83_"  overflow="visible" fill="#85754E"/>
				<clipPath id="SVGID_2_">
					<use xlinkHref="#SVGID_83_"  overflow="visible"/>
				</clipPath>
			</g>
			<g>
				<defs>
					<path id="SVGID_85_" d="M256.94,493.58c-0.81-2.15-1.79-4.03-4.03-5.49c-3.32-2.2-7.67-2.53-11.85-2.28
						c2.53,4.01,6.93,7.81,12.84,8.05C254.97,493.86,255.9,493.75,256.94,493.58"/>
				</defs>
				<use xlinkHref="#SVGID_85_"  overflow="visible" fill="#85754E"/>
				<clipPath id="SVGID_3_">
					<use xlinkHref="#SVGID_85_"  overflow="visible"/>
				</clipPath>
			</g>
			<g>
				<defs>
					<path id="SVGID_87_" d="M246.01,470.83c0.32-1.68,0.49-3.21-0.04-4.86c-1.25-4.01-5.64-6.12-10.17-7.57
						C236.44,463.95,238.51,469.23,246.01,470.83"/>
				</defs>
				<use xlinkHref="#SVGID_87_"  overflow="visible" fill="#85754E"/>
				<clipPath id="SVGID_4_">
					<use xlinkHref="#SVGID_87_"  overflow="visible"/>
				</clipPath>
			</g>
			<g>
				<defs>
					<path id="SVGID_89_" d="M247.51,476.63c-0.95-0.97-2.07-1.74-3.31-2.34c-2.29-1.08-4.99-1.62-7.67-1.95
						c0.25,0.66,0.52,1.32,0.85,1.96c2.14,4.49,5.85,8.38,12.52,8.37C249.76,480.47,249.2,478.43,247.51,476.63"/>
				</defs>
				<use xlinkHref="#SVGID_89_"  overflow="visible" fill="#85754E"/>
				<clipPath id="SVGID_5_">
					<use xlinkHref="#SVGID_89_"  overflow="visible"/>
				</clipPath>
			</g>
			<g>
				<defs>
					<path id="SVGID_91_" d="M244.08,457.96l1.39,0.62c1.72-3.44,1.9-6.83-0.99-9.89c-1.38-1.64-3.53-2.92-5.57-4.03
						C237.84,449.45,238.43,455.17,244.08,457.96"/>
				</defs>
				<use xlinkHref="#SVGID_91_"  overflow="visible" fill="#85754E"/>
				<clipPath id="SVGID_6_">
					<use xlinkHref="#SVGID_91_"  overflow="visible"/>
				</clipPath>
			</g>
			<g>
				<defs>
					<path id="SVGID_93_" d="M250.84,447.57c2.63,0.1,4.9-0.15,7.28-1.09c3.96-1.72,5.96-5.17,6.93-8.54
						C258.33,439.03,251.59,441.5,250.84,447.57"/>
				</defs>
				<use xlinkHref="#SVGID_93_"  overflow="visible" fill="#85754E"/>
				<clipPath id="SVGID_7_">
					<use xlinkHref="#SVGID_93_"  overflow="visible"/>
				</clipPath>
			</g>
			<g>
				<defs>
					<path id="SVGID_95_" d="M269.12,501.67c1.29-1.78,2.14-3.57,2.14-5.65c-0.3-3.69-2.98-6.47-6.44-8.79
						c-1.46,3.9-2.05,8.51,1.01,12C266.81,500.23,267.84,500.96,269.12,501.67"/>
				</defs>
				<use xlinkHref="#SVGID_95_"  overflow="visible" fill="#85754E"/>
				<clipPath id="SVGID_8_">
					<use xlinkHref="#SVGID_95_"  overflow="visible"/>
				</clipPath>
			</g>
			<g>
				<defs>
					<path id="SVGID_97_" d="M272.43,423.13c0.9-1.56,1.32-3.17,1.64-4.84c-6.54,1.57-12.99,4.55-12.99,10.64
						C266.28,428.9,270.29,426.85,272.43,423.13"/>
				</defs>
				<use xlinkHref="#SVGID_97_"  overflow="visible" fill="#85754E"/>
				<clipPath id="SVGID_9_">
					<use xlinkHref="#SVGID_97_"  overflow="visible"/>
				</clipPath>
			</g>
			<g>
				<defs>
					<path id="SVGID_99_" d="M263.49,430.88c-3.53,1.15-5.64,2.95-6.94,5.8c4.56,1.03,9.28,0.57,12.6-2.35
						c1.7-1.23,2.89-2.93,3.9-4.56C269.83,429.77,266.48,429.85,263.49,430.88"/>
				</defs>
				<use xlinkHref="#SVGID_99_"  overflow="visible" fill="#85754E"/>
				<clipPath id="SVGID_10_">
					<use xlinkHref="#SVGID_99_"  overflow="visible"/>
				</clipPath>
			</g>
			<g>
				<defs>
					<path id="SVGID_101_" d="M352.23,474.16c-1.24,0.6-2.33,1.37-3.3,2.34c-1.72,1.83-2.29,3.81-2.42,6.05
						c6.69,0,10.38-3.9,12.51-8.39l0,0c0.31-0.66,0.58-1.31,0.85-1.97c-2.7,0.34-5.36,0.87-7.62,1.97H352.23z"/>
				</defs>
				<use xlinkHref="#SVGID_101_"  overflow="visible" fill="#85754E"/>
				<clipPath id="SVGID_11_">
					<use xlinkHref="#SVGID_101_"  overflow="visible"/>
				</clipPath>
			</g>
			<g>
				<defs>
					<path id="SVGID_103_" d="M348.45,486.03c-4.8,0.82-7.76,3.78-8.92,7.45c7.26,1.21,12.82-3.02,15.82-7.81
						C353.05,485.52,350.7,485.56,348.45,486.03"/>
				</defs>
				<use xlinkHref="#SVGID_103_"  overflow="visible" fill="#85754E"/>
				<clipPath id="SVGID_12_">
					<use xlinkHref="#SVGID_103_"  overflow="visible"/>
				</clipPath>
			</g>
			<g>
				<defs>
					<path id="SVGID_105_" d="M329.69,502.92c6.99,2.47,13.12-0.79,17.59-4.86c-1.46-0.36-2.91-0.62-4.4-0.78
						C336.85,496.8,332.51,498.63,329.69,502.92"/>
				</defs>
				<use xlinkHref="#SVGID_105_"  overflow="visible" fill="#85754E"/>
				<clipPath id="SVGID_13_">
					<use xlinkHref="#SVGID_105_"  overflow="visible"/>
				</clipPath>
			</g>
			<g>
				<defs>
					<path id="SVGID_107_" d="M259.56,492.66c3.3-2.81,4.81-6.25,3.13-9.99c-0.63-1.75-1.97-3.36-3.34-4.8
						C256.04,482.62,254.22,488.41,259.56,492.66"/>
				</defs>
				<use xlinkHref="#SVGID_107_"  overflow="visible" fill="#85754E"/>
				<clipPath id="SVGID_14_">
					<use xlinkHref="#SVGID_107_"  overflow="visible"/>
				</clipPath>
			</g>
			<g>
				<defs>
					<path id="SVGID_109_" d="M317.47,510.46c0.78,0.41,1.56,0.77,2.32,1.06l0,0c2.36,0.88,4.67,1.04,7.57,0.62
						c0.88-0.15,1.73-0.36,2.57-0.62h0.02c2.16-0.7,4.15-1.74,6.08-2.76c-2.62-1.18-5.28-2.07-8.27-2.22
						C323.52,506.31,320.12,507.9,317.47,510.46"/>
				</defs>
				<use xlinkHref="#SVGID_109_"  overflow="visible" fill="#85754E"/>
				<clipPath id="SVGID_15_">
					<use xlinkHref="#SVGID_109_"  overflow="visible"/>
				</clipPath>
			</g>
			<g>
				<defs>
					<path id="SVGID_111_" d="M266.78,503.02c-0.65-0.99-1.31-1.85-2.23-2.7c-4.13-3.54-9.9-3.54-15.36-2.12
						C253.64,502.25,259.82,505.49,266.78,503.02"/>
				</defs>
				<use xlinkHref="#SVGID_111_"  overflow="visible" fill="#85754E"/>
				<clipPath id="SVGID_16_">
					<use xlinkHref="#SVGID_111_"  overflow="visible"/>
				</clipPath>
			</g>
			<g>
				<defs>
					<path id="SVGID_113_" d="M303.55,515.64c5.06,4.33,12.27,4.07,18.56,1.56c-1.63-1.12-3.24-2.17-5.19-2.89
						C312.11,512.56,307.76,513.08,303.55,515.64"/>
				</defs>
				<use xlinkHref="#SVGID_113_"  overflow="visible" fill="#85754E"/>
				<clipPath id="SVGID_17_">
					<use xlinkHref="#SVGID_113_"  overflow="visible"/>
				</clipPath>
			</g>
			<g>
				<defs>
					<path id="SVGID_115_" d="M270.01,511.59l6.54-0.01c0.84-0.29,1.64-0.64,2.45-1.07c-2.66-2.58-6.02-4.13-10.28-3.89
						c-2.98,0.15-5.62,1.06-8.21,2.24c1.93,1.14,3.95,2.1,6.05,2.73h0.04c3.21,0.97,6.61,1.14,9.95-0.01L270.01,511.59z"/>
				</defs>
				<use xlinkHref="#SVGID_115_"  overflow="visible" fill="#85754E"/>
				<clipPath id="SVGID_18_">
					<use xlinkHref="#SVGID_115_"  overflow="visible"/>
				</clipPath>
			</g>
			<g>
				<defs>
					<path id="SVGID_117_" d="M292.94,515.65c-4.8-2.9-9.79-3.05-14.92-0.59c-1.29,0.67-2.42,1.37-3.56,2.2
						C280.35,519.86,288.29,519.95,292.94,515.65"/>
				</defs>
				<use xlinkHref="#SVGID_117_"  overflow="visible" fill="#85754E"/>
				<clipPath id="SVGID_19_">
					<use xlinkHref="#SVGID_117_"  overflow="visible"/>
				</clipPath>
			</g>
			<g>
				<defs>
					<path id="SVGID_119_" d="M320.18,525.72c-5.72-3.91-12.93-6.18-19.82-8.54l-0.67-1.38h-0.04c-0.25,0.21-1.12,0.39-1.63,0.55
						c-0.59-0.23-1.32-0.53-1.73-0.53l-0.66,1.28c-4.71,1.54-9.27,3.42-13.76,5.28c-2.41,1.16-5.93,2.48-7.03,4.7l2.27,3.14
						c0.13-0.11,0.22-0.29,0.32-0.43c4.92-5.92,12.3-9.3,20.56-11.18c8.26,1.87,15.7,5.3,20.59,11.12c0.06,0.09,0.3,0.34,0.3,0.43
						l2.25-3.15C321,526.5,320.58,526.12,320.18,525.72"/>
				</defs>
				<use xlinkHref="#SVGID_119_"  overflow="visible" fill="#85754E"/>
				<clipPath id="SVGID_20_">
					<use xlinkHref="#SVGID_119_"  overflow="visible"/>
				</clipPath>
			</g>
			<g>
				<defs>
					<path id="SVGID_121_" d="M257.67,477.86c0.63-1.17,0.9-2.37,0.93-3.58h-3.53h3.53c0.02-2.21-0.83-4.49-2.03-6.54
						c-2.13,1.96-4.04,4.18-5.01,6.54c-1.04,2.59-0.97,5.3,1.14,7.97C254.85,481.09,256.56,479.76,257.67,477.86"/>
				</defs>
				<use xlinkHref="#SVGID_121_"  overflow="visible" fill="#85754E"/>
				<clipPath id="SVGID_21_">
					<use xlinkHref="#SVGID_121_"  overflow="visible"/>
				</clipPath>
			</g>
			<g>
				<defs>
					<path id="SVGID_123_" d="M348.14,459.01c0.76-5.87-4.97-9.81-11.29-11.81C336.85,453.2,340.21,458.11,348.14,459.01"/>
				</defs>
				<use xlinkHref="#SVGID_123_"  overflow="visible" fill="#85754E"/>
				<clipPath id="SVGID_22_">
					<use xlinkHref="#SVGID_123_"  overflow="visible"/>
				</clipPath>
			</g>
			<g>
				<defs>
					<path id="SVGID_125_" d="M342.97,447.44c0.83,0.05,1.66,0.02,2.51,0c-0.77-6.01-7.48-8.62-14.24-9.57
						C332.95,442.92,335.97,446.86,342.97,447.44"/>
				</defs>
				<use xlinkHref="#SVGID_125_"  overflow="visible" fill="#85754E"/>
				<clipPath id="SVGID_23_">
					<use xlinkHref="#SVGID_125_"  overflow="visible"/>
				</clipPath>
			</g>
			<g>
				<defs>
					<path id="SVGID_127_" d="M350.91,458.44l1.4-0.62c5.58-2.98,6.2-8.39,5.09-13.32c-1.61,0.88-3.05,1.81-4.39,2.92
						C349.45,450.73,348.63,454.42,350.91,458.44"/>
				</defs>
				<use xlinkHref="#SVGID_127_"  overflow="visible" fill="#85754E"/>
				<clipPath id="SVGID_24_">
					<use xlinkHref="#SVGID_127_"  overflow="visible"/>
				</clipPath>
			</g>
			<g>
				<defs>
					<path id="SVGID_129_" d="M339.73,457.29c-0.29,1.21-0.46,2.37-0.53,3.61c0,4.84,2.63,8.07,8.33,9.88
						C350,464.85,345.27,460.72,339.73,457.29"/>
				</defs>
				<use xlinkHref="#SVGID_129_"  overflow="visible" fill="#85754E"/>
				<clipPath id="SVGID_25_">
					<use xlinkHref="#SVGID_129_"  overflow="visible"/>
				</clipPath>
			</g>
			<g>
				<defs>
					<path id="SVGID_131_" d="M343.72,482.15c1.98-2.54,2.14-5.34,1.16-7.97c-0.89-2.43-2.78-4.72-5.07-6.55
						c-0.77,1.46-1.39,2.82-1.73,4.37c-0.21,0.76-0.29,1.48-0.29,2.18v0.02C337.86,477.46,340.14,480.24,343.72,482.15"/>
				</defs>
				<use xlinkHref="#SVGID_131_"  overflow="visible" fill="#85754E"/>
				<clipPath id="SVGID_26_">
					<use xlinkHref="#SVGID_131_"  overflow="visible"/>
				</clipPath>
			</g>
			<g>
				<defs>
					<path id="SVGID_133_" d="M339.76,436.58c-2.34-5.88-9.75-6.88-16.54-6.87c1.04,1.63,2.26,3.24,3.91,4.55
						C330.67,437.06,335.02,437.71,339.76,436.58"/>
				</defs>
				<use xlinkHref="#SVGID_133_"  overflow="visible" fill="#85754E"/>
				<clipPath id="SVGID_27_">
					<use xlinkHref="#SVGID_133_"  overflow="visible"/>
				</clipPath>
			</g>
			<g>
				<defs>
					<path id="SVGID_135_" d="M350.81,464.8c-0.95,1.9-0.88,3.93-0.42,5.89c7.63-1.6,9.53-6.94,10.15-12.44
						C356.31,459.64,352.67,461.33,350.81,464.8"/>
				</defs>
				<use xlinkHref="#SVGID_135_"  overflow="visible" fill="#85754E"/>
				<clipPath id="SVGID_28_">
					<use xlinkHref="#SVGID_135_"  overflow="visible"/>
				</clipPath>
			</g>
			<g>
				<defs>
					<path id="SVGID_137_" d="M349.75,445.1c4.16-3.58,3.13-9.33,0.85-13.43c-1.06,0.9-2.02,1.77-2.88,2.79
						c-3.26,4.08-3.25,7.98,0.33,11.92C348.68,445.98,349.23,445.59,349.75,445.1"/>
				</defs>
				<use xlinkHref="#SVGID_137_"  overflow="visible" fill="#85754E"/>
				<clipPath id="SVGID_29_">
					<use xlinkHref="#SVGID_137_"  overflow="visible"/>
				</clipPath>
			</g>
			<g>
				<defs>
					<path id="SVGID_139_" d="M329.72,500.04c4.05-3.5,3.48-8.66,1.89-12.91c-2.05,1.38-4.01,3.03-5.15,4.99
						c-2.03,3.27-1.31,6.42,0.93,9.46C328.24,501.1,328.98,500.65,329.72,500.04"/>
				</defs>
				<use xlinkHref="#SVGID_139_"  overflow="visible" fill="#85754E"/>
				<clipPath id="SVGID_30_">
					<use xlinkHref="#SVGID_139_"  overflow="visible"/>
				</clipPath>
			</g>
			<g>
				<defs>
					<path id="SVGID_141_" d="M336.87,492.56c5.35-4.27,3.51-10.05,0.19-14.81c-1.57,1.63-2.8,3.32-3.5,5.29
						C332.26,486.71,333.65,489.84,336.87,492.56"/>
				</defs>
				<use xlinkHref="#SVGID_141_"  overflow="visible" fill="#85754E"/>
				<clipPath id="SVGID_31_">
					<use xlinkHref="#SVGID_141_"  overflow="visible"/>
				</clipPath>
			</g>
			<g>
				<defs>
					<path id="SVGID_143_" d="M277.59,507.36c1.03,0.61,2.11,1.03,3.3,1.41c1.38-3.69,1.04-6.76-2.1-9.77
						c-1.74-1.51-3.78-2.59-6.02-3.6C272.29,499.58,273.21,504.61,277.59,507.36"/>
				</defs>
				<use xlinkHref="#SVGID_143_"  overflow="visible" fill="#85754E"/>
				<clipPath id="SVGID_32_">
					<use xlinkHref="#SVGID_143_"  overflow="visible"/>
				</clipPath>
			</g>
			<g>
				<defs>
					<path id="SVGID_145_" d="M257.2,460.99c-0.12-1.23-0.3-2.41-0.59-3.61l-0.7,0.43c-5.4,3.03-9.26,7.76-7.04,13.07
						C254.51,469.09,257.2,465.82,257.2,460.99"/>
				</defs>
				<use xlinkHref="#SVGID_145_"  overflow="visible" fill="#85754E"/>
				<clipPath id="SVGID_33_">
					<use xlinkHref="#SVGID_145_"  overflow="visible"/>
				</clipPath>
			</g>
			<g>
				<defs>
					<path id="SVGID_147_" d="M258.77,451.82c0.48-1.52,0.67-2.97,0.75-4.53c-6.4,2.04-12.09,5.92-11.3,11.84
						C253.65,458.55,257.3,455.98,258.77,451.82"/>
				</defs>
				<use xlinkHref="#SVGID_147_"  overflow="visible" fill="#85754E"/>
				<clipPath id="SVGID_34_">
					<use xlinkHref="#SVGID_147_"  overflow="visible"/>
				</clipPath>
			</g>
			<g>
				<defs>
					<path id="SVGID_149_" d="M341.97,435.13l0.95-1.02c3.62-4.63,0.97-9.67-2.48-13.79c-1.51,1.88-2.86,4.23-3.03,6.5
						C337.11,430.35,338.79,432.75,341.97,435.13"/>
				</defs>
				<use xlinkHref="#SVGID_149_"  overflow="visible" fill="#85754E"/>
				<clipPath id="SVGID_35_">
					<use xlinkHref="#SVGID_149_"  overflow="visible"/>
				</clipPath>
			</g>
			<g>
				<defs>
					<path id="SVGID_151_" d="M288.3,511.56c0.85,0.59,1.88,1.12,3.05,1.52c1,0.28,1.95,0.47,2.99,0.58
						c0.06-0.69,0.06-1.41,0.01-2.1H288.3z"/>
				</defs>
				<use xlinkHref="#SVGID_151_"  overflow="visible" fill="#85754E"/>
				<clipPath id="SVGID_36_">
					<use xlinkHref="#SVGID_151_"  overflow="visible"/>
				</clipPath>
			</g>
			<g>
				<defs>
					<path id="SVGID_153_" d="M288.29,511.56l6.06,0c-0.13-1.95-0.75-3.85-2.52-5.38c-2.31-2.2-5.68-3.4-9.1-4.14
						C283.63,505.66,284.93,509.24,288.29,511.56"/>
				</defs>
				<use xlinkHref="#SVGID_153_"  overflow="visible" fill="#85754E"/>
				<clipPath id="SVGID_37_">
					<use xlinkHref="#SVGID_153_"  overflow="visible"/>
				</clipPath>
			</g>
			<g>
				<defs>
					<path id="SVGID_155_" d="M323.67,495.33c-2.33,1.06-4.74,2.28-6.37,4.01c-2.89,2.81-2.98,6.02-1.71,9.37
						C322.53,506.55,324.29,500.76,323.67,495.33"/>
				</defs>
				<use xlinkHref="#SVGID_155_"  overflow="visible" fill="#85754E"/>
				<clipPath id="SVGID_38_">
					<use xlinkHref="#SVGID_155_"  overflow="visible"/>
				</clipPath>
			</g>
			<g>
				<defs>
					<path id="SVGID_157_" d="M329.91,428.19c1.6,0.38,3.06,0.62,4.73,0.62c-0.41-6.08-6.33-9.14-13.05-10.6
						C322.43,422.55,324.51,426.48,329.91,428.19"/>
				</defs>
				<use xlinkHref="#SVGID_157_"  overflow="visible" fill="#85754E"/>
				<clipPath id="SVGID_39_">
					<use xlinkHref="#SVGID_157_"  overflow="visible"/>
				</clipPath>
			</g>
			<g>
				<defs>
					<path id="SVGID_159_" d="M304.45,513.26c1.48-0.42,2.73-1.01,3.75-1.72l0,0c3.35-2.28,4.62-5.91,5.52-9.54
						c-2.02,0.44-4.09,1.02-5.83,1.96c-3.71,1.82-5.52,4.43-5.77,7.6h2.68h-2.68c-0.03,0.68-0.01,1.38,0.06,2.1
						C302.98,513.54,303.7,513.44,304.45,513.26"/>
				</defs>
				<use xlinkHref="#SVGID_159_"  overflow="visible" fill="#85754E"/>
				<clipPath id="SVGID_40_">
					<use xlinkHref="#SVGID_159_"  overflow="visible"/>
				</clipPath>
			</g>
			<g>
				<g>
					<path fill="#85754E" d="M316.82,476.51l-2.31,11.27h-30.63v-1.1c1.06-0.12,1.79-0.69,2.21-1.7c0.21-0.51,0.39-1.23,0.49-2.12
						c0.12-0.9,0.18-1.94,0.18-3.09v-38.5c0-2.34-0.21-4.05-0.64-5.14c-0.45-1.09-1.19-1.7-2.24-1.8v-1.09h12.18v1.09
						c-1.02,0-1.76,0.53-2.23,1.62c-0.48,1.07-0.71,2.87-0.71,5.32v38.74c0,2.4,0.33,3.91,1,4.58c0.65,0.54,2.11,0.82,4.36,0.82
						c3.36,0,5.8-0.16,7.31-0.5c1.61-0.43,3.03-1.05,4.26-1.84c0.77-0.51,1.65-1.38,2.62-2.63c0.46-0.57,0.95-1.24,1.44-2.01
						c0.51-0.77,1.01-1.57,1.54-2.43L316.82,476.51z"/>
				</g>
			</g>
		</g>
	</g>
	<g>
		<path fill="#FFFFFF" d="M197.62,576.43H183v-0.48c0-0.23,0.16-0.41,0.51-0.54c0.13-0.04,0.21-0.1,0.28-0.11
			c0.1-0.05,0.18-0.08,0.23-0.11c0.2-0.12,0.35-0.28,0.44-0.5c0.03-0.1,0.05-0.25,0.07-0.45c0.03-0.19,0.05-0.43,0.05-0.72
			l0.06-10.05c0-0.28-0.02-0.5-0.05-0.67c-0.01-0.14-0.07-0.29-0.13-0.47c-0.06-0.25-0.23-0.45-0.42-0.55l-0.38-0.21
			c-0.35-0.15-0.54-0.33-0.54-0.54v-0.41h7.11v0.41c0,0.21-0.18,0.37-0.56,0.54l-0.33,0.19c-0.21,0.12-0.34,0.28-0.43,0.51
			c-0.09,0.25-0.15,0.65-0.15,1.2v11.72l1.54,0.03c0.76,0,1.37-0.01,1.84-0.06c0.49-0.04,0.89-0.09,1.24-0.14
			c0.34-0.07,0.62-0.16,0.87-0.3c0.25-0.13,0.51-0.25,0.73-0.45c0.11-0.1,0.24-0.24,0.37-0.44c0.12-0.18,0.24-0.38,0.31-0.55
			c0.09-0.19,0.15-0.32,0.22-0.37c0.15-0.2,0.3-0.27,0.48-0.27h1.25V576.43z"/>
		<path fill="#FFFFFF" d="M226.11,576.43h-7.63v-0.4c0-0.1,0.07-0.18,0.16-0.25c0.08-0.06,0.23-0.13,0.41-0.19
			c0.15-0.04,0.25-0.07,0.32-0.1c0.06-0.03,0.12-0.05,0.19-0.1c0.12-0.04,0.24-0.08,0.28-0.15c0.07-0.07,0.12-0.15,0.17-0.25
			c0.05-0.09,0.08-0.21,0.1-0.37c0.04-0.15,0.06-0.35,0.06-0.61l0.05-8.36c0-0.21,0-0.38-0.04-0.51c-0.02-0.13-0.09-0.25-0.17-0.41
			c-0.07-0.23-0.22-0.4-0.49-0.48l-0.34-0.16c-0.37-0.15-0.56-0.28-0.56-0.48v-0.33h7.31v0.33c0,0.19-0.2,0.33-0.6,0.48
			c-0.09,0.01-0.15,0.03-0.21,0.08c-0.06,0.03-0.11,0.05-0.14,0.08c-0.22,0.08-0.36,0.23-0.45,0.4c-0.1,0.21-0.15,0.53-0.15,1.01
			v8.36c0,0.48,0.05,0.8,0.12,0.97c0.04,0.1,0.09,0.18,0.16,0.25c0.07,0.08,0.18,0.14,0.32,0.18c0.08,0.02,0.13,0.05,0.25,0.08
			c0.1,0.03,0.19,0.05,0.25,0.09c0.41,0.12,0.63,0.26,0.63,0.44V576.43z"/>
		<path fill="#FFFFFF" d="M264.16,563.6c0,0.1-0.05,0.19-0.12,0.25c-0.1,0.06-0.24,0.12-0.44,0.23l-0.36,0.16
			c-0.25,0.08-0.39,0.23-0.47,0.41c-0.1,0.22-0.13,0.52-0.13,1.01v10.76h-2.03l-9.3-10.07l-0.31,0.03v7.62
			c0,0.46,0.03,0.78,0.11,0.97c0.07,0.19,0.23,0.34,0.47,0.43l0.41,0.17c0.45,0.13,0.67,0.28,0.67,0.44v0.4h-5.44v-0.4
			c0-0.2,0.18-0.34,0.52-0.44c0.09-0.04,0.17-0.07,0.28-0.1c0.11-0.03,0.18-0.07,0.22-0.1c0.21-0.08,0.34-0.23,0.41-0.41
			c0.05-0.09,0.06-0.2,0.1-0.38c0-0.15,0.04-0.35,0.04-0.59l0.09-8.36c0-0.24-0.02-0.41-0.06-0.56c-0.07-0.15-0.11-0.29-0.18-0.41
			c-0.08-0.2-0.25-0.36-0.51-0.45c-0.05-0.01-0.12-0.03-0.27-0.06c-0.12-0.05-0.22-0.08-0.32-0.1c-0.15-0.08-0.29-0.13-0.41-0.21
			c-0.12-0.07-0.18-0.16-0.18-0.25l0.01-0.33h5.76l7.4,7.96l0.41-0.05v-5.51c0-0.21-0.01-0.38-0.05-0.51
			c-0.03-0.14-0.09-0.27-0.14-0.43c-0.07-0.21-0.22-0.38-0.46-0.48l-0.32-0.16c-0.33-0.15-0.53-0.28-0.53-0.48v-0.33h5.12V563.6z"/>
		<path fill="#FFFFFF" d="M301.02,574.17c-0.9,0.85-1.9,1.47-3.01,1.86c-1.14,0.4-2.49,0.59-4.05,0.59c-2.64,0-4.8-0.57-6.48-1.77
			c-0.82-0.58-1.44-1.29-1.86-2.09c-0.42-0.79-0.6-1.68-0.6-2.67c0-1.07,0.18-2.02,0.6-2.84c0.42-0.86,1.09-1.6,1.95-2.27
			c1.7-1.27,3.84-1.93,6.39-1.93c0.51,0,0.97,0.03,1.37,0.08c0.41,0.05,0.83,0.12,1.26,0.24c0.92,0.23,1.43,0.35,1.53,0.35
			c0.07,0,0.12,0,0.22-0.04c0.12,0,0.22-0.05,0.34-0.08c0.18-0.06,0.37-0.08,0.57-0.1h0.76v3.16h-0.76c-0.26,0-0.47-0.03-0.63-0.12
			c-0.16-0.09-0.31-0.22-0.44-0.4l-0.21-0.37c-0.38-0.6-0.88-1.03-1.49-1.29c-0.64-0.3-1.41-0.43-2.3-0.43
			c-0.82,0-1.52,0.13-2.08,0.33c-0.58,0.22-1.04,0.57-1.42,1.02c-0.73,0.92-1.08,2.32-1.08,4.14c0,0.94,0.13,1.76,0.33,2.5
			c0.21,0.72,0.54,1.33,0.96,1.84c0.88,1.01,2.2,1.51,3.95,1.51c0.99,0,1.87-0.14,2.64-0.42c0.69-0.3,1.33-0.71,1.9-1.28
			L301.02,574.17z"/>
		<path fill="#FFFFFF" d="M339.82,569.83c0,2.09-0.84,3.73-2.48,4.98c-1.65,1.22-3.84,1.81-6.57,1.81c-2.65,0-4.8-0.59-6.45-1.81
			c-0.83-0.62-1.44-1.35-1.84-2.17c-0.38-0.82-0.58-1.75-0.58-2.81c0-1.1,0.18-2.03,0.58-2.85c0.38-0.8,1-1.52,1.85-2.15
			c0.81-0.61,1.74-1.05,2.83-1.35c1.1-0.29,2.27-0.44,3.63-0.44c1.38,0,2.6,0.15,3.69,0.44c1.08,0.3,2.02,0.74,2.84,1.37
			C338.96,566.07,339.82,567.73,339.82,569.83z M335.19,569.83c0-1.06-0.09-1.97-0.28-2.76c-0.18-0.76-0.43-1.35-0.74-1.78
			c-0.63-0.83-1.78-1.26-3.42-1.26c-1.56,0-2.7,0.43-3.36,1.27c-0.29,0.44-0.54,1.01-0.68,1.77c-0.17,0.76-0.25,1.68-0.25,2.76
			c0,1.09,0.08,1.99,0.25,2.75c0.14,0.74,0.38,1.33,0.68,1.77c0.66,0.88,1.8,1.31,3.36,1.31c1.61,0,2.76-0.43,3.42-1.31
			c0.31-0.44,0.56-1.02,0.74-1.78C335.1,571.79,335.19,570.89,335.19,569.83z"/>
		<path fill="#FFFFFF" d="M375.29,576.43h-14.61v-0.4c0-0.2,0.18-0.34,0.53-0.44c0.13-0.06,0.22-0.09,0.26-0.1
			c0.1-0.03,0.2-0.07,0.24-0.1c0.19-0.08,0.34-0.23,0.44-0.41c0.03-0.09,0.06-0.2,0.09-0.38c0.02-0.15,0.03-0.35,0.03-0.59
			l0.06-8.36c0-0.25,0-0.41-0.04-0.56c-0.01-0.12-0.06-0.25-0.13-0.41c-0.07-0.2-0.21-0.36-0.43-0.44l-0.38-0.16
			c-0.34-0.15-0.51-0.28-0.51-0.48v-0.33h7.09v0.33c0,0.18-0.17,0.33-0.56,0.48l-0.32,0.16c-0.2,0.08-0.33,0.23-0.43,0.41
			c-0.08,0.22-0.13,0.52-0.13,1.01v9.74l1.56,0.02c0.72,0,1.33-0.02,1.82-0.05c0.48-0.02,0.89-0.07,1.22-0.13
			c0.35-0.06,0.64-0.14,0.88-0.25c0.26-0.09,0.5-0.21,0.72-0.38c0.14-0.08,0.26-0.2,0.38-0.36c0.1-0.15,0.23-0.31,0.31-0.46
			c0.09-0.15,0.16-0.28,0.23-0.33c0.13-0.13,0.29-0.21,0.47-0.21h1.25V576.43z"/>
		<path fill="#FFFFFF" d="M413.35,561.04c0,0.11-0.05,0.21-0.12,0.29c-0.1,0.08-0.24,0.16-0.43,0.25l-0.37,0.22
			c-0.24,0.09-0.38,0.25-0.46,0.47c-0.09,0.25-0.13,0.65-0.13,1.2v12.95h-2.03l-9.29-12.09l-0.32,0.03v9.16
			c0,0.56,0.05,0.94,0.11,1.17c0.06,0.24,0.23,0.39,0.46,0.52l0.42,0.2c0.46,0.17,0.68,0.34,0.68,0.53v0.49h-5.47v-0.49
			c0-0.23,0.2-0.4,0.54-0.53c0.09-0.04,0.17-0.08,0.27-0.11c0.13-0.05,0.18-0.08,0.23-0.11c0.21-0.12,0.35-0.28,0.43-0.52
			c0.04-0.08,0.05-0.24,0.08-0.44c0.02-0.18,0.03-0.42,0.03-0.71l0.1-10.05c0-0.28-0.01-0.5-0.07-0.67
			c-0.04-0.18-0.09-0.33-0.17-0.48c-0.07-0.24-0.25-0.43-0.51-0.55c-0.05-0.01-0.13-0.06-0.26-0.09c-0.12-0.05-0.23-0.1-0.33-0.13
			c-0.15-0.06-0.28-0.14-0.4-0.22c-0.11-0.09-0.18-0.2-0.18-0.29l0.01-0.41h5.77l7.38,9.55l0.42-0.05v-6.66
			c0-0.22-0.02-0.41-0.05-0.59c-0.03-0.18-0.09-0.34-0.17-0.51c-0.05-0.27-0.21-0.46-0.45-0.6l-0.33-0.19
			c-0.33-0.15-0.51-0.33-0.51-0.54v-0.41h5.11V561.04z"/>
	</g>
</g>
<path fill="none" stroke="#009FE3" stroke-width="0.5" d="M308.65,105.43c0,5.78-4.69,10.47-10.47,10.47
	c-5.78,0-10.47-4.69-10.47-10.47c0-5.78,4.69-10.47,10.47-10.47C303.96,94.96,308.65,99.64,308.65,105.43z"/>
<rect x="158.58" y="66.45" fill="none" stroke="#009FE3" stroke-width="0.5" width="279.2" height="663.1"/>
<g>
	<rect x="158.31" y="66.15" fill="none" stroke="#009FE3" stroke-width="0.5" width="279.2" height="663.1"/>
	
		<line fill="none" stroke="#009640" stroke-width="0.5" stroke-linejoin="round" stroke-dasharray="2,2,2" x1="157.93" y1="645.26" x2="436.91" y2="645.26"/>
	<path fill="none" stroke="#009FE3" stroke-width="0.5" d="M308.38,105.13c0,5.78-4.69,10.47-10.47,10.47
		c-5.78,0-10.47-4.69-10.47-10.47c0-5.78,4.68-10.47,10.47-10.47C303.69,94.66,308.38,99.35,308.38,105.13z"/>
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
