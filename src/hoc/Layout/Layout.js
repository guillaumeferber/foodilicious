import React, { Component }  from 'react';
import Aux from '../Aux/Aux';
import Title from '../../components/UI/Title/Title';
import RecipeManager from '../../containers/RecipeManager/RecipeManager';
class Layout extends Component {
    state = {
        showSideDrawer: false
     }

    render() {
        return (
            <Aux>
                <div className="main u-shadow u-shadow--natural">
                    <div>
                        <Title level="1">Foodilicious</Title>
                        <RecipeManager />
                    </div>
                </div>
            </Aux>
         );
    }
}

export default Layout;
