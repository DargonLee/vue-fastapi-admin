import logging
from fastapi import APIRouter, Query
from fastapi.exceptions import HTTPException
from tortoise.expressions import Q
from app.controllers.file import file_controller
from app.schemas.base import Success, SuccessExtra

logger = logging.getLogger(__name__)
router = APIRouter()


@router.get("/list", summary="查看ABM文件列表")
async def list_file(
        page: int = Query(1, description="页码"),
        page_size: int = Query(10, description="每页数量"),
        is_active: bool = Query(None, description="是否已安装"),
):
    q = Q()
    if is_active:
        q &= Q(is_active__contains=is_active)
    total, user_objs = await file_controller.list(page=page, page_size=page_size, search=q)
    data = [await obj.to_dict() for obj in user_objs]
    return SuccessExtra(data=data, total=total, page=page, page_size=page_size)


@router.post("/update", summary="更新ABM文件记录")
async def update_file(
        file_id: int = Query(default=..., description="文件id值"),
):
    await file_controller.update_install_status(id=file_id)
    return Success(msg="Updated Success")
