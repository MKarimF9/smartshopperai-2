from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import requests
from bs4 import BeautifulSoup
import json

app = FastAPI()

class ProductRequest(BaseModel):
    url: str

@app.get("/")
def home():
    return {"message": "Welcome to SmartShopper!"}

@app.post("/scrape")
def scrape_product(data: ProductRequest):
    headers = {"User-Agent": "Mozilla/5.0"}
    response = requests.get(data.url, headers=headers)
    
    if response.status_code != 200:
        raise HTTPException(status_code=400, detail="Failed to fetch product page")
    
    soup = BeautifulSoup(response.text, 'html.parser')
    product_name = soup.find("h1").text.strip() if soup.find("h1") else "Unknown"
    price = soup.find(class_="price").text.strip() if soup.find(class_="price") else "N/A"
    
    return {"name": product_name, "price": price}

@app.get("/deals")
def get_deals():
    # Simulated deals (replace with real API calls or ML predictions)
    deals = [
        {"brand": "Nike", "discount": "30% off", "url": "https://nike.com/deal"},
        {"brand": "Adidas", "discount": "20% off", "url": "https://adidas.com/deal"}
    ]
    return json.dumps(deals)
