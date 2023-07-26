# Link tham khảo: https://viblo.asia/p/nang-cao-chat-luong-code-va-hieu-qua-lam-viec-nhom-voi-husky-lint-staged-commitlint-4dbZNnMnZYM
1. Setup prettier: để format code
- Cài phần mềm prettier
- Thêm 3 file .prettercc, .prettierignore, .editconfig
+ .prettercc: double qoute sang single qoute
+ .editconfig: format lại indent theo space hoặc tab
+ Chỉnh thêm tự động format khi nhấn nút Save

2. Setup Eslint: để thông báo format code hoặc tự động sửa lỗi
- Cài package eslint: yarn add eslint eslint-config-prettier eslint-plugin-prettier -D
+ eslint-config-prettier : Tắt các Eslint rules mà conflict với Prettier
+ eslint-plugin-prettier : Tích hợp Prettier rules với Eslint rules
- Tạo file .eslintrc.js ở root
- Tạo file .eslintignore owr root

3. Setup lint-staged: Bởi vì ESLINT sẽ chạy toàn bộ code, nên lint-staged sẽ chỉ cho phép ta thực hiện một hoặc một số công việc với những file được git staged
- Cài đặt: npm install --save-dev lint-staged
- Add 1 đoạn script bên trong package.json

4. Setup Husky: tool bắt sự kiện khi thao tác với git
- Cài đặt: yarn add --dev husky
- Tạo thư mục .husky: npx husky install
- Husky bắt lấy event tại thời điểm user gõ git commit: npx husky add .husky/pre-commit "yarn lint-staged"
- setup husky được tự động ko cần các members làm lại nữa thì các bạn thêm vào file package.json 1 script như sau:
    "scripts": {
        ...
        "postinstall": "husky install"
    }
