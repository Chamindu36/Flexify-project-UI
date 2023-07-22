import styled, { keyframes } from 'styled-components';

const floatAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px); /* Adjust the floating distance */
  }
  100% {
    transform: translateY(0);
  }
`;

export const DirectoryContainer = styled.div`
  width: 100%; /* Increase the width to 90% of the screen */
  height: 100%; /* Increase the height to 90% of the screen */
  margin: 0 auto; /* Center the panel horizontally */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border-radius: 10px; /* Add border-radius for a rounded corner appearance */
  padding: 20px; /* Add some padding to space out the items */
  animation: ${floatAnimation} 3s ease-in-out infinite; /* Apply the animation */
`;