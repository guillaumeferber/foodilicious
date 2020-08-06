import React, { Component }  from 'react';
import Aux from '../Aux/Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideToolbar from '../../components/Navigation/SideToolbar/SideToolbar';
import Title from '../../components/UI/Title/Title';
import Recipe from '../../containers/Recipe/Recipe';
import SuggestionList from '../../containers/SuggestionList/SuggestionList';
class Layout extends Component {
    state = {
        showSideDrawer: false
     }

    render() {
        return (
            <Aux>
                <main className="u-shadow u-shadow--smooth">
                    <div>
                        <Title level="1">Foodilicious</Title>
                        <div className="c-row">
                            <div className="c-col-2">
                                <SideToolbar />
                            </div>
                            <div className="c-col-10">
                                <Toolbar />
                                <Recipe />
                                <SuggestionList />
                            </div>
                        </div>
                    </div>
                </main>
            </Aux>
         );
    }
}

export default Layout;
