import React from "react";
import styled from "styled-components";

// Supplement data with ingredients and nutritional values
const supplements = [
  {
    id: 1,
    name: "Whey Protein",
    description:
      "Whey protein is a fast-digesting protein supplement commonly used to increase muscle mass and recovery. It is ideal after workouts.",
    image: require("../utils/Images/whey.jpg"),
    nutrition: {
      Calories: "120 kcal",
      Protein: "24 g",
      Carbohydrates: "2 g",
      Fat: "1.5 g",
      Sugar: "1 g",
    },
  },
  {
    id: 2,
    name: "Creatine Monohydrate",
    description:
      "Creatine enhances strength, increases lean muscle mass, and helps the muscles recover more quickly during exercise.",
    image: require("../utils/Images/creatine.jpg"),
    nutrition: {
      Calories: "0 kcal",
      Creatine: "5 g",
      Carbohydrates: "0 g",
      Fat: "0 g",
      Sugar: "0 g",
    },
  },
  {
    id: 3,
    name: "Omega-3",
    description:
      "Omega-3 fatty acids support heart health, brain function, and help reduce inflammation. Often taken as fish oil capsules.",
    image: require("../utils/Images/omega3.jpg"),
    nutrition: {
      Calories: "10 kcal",
      Omega3: "1000 mg",
      EPA: "300 mg",
      DHA: "200 mg",
      Fat: "1 g",
    },
  },
];

const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 22px 0px;
  overflow-y: scroll;
`;

const Wrapper = styled.div`
  flex: 1;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

// 🔵 Başlık stilini senin ExerciseTutorials sayfandan birebir aldım
const Title = styled.div`
  padding: 0 16px;
  font-size: 28px;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 600;
  text-align: center;
`;

const Card = styled.div`
  background-color: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
`;

const SupplementImage = styled.img`
  width: 100%;
  max-height: 250px;
  object-fit: contain;
  border-radius: 12px;
`;

const SupplementTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const Description = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 8px;
`;

const TableHeader = styled.th`
  text-align: left;
  padding: 8px;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text_primary};
`;

const TableCell = styled.td`
  padding: 8px;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text_secondary};
`;

const Supplement = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Supplement Information</Title>
        {supplements.map((supplement) => (
          <Card key={supplement.id}>
            <SupplementTitle>{supplement.name}</SupplementTitle>
            <Description>{supplement.description}</Description>
            <SupplementImage src={supplement.image} alt={supplement.name} />

            <Table>
              <thead>
                <tr>
                  <TableHeader>Component</TableHeader>
                  <TableHeader>Amount</TableHeader>
                </tr>
              </thead>
              <tbody>
                {Object.entries(supplement.nutrition).map(([key, value], index) => (
                  <tr key={index}>
                    <TableCell>{key}</TableCell>
                    <TableCell>{value}</TableCell>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Supplement;
