const express = require("express");
// const multer = require("multer");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware for JSON 
app.use(express.json());

// Set up multer storage for file uploads
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     const uploadPath = path.join(__dirname, "public/uploads");
//     if (!fs.existsSync(uploadPath)) {
//       fs.mkdirSync(uploadPath, { recursive: true });
//     }
//     cb(null, uploadPath);
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + "-" + file.originalname);
//   },
// });

// const upload = multer({
//   storage,
//   fileFilter: (req, file, cb) => {
//     const allowedTypes = /pdf/;
//     const mimetype = allowedTypes.test(file.mimetype);
//     if (mimetype) {
//       cb(null, true);
//     } else {
//       cb(new Error("Only PDF files are allowed"));
//     }
//   },
// });

// // Route: Upload PDF Invoice
// app.post("/upload", upload.single("file"), (req, res) => {
//     console.log("File: ", req.file);
//     console.log("Body: ", req.body);

//     if (!req.file) {
//         return res.status(400).json({ message: "No file uploaded or invalid file type" });
//     }
//     res.status(200).json({ message: "File uploaded successfully", filePath: `/uploads/${req.file.filename}` });
// });
// // Route: Get PDF as Base64
// app.get("/get-pdf/:filename", (req, res) => {
//   const filePath = path.join(__dirname, "public/uploads", req.params.filename);

//   if (!fs.existsSync(filePath)) {
//     return res.status(404).json({ message: "File not found" });
//   }

//   const fileContent = fs.readFileSync(filePath);
//   const base64String = fileContent.toString("base64");

//   res.status(200).json({ filename: req.params.filename, base64: base64String });
// });

// // Error Handling Middleware
// app.use((err, req, res, next) => {
//     console.log(req);
//   res.status(500).json({ message: err.message, data: "error hain" });
// });

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
