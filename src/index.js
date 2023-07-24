import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { UserProvider } from './contexts/user.context';
import { MealTypesProvider } from './contexts/meal-types.context';
import { WorkoutTypesProvider } from './contexts/workout-types.context';
import { CheatMealsProvider } from './contexts/cheat-meals.context';
import { WorkoutEntriesProvider } from './contexts/workouts.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <MealTypesProvider>
          <WorkoutTypesProvider>
            <CheatMealsProvider>
              <WorkoutEntriesProvider>
                <App />
              </WorkoutEntriesProvider>
            </CheatMealsProvider>
          </WorkoutTypesProvider>
        </MealTypesProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
