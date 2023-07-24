import { createContext, useState, useEffect } from 'react';

import {
    getWorkoutEntries,
    updateWorkoutEntry,
    deleteWorkoutEntry,
    addWorkoutEntry,
} from '../services/workouts.service';

export const WorkoutsContext = createContext({
    workoutEntries: [],
    updateWorkoutEntry: () => { },
    deleteWorkoutEntry: () => { },
    addWorkoutEntry: () => { },
});

export const WorkoutEntriesProvider = ({ children }) => {
    const [workoutEntries, setWorkOutEntries] = useState([]);

    useEffect(() => {
        const fetchWorkoutEntries = async () => {
            const data = await getWorkoutEntries();
            setWorkOutEntries(data);
        };

        fetchWorkoutEntries();
    }, []);

    useEffect(() => {
        // You can add any side effect that depends on the workoutEntries array changes here
        console.log('workoutEntries array changed:', workoutEntries);
    }, [workoutEntries]);

    const updateWorkoutEntryItem = async (id, updatedData) => {
        try {
            const updatedWorkoutEntry = await updateWorkoutEntry(id, updatedData);
            setWorkOutEntries((prevWorkoutEntries) =>
                prevWorkoutEntries.map((workoutEntry) =>
                    workoutEntry.id === id ? { ...workoutEntry, ...updatedWorkoutEntry } : workoutEntry
                )
            );
        } catch (error) {
            // Handle the error here, if any
        }
    };

    const deleteWorkoutEntryItem = async (id) => {
        try {
            await deleteWorkoutEntry(id);
            setWorkOutEntries((prevWorkoutEntries) =>
                prevWorkoutEntries.filter((workoutEntry) => workoutEntry.id !== id)
            );
        } catch (error) {
            // Handle the error here, if any
        }
    };

    const addNewWorkoutEntry = async (newWorkoutEntry) => {
        console.log(`Adding ${newWorkoutEntry} to the workout entries in context`);
        try {
            const workoutEntry = await addWorkoutEntry(newWorkoutEntry);
            setWorkOutEntries((prevWorkoutEntries) => [...prevWorkoutEntries, workoutEntry]);
        } catch (error) {
            // Handle the error here, if any
        }
    };

    const value = {
        workoutEntries,
        updateWorkoutEntryItem,
        deleteWorkoutEntryItem,
        addNewWorkoutEntry,
    };

    return (
        <WorkoutsContext.Provider
            value={value}>{children}
        </WorkoutsContext.Provider>
    );
};