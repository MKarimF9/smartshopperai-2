# SmartShopper

SmartShopper is an AI-powered web application that helps users find the best discounts on clothing brands by scraping prices from multiple e-commerce websites.

## Features
- Scrapes product prices from H&M and other fashion retailers
- FastAPI backend for data retrieval
- React.js frontend for UI
- SQLite/PostgreSQL database for storing product data
- Automatic coupon code application

---

## **1️⃣ Backend Setup (FastAPI)**
### **Prerequisites**
- Install **Python 3.8+**
- Install dependencies with **pip**

### **Clone the Repository**
```sh
git clone https://github.com/your-username/smartshopper.git
cd smartshopper-backend
```

### **Create Virtual Environment & Install Dependencies**
```sh
python -m venv venv
source venv/bin/activate  # MacOS/Linux
venv\Scripts\activate    # Windows

pip install -r requirements.txt
```

### **Run Database Migrations**
```sh
python -c 'from database import Base, engine; Base.metadata.create_all(engine)'
```

### **Run the FastAPI Server**
```sh
uvicorn main:app --reload
```

📌 **API is now available at:** `http://127.0.0.1:8000`
📌 **Swagger API Docs:** `http://127.0.0.1:8000/docs`

---

## **2️⃣ Frontend Setup (React.js)**
### **Prerequisites**
- Install **Node.js 16+**
- Install dependencies with **npm**

### **Navigate to the Frontend Directory**
```sh
cd ../smartshopper-frontend
```

### **Install Dependencies**
```sh
npm install
```

### **Run the React App**
```sh
npm start
```

📌 **Frontend is now available at:** `http://localhost:3000`

---

## **3️⃣ Running the Scraper**
The scraper is built inside `scraper.py` and runs automatically, but you can also run it manually:
```sh
python scraper.py
```
This will fetch updated product prices and store them in the database.

---

## **4️⃣ Docker Setup (Optional)**
### **Run Backend with Docker**
```sh
docker build -t smartshopper-backend .
docker run -p 8000:8000 smartshopper-backend
```

### **Run Frontend with Docker**
```sh
docker build -t smartshopper-frontend .
docker run -p 3000:3000 smartshopper-frontend
```

---

## **5️⃣ Next Steps**
- Add authentication (JWT)
- Scrape more stores (Nike, Adidas, Zara)
- Deploy to AWS/GCP

