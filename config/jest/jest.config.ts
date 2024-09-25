import path from "path";

export default {
    globals: {
        __IS_DEV__: true,
        __API__: '',
        __PROJECT__: 'jest'
    },
    clearMocks: true,
    coveragePathIgnorePatterns: [
        "\\\\node_modules\\\\"
    ],
    moduleDirectories: [
        "node_modules"
    ],
    modulePaths: [
        '<rootDir>src'
    ],
    moduleFileExtensions: [
        "js",
        "jsx",
        "ts",
        "tsx",
        "json",
        "node"
    ],
    rootDir: '../../',
    testEnvironment: "jsdom",
    testMatch: [
        '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'
    ],
    setupFilesAfterEnv: ['<rootDir>/config/jest/setupTests.ts'],
    moduleNameMapper: {
        '\\.s?css$': 'identity-obj-proxy',
        '\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx')
    },
    // automock: false,

    // bail: 0,
 
    // collectCoverage: false,

    // collectCoverageFrom: undefined,

    // coverageDirectory: undefined,
 
    // coverageProvider: "babel",

    // coverageReporters: [
    //   "json",
    //   "text",
    //   "lcov",
    //   "clover"
    // ],

    // coverageThreshold: undefined,

    // dependencyExtractor: undefined,

    // errorOnDeprecated: false,

    // forceCoverageMatch: [],

    // globalSetup: undefined,

    // globalTeardown: undefined,

    // maxWorkers: "50%",

    // moduleNameMapper: {},

    // modulePathIgnorePatterns: [],

    // notify: false,

    // notifyMode: "failure-change",

    // preset: "ts-jest",

    // projects: undefined,

    // reporters: undefined,

    // resetMocks: false,

    // resetModules: false,

    // resolver: undefined,

    // restoreMocks: false,

    // roots: [
    //     "<rootDir>"
    // ],

    // runner: "jest-runner",

    // setupFiles: [],

    // setupFilesAfterEnv: [],

    // slowTestThreshold: 5,

    // snapshotSerializers: [],

    // testPathIgnorePatterns: [
    //   "\\\\node_modules\\\\"
    // ],

    // testRegex: [],

    // testResultsProcessor: undefined,

    // testRunner: "jest-circus/runner",

    // testURL: "http://localhost",

    // timers: "real",

    // transform: {
    //     "node_modules/variables/.+\\.(j|t)sx?$": "ts-jest"
    // },

    // transformIgnorePatterns: [
    //     "node_modules/(?!variables/.*)"
    // ]

    // unmockedModulePathPatterns: undefined,

    // verbose: undefined,

    // watchPathIgnorePatterns: [],

    // watchman: true,
};
