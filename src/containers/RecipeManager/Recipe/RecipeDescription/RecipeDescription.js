import React from 'react';
import { Title } from '../../../../components';
import './_RecipeDescription.scss';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

const recipeDescription = (props) => {
    return (
        <div className="RecipeDescription">
            <Title level="2">{props.description.title}</Title>
            <p>{ReactHtmlParser(props.description.summary)}</p>
        </div>
        );
}

export default recipeDescription;
