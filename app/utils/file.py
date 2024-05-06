import xlrd, os
from app.settings import settings
from fastapi import UploadFile
from app.models.admin import AbmExcelFile


async def save_excel_file(file: UploadFile) -> str:
    file_dir = settings.FILES_ROOT
    if not os.path.exists(file_dir):
        os.makedirs(file_dir)

    file_path = os.path.join(file_dir, file.filename)
    contents = await file.read()
    with open(file_path, "wb") as f:
        f.write(contents)
    if not os.path.exists(file_path):
        return None
    return file_path


async def _parse_abm_excel(df):
    sheet = df.sheet_by_index(0)
    purchases = []
    begin = False

    current_buyer = ''
    for i in range(sheet.nrows):
        row = sheet.row_values(i)
        if not any(row):
            continue
        if row[0] == '购买者':
            current_buyer = row[2]
        elif row[0] == '代码':
            begin = True
            continue

        if begin:
            code = row[0]
            link = row[2]

            purchase = AbmExcelFile(username=current_buyer, abm_code=code, abm_link=link)
            purchases.append(purchase)

    return purchases


async def parse_abm_excel_with_content(xd_content: str) -> [AbmExcelFile]:
    df = xlrd.open_workbook(file_contents=xd_content)
    return await _parse_abm_excel(df)


async def parse_abm_excel_with_path(xd_path: str) -> [AbmExcelFile]:
    df = xlrd.open_workbook(xd_path)
    return await _parse_abm_excel(df)


from typing import Union


class Item(object):
    name: str
    description: Union[str, None] = None
    price: float
    tax: Union[float, None] = None

    def __init__(self, name: str, price: float, description: str):
        self.name = name
        self.price = price
        self.description = description

    def dict(self):
        return {
            "name": self.name,
            "price": self.price,
            "description": self.description
        }


def update_item(item_id: int, item: Item):
    return {"item_id": item_id, **item.dict()}


if __name__ == "__main__":
    file_path = "/Users/apple/Downloads/005Ipa/南京指掌易.xls"
    data = xlrd.open_workbook(file_path)
    data.sheet_names()
    print(type(data.sheet_names()))
    print("sheets：" + str(data.sheet_names()))
    table = data.sheet_by_index(0)
    print("总行数：" + str(table.nrows))
    print("总列数：" + str(table.ncols))

    item = Item(name="Apple", price=1.99, description="A delicious fruit")

    new_item = update_item(12, item)

    print(new_item)
