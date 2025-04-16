from pydantic import BaseModel

class Item(BaseModel): #corrected the bug , inherited it from BaseModel -itstandon
    name: str
    description: str

class User(BaseModel):
    username: str
    bio: str
    
    # You can raise your hands and give the answer to the chocolate question