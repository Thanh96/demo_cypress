module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true,
        "amd": true,
        "commonjs": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:cypress/recommended"
    ],
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "rules": {
        "cypress/no-unnecessary-waiting": 0
    }
};
