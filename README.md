# 概要

AppRouterを使用してお問合せフォームを作成するサンプル

# 使用技術

- Next.js
- TypeScript
- Chakra UI
- MySQL
- Docker

# 実行方法

`.env`に以下の環境変数を設定

```env
MYSQL_HOST=mysql
MYSQL_USER=root
MYSQL_PORT=3306
MYSQL_PASSWORD=password
MYSQL_DATABASE=contactform
TZ=Asia/Tokyo
```

```sh
docker compose run --rm app nom i
docker compose up -d
```

- `localhost:{port}`・・・送信フォーム
- `localhost:{port}/contents`・・・一覧画面
- `localhost:{port}/api/send`・・・送信API
- `localhost:{port}/api/contents`・・・一覧取得API