const express = require('express');
const strftime = require('strftime'); // Date-formatting module
const app = express(); // Simple server setup
const port = process.env.PORT || 8080; // Let Heroku set the port

// Landing page with instructions
app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

// Actual Timestamp API functionality
app.get('/:timeOrDate', (req, res) => {
  // Convert user entry to a number
  const userEntry = Number(req.params.timeOrDate);
  
  // Handle userEntry
  const theTime = isNaN(userEntry)
    ? Date.parse(req.params.timeOrDate) // Not a number? Parse date
    : new Date(userEntry * 1000)
  /* ^^ If user entry is a number, then it's a unix timestamp.
  Multiple value by 1000 for proper ms value */
  
  // If entry is invalid (couldn't be converted), return both null
  if (isNaN(theTime)) res.send({ 'unix': null, 'natural': null });
  // Otherwise, return the correctly formatted values
  else res.send({
    'unix': (theTime / 1000), // Divided by 1000 for correct unix output
    'natural': strftime('%B %d, %Y', new Date(theTime))
  });
});

app.listen(port, () => console.log(`This app is running on port ${port}`));
