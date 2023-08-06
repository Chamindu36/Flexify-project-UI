import {
    BaseSpan,
    PredictionItemContainer
} from './prediction-item.styles';

const PredictionItem = ({ summaryItem }) => {

    const { entryId, consumedTime, weight } = summaryItem;

    return (
        <PredictionItemContainer key={entryId}>
            <BaseSpan> {consumedTime.toDateString()} </BaseSpan>
            <BaseSpan> {weight} </BaseSpan>
        </PredictionItemContainer>
    );
};

export default PredictionItem;