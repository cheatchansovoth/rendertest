const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/test", (req, res) => {
  res.send("Hello World");
});
app.post("/create-checkout-session", async (req, res) => {
  // const line_items = req.body.data.cart.map((item) => {
  //   return {
  //     price_data: {
  //       currency: "usd",
  //       product_data: {
  //         name: item.name,
  //         images: [item.image],
  //         metadata: {
  //           id: item.id,
  //         },
  //       },
  //       unit_amount: item.price * 100,
  //     },
  //     quantity: 1,
  //   };
  // });
  // const session = await stripe.checkout.sessions.create({
  //   line_items,
  //   mode: "payment",
  //   success_url: `${YOUR_DOMAIN}/success.html`,
  //   cancel_url: `${YOUR_DOMAIN}/`,
  // });
  res.json({ message: "Hello World from create-check-out-session" });
  // res.send({ url: session.url });
});
app.post("/", (req, res) => {
  res.json({ message: "Hello World" });
});
app.listen(5000, () => console.log("Listening on port 5000"));
