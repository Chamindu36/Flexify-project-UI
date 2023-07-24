import { Outlet } from "react-router-dom";
import {
    AdminDirectoryContainer,
    AdminDirectoryItemContainer,
    AdminItemBackgroundImage,
    AdminItemBody,
    TitleBlock,
} from "./admin-directory.styles";

const AdminDirectory = () => {
    return (
        <div>
            <TitleBlock>Customizations</TitleBlock>
            <AdminDirectoryContainer>
                <Outlet />
                <AdminDirectoryItemContainer>
                    <AdminItemBackgroundImage
                        style={{
                            backgroundImage: `url('https://i.ibb.co/RQQ96Mt/pf-a5b45973-ef45-4d43-a9a8-cb32fb00f495-22-800x3000.webp')`,
                        }}
                    />
                    <AdminItemBody to={`/meal-types`}>
                        <h2>Customize Meal Types</h2>
                    </AdminItemBody>
                </AdminDirectoryItemContainer>
                <AdminDirectoryItemContainer>
                    <AdminItemBackgroundImage
                        style={{
                            backgroundImage: `url('https://i.ibb.co/WVDrCYV/https-www-metronieuws-nl-wp-content-uploads-2023-05-sportinstructeurs-oefeningen-fitness.jpg')`,
                        }}
                    />
                    <AdminItemBody to={`/workout-types`}>
                        <h2>Customize Workout Types</h2>
                    </AdminItemBody>
                </AdminDirectoryItemContainer>
            </AdminDirectoryContainer>
        </div>
    );
};

export default AdminDirectory;