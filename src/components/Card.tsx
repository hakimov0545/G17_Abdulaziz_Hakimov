import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { ICard } from "../App";
import image from "../media/Group (1).png";
import visa from "../media/Group (2).png";

export const Card = ({ card }: { card: ICard }) => {
	console.log(card.img);

	return (
		<Grid item xs={12} md={6} lg={4}>
			<Box
				sx={{
					borderRadius: "20px",
					background: `url(${card.img})`,
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					padding: "30px",
					color: "white",
					overflow: "hidden",
				}}
			>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
					}}
				>
					<img src={image} alt="" />
					<img src={visa} alt="" />
				</Box>
				<Typography component={"h2"} variant="h5">
					**** **** **** {Number(card.number) % 10000}
				</Typography>
				<Typography
					component={"h4"}
					variant="h6"
					sx={{ marginBottom: "20px" }}
				>
					{card.sum}
				</Typography>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
					}}
				>
					<Box>
						<p>Card holder name</p>
						<h4>{card.name}</h4>
					</Box>
					<Box>
						<p>Expiry date</p>
						<h4>{card.date}</h4>
					</Box>
				</Box>
			</Box>
		</Grid>
	);
};
