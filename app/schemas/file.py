from enum import Enum
from datetime import datetime
from typing import List, Optional
from pydantic import BaseModel, Field


class FileModelName(str, Enum):
    abm_excel = "abm_excel"
    abm_word = "abm_wrod"
    abm_md = "abm_md"


class BaseAbmExcelFile(BaseModel):
    username: str = Field(..., description="用户名称", examples="aaa <xxx@yyy.appleid.com>")
    is_active: bool = Field(default=True, description="是否可用", examples=True)
    abm_link: str = Field(..., description="下载链接",
                          examples="https://apps.apple.com/redeem?code=7W9XXM744FKX&ctx=apps")
    abm_code: str = Field(..., description="兑换码", examples="7W9XXM744FKX")


class AbmExcelFileCreate(BaseAbmExcelFile):
    created_at: Optional[datetime] = datetime.now()


class AbmExcelFileUpdate(BaseAbmExcelFile):
    id: int
    installed_at: Optional[datetime]

    def update_dict(self):
        return self.model_dump(exclude_unset=True, exclude={"id"})
