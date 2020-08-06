import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import { Card } from '../../components';


class SuggestionList extends Component {
    render() {
        return (
            <Aux>
                <div className="SuggestionList">
                    <Card size="medium" variant="primary">Card #1</Card>
                    <Card size="medium" variant="primary">Card #2</Card>
                    <Card size="medium" variant="primary">Card #3</Card>
                    <Card size="medium" variant="primary">Card #4</Card>
                    <Card size="medium" variant="primary">Card #5</Card>
                    <Card size="medium" variant="primary">Card #6</Card>
                </div>
            </Aux>
         );
    }
}

export default SuggestionList;
