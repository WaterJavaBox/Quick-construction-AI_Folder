import os
import asyncio
import json

async def __main():
    # 建立 config 資料夾
    os.makedirs("./config", exist_ok=True)

    # 建立 _prompt 資料夾
    os.makedirs("./_prompt", exist_ok=True)
    # 建立所有需求用的提示詞資料夾
    type_folders = json.load(open("./setting.json"))["promptFolder"]
    for type_folder in type_folders:
        # 建立對話資料夾
        os.makedirs(f"./_prompt/{type_folder}", exist_ok=True)
        # 建立範例系統與對話資料夾
        names = json.load(open("./setting.json"))["promptType"]
        for name in names:
            with open(f"./_prompt/{type_folder}/{name}.txt", "w") as f:
                f.write("prompt here")

    # 建立 API 資料夾
    os.makedirs("./_API", exist_ok=True)

    # 建立模組資料夾
    os.makedirs("./_module", exist_ok=True)

    # 建立資料資料夾
    os.makedirs("./data", exist_ok=True)

if __name__ == "__main__":
    asyncio.run(__main())