import React from 'react';
import { Link } from 'react-router-dom';

const NavLink = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
    >
      {children}
    </Link>
  );
};

const LinkList = () => {
  const links = [
    { to: "/CKIDB02JRF", label: "CKIDB02JRF" },
    { to: "/CKIDBBCI01JRF", label: "CKIDBBCI01JRF" },
    { to: "/CKIDG01JRF", label: "CKIDG01JRF" },
    { to: "/CKIDGBCI01JRF", label: "CKIDGBCI01JRF" },
    { to: "/LKIDBBCI01JRF", label: "LKIDBBCI01JRF" },
    { to: "/LKIDGBCI01ORF", label: "LKIDGBCI01ORF" },
    { to: "/YSE02CRF", label: "YSE02CRF" },
    { to: "/LKIDBBCI01ORF", label: "LKIDBBCI01ORF" },
    { to: "/YSEBCI01CRF", label: "YSEBCI01CRF" },
    { to: "/DISBCI01ORRF", label: "DISBCI01ORRF" },
    { to: "/DISBCI02ORRF", label: "DISBCI02ORRF" },
    { to: "/DISBCI01ORF", label: "DISBCI01ORF" },
    { to: "/DISBCI02ORF", label: "DISBCI02ORF" },
    { to: "/DISBCI01JRF", label: "DISBCI01JRF" },
    { to: "/DISBCI02JRF", label: "DISBCI02JRF" },
    { to: "/DISBCI01CRF", label: "DISBCI01CRF" },
    { to: "/DISBCI02CRF", label: "DISBCI02CRF" },
    { to: "/SLX01CRF", label: "SLX01CRF" },
    { to: "/SLX02CRF", label: "SLX02CRF" },
    { to: "/SLX01LRF", label: "SLX01LRF" },
    { to: "/SLX02LRF", label: "SLX02LRF" },
  ];

  return (
    <div>
      {links.map((link, index) => (
        <NavLink key={index} to={link.to}>
          {link.label}
        </NavLink>
      ))}
    </div>
  );
};

export default LinkList;