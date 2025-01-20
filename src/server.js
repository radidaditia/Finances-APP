// Tambahkan setelah route Users
const financeRoutes = require('./routes/financeRoutes');

// Gunakan route finance
app.use('/api/finances', financeRoutes);