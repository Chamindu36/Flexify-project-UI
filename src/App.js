import { Routes, Route } from 'react-router';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import CheatMeals from './routes/cheat-meals/cheat-meals.component';
import Authentication from './routes/authentication/authentication.component';
import AdminDirectory from './components/admin-directory/admin-directory.component';
import MealTypes from './routes/meal-types/meal-types.component';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path="meals" element={<CheatMeals />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="admin page" element={<AdminDirectory />} />
        <Route path="meal-types" element={<MealTypes />} />
      </Route>
    </Routes>
  );
}

export default App;
