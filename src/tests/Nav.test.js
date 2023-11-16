import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Nav from '../components/Nav';

test('Render all links', () => {
    render(<Nav />);
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(6);
})

test('Render the mobile navigation button', async () => {
    const onChange = jest.fn();
    const user = userEvent.setup();

    render(<Nav />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

    await user.click(button);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(button).toHaveClass('nav-active');
})