import styled from 'styled-components';
import Modal from "react-modal";

export const WorkoutEntryItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 10px 0;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const ButtonContainer = styled.div`
        margin - top: 50px;
        allign - items: right;
        width: 15%;
`;

export const WorkoutEntryImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 50%;
  }
`;

export const BaseSpan = styled.span`
  width: 30%;
    flex: 1;
  text-align: center;

  &:last-child {
    flex: 0.5;
  }
`;

export const Value = styled.span`
  flex: 1;
  text-align: center;

  &:last-child {
    flex: 0.5;
  }`;

export const RemoveButton = styled.div`
  flex: 1;
  color: #800000;
  text-align: center;
  cursor: pointer;

  &:last-child {
    flex: 0.5;
  }
  `;

export const EditButton = styled.div`
  cursor: pointer;
  flex: 1;
  text-align: center;

  &:last-child {
    flex: 0.5;
  }
`;

export const EditWorkoutEntryModalContainer = styled(Modal)`
    overlay: {
      backgroundColor: "red", // Remove the background
    },
    content: {
      border: "none", 
      background: "none", // Remove any background color
      padding: "0", // Optional: Remove any padding
    },
`;
