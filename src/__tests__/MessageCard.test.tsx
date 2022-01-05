import React from 'react';
import Enzyme, {mount} from 'enzyme';
import {Context} from "../context/Context";
import Card from "../components/Card";
import {Priority} from "../Api";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import MessageCard from "../components/MessageCard";

Enzyme.configure({ adapter: new Adapter() });


beforeEach(() => {
    jest.resetModules();
});

const contextValues ={
    getMessages: jest.fn()
}

describe('<Card/>', () => {
    test('should display message columns', () => {
        const wrapper = mount(<Context.Provider value={contextValues}><MessageCard priority={Priority.Error} title="Some Title"/></Context.Provider>)
        expect(wrapper.find('h2').text()).toEqual("Some Title")
        expect(wrapper.prop('priority')).toEqual(0)
    })
    test('should display all messages associated with that column', () => {
        mount(<Context.Provider value={contextValues}><MessageCard priority={Priority.Error} title="Some Title"/></Context.Provider>)
        expect(contextValues.getMessages).toHaveBeenCalled()
        expect(contextValues.getMessages).toHaveBeenCalledWith(Priority.Error)
    })
})
