# 📒 Notebook Web Application  

A full-stack notebook management web app built with **React, Node.js, Express, and PostgreSQL**, deployed using **Docker**. Users can create, search, and manage notebooks within workspaces.

---

## 🏗️ Tech Stack

### 🔹 Frontend (React.js)
- React 18, Tailwind CSS  
- React Router for navigation  
- Redux Toolkit for state management  
- Axios for API requests  

### 🔹 Backend (Node.js + Express.js)
- Express.js as the web framework  
- PostgreSQL as the database  
- Sequelize ORM for database interactions  
- JWT authentication  

### 🔹 Database (PostgreSQL)
- Tables: `users`, `workspaces`, `notebooks`  
- Relationships: Users → Workspaces → Notebooks  

### 🔹 Deployment
- Docker for containerization  
- Docker Compose for service orchestration  

---

## 📜 Features
✅ User Authentication (Login, Signup)  
✅ Create & Manage Workspaces  
✅ Create & Manage Notebooks  
✅ Search & Filter Notebooks  
✅ Pagination for Large Data  

---

## 🚀 Installation & Setup

### 1️⃣ Clone the repository
```sh
git clone https://github.com/maulimogal/notebook-app.git
cd notebook-app
