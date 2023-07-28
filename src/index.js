import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { CheatMealsProvider } from './contexts/cheat-meals.context';
import { WorkoutEntriesProvider } from './contexts/workouts.context';

import { store } from './store/root-store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <CheatMealsProvider>
          <WorkoutEntriesProvider>
            <App />
          </WorkoutEntriesProvider>
        </CheatMealsProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
