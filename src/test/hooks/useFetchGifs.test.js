import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('Pruebas en hook useFetchGifs', () => {
    test('should return initial state', () => {
        const { result } = renderHook(() => useFetchGifs('Hello'));
        const { images, isLoading } = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });

    test('should return an array of images and isLoading on false', async () => {
        const { result } = renderHook(() => useFetchGifs('Hello'));
        await waitFor(() =>
            expect(result.current.images.length).toBeGreaterThan(0)
        );

        const { images, isLoading } = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    });
});
