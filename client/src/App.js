import {ThemeProvider,styled} from "styled-components";
import {lightTheme} from "./utils/Themes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Authentication from "./pages/Authentication";
import { useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Workouts from "./pages/Workouts";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import ExerciseTutorials from "./pages/ExerciseTutorials";




const Container=styled.div`
  width:100%;
  height:100vh;
  display:flex;
  flex-direction:column;
  background:${({theme})=>theme.bg};
  color: ${({theme})=>theme.text_primary};
  overflow-x:hidden;
  overflow-y:hidden;
  transition:all 0.2s ease;
`;

function App() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        {currentUser ? (
          <Container>
            <Navbar currentUser={currentUser} />
            <Routes>
              <Route path="/" exact element={<Dashboard />} />
              <Route path="/workouts" exact element={<Workouts />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/exercisetutorials" element={<ExerciseTutorials/>} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </Container>
        ) : (
          <Container>
            <Authentication />
          </Container>
        )}
      </BrowserRouter>
    </ThemeProvider>
  );
}
export default App;