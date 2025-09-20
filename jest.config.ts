import type { Config } from 'jest'
import { pathsToModuleNameMapper } from 'ts-jest'
import { compilerOptions } from './tsconfig.json'

const config: Config = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
        prefix: '<rootDir>/',
    }),
    testMatch: [
        '**/__tests__/**/*.(ts|tsx)',
        '**/*.(test|spec).(ts|tsx)'
    ],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    collectCoverageFrom: [
        'app/**/*.(ts|tsx)',
        'components/**/*.(ts|tsx)',
        'lib/**/*.(ts|tsx)',
        '!**/*.d.ts',
    ],
}

export default config 