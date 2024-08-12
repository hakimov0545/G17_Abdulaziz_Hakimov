import React, { useContext, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import logo from "./media/Frame 1000008223.png";
import { Grid } from "@mui/material";
import { CardsGrid } from "./components/CardsGrid";
import { MyCards } from "./components/MyCards";
import { NewCard } from "./components/NewCard";
import card1 from "./media/card1.png";
import card2 from "./media/card2.png";
import card3 from "./media/card3.png";

export interface ICard {
	number: string;
	name: string;
	date: string;
	img: any;
	sum: string;
}

const cardsData: ICard[] = [
	{
		number: "9905142384564805",
		name: "Abdulaziz Hakimov",
		date: "20/28",
		img: card1,
		sum: "2 154 000",
	},
	{
		number: "5478965874583256",
		name: "Abdulaziz Hakimov",
		date: "20/29",
		img: card2,
		sum: "4 217 000",
	},
	{
		number: "9658748512546325",
		name: "Laziz Botirov",
		date: "14/30",
		img: card3,
		sum: "457 000",
	},
];

export const PageContext = React.createContext<{
	activePage: string;
	setActivePage: (value: string) => void;
}>({
	activePage: "myCards",
	setActivePage: (value: string) => {},
});

export const CardsContext = React.createContext<{
	cards: ICard[];
	setCards: (value: ICard[]) => void;
}>({
	cards: cardsData,
	setCards: (value: ICard[]) => {},
});

export const usePageContext = () => {
	return useContext(PageContext);
};

export default function SimpleContainer() {
	const [activePage, setActivePage] = useState<string>("myCards");
	const [cards, setCards] = useState<ICard[]>(cardsData);

	return (
		<CardsContext.Provider value={{ cards, setCards }}>
			<PageContext.Provider
				value={{ activePage, setActivePage }}
			>
				<CssBaseline />
				<Container maxWidth="lg" sx={{ marginBlock: "60px" }}>
					<Box
						sx={{
							marginBottom: "10px",
						}}
					>
						<img src={logo} alt="" />
					</Box>
					<Grid container spacing={3}>
						<CardsGrid navigate="newCards">
							New Creadit Card
						</CardsGrid>
						<CardsGrid navigate="myCards">
							My Cards
						</CardsGrid>
					</Grid>
					<Box sx={{ marginTop: "32px" }}>
						{activePage == "myCards" ? (
							<MyCards />
						) : (
							<NewCard />
						)}
					</Box>
				</Container>
			</PageContext.Provider>
		</CardsContext.Provider>
	);
}
