import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en GifGrid', () => {
    const category = 'Hello';

    test('should mostrar loading', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        });

        render(<GifGrid category={category} />);
        expect(screen.getByText(category));
    });
    

    test('should mostrar items cuando se cargan las imagenes usando useFetchGifs', () => {
        const gifs = [
            {
                id: '1',
                title: 'Hello',
                url: 'https://localhost/Hello.jpg',
            },
            {
              id: '2',
              title: 'Hello',
              url: 'https://localhost/Hello.jpg',
          },
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        });

        render(<GifGrid category={category} />);

        expect(screen.getAllByRole('img').length).toBe(2);
    });
});
