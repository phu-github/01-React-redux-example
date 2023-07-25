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
