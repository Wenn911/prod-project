import react from "eslint-plugin-react";
import typescriptEslint from "typescript-eslint";
import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import i18next from "eslint-plugin-i18next";

export default [
    { 
        languageOptions: { 
            parserOptions: { 
                ecmaFeatures: { 
                    jsx: true 
                }, 
                sourceType: "module", 
                ecmaVersion: 2020 
            } 
        }
    },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReactConfig,
    {
        ignores: ["dist/**/*", "scripts/*.js"],
        files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
        settings: {
            version: "detect",
        },
        plugins: {
            "typescript-eslint": typescriptEslint,
            "eslint-plugin-react": react,
            i18next,
        },
        rules: {
            "react/jsx-indent": [2, 4],
            "react/jsx-indent-props": [2, 4],
            indent: [2, 4],
            "react/jsx-filename-extension": [
                2,
                { extensions: [".js", ".jsx", ".tsx"] },
            ],
            "import/no-unresolved": "off",
            "import/prefer-default-export": "off",
            "no-unused-vars": "warn",
            "react/require-default-props": "off",
            "react/react-in-jsx-scope": "off",
            "react/jsx-props-no-spreading": "warn",
            "react/function-component-definition": "off",
            "no-shadow": "off",
            "import/extensions": "off",
            "import/no-extraneous-dependencies": "off",
            "no-underscore-dangle": "off",
            "@typescript-eslint/no-unused-vars": 'warn',
        },
    },
];
