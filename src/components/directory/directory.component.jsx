import DirectoryItem from "../directory-item/directory-item.component";
import { DirectoryContainer } from "./directory.styles";

const Directory = ({ menuItems }) => {
    return (
        <DirectoryContainer>
            {menuItems.map((menuItem) => (
                <DirectoryItem key={menuItem.id} menuItem={menuItem} />
            ))}
        </DirectoryContainer>
    )
};

export default Directory;