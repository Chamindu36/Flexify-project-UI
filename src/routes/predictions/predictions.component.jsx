import React, { useContext } from "react";
import { useSelector } from 'react-redux';

import { WorkoutsContext } from "../../contexts/workouts.context";

import {
    PredicationsContainer,
    PredictionsHeader,
    HeaderBlock,
    TitleBlock,
} from './predictions.styles';

import { selectCheatMeals } from '../../store/cheat-meal/cheat-meal.selector'
import PredictionItem from "../../components/prediction-item/prediction-item.component";

const PredictionsSummary = () => {

    const { workoutEntries } = useContext(WorkoutsContext);
    const cheatMeals = useSelector(selectCheatMeals);

    //get all the entries and sort them by consumed time in descending
    // const entries = cheatMeals.concat(workoutEntries).sort((a, b) => {
    //     return new Date(b.consumedTime) - new Date(a.consumedTime);
    // });

    // const data = entries.map((entry) => { return { consumedTime: entry.consumedTime, weight: entry.weight } });

    // Step 1: Gather the data (date and weight object list)
    const data = [
        { consumedTime: new Date("2023-08-01"), weight: 150 },
        { consumedTime: new Date("2023-08-02"), weight: 152 },
        { consumedTime: new Date("2023-08-03"), weight: 155 },
        { consumedTime: new Date("2023-08-04"), weight: 120 },
        { consumedTime: new Date("2023-08-05"), weight: 151 },
        { consumedTime: new Date("2023-08-06"), weight: 155 },
        { consumedTime: new Date("2023-08-07"), weight: 153 },
        { consumedTime: new Date("2023-08-08"), weight: 158 },
        { consumedTime: new Date("2023-08-09"), weight: 159 },
        { consumedTime: new Date("2023-08-10"), weight: 156 },
        { consumedTime: new Date("2023-08-11"), weight: 155 },
        { consumedTime: new Date("2023-08-12"), weight: 151 },
    ];

    // Step 2: Convert dates to numeric values (timestamps)
    const input = data.map((item) => item.consumedTime.getTime()); // Array of timestamps
    const output = data.map((item) => item.weight);        // Array of weights

    // Step 3: Calculate the coefficients
    function calculateCoefficients(x, y) {
        const n = x.length;
        let sumX = 0;
        let sumY = 0;
        let sumXY = 0;
        let sumXX = 0;

        for (let i = 0; i < n; i++) {
            sumX += x[i];
            sumY += y[i];
            sumXY += x[i] * y[i];
            sumXX += x[i] * x[i];
        }

        const slope = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);
        const intercept = (sumY - slope * sumX) / n;

        return { slope, intercept };
    }

    const { slope, intercept } = calculateCoefficients(input, output);

    // Step 4: Implement the model
    function predictLinearRegression(x) {
        return slope * x + intercept;
    }

    // Step 5: Get next 10 predicted values
    function getNextPredictions(startingDate, numPredictions) {
        const predictions = [];

        for (let i = 0; i < numPredictions; i++) {
            const inputToPredict = startingDate.getTime() + i * 24 * 60 * 60 * 1000; // Adding one day in milliseconds
            const predictedOutput = predictLinearRegression(inputToPredict);
            predictions.push({ consumedTime: new Date(inputToPredict), weight: Number(predictedOutput.toFixed(2)) });
        }

        return predictions;
    }

    // Example usage:
    const startingDate = new Date("2023-08-04");
    const numPredictions = 10;
    const nextPredictions = getNextPredictions(startingDate, numPredictions);

    console.log(nextPredictions);

    return (
        <PredicationsContainer>
            <TitleBlock> Predictions for next days </TitleBlock>
            <PredictionsHeader>
                <HeaderBlock>
                    <span>Proposed Time</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Weight</span>
                </HeaderBlock>
            </PredictionsHeader>
            {nextPredictions.map((entry) => (
                <PredictionItem key={entry.entryId} summaryItem={entry} />
            ))}
        </PredicationsContainer>
    );
};

export default PredictionsSummary;