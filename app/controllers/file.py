from typing import Optional
from datetime import datetime
from app.schemas.file import AbmExcelFileCreate, AbmExcelFileUpdate
from app.core.crud import CRUDBase
from app.models.admin import AbmExcelFile


class FileController(CRUDBase[AbmExcelFile, AbmExcelFileCreate, AbmExcelFileUpdate]):
    def __init__(self):
        super().__init__(model=AbmExcelFile)

    async def get_by_file_path(self, path: str) -> Optional["AbmExcelFile"]:
        return await self.model.filter(path=path).first()

    async def update(self, obj_in: AbmExcelFileUpdate) -> AbmExcelFile:
        return await super().update(id=obj_in.id, obj_in=obj_in.update_dict())

    async def abm_bulk_create(self, objs_in: [AbmExcelFile]):
        await self.model.bulk_create(objs_in)

    async def update_install_status(self, id: int) -> None:
        file = await self.model.get(id=id)
        file.is_active = False
        file.installed_at = datetime.now()
        await file.save()


file_controller = FileController()
