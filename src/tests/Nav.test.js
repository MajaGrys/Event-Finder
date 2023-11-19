import { render, screen } from '@testing-library/react';
import Nav from '../components/Nav';

test('Render all links, including the logo', () => {
    render(<Nav />);
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(6);
})

test('Render the mobile navigation button', () => {
    render(<Nav />);
    const button = screen.getByRole('button', { class: 'mobile-nav-btn' });
    expect(button).toBeInTheDocument();
})