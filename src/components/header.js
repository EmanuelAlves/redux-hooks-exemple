import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const name = useSelector(state => state.nameReducer.newValue);
  return <div>Name: {name}</div>;
};

export default Header;
