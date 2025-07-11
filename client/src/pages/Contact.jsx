import React, { useState } from "react";
import styled from "styled-components";
import { submitFeedback } from "../api";

// Container for the whole page layout
const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 40px 16px;
  overflow-y: auto; // allows vertical scrolling if content overflows
`;

// Wrapper to center content and limit its width
const Wrapper = styled.div`
  max-width: 700px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

// Main title of the page
const Title = styled.h1`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  text-align: center;
`;

// Short description below the title
const Description = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
  text-align: center;
`;

// Form container using column layout
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

// Styled input field
const Input = styled.input`
  padding: 12px 16px;
  font-size: 16px;
  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: 12px;
  background-color: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text_primary};
  outline: none;
`;

// Styled textarea for the feedback message
const TextArea = styled.textarea`
  padding: 12px 16px;
  font-size: 16px;
  height: 150px;
  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: 12px;
  background-color: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text_primary};
  resize: none; // disables resizing the textarea
  outline: none;
`;

// Submit button styling
const Button = styled.button`
  padding: 12px 20px;
  font-size: 16px;
  font-weight: 600;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    opacity: 0.9;
  }
`;

// Main functional component
const Contact = () => {
  // Form state to store user input
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  // Handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitFeedback(form);
      alert("Thank you for your feedback!");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Error submitting feedback:", err);
      alert("An error occurred while submitting your feedback.");
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>Contact & Feedback</Title>
        <Description>
          Share your thoughts with us. Your suggestions and issues are valuable for improving the site.
        </Description>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <TextArea
            name="message"
            placeholder="Write your feedback here..."
            value={form.message}
            onChange={handleChange}
            required
          />
          <Button type="submit">Submit</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Contact;
