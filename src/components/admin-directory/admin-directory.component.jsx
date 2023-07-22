import { AdminDirectoryContainer, AdminDirectoryItemContainer, AdminItemBackgroundImage, AdminItemBody } from "./admin-directory.styles";

const AdminDirectory = () => {
    return (
        <AdminDirectoryContainer>
            <AdminDirectoryItemContainer>
                <AdminItemBackgroundImage
                    style={{
                        backgroundImage: `url('https://i.ibb.co/h87fHq9/vegetarian-Foods-for-Christmas-Dinner-1024x693.webp')`,
                    }}
                />
                <AdminItemBody to={`/meal-types`}>
                    <h2>Meal Types</h2>
                </AdminItemBody>
            </AdminDirectoryItemContainer>
        </AdminDirectoryContainer>
    );
};

export default AdminDirectory;