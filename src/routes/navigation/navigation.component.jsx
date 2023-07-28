import { Outlet } from 'react-router-dom';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';


import { Title, LogoContainer, NavLink, NavLinks, NavigationContainer } from './navigation.styles';
import { ReactComponent as HomeLogo } from '../../assets/fitness-app.svg';
import { signOutUser } from '../../utils/firebase.utils';
import { selectCurrentUser } from '../../store/user/user.selector';

const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser);

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