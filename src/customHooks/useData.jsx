import React, { createContext, useState } from "react";
const MyContext = createContext();
const MyContextProvider = ({ children }) => {
	const [jsonData, setJsonData] = useState(null);
	const [xmlData, setXmlData] = useState("");
	const handleFileSelect = async (event) => {
		const file = event.target.files[0];
		const fileReader = new FileReader();
		fileReader.readAsText(file);
		fileReader.onload = async () => {
			const data = fileReader.result;
			setXmlData(data);
			// gives the whole xmldata
			// console.log(xmlData);
			const parser = new DOMParser();
			const xmlDoc = parser.parseFromString(data, "text/xml");
			const json = xmlToJson(xmlDoc);
			setJsonData(json);
			// console.log(jsonData);
		};
	};
	const xmlToJson = (xml) => {
		const obj = {};
		if (xml.nodeType === 1) {
			if (xml.attributes.length > 0) {
				obj["@attributes"] = {};
				for (let i = 0; i < xml.attributes.length; i++) {
					const attribute = xml.attributes.item(i);
					obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
				}
			}
		} else if (xml.nodeType === 3) {
			obj["#text"] = xml.nodeValue;
		}
		if (xml.hasChildNodes()) {
			for (let i = 0; i < xml.childNodes.length; i++) {
				const item = xml.childNodes.item(i);
				const nodeName = item.nodeName;
				if (typeof obj[nodeName] === "undefined") {
					obj[nodeName] = xmlToJson(item);
				} else {
					if (typeof obj[nodeName].push === "undefined") {
						const old = obj[nodeName];
						obj[nodeName] = [];
						obj[nodeName].push(old);
					}
					obj[nodeName].push(xmlToJson(item));
				}
			}
		}
		return obj;
	};
	const item = jsonData?.purchase_order?.po_line_item;

	const items = {
		handleFileSelect,
		item,
	};
	return <MyContext.Provider value={items}>{children}</MyContext.Provider>;
};

export { MyContext, MyContextProvider };
