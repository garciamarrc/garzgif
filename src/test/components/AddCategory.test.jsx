import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en <AddCategory />', () => {
    test('Debe de cambiar el valor en input', () => {
        render(<AddCategory onNewCategory={() => {}} />);

        const input = screen.getByRole('textbox');

        fireEvent.input(input, { target: { value: 'Search' } });

        expect(input.value).toBe('Search');

        screen.debug();
    });

    test('Debe de llamar onNewCategory si el input tiene valor', () => {
        const inputValue = 'Search';
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);

        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    });

    test('No debe de llamar onNewCategory si el input está vacio', () => {
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />);

        const form = screen.getByRole('form');

        fireEvent.submit(form);

        expect(onNewCategory).toHaveBeenCalledTimes(0);
    });
});
