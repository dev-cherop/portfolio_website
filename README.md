# Portfolio website

A full-stack portfolio project with Django backend (REST API) and React frontend (Vite + Tailwind CSS). Includes admin login, project & contact management, and JWT authentication.

## Features

- Admin login with JWT
- CRUD for Projects & Contacts
- Filter projects by tech stack
- Responsive design with Tailwind
- React frontend with React Router
- Django REST Framework backend

## Project Structure

portfolio/

├─ backend/ # Django backend

├─ frontend/ # React frontend

├─ .gitignore

├─ README.md

##SETUP

## Backend Setup

cd backend

python -m venv env

source env/bin/activate       # Windows: env\Scripts\activate

pip install -r requirements.txt

python manage.py migrate

python manage.py createsuperuser

python manage.py runserver

API base URL: http://localhost:8000/api/

##Frontend Setup

cd frontend

npm install

npm run dev

Frontend URL: http://localhost:5173 (Vite default)
