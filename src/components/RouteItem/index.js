import React from 'react';
import { ComputerIcon } from '../../design/icons/Drawer';
import SVG from '../../design/SVG';
import { RouteItemWrapper } from './styles';

const RouteItem = (props) => {
    const { Icon, active = false, ...rest } = props;
    return (
        <RouteItemWrapper active={active}> 
            <Icon class="w-[22px] h-[22px]"></Icon>
        </RouteItemWrapper>
    );
};

export default RouteItem;