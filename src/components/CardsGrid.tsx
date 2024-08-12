import React from "react";
import { Box, Grid } from "@mui/material";
import cardLogo from "../media/credit-card-02.png";
import { usePageContext } from "../App";

export const CardsGrid = ({
	children,
	navigate,
}: {
	children: React.ReactNode;
	navigate: string;
}) => {
	const { activePage, setActivePage } = usePageContext();

	return (
		<Grid item md={6} xs={12}>
			<div onClick={() => setActivePage(navigate)}>
				<Box
					sx={
						activePage !== navigate
							? {
									border: "1px solid #E1E6EF",
									borderRadius: "12px",
									padding: "20px",
							  }
							: {
									border: "1px solid #834CFF",
									borderRadius: "12px",
									padding: "20px",
									backgroundColor: "#834CFF1A",
							  }
					}
				>
					<img className="mb-2" src={cardLogo} alt="" />
					<p>{children}</p>
				</Box>
			</div>
		</Grid>
	);
};
