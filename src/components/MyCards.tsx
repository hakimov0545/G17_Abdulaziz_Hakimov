import React, { useContext } from "react";
import { CardsContext } from "../App";
import { Card } from "./Card";
import { Grid } from "@mui/material";

export const MyCards = () => {
	const { cards, setCards } = useContext(CardsContext);
	return (
		<Grid container spacing={3}>
			{cards.map((card, index) => {
				return <Card key={index} card={card} />;
			})}
		</Grid>
	);
};
