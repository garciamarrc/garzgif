import { render, screen } from "@testing-library/react";
import { GifItem } from "../../components/GifItem";

describe("Pruebas en <GifItem />", () => {
  const title = "Some";
  const url = "https://facebook.com/";

  test("Debe hacer match con el snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("Debe mostrar la URL y el ALT indicado", () => {
    render(<GifItem title={title} url={url} />);
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test("El titulo debe renderizarse", () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
