import React, { useState } from "react";
import { useSelector } from 'react-redux';

import {
    CheatMealsContainer,
    CheatMealsHeader,
    HeaderBlock,
    TitleBlock,
    ButtonContainer,
    AddCheatMealsModalContainer,
} from "./cheat-meals.styles"

import Button, { BUTTON_TYPE_CLASSES } from "../../components/button/button.component";
import CheatMealItem from "../../components/cheat-meals/cheat-meal-item/cheat-meal-item.component";
import AddCheatMealEntryForm from "../../components/cheat-meals/add-cheat-meal-form/add-cheat-meal-form";
import { selectCheatMeals } from '../../store/cheat-meal/cheat-meal.selector'

const CheatMeals = () => {
    const cheatMeals = useSelector(selectCheatMeals);

    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const handleCancel = () => {
        toggleModal();
    };

    return (
        <CheatMealsContainer>
            <TitleBlock> Cheat Meal Entries </TitleBlock>
            <ButtonContainer>
                <Button buttonType={BUTTON_TYPE_CLASSES.base} onClick={toggleModal}>
                    Add Cheat Meal Entry
                </Button>
            </ButtonContainer>
            <AddCheatMealsModalContainer isOpen={showModal} onRequestClose={toggleModal}>
                <AddCheatMealEntryForm handleCancel={handleCancel} />
            </AddCheatMealsModalContainer>
            <CheatMealsHeader>
                <HeaderBlock>
                    <span></span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Meal Type</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Consumed Time</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Weight</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Change</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheatMealsHeader>
            {cheatMeals.map((cheatMeal) => (
                <CheatMealItem key={cheatMeal.entryId} cheatMeal={cheatMeal} />
            ))}
        </CheatMealsContainer>
    );

}

export default CheatMeals;