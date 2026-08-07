from fastapi import APIRouter

from models.study import StudyRequest, StudyResponse


router = APIRouter()


@router.post("/study", response_model=StudyResponse)
def study(request: StudyRequest):
    return StudyResponse(
        message="I received your study question!",
        question=request.question,
    )