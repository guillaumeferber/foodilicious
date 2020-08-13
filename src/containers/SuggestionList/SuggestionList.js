import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import { Card, Title } from '../../components';

class SuggestionList extends Component {

    renderTitle(title) {
        let char = title.indexOf('(') > -1 ? '(' : '{';
        return title.split(char)[0];
    }

    renderSimilarItems (array) {
        if (!array) {
            return ( <h5>Sorry, no similar items have been found</h5> )
        }
        return this.props.similar.map((recipe, idx) =>  (
            <Card className="card" size="medium" variant="primary" key={`${recipe.id}_${idx}`}>
                <main>{this.renderTitle(recipe.title)}</main>
                <footer>{recipe.readyInMinutes}mn Cooktime</footer>
            </Card>
        ))
    }

    render() {

        return (
            <Aux>
                <Title level="2" className="u-m-t-lg">More delicious <b>treats</b>...</Title>
                <div className="SuggestionList">
                    {this.renderSimilarItems(this.props.similar)}
                </div>
            </Aux>
         );
    }
}

export default SuggestionList;
