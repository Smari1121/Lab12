from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware  # Added this import
from routes.items import router as items_router
from routes.analytics import router as analytics_router
from routes.quiz import router as quiz_router
from routes.users import router as users_router  #added this linee (no path onlyy T^T)

app = FastAPI()

# Add CORS middleware configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

#added tags
app.include_router(items_router, prefix="/items", tags=["items"])
app.include_router(analytics_router, prefix="/analytics", tags=["analytics"])
app.include_router(quiz_router, prefix="/quiz", tags=["quiz"])
app.include_router(users_router, prefix="/users", tags=["users"])  # ← AND THIS

@app.get("/")                                                      #added a root route / for general welcome -itstandon
async def root():
    return {"message": "Hello from FastAPI 🚀"}

# why the hell did I write this function?
@app.get("/home")
async def get_home():
    return {"message": "Welcome to the Multi-Page FastAPI App!"}
