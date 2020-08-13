import React, { Component } from 'react';
import Aux from '../../../hoc/Aux/Aux';
import RecipeDescription from './RecipeDescription/RecipeDescription';
import RecipeIngredients from './RecipeIngredients/RecipeIngredients';
import RecipeNutrition from './RecipeNutrition/RecipeNutrition';
import RecipeCTA from './RecipeCTA/RecipeCTA';
import RecipeImage from './RecipeImage/RecipeImage';
import { Modal } from '../../../components';
import ReactHtmlParser from 'react-html-parser';
class Recipe extends Component {
    state = {
        showModal: false
    }

    toggleModal = (e) => {
        this.setState({showModal: e});
        console.log(this.state.showModal)
    }

    render() {
        return (
            <Aux>
                <div className="Recipe">
                    <Modal
                        show={this.state.showModal}
                        modalClosed={() => this.setState({showModal: false})}>{ReactHtmlParser(this.props.recipe.instructions)}</Modal>
                    <RecipeDescription description={{title: this.props.recipe.title, summary: this.props.recipe.summary}} />
                    <RecipeIngredients ingredients={this.props.recipe.extendedIngredients} />
                    <RecipeNutrition nutrition={this.props.recipe.nutrition} />
                    <RecipeCTA showModal={this.toggleModal} modalShow={this.state.showModal}/>
                    {/* <RecipeImage image={this.props.recipe.image} /> */}
                    <RecipeImage image={this.props.recipe.image} />

                </div>
            </Aux>
         );
    }
}

export default Recipe;
