import styled from 'styled-components';

export const MealTypeItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
    align-items: center;
`;

export const ButtonContainer = styled.div`
        margin - top: 50px;
        allign - items: right;
        width: 15%;
`;

export const MealTypeImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const BaseSpan = styled.span`
  width: 30%;
`;

export const Description = styled(BaseSpan)`
  display: flex;
`;

export const Arrow = styled.div`
  cursor: pointer;
`;

export const Value = styled.span`
  margin: 0 10px;
`;

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
  justify-content: flex-end;
`;

export const EditButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;