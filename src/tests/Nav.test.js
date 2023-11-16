import { render, screen } from '@testing-library/react';
import Nav from '../components/Nav';

test('Render all links', () => {
    render(<Nav />);
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(6);
})

test('Render the mobile navigation button', () => {
    render(<Nav />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
})