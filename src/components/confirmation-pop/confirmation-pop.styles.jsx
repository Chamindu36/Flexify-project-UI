import styled from "styled-components";

export const ConfirmationPopOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ConfirmationPopContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  text-align: center;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
