import { render, screen } from "@testing-library/react";
import EventFinder from "../components/EventFinder";
import { store } from '../redux/store';
import { Provider } from 'react-redux';

test('Render search options', () => {
    render(<Provider store={store}><EventFinder /></Provider>);

    const keyword = screen.getByRole('textbox', { name: 'Enter a keyword' });
    expect(keyword).toBeInTheDocument();

    const city = screen.getByRole('textbox', { name: 'Enter a city' });
    expect(city).toBeInTheDocument();

    const date = screen.getByLabelText('Enter a date');
    expect(date).toBeInTheDocument();

    const category = screen.getByRole('combobox', { name: 'Category' });
    expect(category).toBeInTheDocument();

    const sort = screen.getByRole('combobox', { name: 'Sort by' });
    expect(sort).toBeInTheDocument();

    const submit = screen.getByRole('button', { type: 'submit' });
    expect(submit).toBeInTheDocument();
});