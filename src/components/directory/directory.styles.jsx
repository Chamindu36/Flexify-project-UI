import styled from 'styled-components';

export const DirectoryContainer = styled.div`
  width: 90%; /* Increase the width to 90% of the screen */
  height: 90%; /* Increase the height to 90% of the screen */
  margin: 0 auto; /* Center the panel horizontally */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border-radius: 10px; /* Add border-radius for a rounded corner appearance */
  padding: 20px; /* Add some padding to space out the items */

  /* Set the maximum number of columns to 2 for the first row */
  @media (min-width: 1200px) {
    & > div:nth-child(-n + 2) {
      flex-basis: calc(20% - 10px);
    }
  }
`;
