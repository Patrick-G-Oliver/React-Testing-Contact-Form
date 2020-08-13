import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("renders ContactForm correctly", () => {
    render(<ContactForm />);
});

test ("First Name input requires a minimum of two characters", () => {
    const { getByTestId } = render(<ContactForm />);
    const input = getByTestId(/1stName/i);
    fireEvent.change(input, { target: {value: "Ed"} });
    expect(input.value).toBe("Ed");
});
