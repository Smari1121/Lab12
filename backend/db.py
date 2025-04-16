from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv
import os

load_dotenv()  # Loads from .env in same folder -itstandon

def init_db():
    MONGO_URI = os.getenv("MONGO_URL", "mongodb://localhost:27017")
    client = AsyncIOMotorClient(MONGO_URI)
    db = client["testdb"]
    return {
        "items_collection": db["item"],
        "users_collection": db["users"]
    }
    # Question for chocolate: How can we implement nosql syntax in mysql ???