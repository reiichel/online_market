import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());

const products = [
  { id: "p1", name: "חלב 3%", price: 5.9 },
  { id: "p2", name: "לחם מלא", price: 8.5 },
  { id: "p3", name: "עגבניות", price: 4.2 },
];

app.get("/products", (req, res) => res.json(products));

app.post("/orders", (req, res) => {
  const orderId = "o-" + Math.random().toString(36).slice(2, 8);
  console.log("ORDER:", req.body);
  res.json({ status: "ok", orderId, receivedTotal: req.body.total });
});

app.listen(process.env.PORT || 3000, () =>
  console.log("Server running")
);
