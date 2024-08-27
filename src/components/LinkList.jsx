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
    { to: "/SLX01CJRF", label: "SLX01CJRF" },
    { to: "/SLX02CJRF", label: "SLX02CJRF" },
    { to: "/SLX01JRF", label: "SLX01JRF" },
    { to: "/SLX02JRF", label: "SLX02JRF" },
    { to: "/LNCBCI01CRF", label: "LNCBCI01CRF" },
    { to: "/LNCBCI02CRF", label: "LNCBCI02CRF" },
    { to: "/BABABCI01ORRF", label: "BABABCI01ORRF" },
    { to: "/BABABCI02ORRF", label: "BABABCI02ORRF" },
    { to: "/BABABCI01ORF", label: "BABABCI01ORF" },
    { to: "/BABABCI02ORF", label: "BABABCI02ORF" },
    { to: "/BABABCI01CRF", label: "BABABCI01CRF" },
    { to: "/BABABCI02CRF", label: "BABABCI02CRF" },
    { to: "/CKIDBBCI01ORF", label: "CKIDBBCI01ORF" },
    { to: "/CKIDBBCI02ORF", label: "CKIDBBCI02ORF" },
    { to: "/CKIDBBCI02JRF", label: "CKIDBBCI02JRF" },
    { to: "/CKIDBBCI01CRF", label: "CKIDBBCI01CRF" },
    { to: "/CKIDBBCI02CRF", label: "CKIDBBCI02CRF" },
    { to: "/LKIDBBCI02JRF", label: "LKIDBBCI02JRF" },
    { to: "/LKIDBBCI01CRF", label: "LKIDBBCI01CRF" },
    { to: "/LKIDBBCI02CRF", label: "LKIDBBCI02CRF" },
    { to: "/LKIDGBCI02ORF", label: "LKIDGBCI02ORF" },

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