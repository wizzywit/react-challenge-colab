import React from 'react';
import Enzyme, {mount, ReactWrapper} from 'enzyme';
import {Context} from "../context/Context";
import Card from "../components/Card";
import {Priority} from "../Api";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });


beforeEach(() => {
    jest.resetModules();
});

const contextValues ={
    removeMessage: jest.fn()
}

describe('<Card/>', () => {
    let wrapper: ReactWrapper;
    beforeEach(() => {
        wrapper = mount(<Context.Provider value={contextValues}><Card priority={Priority.Error} message="Message"/></Context.Provider>)

    })
    test('should display card properly', () => {
        expect(wrapper.find('p').text()).toEqual("Message")
        expect(wrapper.prop('priority')).toEqual(0)
    })
    test('should call the remove function when clear button is clicked to delete message', () => {
        wrapper.find('button').simulate('click')
        expect(contextValues.removeMessage).toHaveBeenCalled()
    })
})
