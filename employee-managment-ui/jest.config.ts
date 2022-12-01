module.exports = {
    setupFilesAfterEnv: ["./jest.setup.ts",'<rootDir>/.env.local'],
    testEnvironment: "jsdom",
    moduleNameMapper: {
      "^@components(.*)$": "<rootDir>/src/components$1",
      "^@pages(.*)$": "<rootDir>/src/pages$1",
      "^@hooks(.*)$": "<rootDir>/src/hooks$1",
      ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "identity-obj-proxy",
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "tests/__mocks__/fileMock.js"
    },
  };

  export {};