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

### Clone the repository
```sh
git clone https://github.com/maulimogal/notebook-app.git
cd notebook-app

## 🏗️ Software Architecture Overview  

Your application consists of the following components:  

### 1️⃣ Frontend (React + Tailwind CSS)  
- **Framework**: React.js  
- **State Management**: Redux Toolkit (or React Context API)  
- **UI Framework**: Tailwind CSS  
- **API Communication**: Axios  
- **Routing**: React Router  

#### 🏗️ Component Structure:  
✅ **Authentication**: Login, Signup  
✅ **Dashboard**: Displays workspaces and notebooks  
✅ **Notebook Table**: Includes search, pagination, sorting  
✅ **Create Notebook Form**  

---

### 2️⃣ Backend (Node.js + Express.js)  
- **Framework**: Express.js  
- **Database ORM**: Sequelize (PostgreSQL)  
- **Authentication**: JWT (JSON Web Token)  
- **Middleware**: CORS, Helmet, Body-parser  

#### 📌 API Endpoints:  
- `POST /auth/login` → User login  
- `POST /auth/signup` → User registration  
- `GET /workspaces` → Fetch all workspaces  
- `POST /notebooks` → Create a new notebook  
- `GET /notebooks?workspace_id={id}` → Fetch notebooks by workspace  
- `GET /notebooks/search?query={search_term}` → Search notebooks  
- `DELETE /notebooks/:id` → Delete a notebook  

---

### 3️⃣ Database (PostgreSQL)  
#### 🗃️ Tables:  
- **users** `(id, name, email, password, created_at, updated_at)`  
- **workspaces** `(id, name, user_id, created_at)`  
- **notebooks** `(id, name, workspace_id, owner, interpreter, created_at)`  

---

### 4️⃣ Docker Deployment  
✅ **Frontend Dockerfile** (React app)  
✅ **Backend Dockerfile** (Node.js API)  
✅ **Docker Compose** for PostgreSQL & app services