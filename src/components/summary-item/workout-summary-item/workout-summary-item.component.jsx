import {
    BaseSpan,
    WorkoutSummaryItemContainer
} from './workout-summary-item.styles';

const WorkoutSummaryItem = ({ summaryItem, type }) => {

    const { entryId, workoutTitle, consumedTime, weight } = summaryItem;

    return (
        <WorkoutSummaryItemContainer key={entryId}>
            <BaseSpan> {entryId} </BaseSpan>
            <BaseSpan> {type} </BaseSpan>
            <BaseSpan> {workoutTitle} </BaseSpan>
            <BaseSpan> {consumedTime.toDateString()} </BaseSpan>
            <BaseSpan> {weight} </BaseSpan>
        </WorkoutSummaryItemContainer>
    );
};

export default WorkoutSummaryItem;