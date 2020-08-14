import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import ContactForm from "./ContactForm";

// Test 1
test("renders ContactForm correctly", () => {
    render(<ContactForm />);
});

// Test 2
test ("firstName input accepts a 2-character input ", () => {
    const { getByTestId } = render(<ContactForm />);
    const input = getByTestId(/1stName/i);

    fireEvent.change(input, { target: {value: "Ed"} });

    expect(input.value).toBe("Ed");
});

// Test 3
test ("email input accepts text input", () => {
    const { getByTestId } = render(<ContactForm />);
    const input = getByTestId(/email/i);
    
    fireEvent.change(input, { target: {value: "myemail@mail.com"} });

    expect(input.value).toBe("myemail@mail.com");
});

// Test 4
test ("lastName input accepts text input", () => {
    const { getByTestId } = render(<ContactForm />);
    const input = getByTestId(/lastName/i);
    
    fireEvent.change(input, { target: {value: "Wood"} });

    expect(input.value).toBe("Wood");
});

// Test 5
test ("message input accepts text input", () => {
    const { getByTestId } = render(<ContactForm />);
    const input = getByTestId(/messageField/i);
    
    fireEvent.change(input, { target: {value: "Hello, World!"} });

    expect(input.value).toBe("Hello, World!");
});

// Test 6
test ("first name input requires 2 characters minimun", async () => {
    const { getByTestId, queryByText } = render(<ContactForm />);
    const firstNameInput = getByTestId(/1stname/i);

    fireEvent.change(firstNameInput, { target: {value: "E"} });

    fireEvent.focusOut(firstNameInput);

    await waitFor( () => {
        expect(queryByText(/looks like there was an error: /i));
    });
});

// Test 7
test ("messageField allows max 10 chars", async () => {
    const { getByTestId, queryByText } = render(<ContactForm />);
    const messageField = getByTestId(/messageField/i);

    fireEvent.change(messageField, { target: {value: "antiestablishmentarianism"} });

    fireEvent.focusOut(messageField);

    await waitFor( () => {
        expect(queryByText(/looks like there was an error: /i))
    });
});



