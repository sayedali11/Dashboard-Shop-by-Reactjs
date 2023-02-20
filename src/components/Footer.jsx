import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="mt-24">
      <p className="dark:text-gray-200 text-gray-700 text-center m-20">
        &copy; {year} - All rights reserved by Sayed Ali
      </p>
    </div>
  );
};

export default Footer;
