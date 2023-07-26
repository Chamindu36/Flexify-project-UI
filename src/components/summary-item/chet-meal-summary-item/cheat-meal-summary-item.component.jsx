import {
    BaseSpan,
    CheatMealSummaryItemContainer
} from './cheat-meal-summary-item.styles';

const CheatMealSummaryItem = ({ summaryItem, type }) => {

    const { entryId, mealType, consumedTime, weight } = summaryItem;

    return (
        <CheatMealSummaryItemContainer key={entryId}>
            <BaseSpan> {entryId} </BaseSpan>
            <BaseSpan> {type} </BaseSpan>
            <BaseSpan> {mealType} </BaseSpan>
            <BaseSpan> {consumedTime.toDateString()} </BaseSpan>
            <BaseSpan> {weight} </BaseSpan>
        </CheatMealSummaryItemContainer>
    );
};

export default CheatMealSummaryItem;