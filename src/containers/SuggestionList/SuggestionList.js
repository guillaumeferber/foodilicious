import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import { Card, Title } from '../../components';

class SuggestionList extends Component {
    render() {
        return (
            <Aux>
                <Title level="2" className="u-m-t-lg">More delicious <b>treats</b>...</Title>
                <div className="SuggestionList">
                    <Card className="card" size="medium" variant="primary">
                        <header>
                            <img src="" alt="" />
                        </header>
                        <main>Swedish deer</main>
                        <footer>30mn Cooktime</footer>
                    </Card>
                    <Card className="card" size="medium" variant="primary">
                        <header>
                            <img src="" alt="" />
                        </header>
                        <main>Swedish deer</main>
                        <footer>30mn Cooktime</footer>
                    </Card>
                    <Card className="card" size="medium" variant="primary">
                        <header>
                            <img src="" alt="" />
                        </header>
                        <main>Swedish deer</main>
                        <footer>30mn Cooktime</footer>
                    </Card>
                    <Card className="card" size="medium" variant="primary">
                        <header>
                            <img src="" alt="" />
                        </header>
                        <main>Swedish deer</main>
                        <footer>30mn Cooktime</footer>
                    </Card>
                    <Card className="card" size="medium" variant="primary">
                        <header>
                            <img src="" alt="" />
                        </header>
                        <main>Swedish deer</main>
                        <footer>30mn Cooktime</footer>
                    </Card>
                    <Card className="card" size="medium" variant="primary">
                        <header>
                            <img src="" alt="" />
                        </header>
                        <main>Swedish deer</main>
                        <footer>30mn Cooktime</footer>
                    </Card>
                </div>
            </Aux>
         );
    }
}

export default SuggestionList;
