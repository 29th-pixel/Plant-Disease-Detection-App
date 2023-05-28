import uvicorn
import os
from fastapi import FastAPI, responses, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import cv2
import numpy as np

app = FastAPI(title='Plant Disease Detection',
              description="API for detecting plant diseases", version="1.0", debug=True)

origins = [
    "http://localhost",
    "http://localhost:3000",
    "http://localhost:8080",
    "http://localhost:5000",
    "http://127.0.0.1:5000",
    "http://192.168.1.41:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

