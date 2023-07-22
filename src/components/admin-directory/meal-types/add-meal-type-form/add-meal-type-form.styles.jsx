import styled from 'styled-components';

export const AddMealTypeFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  margin: auto; /* This will center the div horizontally */
  margin-top: 50px; /* Optional: Add some top margin to center vertically too */
  background-color: white; /* Optional: Add a background color */
  border: 1px solid #ccc; /* Optional: Add a border */
  padding: 20px; /* Optional: Add padding for better visualization */

  h2 {
    margin: 10px 0;
  }
`;

export const AddMealTypeButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
