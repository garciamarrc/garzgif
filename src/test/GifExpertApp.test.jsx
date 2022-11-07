import { fireEvent, render, renderHook, screen } from '@testing-library/react';
import { useState } from 'react';
import { GifExpertApp } from '../GifExpertApp';

describe('Test on <GifExpertApp />', () => {
    test('should add something to categories', () => {
        const app = render(<GifExpertApp />);
        console.log(app);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input(input, { target: { value: 'Search' } });
        fireEvent.submit(form);
    });
});
