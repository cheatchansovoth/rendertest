const express = require("express");
const app = express();
const stripe = require("stripe")(
  "sk_test_51MtiOvJFziKWwKoooAjJuJXZT1E1ufaA3Ybkzs5uOd0nb9fYl7uwnacBh4sTKY2sGFzI9jtlr6jLpcCzk18BENa800t7PKjab1"
);
const cors = require("cors");
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/test", (req, res) => {
  res.send("Hello World");
});
const YOUR_DOMAIN = "http://localhost:5000";
app.post("/create-checkout-session", async (req, res) => {
  const line_items = req.body.data.cart.map((item) => {
    return {
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
          images: [item.image],
          metadata: {
            id: item.id,
          },
        },
        unit_amount: item.price * 100,
      },
      quantity: 1,
    };
  });
  const session = await stripe.checkout.sessions.create({
    line_items,
    mode: "payment",
    success_url: `${YOUR_DOMAIN}/success.html`,
    cancel_url: `${YOUR_DOMAIN}/`,
  });
  res.send({ url: session.url });
});
app.post("/", (req, res) => {
  res.json({ message: "Hello World" });
});
app.listen(5000, () => console.log("Listening on port 5000"));
