import React from 'react';
import Enzyme, {mount, shallow} from 'enzyme';
import {Context} from "../context/Context";
import Card from "../components/Card";
import {Priority} from "../Api";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Content from "../components/Content";

Enzyme.configure({ adapter: new Adapter() });


beforeEach(() => {
    jest.resetModules();
});

const contextValues ={
    start: true,
    setStart: jest.fn(),
    clearMessage: jest.fn(),
    handleClose: jest.fn(),
    open: false,
    message: "Message",
    removeMessage: jest.fn()
}

describe('<Content/>', () => {
    test('should display start/clear button and fire attached events when clicked', () => {
        const wrapper = mount(<Context.Provider value={contextValues}><Content/></Context.Provider>)
        const buttons = wrapper.find('button');
        expect(buttons.length).toEqual(2)
        shallow(buttons.get(0)).simulate('click')
        shallow(buttons.get(1)).simulate('click')
        expect(contextValues.setStart).toHaveBeenCalled()
        expect(contextValues.setStart).toHaveBeenCalledWith(!contextValues.start)
        expect(contextValues.clearMessage).toHaveBeenCalled()
    })
    test('should display 3 message columns', () => {
        const wrapper = mount(<Context.Provider value={contextValues}><Content/></Context.Provider>)
        expect(wrapper.findWhere(n => n.name() === 'MessageCard').length).toEqual(3)
    })
    test('should call the remove function when clear button is clicked to delete message', () => {
        const wrapper = mount(<Context.Provider value={contextValues}><Card priority={Priority.Error} message="Message"/></Context.Provider>)
        wrapper.find('button').simulate('click')
        expect(contextValues.removeMessage).toHaveBeenCalled()
    })
})
