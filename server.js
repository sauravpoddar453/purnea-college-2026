const express = require('express');
const cors = require('cors');
const fs = require('fs');
const xlsx = require('xlsx');
const path = require('path');

const app = express();
const PORT = 5000;
const EXCEL_FILE = path.join(__dirname, 'reflections.xlsx');

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Excel file if it doesn't exist
if (!fs.existsSync(EXCEL_FILE)) {
    console.log('📄 Creating new Excel storage: reflections.xlsx');
    const wb = xlsx.utils.book_new();
    const ws = xlsx.utils.json_to_sheet([{
        text: "The beginning of our legacy!",
        author: "System",
        color: "pink",
        rotate: "-2deg",
        createdAt: new Date().toISOString()
    }]);
    xlsx.utils.book_append_sheet(wb, ws, 'Reflections');
    xlsx.writeFile(wb, EXCEL_FILE);
}

// Routes
// 1. Get all notes from Excel
app.get('/api/notes', (req, res) => {
    try {
        const workbook = xlsx.readFile(EXCEL_FILE);
        const sheetName = workbook.SheetNames[0];
        const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);
        res.json(data.reverse()); // Show latest first
    } catch (err) {
        console.error('Read Error:', err);
        res.status(500).json({ message: "Could not read data file" });
    }
});

// 2. Add a new note to Excel
app.post('/api/notes', (req, res) => {
    const { text, author, color, rotate } = req.body;
    
    try {
        const workbook = xlsx.readFile(EXCEL_FILE);
        const sheetName = workbook.SheetNames[0];
        const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);
        
        const newNote = { 
            text, 
            author, 
            color, 
            rotate, 
            createdAt: new Date().toISOString() 
        };
        
        data.push(newNote);
        
        const newWs = xlsx.utils.json_to_sheet(data);
        workbook.Sheets[sheetName] = newWs;
        xlsx.writeFile(workbook, EXCEL_FILE);
        
        res.status(201).json(newNote);
    } catch (err) {
        console.error('Write Error:', err);
        res.status(400).json({ message: "Could not save reflection" });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`📁 Storing reflections in: reflections.xlsx`);
});
