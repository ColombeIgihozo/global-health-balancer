const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Your two Render static sites:
const servers = [
  'https://global-health-alert-dashboard-1.onrender.com',
  'https://global-health-alert-dashboard-2.onrender.com'
];

app.get('*', (req, res) => {
  const target = servers[Math.floor(Math.random() * servers.length)];
  res.redirect(target + req.originalUrl);
});

app.listen(PORT, () => {
  console.log(`Load balancer running on port ${PORT}`);
});
