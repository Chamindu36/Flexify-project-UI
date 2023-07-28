import { Routes, Route } from 'react-router';
import { useDispatch } from "react-redux";
import { useEffect } from 'react';

import { setCurrentUser } from './store/user/user.action';
import { onAuthStateChangedListener, createUserDocumentFromAuth } from './utils/firebase.utils';
import { getMealTypes } from './services/meal-types.service';
import { setMealTypes } from './store/meal-type/meal-type.action';

import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import CheatMeals from './routes/cheat-meals/cheat-meals.component';
import Authentication from './routes/authentication/authentication.component';
import AdminDirectory from './components/admin-directory/admin-directory.component';
import MealTypes from './routes/meal-types/meal-types.component';
import WorkoutTypes from './routes/workout-types/workout-types.component';
import WorkoutEntries from './routes/workouts/workouts.component';
import WeeklySummary from './routes/weekly-summary/weekly-summary.component';


const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMealTypes = async () => {
      const data = await getMealTypes();
      dispatch(await setMealTypes(data));
    };

    fetchMealTypes();
  }, [dispatch]);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;

  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path="meals" element={<CheatMeals />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="admin page" element={<AdminDirectory />} />
        <Route path="cheat meals" element={<CheatMeals />} />
        <Route path="workouts" element={<WorkoutEntries />} />
        <Route path="meal-types" element={<MealTypes />} />
        <Route path="workout-types" element={<WorkoutTypes />} />
        <Route path="weekly summary" element={<WeeklySummary />} />
      </Route>
    </Routes>
  );
}

export default App;
