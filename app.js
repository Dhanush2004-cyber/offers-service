require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {

    res.json({
        service: process.env.APP_NAME,
        status: "Running"
    });

});

app.get("/api/offers", (req, res) => {

    const offers = [

        {
            id: 1,
            title: "10% OFF",
            description: "Get 10% discount on all electronics",
            validTill: "31-Dec-2026"
        },

        {
            id: 2,
            title: "Free Delivery",
            description: "Free shipping above ₹999",
            validTill: "30-Nov-2026"
        },

        {
            id: 3,
            title: "Bank Cashback",
            description: "15% cashback using HDFC Credit Card",
            validTill: "15-Oct-2026"
        }

        {
            id: 4,
            title: "Zomato Gift Card",
            description: "20% cashback using Zomato Food Card",
            validTill: "16-Nov-2026"
        }

    ];

    res.json({

        success: true,

        totalOffers: offers.length,

        offers

    });

});

const PORT = process.env.PORT;

app.listen(PORT, () => {

    console.log(`${process.env.APP_NAME} running on port ${PORT}`);

});