
# MERN Auth  
An **Authentication System** created using the **MERN Stack** (MongoDB, Express.js, React.js, Node.js).

---

## 📌 **Description**  
This project is a secure user authentication system built with the MERN stack. It includes user registration, login, JWT-based authentication, and secure handling of user sessions. It follows best practices in password hashing, token management, and user data protection.

---

## 🚀 **Features**  
✅ User Registration and Login  
✅ JWT-based Authentication  
✅ Password Hashing using bcrypt.js  
✅ Protected Routes  
✅ Email Verification  
✅ Persistent Login using Cookies  
✅ Error Handling and Toast Notifications  

---

## 🏗️ **Tech Stack**  
| Technology | Purpose |
|------------|---------|
| **MongoDB** | Database to store user information |
| **Express.js** | Web framework for building backend APIs |
| **React.js** | Frontend framework for building user interface |
| **Node.js** | Runtime environment for executing backend code |

---

## 📂 **Project Structure**  
```
mern_auth/
├── client/           # Frontend (React.js)
├── server/           # Backend (Express.js, Node.js)
├── .env              # Environment variables
├── .gitignore        # Files to ignore in Git
├── package.json      # Project dependencies
└── README.md         # Project documentation
```

---

## 💻 **Frontend Setup**  
The frontend is built using **React.js** with `create-react-app`.

### 🔨 **Setup Instructions**  
1. Navigate to the `client` folder:  
```bash
cd client
```

2. **Install npm dependencies**  
```bash
npm install
```

3. **Install required libraries**  
```bash
npm i axios react-router-dom react-toastify
```

### 📌 **Dependencies Overview**  
| Dependency | Purpose |
|------------|---------|
| **axios** | For making HTTP requests to the backend |
| **react-router-dom** | For handling routing in React |
| **react-toastify** | For displaying toast notifications |

4. **Run the frontend**  
```bash
npm start
```

---

## 🚀 **Backend Setup**  
The backend is built using **Express.js** and **Node.js**.

### 🔨 **Setup Instructions**  
1. Navigate to the `server` folder:  
```bash
cd server
```

2. **Initialize a Node.js project**  
```bash
npm init -y
```

3. **Install required libraries**  
```bash
npm i express cors dotenv nodemon jsonwebtoken mongoose bcryptjs nodemailer cookie-parser
```

### 📌 **Dependencies Overview**  
| Dependency | Purpose |
|------------|---------|
| **express** | Web framework for Node.js |
| **cors** | Allows cross-origin requests |
| **dotenv** | Manages environment variables |
| **nodemon** | Automatically restarts the server on code changes |
| **jsonwebtoken** | Manages JWT-based authentication |
| **mongoose** | ODM for MongoDB |
| **bcryptjs** | Hashes and compares passwords |
| **nodemailer** | Sends email for verification |
| **cookie-parser** | Parses cookies in requests |

4. **Create a `.env` file**  
Create a `.env` file in the `server` folder with the following values:  
```env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/mern_auth
JWT_SECRET=<your-jwt-secret>
SMTP_HOST=<your-smtp-host>
SMTP_PORT=<your-smtp-port>
SMTP_USER=<your-smtp-email>
SMTP_PASS=<your-smtp-password>
```

5. **Run the backend**  
```bash
npm run start
```

---

## 🌐 **API Endpoints**  
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/auth/register` | Register a new user |
| `POST` | `/api/auth/login` | Login with existing user credentials |
| `POST` | `/api/auth/logout` | Logout user and clear cookie |
| `GET`  | `/api/auth/user` | Get current authenticated user data |
| `POST` | `/api/auth/forgot-password` | Send a password reset link |
| `POST` | `/api/auth/reset-password` | Reset the user password |

---

## 🔑 **Authentication Flow**  
1. User registers → Hashed password stored in the database  
2. User logs in → JWT created and stored in cookies  
3. Protected routes → JWT verified before accessing secure routes  
4. Logout → JWT cleared from cookies  

---

## 🛡️ **Security Measures**  
✅ Password hashing with `bcryptjs`  
✅ Token-based authentication with `jsonwebtoken`  
✅ Secure cookies with `cookie-parser`  
✅ Environment variables managed with `dotenv`  

---

## 🚀 **Run the Complete Application**  
1. Open two terminals:  
   - **Frontend**  
   ```bash
   cd client && npm start
   ```  
   - **Backend**  
   ```bash
   cd server && npm run start
   ```  

2. Open the app in your browser:  
   ```
   http://localhost:3000
   ```

---

## 🤝 **Contributing**  
1. Fork the repository  
2. Create a new branch (`git checkout -b feature-branch`)  
3. Commit your changes (`git commit -m "Add new feature"`)  
4. Push to the branch (`git push origin feature-branch`)  
5. Create a pull request  

---

## 📜 **License**  
This project is licensed under the **MIT License**.  

---

## 🏆 **Author**  
**Mohit Malaya Nandy**  
📧 [mohit78nandy@gmail.com](mailto:mohit78nandy@gmail.com)  
👥 [LinkedIn](https://www.linkedin.com/in/mohitmalayanandy)  
🌐 [GitHub](https://github.com/mohitmalayanandy)  

---
👋 *Hey Coders! Happy Coding*👩‍💻
🚀 *Happy Coding!* 😎