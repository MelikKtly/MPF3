import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import UpdateButton from "../components/UpdateButton";

const Container = styled.div`
  padding: 40px;
  max-width: 1100px;
  margin: auto;
  display: flex;
  flex-direction: row;
  gap: 40px;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.bgSoft};
  border: 1px solid ${({ theme }) => theme.text_secondary + 20};
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
  flex: 1;
`;

const Title = styled.h2`
  margin-bottom: 30px;
  color: ${({ theme }) => theme.text_primary};
  text-align: center;
`;

const InfoGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-weight: bold;
  display: block;
  margin-bottom: 6px;
  color: ${({ theme }) => theme.text_secondary};
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.text_secondary + 40};
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }
`;

const InfoDisplay = styled.div`
  background-color: ${({ theme }) => theme.bgSoft};
  border: 1px solid ${({ theme }) => theme.text_secondary + 20};
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
  flex: 1;
`;

const InfoRow = styled.p`
  font-size: 18px;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.text_primary};

  span {
    font-weight: bold;
    color: ${({ theme }) => theme.primary};
  }
`;

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);

  // Geçici form bilgileri
  const [formData, setFormData] = useState({
    name: currentUser?.name || "",
    age: currentUser?.age || "",
    weight: currentUser?.weight || "",
    height: currentUser?.height || "",
    goal: currentUser?.goal || "",
  });

  // Güncellenmiş bilgileri gösteren state
  const [updatedData, setUpdatedData] = useState({
    name: "",
    age: "",
    weight: "",
    height: "",
    goal: "",
  });

  // Sayfa açıldığında localStorage'dan veri al
  useEffect(() => {
    const savedData = localStorage.getItem("profileData");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setUpdatedData(parsedData);
      setFormData(parsedData); // Form alanları da dolu gelsin
    }
  }, []);

  // Input değişimlerini formData'ya aktar
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Butona tıklanınca güncelle ve kaydet
  const handleUpdate = () => {
    setUpdatedData(formData); // Sağ kutuda gösterilecek veriler
    localStorage.setItem("profileData", JSON.stringify(formData)); // Tarayıcıya kaydet
    alert("Profil bilgileri güncellendi!");
  };

  return (
    <Container>
      {/* Sol: Form Alanı */}
      <Wrapper>
        <Title>Profile Information</Title>
        <InfoGroup>
          <Label>Name:</Label>
          <Input type="text" name="name" value={formData.name} onChange={handleChange} />
        </InfoGroup>
        <InfoGroup>
          <Label>Age:</Label>
          <Input type="number" name="age" value={formData.age} onChange={handleChange} />
        </InfoGroup>
        <InfoGroup>
          <Label>Weight (kg):</Label>
          <Input type="number" name="weight" value={formData.weight} onChange={handleChange} />
        </InfoGroup>
        <InfoGroup>
          <Label>Height (cm):</Label>
          <Input type="number" name="height" value={formData.height} onChange={handleChange} />
        </InfoGroup>
        <InfoGroup>
          <Label>Goal:</Label>
          <Input type="text" name="goal" value={formData.goal} onChange={handleChange} />
        </InfoGroup>

        <UpdateButton onClick={handleUpdate} />
      </Wrapper>

      {/* Sağ: Güncellenmiş Bilgiler */}
      <InfoDisplay>
        <Title>Informations</Title>
        <InfoRow><span>Name:</span> {updatedData.name}</InfoRow>
        <InfoRow><span>Age:</span> {updatedData.age}</InfoRow>
        <InfoRow><span>Weight:</span> {updatedData.weight} kg</InfoRow>
        <InfoRow><span>Height:</span> {updatedData.height} cm</InfoRow>
        <InfoRow><span>Goal:</span> {updatedData.goal}</InfoRow>
      </InfoDisplay>
    </Container>
  );
};

export default Profile;
