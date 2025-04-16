### Fixing the Buggy Code

- This code has 30 issues out of which 1 is no code in style.css . 
- The total marks for the entire codebase is 40, some issues have more marks than the other one. Style.css is of 5 marks. It will get scaled down to 20. All team members will get equal marks.
- You are suppose to work in teams of 4 or 5
- Each team member has to identify atleast 4 issues and fix atleast 4 issue. If someone doesn't do this, their marks get deducted.
- You are suppose to work on a git repository as collaborators

### What kind of bugs are there

- Bugs which will break your code
- Bugs might be a single word
- Bugs might be section of removed code
- Bugs might be section of unnecessary code
- Bugs might be useless files
- Bugs might be in the UI/UX of the pages
- Bugs might be in the api calls
- Bugs might be in the dependencies  

### submission format

- Make submissions on moodle
- Do not remove .git folder 
- Only 1 submission per team
- Submit it as Corrected_Code.zip

### Add the names of the members and roll numbers of your team below

- Name : Roll Number

### Table to keep track

| ID  | Issue Description                        | Identified By | Fixed By     |
|-----|------------------------------------------|---------------|--------------|
| 1   | Style.css is not filled                                    |         Narain |     Whole Team     |
| 2   | Added container-class in items.html                           |               |              |
| 3   | changed userCounts to userCount in profile.html                                       |               |              |
| 4   | incorrect path to profile.js in profile.html,changed styles to script in line 31                                         |               |              |
| 5   | corrected id="avgUserName" in analytics.html to match JS file                                         |               |              |
| 6   | added analytics in nav bar                                        |               |              |
| 7   | created env file                                         |               |              |
| 8   | created home.js                                         |               |              |
| 9   | added route in main.py for users                                         |               |              |
| 10  | in users.py there are 2 gets which should not be there, so one was changed to post (as was needed)                                         |               |              |
| 11  | in users.py no need to delete_all so only delete one using its id (as assumed that only unique id)                                         |               |              |
| 12  | made changes in index.html for encoding to show the emojis                                        |               |              |
| 13  | analytics.py: changed names to name and usernames to username                                         |               |              |
| 14  | analytics.py: include the image in the json response                                         |               |              |
| 15  | analytics.py: removed dummy users                                         |               |              |
| 16  | items.py: changed dict to APIRouter                                         |               |              |
| 17  | main.py: imported CORSMiddleware                                         |               |              |
| 18  | main.py: add CORS middleware configuartion                                         |               |              |
| 19  | main.py: added tags in include-router function                                         |               |              |
| 20  | models.py: Added Field to import                                         |               |              |
| 21  | Changed method name to DELETE from POST in line 28 in items.js                                         |               |              |
| 22  | In 43 of items.js - should be json instead of html                                         |               |              |
| 23  | Change news.js line 21                                         |               |              |
| 24  | In news.js line 62, should be just equal and not +=                                         |               |              |
| 25  | In news.js line 69 - Added the whole code                                         |               |              |
| 26  | In quiz.js line 83 - shouldn't be parseInt                                         |               |              |
| 27  | In quiz.js line 133- added line to reset                                         |               |              |
| 28  | In quiz.js changed line 61-67                                         |               |              |
| 29  | Load_dotenv() missing in db.py                                          |               |              |
| 30  | Item changed to items in db.py                                         |               |              |
| 31 | Added root route / in main.py
| 32 | Inherited from base model in models.py
| 33 | Int changed to str in models.py
| 34 | Picking random qs in quiz.py 
| 35 | Using body to parse request body in quiz.py
| 36 | Change from get to post in quiz.py
| 37 | Added model.dump() instead of deprecated dict in users.py
