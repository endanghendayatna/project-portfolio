const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.post("/contact", (req, res) => {
    const { name, email, message } = req.body;
    // Simpan atau kirim data kontak ke email
    res.send("Contact form submitted");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
