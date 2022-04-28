import React, { useState } from "react";
import SVG from "design/SVG";

import { LogoWrapper, NavDrawerWrapper, RoutesList } from "./styles";
import RouteItem from "components/RouteItem";
import {
  BellIcon2,
  BoardIcon,
  BrandIcon,
  CartIcon,
  CompleteIcon,
  ComputerIcon,
  DashboardIcon,
  EmployeeIcon,
  GiftIcon,
  HouseIcon,
  LogoutIcon,
  RefundIcon,
  SettingIcon,
  ShakinghandIcon,
  StorageIcon,
  TagIcon,
  TruckIcon,
} from "../../design/icons/Drawer";

const NavDrawer = (props) => {
  const { isOpenNavDrawer } = props;
  const listRoutes = [
    {
      id: 1,
      icon: ComputerIcon,
      active: true
    },
    {
      id: 2,
      icon: DashboardIcon,
    },
    {
      id: 3,
      icon: CartIcon,
    },
    {
      id: 4,
      icon: StorageIcon,
    },
    {
      id: 5,
      icon: GiftIcon,
    },
    {
      id: 5,
      icon: BoardIcon,
    },
    {
      id: 6,
      icon: BrandIcon,
    },
    {
      id: 7,
      icon: HouseIcon,
    },
    {
      id: 8,
      icon: ShakinghandIcon,
    },
    {
      id: 9,
      icon: EmployeeIcon,
    },
    {
      id: 10,
      icon: TagIcon,
    },
    {
      id: 11,
      icon: RefundIcon,
    },
    {
      id: 11,
      icon: TruckIcon,
    },
    {
      id: 12,
      icon: CompleteIcon,
    },
    {
      id: 13,
      icon: BellIcon2,
    },
    {
      id: 14,
      icon: SettingIcon,
    },
    {
      id: 15,
      icon: LogoutIcon,
    },
  ];
  
  return (
    <NavDrawerWrapper isShow={isOpenNavDrawer}>
      <LogoWrapper>
        <SVG name="logo" className="w-[36px] h-[36px]"></SVG>
      </LogoWrapper>
      <RoutesList>
        {listRoutes.map((item) => (
          <RouteItem active={item?.active} key={item.id} Icon={item.icon} />
        ))}
      </RoutesList>
    </NavDrawerWrapper>
  );
};

export default NavDrawer;
