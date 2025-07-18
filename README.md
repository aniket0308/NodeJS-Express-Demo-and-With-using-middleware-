📌 Express.js Demo Project
This is a simple Node.js + Express.js demo application showcasing:

✔ Basic Express server setup
✔ Serving static files (HTML)
✔ Handling GET, POST, PUT, PATCH, DELETE routes
✔ Middleware usage (body-parser, morgan)
✔ Form submission handling

✅ Features
GET / → Serves an index.html file

POST /submit → Handles form submissions and displays a custom response

REST API routes:

GET / → Hello World response

POST /register → Simulates user registration

PUT /user/aniket → Updates user

PATCH /user/aniket → Partially updates user

DELETE /user/aniket → Deletes user

📂 Project Structure
csharp
Copy
Edit
.
├── public/
│   └── index.html      # Basic HTML form
├── server.js           # Main Express app
├── package.json        # Dependencies
└── README.md           # Documentation
