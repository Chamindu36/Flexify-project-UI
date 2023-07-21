import { Body, DirectoryItemContainer, BackgroundImage } from './directory-item.styles';

const DirectoryItem = ({ menuItem }) => {
    const { title, imageUrl } = menuItem;

    return (
        <DirectoryItemContainer>
            <BackgroundImage
                style={{
                    backgroundImage: `url(${imageUrl})`,
                }}
            />
            <Body to={`${title.toLowerCase()}`}>
                <h2>{title}</h2>
            </Body>
        </DirectoryItemContainer>
    );
};

export default DirectoryItem;
