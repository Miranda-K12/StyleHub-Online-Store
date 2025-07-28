import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import PaymentIcon from "@mui/icons-material/Payment";
import HighQualityIcon from "@mui/icons-material/HighQuality";
const cards = [
  {
    id: 1,
    icon: <LocalShippingIcon sx={{ fontSize: 60, color: "#224abe" }} />,
    title: "Free Delivery",
    description:
      "No minimum purchase required! Shop now and get your order delivered for free. It's our way of saying thank you!",
  },
  {
    id: 2,
    icon: <SwapHorizIcon sx={{ fontSize: 60, color: "#224abe" }} />,
    title: "Free Return",
    description:
      "Shop with confidence! We offer Free Returns on all purchases—because your satisfaction is our priority.",
  },
  {
    id: 3,
    icon: <PaymentIcon sx={{ fontSize: 60, color: "#224abe" }} />,
    title: "Safe Payment",
    description:
      "Enjoy a worry-free shopping experience with our secure payment system. Your privacy is our top priorities!",
  },
  {
    id: 4,
    icon: <HighQualityIcon sx={{ fontSize: 60, color: "#224abe" }} />,
    title: "High Quality",
    description:
      "We believe in offering only high-quality products that stand the test of time. Shop with confidence!",
  },
];
function FeatureCard() {
  const [selectedCard, setSelectedCard] = React.useState(0);

  return (
    <Box
      sx={{
        width: "90%",

        margin: "auto",
        marginTop: "64px",
        display: "grid",
        gap: 2,
        gridTemplateColumns: "repeat(4, 1fr)",
        "@media (max-width:768px)": {
          gridTemplateColumns: "repeat(2, 1fr)",
        },
        "@media (max-width:480px)": {
          gridTemplateColumns: "repeat(1, 1fr)",
        },
      }}
    >
      {cards.map((card, index) => (
        <Card key={card.id}>
          <CardActionArea
            onClick={() => setSelectedCard(index)}
            data-active={selectedCard === index ? "" : undefined}
            disableRipple
            sx={{
              height: "100%",
              backgroundColor: "transparent",
              "&:hover": {
                scale: "1.02",
                transition: "all 0.3 easy",
              },
            }}
          >
            <CardContent
              sx={{
                height: "100%",
                textAlign: "center",
                backgroundColor: "#f0f0f0",
              }}
            >
              {card.icon}
              <Typography
                variant="h5"
                component="div"
                sx={{
                  color: "#224abe",
                  fontWeight: "600",
                  marginBottom: "16px",
                }}
              >
                {card.title}
              </Typography>
              <Typography>{card.description}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
}

export default FeatureCard;
