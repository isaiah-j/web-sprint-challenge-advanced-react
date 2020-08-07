import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)
    const header = screen.getByText(/checkout form/i)
    expect(header).toBeInTheDocument()
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />)

    // Query form fields
    const firstName = screen.getByLabelText('First Name:')
    const lastName = screen.getByLabelText('Last Name:')
    const address = screen.getByLabelText('Address:')
    const city = screen.getByLabelText('City:')
    const state = screen.getByLabelText('State:')
    const zip = screen.getByLabelText('Zip:')

    // fill out form
    fireEvent.change(firstName, { taret: { value: 'John' } })
    fireEvent.change(lastName, { taret: { value: 'Doe' } })
    fireEvent.change(address, { taret: { value: '1337 Ave' } })
    fireEvent.change(city, { taret: { value: 'erie' } })
    fireEvent.change(state, { taret: { value: 'pennsylvania' } })
    fireEvent.change(zip, { taret: { value: '30000' } })

    // press submit
    const submitBtn = screen.getByRole('button', { name: /checkout/i })
    fireEvent.click(submitBtn)

    // query formdetails
    const successMessage = screen.getByTestId('successMessage')

    //check that it's being rendered to the dom
    expect(successMessage).toBeInTheDocument()
});
