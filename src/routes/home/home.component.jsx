import { useDispatch } from "react-redux";
import { Outlet } from "react-router";

import { HomeComponentContainer } from "./home.styles";

import Directory from "../../components/directory/directory.component";


const Home = () => {

    const menuItems = [
        {
            id: 1,
            title: 'Cheat Meals',
            imageUrl: 'https://i.ibb.co/h87fHq9/vegetarian-Foods-for-Christmas-Dinner-1024x693.webp',
        },
        {
            id: 2,
            title: 'Workouts',
            imageUrl: 'https://i.ibb.co/BgJgh7W/muscular-build-woman-exercising-with-dumbbells-in-a-royalty-free-image-938392000-1550780815.jpg',
        },
        {
            id: 3,
            title: 'Predictions',
            imageUrl: 'https://i.ibb.co/NK1t5VN/medium-shot-man-training-with-stats.jpg',
        },
        {
            id: 4,
            title: 'Weekly Summary',
            imageUrl: 'https://i.ibb.co/qFJSsGm/360-F-233890979-TGgl-Gkq-Y84h-Y2ze-KTyc-SVo-DCMP1u-Tz4m.jpg',
        },
        {
            id: 5,
            title: 'Admin Page',
            imageUrl: 'https://i.ibb.co/xMRGtpp/62ac585abda08847a1a4be68-andrew-neel-cckf4-Ts-HAuw-unsplash-2-p-1080.jpg',
        },
    ];

    return (
        <HomeComponentContainer>
            <Outlet />
            <Outlet />
            <Directory menuItems={menuItems} />
        </HomeComponentContainer>
    );
};

export default Home;