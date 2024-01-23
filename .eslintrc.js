module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
        jest: true,
    },
    extends: ["eslint:recommended", "prettier"],
    overrides: [
        {
            env: {
                node: true,
            },
            files: [".eslintrc.{js,cjs}"],
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module",
            },
        },
    ],
    parserOptions: {
        ecmaVersion: "latest",
    },
    rules: {},
};
