const express = require("express");
const cors = require("cors");
const app = express();

// CORS middleware
app.use(cors());

app.get("/", (_req, res) => {
  res.json({ message: "Hello World from Express 🚀" });
});

// Run only when executed directly (local dev)
if (require.main === module) {
  const PORT = 3000; // Change this if necessary
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

// Export for Vercel
module.exports = app;