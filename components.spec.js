import React from 'react'
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { BeerListContainer, BeerList, InputArea } from './components'

describe('BeerListContainer', () => {
    
    it('should render InputArea and BeerList', () => {
        const wrapper = shallow(<BeerListContainer/>);
        expect(wrapper.containsAllMatchingElements([
            <InputArea/>,
            <BeerList/>
        ])).to.equal(true);
    });
    
    it('should start with an empty list', () => {
        const wrapper = shallow(<BeerListContainer/>);
        expect(wrapper.state('beers')).to.eql([]);
    });
    
    it('adds items to list', () => {
        const wrapper = shallow(<BeerListContainer/>);
        wrapper.addItem('yonayona');
        expect(wrapper.state('beers')).to.eql(['yonayona']);
    });
    
});
