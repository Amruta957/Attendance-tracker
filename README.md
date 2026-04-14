# 📊 Attendance Tracking System (DevOps Project)

A simple Attendance Tracking System built using Node.js and HTML, integrated with DevOps tools like Docker and GitHub Actions for automation.

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

- Frontend: HTML  
- Backend: Node.js (JavaScript)  
- DevOps: Docker, GitHub Actions  

---

## 📂 Project Structure
attendance-tracker/
│
├── .github/
│ └── workflows/ # CI/CD pipeline (GitHub Actions)
│
├── tests/ # Test cases
│
├── Dockerfile # Docker configuration
├── index.html # Frontend UI
├── server.js # Backend server
├── package.json # Project dependencies
├── .gitignore # Git ignore rules
├── .dockerignore # Docker ignore rules
└── README.md # Project documentation


---

## ⚙️ Setup Instructions

### 1. Clone Repository

git clone <your-repo-url>
cd attendance-tracker


### 2. Install Dependencies

npm install


### 3. Run Application

node server.js


### 4. Open in Browser

http://localhost:3000

---

## 🧪 Run Tests

npm test
---

## 🐳 Docker Usage

### Build Image

docker build -t attendance-tracker .


### Run Container

docker run -p 3000:3000 attendance-tracker

---

## 🔁 CI/CD Pipeline

GitHub Actions is used for:
- Installing dependencies  
- Running tests  
- Building Docker image  

Workflow files are located in:

.github/workflows/

---

## 📌 DevOps Concepts Used

- Continuous Integration (CI)  
- Continuous Deployment (CD)  
- Docker Containerization  
- Automated Testing  
- Version Control (Git & GitHub)  

---

## 🎯 Future Improvements

- Add database (MongoDB)  
- Add authentication system  
- Improve UI  
- Deploy to cloud (AWS/Azure)  

---
