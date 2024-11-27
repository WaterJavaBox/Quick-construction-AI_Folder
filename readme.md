# AI資料結構通用化腳本

通用化AI目錄格式

# 資料夾結構

此資料結構將一切遵循模組化設計

``_API`` 存放連結大語言模型的程式碼

``_module`` 存放一些快速調用的小模塊，例如快速移除文字中重複的換行字符

``_prompt`` 可以存放提示詞

``config`` 機器人config，使用者可以選擇是否製作config選擇器

``data`` 機器人資料，這應該讓程式存放例如機器人的記憶、資料庫或者訓練檔案。

# 設定

請參考 ``setting.json``

``promptFolder`` 為使用結構，例如預設的 ``chat`` 為對話用的提示詞存放資料夾，其他的例如 ``category`` 則是分類用提示詞，用於將對話分類至一些其他分類。

``promptType`` 預設為 ``system`` 和 ``chat`` ，有需求自行增加。

## for python
```py
py init.py
```

## for nodejs
```node.js
node init.js
```