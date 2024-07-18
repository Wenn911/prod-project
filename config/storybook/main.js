// eslint-disable-next-line no-undef
module.exports = {
    "stories": ["../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    "addons": [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
    ],
    "core": {
        "builder": "webpack5",
    },
    "framework": "@storybook/react",
};
