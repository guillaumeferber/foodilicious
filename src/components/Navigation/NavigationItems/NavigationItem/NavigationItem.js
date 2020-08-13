import React from 'react';
import { NavLink } from 'react-router-dom';


const navigationItem = ( props ) =>{
    if (props.link) {
        return (
            <li className="NavigationItem">
                <NavLink
                    to={props.link}
                    exact={props.exact}
                    activeClassName="active">{props.children}</NavLink>
            </li>
        )
    } else if(props.filter) {
        return (
            <li className="NavigationItem">
                <a
                    onClick={() => props.clicked(props.filter)}
                    className={props.active.toLowerCase() === props.children.toLowerCase() ? 'active' : ''}>{props.children}</a>
            </li>
        )
    }
};

export default navigationItem;
