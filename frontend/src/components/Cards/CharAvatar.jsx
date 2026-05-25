import React from "react";

const getInitials = (name) => {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();
};

const CharAvatar = ({
  fullName = "",
  width = "w-12",
  height = "h-12",
  style = "",
}) => {
  return (
    <div
      className={`${width} ${height} ${style} flex items-center justify-center rounded-full text-gray-900 font-medium bg-gray-100`}
    >
      {getInitials(fullName)}
    </div>
  );
};
export default CharAvatar;