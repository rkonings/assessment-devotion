module.exports = {
    transform: {
        '.(ts|tsx)': 'ts-jest',
    },
    testPathIgnorePatterns: ['/node_modules/', '/lib/'],
    testRegex: '(/test/.*|\\.(test|spec))\\.(ts|tsx|)$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
    setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
    collectCoverageFrom: ['src/**/*.{ts,tsx}'],
};
