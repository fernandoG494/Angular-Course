module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "standard-with-typescript",
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "parser": '@typescript-eslint/parser',
        "project": './tsconfig.json',
        "ecmaVersion": "latest",
        "sourceType": "module",
    },
    "rules": {
    }
};
