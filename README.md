# company-search
会社のスプレッドシートやエクセルなどで管理されていた、ダミーの企業情報を社内の企業情報を１つにまとめた検索システム

# DEMO
ログイン画面
![スクリーンショット 2023-06-29 11 50 24](https://github.com/tamaron1820/company-search/assets/104906428/25f0f3d7-baad-424c-b063-8ae5822b9dcc)

新規登録画面
![スクリーンショット 2023-06-29 11 50 33](https://github.com/tamaron1820/company-search/assets/104906428/73fd7b53-62a2-430d-b871-77d993621ade)

User用UI
![スクリーンショット 2023-06-29 11 10 38](https://github.com/tamaron1820/company-search/assets/104906428/dc75804c-685d-4235-9252-f88ce3ae87ee)
![スクリーンショット 2023-06-29 11 14 24](https://github.com/tamaron1820/company-search/assets/104906428/aef7c354-5db6-48b6-9b87-3ef97d9db34a)

管理者用UI
![スクリーンショット 2023-06-29 11 12 53](https://github.com/tamaron1820/company-search/assets/104906428/995fddfc-f8df-4a62-b7d1-e46daaa87c0e)
![スクリーンショット 2023-06-29 11 13 27](https://github.com/tamaron1820/company-search/assets/104906428/71b48d02-ff1e-4985-abce-cc3864803975)


# Features

管理者とユーザーがあり、ユーザーが許されていることは全会社の情報閲覧とその検索、管理者が許されていることは全会社の情報閲覧とその検索、企業の追加、編集、削除
ANDとORの両方の検索方法を選ぶことができる。また、すべての会社を表示で検索後からすべての会社を表示する画面に戻ることができる。
emailとpasswordの条件は以下のようになっています。
config.password_length = 6..128
config.email_regexp = /\A[^@\s]+@[^@\s]+\z/
http://localhost:3000にアクセスするとログイン画面に入り、ユーザーを新規登録画面から自由に登録できる。ユーザーには管理者とuserのどちらかのロールかを自由に選ぶことができる。作った、アカウントでログインするとロールに対応した、UIを見ることができる。

# Usage
```bash
git clone git@github.com:tamaron1820/company-search.git
cd company-search/dummy_corp
```
もともとあるダミーの企業情報を事前に登録
```bash
bundle exec rake csv_import:corporations
```
ランダムにUserをあらかじめ作成する　このUserはランダムであるが必ず以下のユーザーは作成される
  email: 'admin@example.com',
  password: 'password',
  role: 'admin'
```bash
rails db:seed
```
バックエンドの起動
```bash
rails s
```
フロントエンドの起動
```bash
cd company-search/dummy-corp-front
npm run dev
```
http://localhost:3000にアクセス
