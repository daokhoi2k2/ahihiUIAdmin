import React, { useRef } from "react";
import { Account, NavHeaderControl, NavHeaderWrapper } from "./styles";
import SVG from "design/SVG";

const NavHeader = (props) => {
  const { setIsOpenNavDrawer, setIsShowChart } = props;
  const timer = useRef();
  const handleClickShowNavDrawer = () => {
    setIsOpenNavDrawer((state) => !state);
    setIsShowChart(false)

    clearInterval(timer.current);
    timer.current = setTimeout(() => {
      setIsShowChart(true)
    }, 1000);
  };
  return (
    <NavHeaderWrapper>
      <SVG onClick={handleClickShowNavDrawer} name="bar" className="mid:order-3" />
      <SVG name="logo" className="mid:order-1" />
      <NavHeaderControl className="mid:order-2">
        <SVG name="bell" />
        <Account>
          <SVG name="account" />
        </Account>
      </NavHeaderControl>
    </NavHeaderWrapper>
  );
};

export default NavHeader;
