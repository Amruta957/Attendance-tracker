# 📊 Attendance Tracking System (DevOps Project)

A simple Attendance Tracking System built using Node.js and HTML, integrated with DevOps tools like Docker and GitHub Actions for automation.

---

## 🎯 Problem Statement
Students often struggle to track their attendance percentage manually, which can lead to shortage of attendance and academic penalties.

This system provides a simple way to monitor attendance and ensure students meet the required criteria.

---

## 🚀 Overview

This project demonstrates how to:
- Build a basic web application
- Apply DevOps practices
- Automate testing and deployment
- Containerize applications using Docker

---

## ✨ Features

- Simple attendance tracking interface  
- Backend server using Node.js  
- Automated test cases  
- CI/CD pipeline using GitHub Actions  
- Docker support for containerization  

---

## 🛠️ Tech Stack

- Frontend: HTML, CSS, JavaScript  
- Backend: Node.js (JavaScript)  
- DevOps: Docker, GitHub Actions  

---

## 📂 Project Structure


```bash
Attendance-tracker/
│
├── .github/workflows/   # CI/CD pipeline configuration (GitHub Actions)
├── __tests__/           # Automated test cases
├── Dockerfile           # Docker container configuration
├── .dockerignore        # Excludes unnecessary files from Docker image
├── server.js            # Node.js backend server
├── index.html           # Frontend UI (HTML)
├── package.json         # Dependencies and npm scripts
├── .gitignore           # Files ignored by Git
└── README.md            # Project documentation
```
---

## ⚙️ Setup Instructions

### 1. Clone Repository

```bash
git clone https://github.com/Amruta957/Attendance-tracker.git
cd Attendance-tracker
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Application

```bash
node server.js
```

### 4. Open in Browser

http://localhost:3000

---

## 🧪 Run Tests
```bash
npm test
```
---

## 🐳 Docker Usage

### Build Image

```bash
docker build -t attendance-tracker .
```

### Run Container

```bash
docker run -p 3000:3000 attendance-tracker
```

---

## 🔁 CI/CD Pipeline

GitHub Actions is used for:
- Installing dependencies  
- Running tests  
- Building Docker image  

Workflow files are located in:

```bash
.github/workflows/
```

---
## ☁️ Deployment

The application is deployed on Render:

🔗 Live URL:
https://attendance-tracker-zsj2.onrender.com

- Connected to GitHub repository
- Auto-deploy enabled
- Ensures continuous delivery

## 📌 DevOps Concepts Used

- Continuous Integration (CI)  
- Continuous Deployment (CD)  
- Docker Containerization  
- Automated Testing  
- Version Control (Git & GitHub)  

---

## 🔄 DevOps Lifecycle Implemented

✔ Version Control using GitHub  
✔ Automated Build using npm  
✔ Continuous Integration using GitHub Actions  
✔ Automated Testing  
✔ Containerization using Docker  
✔ Cloud Deployment using Render  

---

## 🎯 Future Improvements

- Add database (MongoDB)  
- Add authentication system  
- Improve UI  
- Deploy to cloud (AWS/Azure)  

---

## 🎤 Conclusion
This project successfully demonstrates the implementation of a complete DevOps pipeline, integrating development, testing, automation, containerization, and deployment into a single workflow.

---
