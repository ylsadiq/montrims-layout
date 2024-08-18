import React, { useContext } from "react";
import { MyContext } from "../../customHooks/useData";
import DataView from "../../routes/DataView";

const Upload = () => {
	const { item, handleFileSelect } = useContext(MyContext);
	// console.log(item);

	return (
		<div className="text-center">
			<h2 className="flex justify-center text-3xl p-2 font-bold text-orange-600 mb-3">
				Please upload xml file
			</h2>
			<input
				type="file"
				name="file"
				onChange={(e) => handleFileSelect(e)}
				accept="text/xml"
				className="my-3"
			/>
			<hr />
			<DataView item={item} />
			{/* <BarcodeCard jsonData={jsonData} /> */}
		</div>
	);
};

export default Upload;
