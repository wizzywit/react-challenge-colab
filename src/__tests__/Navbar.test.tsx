import React from 'react';
import Enzyme, {mount} from 'enzyme';
import {Context} from "../context/Context";
import Card from "../components/Card";
import {Priority} from "../Api";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Navbar from "../components/Navbar";

Enzyme.configure({ adapter: new Adapter() });

beforeEach(() => {
    jest.resetModules();
});

describe('<Navbar/>', () => {
    test(`should display the header title "Coding Challenge"`, () => {
        const wrapper = mount(<Navbar/>)
        expect(wrapper.find('h1').text()).toEqual('Coding Challenge')
    })
})
