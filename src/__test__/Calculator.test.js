import React from "react";
import renderer from 'react-test-renderer';
import calculator from "../components/calculator";
import '@testing-library/jest-dom';

describe('Test of Calculator page', () => {
    it('test if Calculator page is rendered', () => {
        const calculatorTest = renderer
            .create(<Calculator />)
            .toJSON();
        expect(calculatorTest).toMatchSnapshot();
    });
});
