import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("renders ContactForm correctly", () => {
    render(<ContactForm />);
});

test ("First Name input requires a minimum of two characters", () => {
    const { getByName } = render(<ContactForm />);
    const input = getByName(/firstname/i);
    fireEvent.change(input, { target: {value: "Ed"} });
    expect(input.value).toBe("Ed");
});
