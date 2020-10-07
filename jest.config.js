module.exports = {
    moduleDirectories: ['node_modules', 'src'],
    testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest"
    },
    testMatch: [
        "**/*.(test|spec).(ts|tsx)"
    ],
    globals: {
        "ts-jest": {
            useBabelrc: true,
            tsConfigFile: "jest.tsconfig.json"
        }
    },
    coveragePathIgnorePatterns: [
        "/node_modules/",
        "enzyme.js"
    ],
    setupFilesAfterEnv: ["<rootDir>/enzyme.js"],
    coverageReporters: [
        "json",
        "lcov",
        "text",
        "text-summary"
    ],
    "moduleNameMapper": {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
        "\\.(css|scss)$": "identity-obj-proxy"
    },
};