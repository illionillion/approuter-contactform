# 概要

AppRouterを使用してお問合せフォームを作成するサンプル

# 使用技術

- Next.js
- TypeScript
- Chakra UI
- MySQL
- Docker

# 実行方法

```sh
docker compose run --rm app nom i
docker compose up -d
```

- `localhost:{port}`・・・送信フォーム
- `localhost:{port}/contents`・・・一覧画面
- `localhost:{port}/api/send`・・・送信API
- `localhost:{port}/api/contents`・・・一覧取得API