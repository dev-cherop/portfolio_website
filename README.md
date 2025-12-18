# Portfolio website

A full-stack portfolio website built with a Django REST API backend and a React frontend (Vite + Tailwind CSS).
The project includes an admin dashboard with JWT authentication for managing projects and contacts.
## 🚀 Features

- Admin authentication using JWT (Simple JWT)
- CRUD operations for Projects & Contacts
- Responsive UI with Tailwind CSS
- React frontend with React Router
- Django REST Framework backend
- Clean and scalable project structure

## Project Structure

portfolio/

├─ backend/ # Django backend

├─ frontend/ # React frontend

├─ .gitignore

├─ README.md

## 🛠️ Setup Instructions
## 1️⃣ Clone the Repository
git clone https://github.com/dev-cherop/portfolio_website.git
cd portfolio_website
## ⚙️ Backend Setup (Django)

cd backend

python -m venv env

# Windows
env\Scripts\activate

# Linux / macOS
source env/bin/activate

# Install dependencies:
pip install -r requirements.txt
# Run migrations and create admin user:
python manage.py migrate

python manage.py createsuperuser
# Start the server:
python manage.py runserver

# API base URL: 
http://localhost:8000/api/

## 🎨 Frontend Setup (React)

cd frontend

npm install

npm run dev

## Frontend URL: 
http://localhost:5173 (Vite default)
## 🔐 Admin Access
Visit /admin on the frontend
Log in using the Django superuser credentials
Manage projects and contacts from the dashboard
