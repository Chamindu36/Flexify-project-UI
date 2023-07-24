import { Outlet } from 'react-router-dom';
import { Fragment, useContext } from 'react';

import { Title, LogoContainer, NavLink, NavLinks, NavigationContainer } from './navigation.styles';
import { UserContext } from '../../contexts/user.context';
import { ReactComponent as HomeLogo } from '../../assets/fitness-app.svg';
import { signOutUser } from '../../utils/firebase.utils';

const Navigation = () => {
    const { currentUser } = useContext(UserContext);

    const signOutHandler = async () => {
        await signOutUser();
    }
    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to="/">
                    <HomeLogo className='logo' />
                </LogoContainer>
                <Title>FLEXIFY</Title>
                <NavLinks>
                    {
                        currentUser ? (
                            <NavLink as='span' onClick={signOutHandler}>SIGN OUT</NavLink>
                        ) : <NavLink to="/auth">
                            SIGN-IN
                        </NavLink>
                    }
                </NavLinks>
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
};

export default Navigation;