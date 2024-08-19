import { useBarcode } from "@createnextapp/react-barcode";
import React, { useRef } from "react";

const BackSvg = ({ elem }) => {
  console.log(elem);
  // get the value
  // get all the required values
  let size = elem.size

  const storyName = elem.storyName;
  const priceMain = elem.priceMain;
  const seasonCode = elem.seasonCode;
  const gender = elem.gender;
  const barcode = elem.barcode;
  // const barcodeTwo= elem.barcodeTwo;
  const sevenBarcode = elem.sevenBarcode;
  const fiveBarcode = elem.fiveBarcode;
  const soNumber = elem.soNumber;
  const quantity = elem.quantity;
  // const poLine= elem.poLine;
  // const totalQuantity= elem.totalQuantity;
  // const prodCode= elem.prodCode;
  // const date= elem.date;
  // const custAccount= elem.custAccount;
  // const sellingfeature= elem.sellingfeature;
  // const disclaimar= elem.disclaimar;
  // const fitDescription= elem.fitDescription;

  // get the quantity

  // get the quantity

  //set the value or get the value

  // get all the required values

  // get the value
  // console.log(elem);
  const svgRef = useRef(null);
  const downloadSVG = () => {
    // Get the SVG content as a string
    if (svgRef.current) {
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
      console.error("SVG element not found");
    }
  };
  //barcode svg  generator
  const { inputRef } = useBarcode({
    value: barcode,
    options: {
      format: "EAN13",
      height: 130,
      width: 3.4,
      fontSize: "35px",
      font: "futura pt",
      background: "#ffffff00",
      backgroundOpacity: "0",
      textMargin: -0.6,
      // displayValue: false,
    },
  });
  return (
    <div>
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 595.28 841.89"
        enable-background="new 0 0 595.28 841.89"
        xmlSpace="preserve"
      >
        <g>
          <path
            d="M449.69,58.25c0,2.78-2.26,5.03-5.02,5.03c-2.78,0-5.03-2.25-5.03-5.03c0-2.77,2.25-5.02,5.03-5.02
		C447.44,53.23,449.69,55.48,449.69,58.25"
          />
          <path
            d="M433.67,43.55c3.23-2.81,7.48-4.51,12.11-4.51c10.21,0,18.49,8.28,18.49,18.49c0,6.38-3.24,12.02-8.15,15.34
		c-0.81,0.55-1.92,0.34-2.47-0.47c-0.55-0.81-0.34-1.92,0.48-2.47c3.97-2.7,6.59-7.24,6.59-12.4c0-4.12-1.67-7.85-4.37-10.56
		c-2.71-2.71-6.43-4.38-10.56-4.38c-3.75,0-7.16,1.37-9.78,3.64c-0.74,0.65-1.87,0.56-2.51-0.18
		C432.85,45.32,432.93,44.19,433.67,43.55z"
          />
          <path
            d="M436.44,49.31c2.18-2.04,5.11-3.3,8.32-3.29c6.73,0,12.16,5.45,12.16,12.17c0,4.15-2.08,7.83-5.27,10.03
		c-0.81,0.56-1.92,0.35-2.47-0.45c-0.56-0.81-0.35-1.92,0.46-2.47c2.26-1.56,3.73-4.16,3.73-7.1c-0.01-4.76-3.85-8.61-8.61-8.62
		c-2.28,0-4.33,0.88-5.89,2.33c-0.72,0.67-1.84,0.64-2.51-0.08C435.69,51.1,435.73,49.98,436.44,49.31z"
          />
          <path
            d="M449.33,78.5v11.22h-40.09V49.64h16.97l2.45-3.86h-20.32c-1.51,0-2.73,1.22-2.73,2.73v41.68c0,1.51,1.23,2.72,2.73,2.72
		h41.67c1.51,0,2.73-1.21,2.73-2.72V77.28L449.33,78.5z"
          />
          <path
            d="M412.52,77.38V66.23h4.95c0.99,0,1.74,0.1,2.27,0.31c0.51,0.19,0.92,0.55,1.23,1.06c0.31,0.5,0.47,1.07,0.47,1.68
		c0,0.79-0.26,1.46-0.77,2c-0.52,0.54-1.3,0.89-2.38,1.04c0.39,0.19,0.69,0.38,0.9,0.56c0.43,0.39,0.84,0.89,1.23,1.48l1.93,3.03
		h-1.86l-1.47-2.32c-0.42-0.67-0.78-1.18-1.07-1.54l-0.74-0.75l-0.67-0.29c-0.16-0.04-0.44-0.06-0.82-0.06h-1.71v4.95H412.52z
		 M413.99,71.16h3.17c0.67,0,1.2-0.07,1.59-0.21c0.37-0.14,0.67-0.36,0.85-0.67c0.2-0.31,0.31-0.64,0.31-1c0-0.53-0.2-0.96-0.58-1.3
		c-0.38-0.34-0.98-0.5-1.81-0.5h-3.53V71.16z"
          />
          <path
            d="M412.52,77.38h-0.44V65.79h5.39c1.02,0,1.82,0.1,2.43,0.34c0.6,0.23,1.1,0.66,1.45,1.24c0.35,0.56,0.54,1.21,0.54,1.91
		c0,0.89-0.3,1.69-0.89,2.3c-0.61,0.64-1.5,1.02-2.64,1.17l-0.06-0.44l0.19-0.4c0.42,0.2,0.75,0.41,1,0.63l-0.01-0.01l0.02,0.02
		c0.46,0.42,0.89,0.95,1.3,1.57l1.94,3.04l0.44,0.69h-2.67h-0.24l-1.61-2.53c-0.42-0.66-0.77-1.15-1.04-1.5l0.35-0.28l-0.32,0.31
		l-0.68-0.68l-0.59-0.25l0.17-0.41l-0.11,0.43c-0.08-0.02-0.35-0.04-0.72-0.04h-1.27v4.5v0.45h-1.92h-0.44v-0.45H412.52v-0.44h1.03
		v-4.5v-0.44h2.15c0.4,0,0.68,0.01,0.93,0.07l0.04,0.01l0.71,0.3l0.08,0.03l0.8,0.81l0.02,0.02l0.02,0.02
		c0.3,0.38,0.67,0.9,1.1,1.58l1.34,2.11h0.8l-1.5-2.35c-0.37-0.56-0.76-1.03-1.15-1.39l0.3-0.33l-0.29,0.34
		c-0.16-0.14-0.42-0.31-0.79-0.49l-1.35-0.65l1.49-0.2c1.01-0.13,1.69-0.45,2.11-0.9c0.43-0.46,0.64-0.99,0.65-1.69
		c0-0.53-0.14-1.01-0.41-1.44c-0.27-0.44-0.59-0.72-1.01-0.87c-0.44-0.18-1.15-0.28-2.11-0.28h-4.5v10.7H412.52v-0.44V77.38z
		 M413.99,71.16v-0.44h3.17c0.64,0,1.13-0.07,1.43-0.19l0.63-0.48l0.01-0.01l0.23-0.76c-0.01-0.42-0.13-0.69-0.44-0.97
		c-0.24-0.23-0.73-0.39-1.51-0.39h-3.08v3.24H413.99v-0.44V71.16h-0.44v-3.68v-0.44h3.97c0.88,0,1.6,0.17,2.11,0.61
		c0.47,0.42,0.74,1,0.73,1.64c0,0.45-0.13,0.88-0.38,1.25l-0.37-0.24l0.38,0.23c-0.25,0.4-0.63,0.68-1.08,0.85
		c-0.47,0.17-1.04,0.24-1.74,0.24h-3.17h-0.44v-0.45H413.99z"
          />
          <polygon
            points="423.82,77.38 423.82,66.24 431.34,66.24 431.34,67.55 425.29,67.55 425.29,71 430.52,71 430.52,72.32 
		425.29,72.32 425.29,77.38 	"
          />
          <polygon
            points="423.82,77.38 423.37,77.38 423.37,65.79 431.79,65.79 431.79,67.55 431.79,68 425.73,68 425.73,70.56 
		430.52,70.56 430.96,70.56 430.96,72.32 430.96,72.76 425.73,72.76 425.73,77.38 425.73,77.83 423.82,77.83 423.37,77.83 
		423.37,77.38 423.82,77.38 423.82,76.94 424.84,76.94 424.84,72.32 424.84,71.87 430.07,71.87 430.07,71.45 425.29,71.45 
		424.84,71.45 424.84,67.55 424.84,67.11 430.9,67.11 430.9,66.68 424.26,66.68 424.26,77.38 423.82,77.38 423.82,76.94 	"
          />
          <rect x="433.51" y="66.24" width="1.47" height="11.14" />
          <polygon
            points="433.51,66.24 433.51,65.79 434.98,65.79 435.42,65.79 435.42,77.83 433.51,77.83 433.06,77.83 433.06,65.79 
		433.51,65.79 433.51,66.24 433.95,66.24 433.95,76.94 434.53,76.94 434.53,66.68 433.51,66.68 433.51,66.24 433.95,66.24 	"
          />
          <path
            d="M437.57,77.38V66.24h3.84c0.86,0,1.53,0.05,1.98,0.16c0.63,0.15,1.18,0.41,1.64,0.8c0.59,0.49,1.03,1.13,1.31,1.9
		c0.3,0.77,0.45,1.66,0.45,2.65c0,0.85-0.11,1.59-0.3,2.25c-0.2,0.65-0.46,1.19-0.76,1.63c-0.31,0.42-0.65,0.76-1.01,1.01
		c-0.37,0.24-0.81,0.43-1.34,0.55c-0.51,0.13-1.11,0.19-1.79,0.19H437.57z M439.05,76.07h2.38c0.73,0,1.31-0.07,1.73-0.2
		c0.42-0.13,0.76-0.33,1-0.58c0.35-0.35,0.63-0.81,0.82-1.4c0.2-0.59,0.3-1.31,0.3-2.16c0-1.16-0.19-2.05-0.58-2.68
		c-0.38-0.63-0.85-1.05-1.4-1.26c-0.4-0.15-1.02-0.23-1.91-0.23h-2.34V76.07z"
          />
          <path
            d="M437.57,77.38h-0.44V65.79h4.29c0.88,0,1.57,0.05,2.09,0.18l-0.11,0.43l0.1-0.43c0.69,0.16,1.31,0.46,1.83,0.89
		c0.65,0.54,1.13,1.25,1.44,2.08c0.32,0.83,0.47,1.77,0.47,2.81c0,0.89-0.11,1.67-0.32,2.37c-0.21,0.69-0.49,1.28-0.83,1.76
		c-0.34,0.46-0.72,0.84-1.12,1.12l-0.01,0.01l-0.01,0c-0.42,0.27-0.91,0.48-1.48,0.61l-0.1-0.43l0.11,0.43
		c-0.55,0.14-1.18,0.2-1.89,0.2h-4.02h-0.44v-0.45H437.57v-0.45h4.02c0.66,0,1.21-0.06,1.68-0.17l0.01,0h0
		c0.48-0.11,0.88-0.28,1.2-0.49l0.24,0.37l-0.26-0.36c0.32-0.22,0.63-0.52,0.91-0.91c0.27-0.38,0.51-0.88,0.7-1.49
		c0.17-0.61,0.28-1.31,0.28-2.12c0-0.95-0.14-1.78-0.41-2.5c-0.26-0.71-0.65-1.27-1.18-1.72c-0.4-0.34-0.88-0.57-1.45-0.71l-0.02,0
		l0.01,0c-0.39-0.1-1.03-0.15-1.87-0.15h-3.4v10.7H437.57v-0.45V77.38z M439.05,76.07v-0.45h2.38c0.7,0,1.24-0.07,1.59-0.18
		c0.37-0.12,0.64-0.28,0.82-0.46l0.01-0.01v0c0.29-0.29,0.54-0.69,0.71-1.22c0.18-0.54,0.28-1.21,0.28-2.02
		c0-1.11-0.19-1.93-0.51-2.45c-0.34-0.57-0.74-0.91-1.18-1.08c-0.3-0.12-0.89-0.2-1.75-0.2h-1.89v8.07H439.05v-0.45V76.07h-0.44
		v-8.96h2.78c0.91,0,1.57,0.07,2.07,0.26c0.66,0.25,1.2,0.76,1.62,1.44c0.45,0.73,0.64,1.71,0.64,2.91c0,0.88-0.1,1.64-0.32,2.3
		c-0.21,0.64-0.52,1.18-0.93,1.58l-0.31-0.32l0.32,0.31c-0.3,0.31-0.71,0.54-1.19,0.69c-0.48,0.15-1.1,0.23-1.86,0.23h-2.38h-0.44
		v-0.45H439.05z"
          />
        </g>
        <g>
          <text
            transform="matrix(1 0 0 1 144.928 175.6129)"
            font-family="'FuturaPT-Medium'"
            font-size="60.8216px"
          >
            <tspan >{size[0]}</tspan> 
			<tspan dx="10">{size[1]}</tspan>
          </text>
        </g>
        <text transform="matrix(1 0 0 1 165.7366 800.6275)">
          <tspan
            x="0"
            y="0"
            font-family="'FuturaPT-Book'"
            font-size="57.0202px"
            letter-spacing="-1"
          >
            £
          </tspan>
          <tspan
            x="30.96"
            y="0"
            font-family="'FuturaPT-Medium'"
            font-size="114.0404px"
            letter-spacing="-2"
          >
            {priceMain}
          </tspan>
          <tspan
            x="154.81"
            y="0"
            font-family="'FuturaPT-Book'"
            font-size="57.0202px"
            letter-spacing="-1"
          >
          </tspan>
        </text>
        <g>
          <g>
            <g>
              <text
                transform="matrix(0 1 -2 0 136 320)"
                font-family="'FuturaPT-Book'"
                font-size="24px"
              >
                {storyName}
              </text>
            </g>
            <text
              transform="matrix(1 1.899993e-03 -1.899993e-03 1 263.1963 669.7703)"
              font-family="'Helvetica'"
              font-size="27px"
            >
              {seasonCode}
            </text>
            <g>
              <g>
                <g>
                  <text
                    transform="matrix(-1.900016e-03 1 -1 -1.900016e-03 378.3165 325.3559)"
                    font-family="'Helvetica'"
                    font-size="26px"
                  >
                    {sevenBarcode}
                  </text>
                </g>
                <text
                  transform="matrix(0 1 -1 0 379.7239 295.5777)"
                  font-family="'Geneva'"
                  font-size="20.9896px"
                >
                  {gender}
                </text>
                <rect
                  x="374.76"
                  y="291.21"
                  fill="none"
                  stroke="#000000"
                  stroke-width="0.7365"
                  width="26.82"
                  height="25.66"
                />
              </g>
              <text
                transform="matrix(-1.900016e-03 1 -1 -1.900016e-03 377.876 603.9556)"
                font-family="'Helvetica'"
                font-size="26px"
              >
                {fiveBarcode}
              </text>
              <g>
                {/* entire barcode goes here */}
                <g transform="translate(372,260) rotate(90)">
                  <svg ref={inputRef} />
                </g>

                {/* the arrow sign goes here  */}
				<polygon
                  points="26.395,162.846 29.391,166.971 32.381,162.854 33.303,162.857 29.442,168.225 25.481,162.863 26.395,162.846 
									"
                />
              </g>
            </g>
          </g>
          <g>
            <text
              transform="matrix(0 1 -1 0 405.7219 335.1988)"
              font-family="'FuturaPT-Book'"
              font-size="26.6094px"
            >
              WWW.MATALAN.CO.UK
            </text>
          </g>
        </g>
        <g>
          <g>
            <path
              fill="none"
              d="M97.05,32.96h149.1c2.99,0,5.41,2.38,5.41,5.32v54.01c0,2.94-2.42,5.32-5.41,5.32H97.05
			c-2.99,0-5.42-2.38-5.42-5.32V38.29C91.63,35.35,94.05,32.96,97.05,32.96L97.05,32.96z M97.05,32.96"
            />
            <g>
              <path
                fill="none"
                d="M97.05,32.96h149.1c2.99,0,5.41,2.38,5.41,5.32v54.01c0,2.94-2.42,5.32-5.41,5.32H97.05
				c-2.99,0-5.42-2.38-5.42-5.32V38.29C91.63,35.35,94.05,32.96,97.05,32.96L97.05,32.96z M97.05,32.96"
              />
            </g>
            <path
              d="M139.45,39.16c0.71,0,1.33,0.25,1.84,0.75c0.51,0.5,0.77,1.11,0.77,1.82c0,0.7-0.26,1.31-0.77,1.81
			c-0.51,0.5-1.12,0.75-1.84,0.75c-0.72,0-1.33-0.25-1.85-0.75c-0.51-0.5-0.77-1.11-0.77-1.82c0-0.71,0.26-1.31,0.77-1.81
			C138.12,39.41,138.73,39.16,139.45,39.16L139.45,39.16z M139.45,43.87c0.6,0,1.11-0.21,1.54-0.63c0.43-0.42,0.64-0.93,0.64-1.52
			c0-0.59-0.21-1.1-0.64-1.51c-0.43-0.42-0.94-0.63-1.54-0.63c-0.6,0-1.11,0.21-1.54,0.62c-0.43,0.42-0.64,0.92-0.64,1.52
			c0,0.59,0.21,1.09,0.64,1.51C138.33,43.66,138.84,43.87,139.45,43.87L139.45,43.87z M140.66,43.14h-0.55
			c-0.35-0.62-0.58-0.97-0.68-1.05c-0.1-0.08-0.24-0.12-0.4-0.12h-0.27v1.17h-0.45v-2.76h0.97c0.29,0,0.52,0.02,0.67,0.06
			c0.16,0.04,0.28,0.13,0.38,0.26c0.1,0.13,0.15,0.27,0.15,0.42c0,0.19-0.07,0.36-0.21,0.52c-0.14,0.15-0.34,0.24-0.59,0.26v0.02
			c0.17,0.04,0.38,0.27,0.65,0.69L140.66,43.14z M138.76,41.59h0.55c0.26,0,0.43-0.04,0.53-0.11c0.1-0.07,0.15-0.17,0.15-0.3
			c0-0.13-0.04-0.23-0.14-0.31c-0.09-0.07-0.28-0.11-0.57-0.11h-0.52V41.59z M138.76,41.59"
            />
            <path
              fill="none"
              stroke="#000000"
              stroke-width="0.0716"
              d="M139.45,39.16c0.71,0,1.33,0.25,1.84,0.75
			c0.51,0.5,0.77,1.11,0.77,1.82c0,0.71-0.26,1.31-0.77,1.81c-0.51,0.5-1.12,0.75-1.84,0.75c-0.72,0-1.33-0.25-1.85-0.75
			c-0.51-0.5-0.77-1.11-0.77-1.82c0-0.71,0.26-1.31,0.77-1.81S138.73,39.16,139.45,39.16L139.45,39.16z M139.45,43.87
			c0.6,0,1.11-0.21,1.54-0.63c0.43-0.42,0.64-0.93,0.64-1.52c0-0.59-0.21-1.1-0.64-1.51c-0.43-0.42-0.94-0.63-1.54-0.63
			c-0.6,0-1.11,0.21-1.54,0.62c-0.43,0.42-0.64,0.92-0.64,1.52c0,0.59,0.21,1.09,0.64,1.51C138.33,43.66,138.84,43.87,139.45,43.87
			L139.45,43.87z M140.66,43.14h-0.55c-0.35-0.62-0.58-0.98-0.68-1.05c-0.1-0.08-0.24-0.12-0.4-0.12h-0.27v1.17h-0.45v-2.76h0.97
			c0.29,0,0.52,0.02,0.67,0.06c0.16,0.04,0.28,0.13,0.38,0.26c0.1,0.13,0.15,0.27,0.15,0.42c0,0.19-0.07,0.36-0.21,0.52
			c-0.14,0.15-0.34,0.24-0.59,0.26v0.01c0.17,0.04,0.38,0.27,0.65,0.69L140.66,43.14z M138.76,41.59h0.55
			c0.26,0,0.43-0.04,0.53-0.11c0.1-0.07,0.15-0.17,0.15-0.31s-0.04-0.23-0.14-0.3c-0.09-0.07-0.28-0.11-0.57-0.11h-0.52V41.59z
			 M138.76,41.59"
            />
            <path
              d="M124.39,39.01c-10.52,0-14.23,16.07-17.69,29c-1.25-1.25-5.1-5.02-5.11-5.01c-0.77-0.75-1.66-0.51-2.21,0.02
			c-0.55,0.54-0.62,1.53,0,2.14c0.03,0.02,5.21,5.11,7.01,6.87c0.49,0.47,1.21,0.75,1.92,0.34c0.74-0.44,0.85-1.24,0.86-1.24
			c6.15-27.06,11.63-29.07,15.2-29.07c3,0,6.45,2.18,6.45,6.53c4.48,0,7.28,5.77,3.68,9.33c2.98,1.42,4.31,3.16,4.31,5.37
			c0,2.21-1.89,4.47-4.63,4.46c-2.73,0-4.11-1.72-6.23-1.72c-0.97,0-1.55,0.76-1.55,1.52V73h-4.01v-5.45
			c-0.01-0.85-0.65-1.52-1.44-1.52c-0.01,0-0.34,0-0.33,0.02l-5.37,0.66c-0.65,0.09-1.24,0.78-1.24,1.5c0,0.84,0.69,1.53,1.64,1.52
			c0.12,0,0.28,0,0.27-0.02c-0.01,0,3.4-0.43,3.4-0.43s0,5.37,0,5.39c0,0.69,0.79,1.35,1.49,1.35h7.13c0.83,0,1.55-0.7,1.55-1.53
			v-4.92c1.49,0.9,3.57,1.25,4.63,1.25c4,0,7.82-3.1,7.8-7.63c-0.02-4.11-3.22-6.16-3.22-6.16c1.88-4.92-1.15-9.66-5.09-10.98
			C132.2,40.97,127.79,39.01,124.39,39.01L124.39,39.01z M124.39,39.01"
            />
            <path
              d="M119.9,82.04c0,1.27,1.44,2.04,3.82,3.15c1.89,0.87,2.97,1.79,2.97,2.52c0,1.2-1.31,1.62-2.53,1.62
			c-1.9,0-3.01-0.74-3.63-2.41l-0.05-0.14h-0.15c-0.33,0-0.6,0.01-0.75,0.2c-0.13,0.17-0.09,0.39-0.03,0.6c0,0,0.41,1.71,0.41,1.71
			c0.11,0.42,0.27,0.49,0.94,0.62c0.3,0.05,1.83,0.32,3.12,0.32c3.62,0,5.23-1.45,5.23-2.88c0-1.04-1.05-2.04-3.32-3.15l-1.03-0.49
			c-1.55-0.72-2.48-1.16-2.48-1.92c0-0.74,0.97-1.26,2.36-1.26c1.81,0,2.29,0.99,2.52,1.86l0.04,0.17h0.17c0.4,0,0.65-0.03,0.81-0.2
			c0.09-0.09,0.12-0.21,0.1-0.36l-0.15-1.48c-0.04-0.47-0.41-0.54-0.92-0.64c-0.6-0.11-1.33-0.24-2.44-0.24
			C121.77,79.63,119.9,80.53,119.9,82.04L119.9,82.04z M119.9,82.04"
            />
            <path
              d="M130.31,85.03c0,2.58,2.27,5.18,6.62,5.18c2.2,0,3.43-0.49,4.35-0.97l0.25-0.13l-0.41-0.44l0.03,0.03
			c-0.09-0.14-0.17-0.16-0.32-0.16l-0.21,0.07c-0.33,0.15-1.33,0.61-3.16,0.61c-2.24,0-4.67-1.44-4.67-4.62
			c0-3.02,2.62-4.09,4.86-4.09c1.62,0,2.47,0.57,2.63,1.74l0.02,0.19h0.2c0.19,0,0.7,0,0.7-0.37v-1.76c0-0.43-0.51-0.5-0.72-0.53
			l-0.21-0.02c-0.52-0.07-1.01-0.13-2.32-0.13C133.52,79.63,130.31,81.9,130.31,85.03L130.31,85.03z M130.31,85.03"
            />
            <path
              d="M113.93,79.75l-3.91,0.03l-2.61-0.04l-0.4-0.01c-0.23,0-0.4,0.16-0.4,0.4c0,0.11,0,0.45,0.43,0.45
			c1.58,0,1.63,0.13,1.65,0.72l0.01,0.37l0.02,1.59v3.41c0,0.57-0.01,1.47-0.05,2.19c-0.01,0.21-0.02,0.41-1.42,0.41
			c-0.39,0-0.62,0.07-0.62,0.45c0,0.11,0,0.4,0.37,0.4h0.09c0.17-0.01,0.61-0.03,2.79-0.03c2.32,0,2.79,0.02,2.94,0.03h0.08
			c0.31,0,0.57-0.03,0.57-0.4c0-0.42-0.36-0.45-0.95-0.45c-1.4,0-1.41-0.2-1.42-0.4c-0.03-0.67-0.06-1.57-0.06-2.2
			c0,0,0-0.91,0-1.23c0.32,0,1.17,0,1.17,0c1.8,0,2,0.05,2.25,1.41c0.07,0.29,0.31,0.33,0.51,0.33c0.42,0,0.47-0.23,0.47-0.33
			l-0.03-0.5c-0.03-0.29-0.06-0.66-0.06-1.15v-2.09c0-0.32-0.38-0.32-0.59-0.32c-0.34,0-0.42,0.21-0.63,1.2
			c-0.1,0.38-0.84,0.6-2.03,0.6c0,0-0.75,0-1.05,0c0-0.38,0-3.07,0-3.07c0-0.84,0.15-0.84,0.33-0.85c0.68-0.03,2.35-0.09,2.85-0.09
			c0.47,0,0.91,0.11,1.2,0.29c0.89,0.55,1.34,0.91,1.61,1.13c0.27,0.22,0.42,0.34,0.65,0.34c0.12,0,0.5,0,0.5-0.32
			c0-0.08-0.03-0.15-0.15-0.42c-0.15-0.31-0.39-0.83-0.7-1.63c-0.09-0.25-0.38-0.25-0.94-0.25L113.93,79.75z M113.93,79.75"
            />
            <path
              d="M173.19,48.49h-1.45c-0.87-1.35-1.4-2.18-1.61-2.48c-0.21-0.31-0.43-0.57-0.66-0.79c-0.23-0.22-0.45-0.36-0.65-0.42
			c-0.2-0.06-0.47-0.09-0.81-0.09h-1.33v3.78h-1.15v-8.56h3.85c0.53,0,0.97,0.04,1.32,0.1c0.35,0.06,0.66,0.2,0.94,0.41
			c0.27,0.21,0.48,0.48,0.62,0.8c0.14,0.33,0.21,0.67,0.22,1.02c0,0.64-0.21,1.16-0.62,1.56c-0.42,0.39-1.02,0.64-1.82,0.75v0.02
			c0.58,0.26,1.13,0.77,1.63,1.56L173.19,48.49z M166.67,43.7h2.47c0.5,0,0.89-0.05,1.18-0.12c0.29-0.08,0.52-0.25,0.7-0.49
			c0.18-0.24,0.27-0.51,0.26-0.81c0-0.39-0.14-0.72-0.43-0.99c-0.29-0.27-0.77-0.41-1.43-0.41h-2.75V43.7z M166.67,43.7"
            />
            <path
              fill="none"
              stroke="#000000"
              stroke-width="0.1228"
              d="M173.19,48.49h-1.45c-0.87-1.35-1.4-2.18-1.61-2.48
			c-0.21-0.31-0.43-0.57-0.66-0.79c-0.23-0.22-0.45-0.36-0.65-0.42c-0.2-0.06-0.47-0.09-0.81-0.09h-1.33v3.78h-1.15v-8.56h3.85
			c0.53,0,0.97,0.03,1.32,0.1c0.35,0.06,0.66,0.2,0.94,0.41c0.27,0.21,0.48,0.48,0.62,0.8c0.14,0.33,0.21,0.67,0.22,1.02
			c0,0.65-0.21,1.16-0.62,1.56c-0.42,0.39-1.02,0.64-1.82,0.75v0.02c0.58,0.26,1.13,0.77,1.63,1.56L173.19,48.49z M166.67,43.7h2.47
			c0.5,0,0.89-0.04,1.18-0.12c0.29-0.08,0.52-0.25,0.7-0.49c0.18-0.24,0.27-0.51,0.26-0.81c0-0.39-0.14-0.72-0.43-0.99
			c-0.29-0.27-0.77-0.41-1.43-0.41h-2.75V43.7z M166.67,43.7"
            />
            <path d="M181.26,48.49h-6.5v-8.56h6.3v1.02h-5.15v2.61h4.81v1.01h-4.81v2.89h5.35V48.49z M181.26,48.49" />
            <path
              fill="none"
              stroke="#000000"
              stroke-width="0.1228"
              d="M181.26,48.49h-6.5v-8.56h6.3v1.02h-5.15v2.61h4.81v1.01h-4.81v2.9
			h5.35V48.49z M181.26,48.49"
            />
            <path
              d="M190.68,45.78c-0.25,0.96-0.69,1.67-1.32,2.15c-0.63,0.47-1.38,0.71-2.27,0.71c-1.42,0-2.46-0.44-3.11-1.31
			c-0.65-0.88-0.97-1.94-0.98-3.17c0-1.36,0.38-2.43,1.15-3.2c0.76-0.77,1.75-1.16,2.95-1.16c0.85,0,1.57,0.21,2.17,0.64
			c0.6,0.42,1.02,1.04,1.27,1.86l-1.13,0.26c-0.19-0.6-0.48-1.04-0.87-1.34c-0.39-0.3-0.87-0.45-1.46-0.45
			c-0.95,0-1.67,0.31-2.16,0.91c-0.49,0.61-0.74,1.43-0.74,2.47c0,1.19,0.26,2.07,0.77,2.65c0.51,0.58,1.19,0.87,2.02,0.87
			c0.68,0,1.23-0.18,1.65-0.55c0.42-0.36,0.72-0.9,0.9-1.63L190.68,45.78z M190.68,45.78"
            />
            <path
              fill="none"
              stroke="#000000"
              stroke-width="0.1228"
              d="M190.68,45.78c-0.25,0.96-0.69,1.67-1.32,2.15
			c-0.63,0.47-1.38,0.71-2.27,0.71c-1.42,0-2.46-0.44-3.11-1.31c-0.65-0.88-0.97-1.93-0.98-3.17c0-1.36,0.38-2.43,1.15-3.2
			c0.76-0.77,1.75-1.16,2.95-1.16c0.85,0,1.57,0.21,2.17,0.63c0.6,0.42,1.02,1.04,1.27,1.86l-1.13,0.26
			c-0.19-0.6-0.48-1.04-0.87-1.34c-0.39-0.3-0.87-0.45-1.46-0.45c-0.95,0-1.67,0.31-2.16,0.92c-0.49,0.61-0.74,1.43-0.74,2.47
			c0,1.19,0.26,2.07,0.77,2.65c0.51,0.58,1.19,0.87,2.02,0.87c0.68,0,1.23-0.18,1.65-0.55c0.42-0.36,0.72-0.91,0.9-1.63
			L190.68,45.78z M190.68,45.78"
            />
            <path
              d="M199.67,39.93l-3.47,4.93v3.62h-1.16v-3.62l-3.35-4.93h1.4l1.91,2.88c0.19,0.29,0.42,0.68,0.69,1.15
			c0.16-0.32,1.04-1.66,2.63-4.03H199.67z M199.67,39.93"
            />
            <path
              fill="none"
              stroke="#000000"
              stroke-width="0.1228"
              d="M199.67,39.93l-3.47,4.93v3.62h-1.16v-3.62l-3.35-4.93h1.4l1.91,2.88
			c0.19,0.29,0.42,0.68,0.69,1.15c0.16-0.32,1.04-1.66,2.63-4.03H199.67z M199.67,39.93"
            />
            <path
              d="M208.52,45.78c-0.26,0.96-0.69,1.67-1.32,2.15c-0.63,0.47-1.39,0.71-2.28,0.71c-1.42,0-2.46-0.44-3.11-1.31
			c-0.65-0.88-0.98-1.94-0.98-3.17c0-1.36,0.38-2.43,1.14-3.2c0.76-0.77,1.75-1.16,2.96-1.16c0.85,0,1.57,0.21,2.17,0.64
			c0.6,0.42,1.02,1.04,1.26,1.86l-1.13,0.26c-0.19-0.6-0.48-1.04-0.87-1.34c-0.39-0.3-0.88-0.45-1.46-0.45
			c-0.95,0-1.67,0.31-2.16,0.91c-0.49,0.61-0.73,1.43-0.73,2.47c0,1.19,0.26,2.07,0.77,2.65c0.51,0.58,1.19,0.87,2.02,0.87
			c0.68,0,1.23-0.18,1.66-0.55c0.42-0.36,0.72-0.9,0.89-1.63L208.52,45.78z M208.52,45.78"
            />
            <path
              fill="none"
              stroke="#000000"
              stroke-width="0.1228"
              d="M208.52,45.78c-0.26,0.96-0.69,1.67-1.32,2.15
			c-0.63,0.47-1.39,0.71-2.28,0.71c-1.42,0-2.46-0.44-3.11-1.31c-0.65-0.88-0.98-1.93-0.98-3.17c0-1.36,0.38-2.43,1.14-3.2
			c0.76-0.77,1.75-1.16,2.96-1.16c0.85,0,1.57,0.21,2.17,0.63c0.6,0.42,1.02,1.04,1.26,1.86l-1.13,0.26
			c-0.19-0.6-0.48-1.04-0.87-1.34c-0.39-0.3-0.88-0.45-1.46-0.45c-0.95,0-1.67,0.31-2.16,0.92c-0.49,0.61-0.73,1.43-0.73,2.47
			c0,1.19,0.26,2.07,0.77,2.65c0.51,0.58,1.19,0.87,2.02,0.87c0.68,0,1.23-0.18,1.66-0.55c0.42-0.36,0.72-0.91,0.89-1.63
			L208.52,45.78z M208.52,45.78"
            />
            <path d="M215.83,48.49h-5.45v-8.56h1.15v7.54h4.29V48.49z M215.83,48.49" />
            <path
              fill="none"
              stroke="#000000"
              stroke-width="0.1228"
              d="M215.83,48.49h-5.45v-8.56h1.15v7.54h4.29V48.49z M215.83,48.49"
            />
            <path d="M224.17,48.49h-6.5v-8.56h6.3v1.02h-5.15v2.61h4.81v1.01h-4.81v2.89h5.35V48.49z M224.17,48.49" />
            <path
              fill="none"
              stroke="#000000"
              stroke-width="0.1228"
              d="M224.17,48.49h-6.5v-8.56h6.3v1.02h-5.15v2.61h4.81v1.01h-4.81v2.9
			h5.35V48.49z M224.17,48.49"
            />
            <path
              d="M226.26,39.93h3c0.53,0,0.98,0.03,1.36,0.08c0.38,0.05,0.74,0.18,1.09,0.38c0.34,0.21,0.65,0.49,0.91,0.85
			c0.26,0.36,0.46,0.77,0.61,1.23c0.14,0.46,0.22,1.02,0.23,1.69c0,1.26-0.3,2.29-0.92,3.1c-0.61,0.81-1.66,1.21-3.15,1.22h-3.14
			V39.93z M227.41,47.48h1.87c0.38,0,0.72-0.03,1.01-0.07c0.29-0.04,0.6-0.17,0.91-0.38c0.31-0.21,0.57-0.54,0.77-1.01
			c0.2-0.47,0.3-1.09,0.3-1.87c0-0.43-0.03-0.83-0.11-1.2c-0.08-0.37-0.22-0.71-0.43-1.01c-0.21-0.31-0.45-0.53-0.72-0.67
			c-0.27-0.14-0.53-0.23-0.78-0.26c-0.26-0.03-0.58-0.05-0.98-0.04h-1.83V47.48z M227.41,47.48"
            />
            <path
              fill="none"
              stroke="#000000"
              stroke-width="0.1228"
              d="M226.26,39.93h3c0.53,0,0.98,0.03,1.36,0.08
			c0.38,0.05,0.74,0.18,1.09,0.38c0.34,0.21,0.65,0.49,0.91,0.85c0.26,0.36,0.46,0.77,0.61,1.23c0.14,0.46,0.22,1.02,0.23,1.69
			c0,1.26-0.3,2.29-0.92,3.1c-0.61,0.81-1.66,1.22-3.15,1.22h-3.14V39.93z M227.41,47.48h1.87c0.38,0,0.72-0.02,1.01-0.07
			c0.29-0.04,0.6-0.17,0.91-0.38c0.31-0.21,0.57-0.54,0.77-1.01c0.2-0.47,0.3-1.09,0.3-1.87c0-0.43-0.03-0.83-0.11-1.2
			c-0.08-0.37-0.22-0.71-0.43-1.01c-0.21-0.31-0.45-0.53-0.72-0.67c-0.27-0.14-0.53-0.23-0.78-0.26c-0.26-0.03-0.58-0.05-0.98-0.04
			h-1.83V47.48z M227.41,47.48"
            />
            <path
              d="M187.99,63.1c0.54,0.16,0.95,0.42,1.22,0.79c0.27,0.36,0.4,0.79,0.41,1.27c0,0.48-0.12,0.92-0.37,1.32
			c-0.25,0.4-0.59,0.69-1.04,0.88c-0.45,0.19-1.06,0.28-1.83,0.29h-3.33v-8.55h3.26c1.06,0,1.8,0.22,2.23,0.68
			c0.43,0.45,0.65,0.95,0.65,1.51c0,0.37-0.1,0.72-0.3,1.03C188.7,62.62,188.39,62.88,187.99,63.1L187.99,63.1z M184.19,62.67h1.89
			c0.38,0,0.71-0.02,0.97-0.06c0.26-0.04,0.5-0.15,0.7-0.34c0.2-0.18,0.31-0.46,0.3-0.85c0-0.4-0.1-0.7-0.3-0.89
			c-0.2-0.19-0.45-0.31-0.73-0.35c-0.29-0.05-0.65-0.07-1.09-0.06h-1.74V62.67z M184.19,66.63h2.17c0.78,0,1.31-0.13,1.61-0.39
			c0.3-0.26,0.45-0.62,0.45-1.08c0-0.46-0.16-0.82-0.48-1.08c-0.32-0.26-0.89-0.39-1.73-0.39h-2.02V66.63z M184.19,66.63"
            />
            <path
              fill="none"
              stroke="#000000"
              stroke-width="0.1228"
              d="M187.99,63.1c0.54,0.16,0.95,0.42,1.22,0.79
			c0.27,0.36,0.4,0.79,0.41,1.27c0,0.48-0.12,0.92-0.37,1.32c-0.25,0.4-0.59,0.69-1.04,0.88c-0.45,0.19-1.06,0.28-1.83,0.29h-3.33
			v-8.55h3.26c1.06,0,1.8,0.22,2.23,0.67c0.43,0.45,0.65,0.96,0.65,1.51c0,0.37-0.1,0.72-0.3,1.03
			C188.7,62.62,188.39,62.88,187.99,63.1L187.99,63.1z M184.19,62.67h1.89c0.38,0,0.71-0.02,0.97-0.06c0.26-0.04,0.5-0.15,0.7-0.34
			c0.2-0.18,0.31-0.46,0.3-0.85c0-0.4-0.1-0.7-0.3-0.89c-0.2-0.19-0.45-0.31-0.73-0.35c-0.29-0.05-0.65-0.07-1.09-0.06h-1.74V62.67z
			 M184.19,66.63h2.17c0.78,0,1.31-0.13,1.61-0.39c0.3-0.26,0.45-0.62,0.45-1.08c0-0.46-0.16-0.82-0.48-1.08
			c-0.32-0.26-0.89-0.39-1.73-0.39h-2.02V66.63z M184.19,66.63"
            />
            <path
              d="M194.1,61.31c0.85,0,1.56,0.27,2.11,0.82c0.56,0.55,0.84,1.32,0.85,2.32c0,1.22-0.3,2.08-0.91,2.57
			c-0.6,0.5-1.28,0.76-2.05,0.76c-0.79,0-1.49-0.26-2.07-0.78c-0.59-0.52-0.88-1.34-0.88-2.46c0-1.09,0.29-1.9,0.85-2.43
			C192.56,61.59,193.26,61.32,194.1,61.31L194.1,61.31z M194.1,66.93c0.61,0,1.07-0.22,1.39-0.66c0.32-0.44,0.48-1.03,0.48-1.75
			c0-0.78-0.18-1.36-0.54-1.75c-0.35-0.39-0.8-0.59-1.33-0.59c-0.54,0-0.98,0.2-1.33,0.59c-0.35,0.4-0.52,1-0.52,1.79
			c0,0.78,0.18,1.38,0.53,1.77C193.12,66.72,193.56,66.92,194.1,66.93L194.1,66.93z M194.1,66.93"
            />
            <path
              fill="none"
              stroke="#000000"
              stroke-width="0.1228"
              d="M194.1,61.31c0.85,0,1.56,0.27,2.11,0.82
			c0.56,0.55,0.84,1.32,0.85,2.32c0,1.22-0.3,2.08-0.91,2.57c-0.6,0.5-1.28,0.76-2.05,0.76c-0.79,0-1.49-0.26-2.07-0.78
			c-0.59-0.52-0.88-1.34-0.88-2.46c0-1.09,0.29-1.9,0.85-2.43C192.56,61.59,193.26,61.32,194.1,61.31L194.1,61.31z M194.1,66.93
			c0.61,0,1.07-0.22,1.39-0.66c0.32-0.44,0.48-1.03,0.48-1.75c0-0.78-0.18-1.36-0.54-1.75c-0.35-0.39-0.8-0.59-1.33-0.59
			c-0.54,0-0.98,0.2-1.33,0.6c-0.35,0.4-0.52,0.99-0.52,1.79c0,0.78,0.18,1.38,0.53,1.77C193.12,66.73,193.56,66.92,194.1,66.93
			L194.1,66.93z M194.1,66.93"
            />
            <path
              d="M204.23,67.65h-1.12c-0.1-0.2-0.17-0.45-0.22-0.76c-0.72,0.61-1.49,0.91-2.32,0.91c-0.66,0-1.19-0.17-1.57-0.49
			c-0.38-0.33-0.58-0.76-0.58-1.29c0-0.51,0.18-0.94,0.55-1.27c0.37-0.33,1.01-0.55,1.93-0.66l0.99-0.15
			c0.37-0.06,0.68-0.13,0.92-0.22c0-0.32-0.01-0.54-0.03-0.66c-0.02-0.13-0.07-0.27-0.17-0.41c-0.09-0.14-0.25-0.26-0.47-0.34
			c-0.22-0.08-0.5-0.12-0.86-0.13c-0.46,0-0.82,0.08-1.08,0.25c-0.27,0.17-0.45,0.48-0.55,0.94l-1.05-0.13
			c0.12-0.64,0.41-1.11,0.89-1.43c0.47-0.32,1.13-0.48,1.96-0.48c0.75,0,1.31,0.11,1.66,0.33c0.35,0.22,0.57,0.49,0.65,0.8
			c0.08,0.31,0.12,0.71,0.12,1.2v1.41c0,0.86,0.02,1.43,0.05,1.73C203.96,67.07,204.06,67.36,204.23,67.65L204.23,67.65z
			 M202.81,64.92v-0.38c-0.56,0.19-1.24,0.33-2.05,0.43c-0.81,0.1-1.21,0.44-1.21,1.01c0,0.29,0.11,0.52,0.33,0.7
			c0.22,0.19,0.53,0.28,0.94,0.28c0.53,0,0.99-0.15,1.39-0.46C202.61,66.19,202.81,65.67,202.81,64.92L202.81,64.92z M202.81,64.92"
            />
            <path
              fill="none"
              stroke="#000000"
              stroke-width="0.1228"
              d="M204.23,67.65h-1.12c-0.1-0.2-0.17-0.45-0.22-0.76
			c-0.72,0.6-1.49,0.91-2.32,0.91c-0.66,0-1.19-0.17-1.57-0.49c-0.38-0.32-0.58-0.76-0.58-1.29c0-0.51,0.18-0.94,0.55-1.26
			c0.37-0.33,1.01-0.55,1.93-0.66l0.99-0.15c0.37-0.06,0.68-0.13,0.92-0.22c0-0.32-0.01-0.54-0.03-0.67
			c-0.02-0.13-0.07-0.27-0.17-0.41c-0.09-0.14-0.25-0.26-0.47-0.34c-0.22-0.08-0.5-0.12-0.86-0.13c-0.46,0-0.82,0.08-1.08,0.25
			c-0.27,0.17-0.45,0.48-0.55,0.94l-1.05-0.13c0.12-0.64,0.41-1.11,0.89-1.43c0.47-0.32,1.13-0.48,1.96-0.48
			c0.75,0,1.31,0.11,1.66,0.33c0.35,0.22,0.57,0.49,0.65,0.8c0.08,0.32,0.12,0.71,0.12,1.2v1.41c0,0.86,0.02,1.43,0.05,1.73
			C203.96,67.07,204.06,67.36,204.23,67.65L204.23,67.65z M202.81,64.92v-0.38c-0.56,0.19-1.24,0.33-2.05,0.43
			c-0.81,0.1-1.21,0.44-1.21,1.01c0,0.29,0.11,0.52,0.33,0.7c0.22,0.19,0.53,0.27,0.94,0.28c0.53,0,0.99-0.15,1.39-0.46
			C202.61,66.19,202.81,65.67,202.81,64.92L202.81,64.92z M202.81,64.92"
            />
            <path
              d="M209.4,61.65l-0.36,0.96c-0.27-0.15-0.53-0.23-0.78-0.23c-0.4,0-0.7,0.18-0.91,0.53c-0.21,0.35-0.31,0.84-0.31,1.48v3.25
			h-1.07v-6.19h0.98v0.93h0.02c0.34-0.71,0.79-1.07,1.33-1.07C208.66,61.31,209.03,61.43,209.4,61.65L209.4,61.65z M209.4,61.65"
            />
            <path
              fill="none"
              stroke="#000000"
              stroke-width="0.1228"
              d="M209.4,61.65l-0.36,0.97c-0.27-0.15-0.53-0.23-0.78-0.23
			c-0.4,0-0.7,0.18-0.91,0.53c-0.21,0.35-0.31,0.84-0.31,1.48v3.25h-1.07v-6.19h0.98v0.93h0.02c0.34-0.72,0.79-1.07,1.34-1.07
			C208.66,61.31,209.03,61.43,209.4,61.65L209.4,61.65z M209.4,61.65"
            />
            <path
              d="M215.62,67.65h-1v-0.79h-0.02c-0.38,0.62-0.96,0.94-1.74,0.94c-0.77,0-1.41-0.3-1.93-0.9c-0.51-0.6-0.77-1.38-0.78-2.34
			c0-1,0.25-1.79,0.73-2.37c0.49-0.58,1.13-0.87,1.93-0.87c0.75,0,1.32,0.28,1.71,0.85h0.03v-3.07h1.07V67.65z M212.97,66.93
			c0.47,0,0.86-0.19,1.19-0.57c0.32-0.37,0.49-0.95,0.49-1.71c0-0.75-0.15-1.36-0.44-1.8c-0.3-0.45-0.72-0.67-1.28-0.67
			c-0.55,0-0.97,0.22-1.25,0.65c-0.28,0.44-0.42,1.01-0.43,1.73c0,0.51,0.08,0.95,0.23,1.3c0.15,0.35,0.37,0.63,0.64,0.81
			C212.39,66.84,212.68,66.93,212.97,66.93L212.97,66.93z M212.97,66.93"
            />
            <path
              fill="none"
              stroke="#000000"
              stroke-width="0.1228"
              d="M215.62,67.65h-1v-0.79h-0.02c-0.38,0.62-0.96,0.94-1.74,0.94
			c-0.77,0-1.41-0.3-1.93-0.9c-0.51-0.6-0.77-1.38-0.78-2.34c0-1,0.25-1.79,0.73-2.37c0.49-0.58,1.13-0.87,1.93-0.87
			c0.75,0,1.32,0.28,1.71,0.85h0.03v-3.07h1.07V67.65z M212.97,66.93c0.47,0,0.86-0.19,1.19-0.57c0.32-0.37,0.49-0.95,0.49-1.71
			c0-0.75-0.15-1.36-0.44-1.8c-0.3-0.45-0.72-0.67-1.28-0.67c-0.55,0-0.97,0.22-1.25,0.65c-0.28,0.44-0.42,1.01-0.43,1.73
			c0,0.51,0.08,0.95,0.23,1.3c0.15,0.35,0.37,0.63,0.64,0.81C212.39,66.84,212.68,66.93,212.97,66.93L212.97,66.93z M212.97,66.93"
            />
            <path d="M162.62,82.99h-4.72v2.65h4.09v1.01h-4.09v3.87h-1.15v-8.56h5.87V82.99z M162.62,82.99" />
            <path
              fill="none"
              stroke="#000000"
              stroke-width="0.1228"
              d="M162.62,82.99h-4.72v2.65h4.09v1.01h-4.09v3.87h-1.15v-8.56h5.87
			V82.99z M162.62,82.99"
            />
            <path
              d="M169.78,84.48c-0.04-0.55-0.25-0.96-0.6-1.23c-0.35-0.27-0.86-0.41-1.51-0.41c-0.6,0-1.08,0.11-1.45,0.33
			c-0.37,0.22-0.56,0.54-0.56,0.96c0,0.37,0.14,0.64,0.43,0.82c0.28,0.18,0.84,0.36,1.65,0.54c0.72,0.15,1.31,0.32,1.76,0.48
			c0.46,0.16,0.85,0.42,1.17,0.76c0.32,0.35,0.49,0.81,0.49,1.39c0,0.73-0.29,1.34-0.89,1.83c-0.6,0.49-1.37,0.73-2.33,0.73
			c-1.22,0-2.14-0.27-2.74-0.8c-0.61-0.54-0.93-1.24-0.97-2.09l1.09-0.09c0.05,0.68,0.32,1.18,0.81,1.49
			c0.48,0.31,1.07,0.47,1.76,0.47c0.65,0,1.16-0.13,1.56-0.39c0.39-0.26,0.59-0.62,0.59-1.06c0-0.47-0.21-0.81-0.62-1.02
			c-0.42-0.22-1.11-0.43-2.09-0.63c-0.97-0.21-1.68-0.5-2.12-0.88c-0.43-0.38-0.65-0.87-0.64-1.47c0-0.68,0.27-1.25,0.82-1.7
			c0.55-0.45,1.29-0.67,2.23-0.67c0.96,0,1.74,0.22,2.33,0.66c0.59,0.44,0.9,1.08,0.93,1.9L169.78,84.48z M169.78,84.48"
            />
            <path
              fill="none"
              stroke="#000000"
              stroke-width="0.1228"
              d="M169.78,84.48c-0.04-0.55-0.25-0.96-0.6-1.23
			c-0.35-0.27-0.86-0.41-1.51-0.41c-0.6,0-1.08,0.11-1.45,0.32c-0.37,0.22-0.56,0.54-0.56,0.96c0,0.37,0.14,0.64,0.43,0.82
			c0.28,0.18,0.84,0.36,1.65,0.54c0.72,0.15,1.31,0.31,1.76,0.48c0.46,0.16,0.85,0.42,1.17,0.76c0.32,0.35,0.49,0.81,0.49,1.39
			c0,0.73-0.29,1.34-0.89,1.83c-0.6,0.49-1.37,0.73-2.33,0.73c-1.22,0-2.14-0.26-2.74-0.8c-0.61-0.54-0.93-1.24-0.97-2.09l1.09-0.09
			c0.05,0.68,0.32,1.18,0.81,1.49c0.48,0.31,1.07,0.47,1.76,0.47c0.65,0,1.16-0.13,1.56-0.39c0.39-0.26,0.59-0.62,0.59-1.06
			c0-0.47-0.21-0.81-0.62-1.02c-0.42-0.22-1.11-0.43-2.09-0.63c-0.97-0.21-1.68-0.5-2.12-0.88c-0.43-0.38-0.65-0.87-0.64-1.47
			c0-0.69,0.27-1.25,0.82-1.7c0.55-0.45,1.29-0.67,2.23-0.67c0.96,0,1.74,0.22,2.33,0.67c0.59,0.44,0.9,1.08,0.93,1.9L169.78,84.48z
			 M169.78,84.48"
            />
            <path
              d="M180.57,87.82c-0.26,0.96-0.69,1.67-1.32,2.15c-0.63,0.47-1.39,0.71-2.27,0.71c-1.42,0-2.46-0.43-3.11-1.31
			c-0.65-0.88-0.98-1.93-0.98-3.17c0-1.36,0.38-2.43,1.15-3.2c0.76-0.77,1.75-1.16,2.96-1.16c0.85,0,1.57,0.21,2.17,0.63
			c0.6,0.42,1.02,1.04,1.27,1.86l-1.13,0.26c-0.19-0.6-0.48-1.04-0.87-1.34c-0.38-0.3-0.87-0.45-1.45-0.45
			c-0.95,0-1.67,0.31-2.16,0.92c-0.49,0.61-0.73,1.43-0.73,2.47c0,1.19,0.26,2.07,0.77,2.65c0.51,0.58,1.19,0.87,2.02,0.87
			c0.68,0,1.23-0.18,1.65-0.55c0.42-0.36,0.72-0.91,0.9-1.63L180.57,87.82z M180.57,87.82"
            />
            <path
              fill="none"
              stroke="#000000"
              stroke-width="0.1228"
              d="M180.57,87.82c-0.26,0.96-0.69,1.67-1.32,2.15
			c-0.63,0.47-1.39,0.71-2.27,0.71c-1.42,0-2.46-0.43-3.11-1.31c-0.65-0.88-0.98-1.93-0.98-3.17c0-1.36,0.38-2.43,1.15-3.2
			c0.76-0.77,1.75-1.16,2.96-1.16c0.85,0,1.57,0.21,2.17,0.64c0.6,0.42,1.02,1.04,1.27,1.86l-1.13,0.26
			c-0.19-0.6-0.48-1.04-0.87-1.34c-0.38-0.3-0.87-0.45-1.45-0.45c-0.95,0-1.67,0.31-2.16,0.92c-0.49,0.61-0.73,1.43-0.73,2.47
			c0,1.19,0.26,2.07,0.77,2.65c0.51,0.58,1.19,0.87,2.02,0.87c0.68,0,1.23-0.18,1.65-0.55c0.42-0.36,0.72-0.91,0.9-1.63
			L180.57,87.82z M180.57,87.82"
            />
            <path
              d="M183.82,81.92c0.61,0,1.14,0.21,1.58,0.64c0.44,0.43,0.66,0.95,0.66,1.55c0,0.6-0.22,1.12-0.65,1.56
			c-0.44,0.43-0.97,0.65-1.58,0.65c-0.62,0-1.15-0.22-1.59-0.65c-0.44-0.43-0.66-0.95-0.66-1.56c0-0.61,0.22-1.12,0.66-1.55
			C182.68,82.14,183.21,81.92,183.82,81.92L183.82,81.92z M183.82,85.96c0.51,0,0.95-0.18,1.31-0.54c0.37-0.36,0.55-0.8,0.55-1.3
			c0-0.5-0.18-0.94-0.55-1.29c-0.36-0.36-0.81-0.54-1.32-0.54c-0.52,0-0.96,0.18-1.32,0.54c-0.36,0.35-0.55,0.79-0.55,1.29
			c0,0.51,0.18,0.94,0.54,1.3C182.86,85.78,183.3,85.96,183.82,85.96L183.82,85.96z M184.86,85.34h-0.48
			c-0.29-0.54-0.49-0.84-0.58-0.91c-0.09-0.06-0.21-0.1-0.34-0.1h-0.23v1h-0.39v-2.37h0.83c0.25,0,0.44,0.02,0.58,0.05
			c0.13,0.03,0.25,0.11,0.33,0.22c0.08,0.11,0.13,0.24,0.13,0.37c0,0.16-0.06,0.31-0.18,0.44c-0.12,0.13-0.29,0.21-0.51,0.22v0.01
			c0.14,0.03,0.33,0.23,0.56,0.59L184.86,85.34z M183.23,84h0.47c0.22,0,0.37-0.03,0.45-0.09c0.09-0.06,0.13-0.15,0.13-0.27
			c0-0.11-0.04-0.2-0.12-0.26c-0.08-0.06-0.25-0.09-0.49-0.09h-0.44V84z M183.23,84"
            />
            <path
              fill="none"
              stroke="#000000"
              stroke-width="0.0614"
              d="M183.82,81.92c0.61,0,1.14,0.21,1.58,0.64
			c0.44,0.43,0.66,0.95,0.66,1.55c0,0.61-0.22,1.12-0.65,1.56c-0.44,0.43-0.97,0.65-1.58,0.65c-0.62,0-1.15-0.22-1.59-0.64
			c-0.44-0.43-0.66-0.95-0.66-1.56c0-0.61,0.22-1.12,0.66-1.55C182.68,82.14,183.21,81.92,183.82,81.92L183.82,81.92z M183.82,85.96
			c0.51,0,0.95-0.18,1.31-0.54c0.37-0.36,0.55-0.8,0.55-1.3c0-0.5-0.18-0.94-0.55-1.29c-0.36-0.35-0.81-0.54-1.32-0.54
			c-0.52,0-0.96,0.18-1.32,0.54c-0.36,0.35-0.55,0.79-0.55,1.29c0,0.51,0.18,0.94,0.54,1.3C182.86,85.78,183.3,85.96,183.82,85.96
			L183.82,85.96z M184.86,85.34h-0.48c-0.29-0.54-0.49-0.84-0.58-0.91c-0.09-0.06-0.21-0.1-0.34-0.1h-0.23v1h-0.39v-2.37h0.83
			c0.25,0,0.44,0.02,0.58,0.05c0.13,0.03,0.25,0.11,0.33,0.22c0.08,0.11,0.13,0.24,0.13,0.36c0,0.16-0.06,0.31-0.18,0.44
			c-0.12,0.13-0.29,0.21-0.51,0.22v0.01c0.14,0.03,0.33,0.23,0.56,0.59L184.86,85.34z M183.23,84h0.47c0.22,0,0.37-0.03,0.45-0.09
			c0.09-0.06,0.13-0.15,0.13-0.27c0-0.11-0.04-0.2-0.12-0.26c-0.08-0.06-0.25-0.09-0.49-0.09h-0.44V84z M183.23,84"
            />
          </g>
          <g>
            <path
              d="M193.37,90.59h-1.43l3.11-4.51l-2.92-4.28h1.48l2.22,3.36l2.2-3.36h1.41l-2.92,4.28l3.06,4.51h-1.47l-2.34-3.62
			L193.37,90.59z"
            />
            <path
              d="M201.55,90.59h-1.43l3.11-4.51l-2.92-4.28h1.48l2.22,3.36l2.2-3.36h1.41l-2.92,4.28l3.06,4.51h-1.47l-2.34-3.62
			L201.55,90.59z"
            />
            <path
              d="M209.73,90.59h-1.43l3.11-4.51l-2.92-4.28h1.49l2.22,3.36l2.2-3.36h1.41l-2.92,4.28l3.06,4.51h-1.47l-2.34-3.62
			L209.73,90.59z"
            />
            <path
              d="M217.9,90.59h-1.43l3.11-4.51l-2.92-4.28h1.48l2.22,3.36l2.2-3.36h1.41l-2.92,4.28l3.06,4.51h-1.47l-2.34-3.62
			L217.9,90.59z"
            />
            <path
              d="M226.08,90.59h-1.43l3.11-4.51l-2.92-4.28h1.48l2.22,3.36l2.2-3.36h1.41l-2.92,4.28l3.06,4.51h-1.47l-2.34-3.62
			L226.08,90.59z"
            />
            <path
              d="M234.26,90.59h-1.43l3.11-4.51l-2.92-4.28h1.49l2.22,3.36l2.2-3.36h1.41l-2.92,4.28l3.06,4.51h-1.47l-2.34-3.62
			L234.26,90.59z"
            />
          </g>
        </g>
        <g>
          <rect
            x="77.1"
            y="16.87"
            fill="none"
            stroke="#009FE3"
            stroke-width="0.5"
            width="409.47"
            height="808.16"
          />
          <path
            fill="none"
            stroke="#009FE3"
            stroke-width="0.5"
            d="M297.99,74.8c0,8.93-7.24,16.16-16.17,16.16
		c-8.92,0-16.16-7.24-16.16-16.16c0-8.93,7.23-16.16,16.16-16.16C290.75,58.64,297.99,65.88,297.99,74.8z"
          />
        </g>
        <line
          fill="none"
          stroke="#009640"
          stroke-width="0.5"
          stroke-dasharray="1.9501,1.9501,1.9501"
          x1="77.1"
          y1="706.59"
          x2="486.56"
          y2="706.59"
        />
      </svg>
      <p className="my-6">Quantity Required:{quantity}</p>
      <button
        className="text-sm bg-orange-500 px-2 py-1 my-5 rounded text-white"
        onClick={downloadSVG}
      >
        Download
      </button>
    </div>
  );
};

export default BackSvg;
