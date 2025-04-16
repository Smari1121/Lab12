from fastapi import FastAPI
from routes.items import router as items_router
from routes.analytics import router as analytics_router
from routes.quiz import router as quiz_router
from routes.users import router as users_router  #added this linee (no path onlyy T^T)

app = FastAPI()

app.include_router(items_router, prefix="/items")
app.include_router(analytics_router)
app.include_router(quiz_router)
app.include_router(users_router)  # ← AND THIS

@app.get("/")                                                      #added a root route / for general welcome -itstandon
async def root():
    return {"message": "Hello from FastAPI 🚀"}

# why the hell did I write this function?
@app.get("/home")
async def get_home():
    return {"message": "Welcome to the Multi-Page FastAPI App!"}
