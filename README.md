# timestamp-api
Timestamp Microservice API Project for FreeCodeCamp

User stories:<br>
1) I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016)<br>
2) If it does, it returns both the Unix timestamp and the natural language form of that date.<br>
3) If it does not contain a date or Unix timestamp, it returns null for those properties.<br>
Example usage:<br>
https://timestamp-api-rv.onrender.com/January%2016,%202017<br>
https://timestamp-api-rv.onrender.com/1484524800<br>
Example output:<br>
{ "unix": 1484524800, "natural": "January 16, 2017" }
