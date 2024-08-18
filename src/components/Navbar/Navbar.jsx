import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Dropdown.css"; // Import the CSS file

const Navbar = () => {
	const navigate = useNavigate();
	const handleOnClick = () => {
		localStorage.removeItem("user");
		navigate("/login");
	};
	return (
		<nav className="bg-gray-800">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="flex items-center">
						<div className="flex-shrink-0">
							<span className="text-white text-lg font-semibold">Montrims</span>
						</div>
						<div className="hidden md:block">
							<div className="dropdown">
								<button className="dropbtn text-white ms-5">Matalan</button>
								<div className="dropdown-content">
									{/* <Link to="/layout02">Easy</Link>
									<Link to="/CKIDB02JRF">CKIDB02JRF</Link> */}
									<Link
										to="/layout02"
										className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
									>
										Easy
									</Link>
									{/* <Link
				to="/layout03"
				className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
			>
				layout03
			</Link> */}
									<Link
										to="/CKIDB02JRF"
										className="text-gray-300 hover:bg-gray-700  block px-3 py-2 rounded-md text-base font-medium"
									>
										CKIDB02JRF
									</Link>
									<Link
										to="/CKIDBBC01OCJRF"
										className="text-gray-300 hover:bg-gray-700  block px-3 py-2 rounded-md text-base font-medium"
									>
										CKIDBBC01OCJRF
									</Link>
									<Link
										to="/CKIDG01JRF"
										className="text-gray-300 hover:bg-gray-700  block px-3 py-2 rounded-md text-base font-medium"
									>
										CKIDG01JRF
									</Link>
									<Link
										to="/CKIDGBCI01JRF"
										className="text-gray-300 hover:bg-gray-700  block px-3 py-2 rounded-md text-base font-medium"
									>
										CKIDGBCI01JRF
									</Link>
									<Link
										to="/LKIDBBCI01JRF"
										className="text-gray-300 hover:bg-gray-700  block px-3 py-2 rounded-md text-base font-medium"
									>
										LKIDBBCI01JRF
									</Link>
									<Link
										to="/LKIDGBCI01ORF"
										className="text-gray-300 hover:bg-gray-700  block px-3 py-2 rounded-md text-base font-medium"
									>
										LKIDGBCI01ORF
									</Link>
									<Link
										to="/YSE02CRF"
										className="text-gray-300 hover:bg-gray-700  block px-3 py-2 rounded-md text-base font-medium"
									>
										YSE02CRF
									</Link>
									<Link
										to="/YSEBCI01CRF"
										className="text-gray-300 hover:bg-gray-700  block px-3 py-2 rounded-md text-base font-medium"
									>
										YSEBCI01CRF
									</Link>
									<Link
										to="/PYWOMLBCI01LRF"
										className="text-gray-300 hover:bg-gray-700  block px-3 py-2 rounded-md text-base font-medium"
									>
										PYWOMLBCI01LRF
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div>
						<div className="text-white cursor-pointer" onClick={handleOnClick}>
							Logout
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
