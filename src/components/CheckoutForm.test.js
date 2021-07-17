import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);
    const header = screen.getByText("Checkout Form");
    expect(header).toBeDefined();
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />)
    const firstName = "Michael";
    const lastName = "Smythe";
    const address = "321 then street";
    const city = "Springfield"
    const state = "Unknown";
    const zip = "12345";

    const firstInput = screen.getByLabelText(/First Name/i);
    const lastInput = screen.getByLabelText(/Last Name/i);
    const addyInput = screen.getByLabelText(/Address/i);
    const cityInput = screen.getByLabelText(/City/i);
    const stateInput = screen.getByLabelText(/State/i);
    const zipInput = screen.getByLabelText(/Zip/i);

    const checkOut = screen.getByRole("button");

    userEvent.type(firstInput, firstName);
    userEvent.type(lastInput, lastName);
    userEvent.type(addyInput, address);
    userEvent.type(cityInput, city);
    userEvent.type(stateInput, state);
    userEvent.type(zipInput, zip);
    userEvent.click(checkOut);

    const successShow = screen.getByTestId("successMessage");

    expect(successShow).toHaveTextContent(firstName);
    expect(successShow).toHaveTextContent(lastName);
    expect(successShow).toHaveTextContent(address);
    expect(successShow).toHaveTextContent(city);
    expect(successShow).toHaveTextContent(state);
    expect(successShow).toHaveTextContent(zip);
});
