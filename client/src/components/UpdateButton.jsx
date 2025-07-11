// src/components/UpdateButton.jsx
import React from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: 12px 24px;
  font-size: 16px;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;
  width: 100%;
  margin-top: 10px;

  &:hover {
    opacity: 0.9;
  }
`;

const UpdateButton = ({ onClick }) => {
  return <Button onClick={onClick}>Update</Button>;
};

export default UpdateButton; // ✅ MUTLAKA bu olmalı!
