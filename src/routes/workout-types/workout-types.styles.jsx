import styled from 'styled-components';
import Modal from "react-modal";

export const WorkoutTypesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px auto;
  padding: 20px;
`;

export const WorkoutTypesHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 20px; /* Adjust the font size */
  font-weight: bold;
`;

export const HeaderBlock = styled.div`
  flex: 1;
  text-align: center;

  &:last-child {
    flex: 0.5;
  }
`;

export const TitleBlock = styled.h1`
  text-align: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end; /* Align the button to the right */
  margin-bottom: 100px;
`;


export const AddWorkoutTypeModalContainer = styled(Modal)`
    overlay: {
      backgroundColor: "transparent", // Remove the background
    },
    content: {
      border: "none", // Remove the border
      background: "none", // Remove any background color
      padding: "0", // Optional: Remove any padding
    },
`;