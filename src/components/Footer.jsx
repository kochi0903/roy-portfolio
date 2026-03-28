import React from "react";

const Footer = () => {
  return (
    <footer className="bg-base-200 py-12 border-t border-base-300">
      <div className="container mx-auto px-4 text-center">
        <div className="text-primary font-black text-2xl mb-6 tracking-tighter">
          KR
        </div>
        <p className="text-base-content/60 text-xs tracking-widest uppercase">
          &copy; {new Date().getFullYear()} Kisholoy Roy.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
