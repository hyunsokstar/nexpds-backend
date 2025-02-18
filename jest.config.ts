export default {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: './src',
  testEnvironment: 'node',
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  moduleDirectories: ['node_modules', 'src'], // ✅ 모듈 검색 범위 추가

  // ✅ Jest가 @prisma/* import를 인식하도록 설정
  moduleNameMapper: {
    '^@prisma/(.*)$': '<rootDir>/../prisma/$1',
  },
};
