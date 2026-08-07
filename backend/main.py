from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routes.study import router as study_router


app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5174",
        "http://localhost:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(
    study_router,
    prefix="/api",
)