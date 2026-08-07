from pydantic import BaseModel


class StudyRequest(BaseModel):
    question: str


class StudyResponse(BaseModel):
    message: str
    question: str