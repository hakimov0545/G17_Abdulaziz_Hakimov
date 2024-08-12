import React, { useContext, useState } from "react";
import { Form, Input, Select } from "antd";
import { Box, Button, Typography } from "@mui/material";
import { CardsContext, usePageContext } from "../App";

import card1 from "../media/card1.png";
import card2 from "../media/card2.png";
import card3 from "../media/card3.png";

export const NewCard = () => {
	const { cards, setCards } = useContext(CardsContext);
	const { activePage, setActivePage } = usePageContext();
	const [form] = Form.useForm();
	const Option = Select;

	const onFinish = () => {
		const newCard = form.getFieldsValue();
		setCards([...cards, { ...newCard, sum: "0" }]);
		form.resetFields();
		setActivePage("myCards");
	};

	return (
		<>
			<Typography component={"h4"} variant="h4">
				Add new card
			</Typography>
			<h2 className="my-4">
				Do more with unlimited blocks, files, automations &
				integrations.
			</h2>
			<Form form={form} layout="vertical" onFinish={onFinish}>
				<Form.Item label="Who is" name="name" required>
					<Input placeholder="Name" />
				</Form.Item>
				<Form.Item label="Card number" name="number" required>
					<Input placeholder="Card number" />
				</Form.Item>
				<Form.Item name="date" label="Date" required>
					<Input placeholder="Date" />
				</Form.Item>
				<Form.Item name="img" label="Image" required>
					<Select>
						<Option value={card1}>
							<img
								style={{ width: "100px" }}
								src={card1}
								alt=""
							/>
						</Option>
						<Option value={card2}>
							<img
								style={{ width: "100px" }}
								src={card2}
								alt=""
							/>
						</Option>
						<Option value={card3}>
							<img
								style={{ width: "100px" }}
								src={card3}
								alt=""
							/>
						</Option>
					</Select>
				</Form.Item>
			</Form>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					gap: "10px",
				}}
			>
				<Button sx={{ width: "50%" }} variant="outlined">
					Cancel
				</Button>
				<Button
					onClick={() => {
						form.submit();
					}}
					variant="contained"
					sx={{
						width: "50%",
					}}
				>
					Add
				</Button>
			</Box>
		</>
	);
};
