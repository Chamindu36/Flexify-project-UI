import styled from 'styled-components';

export const WorkoutSummaryItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 80px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  font-weight: bold;
  font-color: #800000;
`;

export const ButtonContainer = styled.div`
        margin - top: 50px;
        allign - items: right;
        width: 15%;
`;

export const SummaryItemImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const BaseSpan = styled.span`
  width: 30%;
  flex: 1;
  text-align: center;
  color: #6C1960;

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