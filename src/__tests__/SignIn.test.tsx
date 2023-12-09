import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LoginForm, { LoginType } from '../components/Organisms/LoginForm';

test('renders learn react link', async () => {
    let data: LoginType | undefined = undefined;
    const handleSubmit = jest.fn((e: LoginType) => data = e);

    render(<LoginForm submit={handleSubmit} />)

    const inpUsername = await screen.findByLabelText('Username:');
    fireEvent.change(inpUsername, { target: { value: 'sarahedo' } });

    const inpPassword = await screen.findByLabelText('Password:');
    fireEvent.change(inpPassword, { target: { value: 'password123' } });

    expect(data).toBeUndefined();

    const btnSubmit = screen.getByText(/submit/i);
    fireEvent.click(btnSubmit);

    expect(handleSubmit).toHaveBeenCalled();
    expect(data).toMatchObject({ username: 'sarahedo', password: 'password123' });
});
