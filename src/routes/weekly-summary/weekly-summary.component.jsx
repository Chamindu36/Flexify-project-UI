import React, { useContext } from "react";
import { useSelector } from 'react-redux';

import { WorkoutsContext } from "../../contexts/workouts.context";

import {
    WeeklySummaryContainer,
    WeeklySummaryHeader,
    HeaderBlock,
    TitleBlock,
} from './weekly-summary.styles';

import WorkoutSummaryItem from "../../components/summary-item/workout-summary-item/workout-summary-item.component";
import CheatMealSummaryItem from '../../components/summary-item/chet-meal-summary-item/cheat-meal-summary-item.component';
import { selectCheatMeals } from '../../store/cheat-meal/cheat-meal.selector'

const WeeklySummary = () => {

    const { workoutEntries } = useContext(WorkoutsContext);
    const cheatMeals = useSelector(selectCheatMeals);

    // get all the entries and sort them by consumed time in descending
    const entries = cheatMeals.concat(workoutEntries).sort((a, b) => {
        return new Date(b.consumedTime) - new Date(a.consumedTime);
    });

    return (
        <WeeklySummaryContainer>
            <TitleBlock> Weekly Summary </TitleBlock>
            <WeeklySummaryHeader>
                <HeaderBlock>
                    <span>Entry Id</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Entry Type</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Workout/Cheat Meal</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Consumed Time</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Weight</span>
                </HeaderBlock>
            </WeeklySummaryHeader>
            {entries.map((entry) => (
                entry.mealId ?
                    <CheatMealSummaryItem key={entry.entryId} summaryItem={entry} type={'CM'} />
                    :
                    <WorkoutSummaryItem key={entry.entryId} summaryItem={entry} type={'W'} />
            ))}
        </WeeklySummaryContainer>
    );
};

export default WeeklySummary;