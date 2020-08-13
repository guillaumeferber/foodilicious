import React, { Component } from 'react';
import Aux from '../../../../hoc/Aux/Aux';
import { Button } from '../../../../components';
import { Bookmark } from 'react-feather';

class RecipeCTA extends Component {

    state = {
        showModal: true
    }

    render() {
        return (
            <Aux>
                <Button variant="primary" onClick={() => this.props.showModal(this.state.showModal)}>Instructions</Button>
                <Button variant="tertiary">
                    <div className="Button__icon"><Bookmark /></div>
                    <div>Add to favorites</div>
                </Button>
            </Aux>
         );
    }
}

export default RecipeCTA;
