import { Outlet } from "react-router";
import Directory from "../../components/directory/directory.component";

const Home = () => {
    const menuItems = [
        {
            id: 1,
            title: 'Cheat Meals',
            imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
        },
        {
            id: 2,
            title: 'Workouts',
            imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        },
        {
            id: 3,
            title: 'Reports',
            imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
        },
        {
            id: 4,
            title: 'Weekly Summary',
            imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        },
    ];

    return (
        <div className="categories-container">
            <Outlet />
            <Directory menuItems={menuItems} />
        </div>
    );
};

export default Home;