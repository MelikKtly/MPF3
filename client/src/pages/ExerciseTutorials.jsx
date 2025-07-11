import React from "react";
import styled from "styled-components";

// Tutorials array with English descriptions
const tutorials = [
  {
    id: 1,
    name: "Squat",
    description:
      "The squat is a fundamental exercise that works the lower body muscles. Keep your back straight and make sure your knees don’t go beyond your toes.",
      image: require("../utils/Images/squat.jpg"),
    videoUrl: "https://www.youtube.com/embed/YaXPRqUwItQ",
  },
  {
    id: 2,
    name: "Push-Up",
    description:
      "Push-ups target the chest, shoulders, and triceps. Keep your body in a straight line and your elbows close to your body.",
      image: require("../utils/Images/Pushup.jpg"),
    videoUrl: "https://www.youtube.com/embed/IODxDxX7oi4",
  },
  {
    id: 3,
    name: "Plank",
    description:
      "The plank is an effective exercise for strengthening the abdominal and core area. Elbows should be aligned with the shoulders, and the body should form a straight line.",
      image: require("../utils/Images/plank.jpg"),
    videoUrl: "https://www.youtube.com/embed/pSHjTRCQxIw",
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

const ExerciseImage = styled.img`
  width: 100%;                  
  max-height: 250px;            
  object-fit: contain;          
  border-radius: 12px;
`;


const VideoWrapper = styled.div`
  position: relative;
  padding-top: 56.25%;
  border-radius: 12px;
  overflow: hidden;
`;

const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
`;

const ExerciseTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const Description = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
`;

const ExerciseTutorials = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Exercise Tutorials</Title>
        {tutorials.map((exercise) => (
          <Card key={exercise.id}>
            <ExerciseTitle>{exercise.name}</ExerciseTitle>
            <Description>{exercise.description}</Description>
            <ExerciseImage src={exercise.image} alt={exercise.name} />
            <VideoWrapper>
              <Iframe
                src={exercise.videoUrl}
                title={exercise.name}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </VideoWrapper>
          </Card>
        ))}
      </Wrapper>
    </Container>
  );
};

export default ExerciseTutorials;
