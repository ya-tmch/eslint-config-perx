# PERX frontend linters

Пример конфигурации для запуска линтера в момент коммита:

```
{
  "devDependencies": {
    "husky": "^4.2.5",
    "lint-staged": "^10.2.11",
    "eslint-config-perx": "CURRENT_REPO_PATH"
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "src/**/*.{js,jsx}": [
      "eslint --fix"
    ]
  }
}
```