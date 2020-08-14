import React from "react";
import { render, fireEvent, waitfor, waitFor } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("renders ContactForm correctly", () => {
    render(<ContactForm />);
});

test ("first Name input accepts a 2-character input ", () => {
    const { getByTestId } = render(<ContactForm />);
    const input = getByTestId(/1stName/i);

    fireEvent.change(input, { target: {value: "Ed"} });
    expect(input.value).toBe("Ed");
});

test ("first name input requires 2 characters minimun", async () => {
    const { getByTestId, queryByText } = render(<ContactForm />);
    const firstNameInput = getByTestId(/1stname/i);

    fireEvent.change(firstNameInput, { target: {value: "E"} });

    fireEvent.focusOut(firstNameInput);

    await waitFor( () => {
        expect(queryByText(/looks/i));
    })
});
