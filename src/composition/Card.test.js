import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card.js';
import renderer from 'react-test-renderer';
import STORE from './store';

describe('Card component', () => {
    it('renders without crashing', () => {
        const a = STORE.lists[0].cardIds;
        const div = document.createElement('div');
        ReactDOM.render(<Card cardIds={a} /> , div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the UI as expected', () => {
        const a = STORE.lists[0].cardIds;
        const tree = renderer
            .create(<Card cardIds={a} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

})