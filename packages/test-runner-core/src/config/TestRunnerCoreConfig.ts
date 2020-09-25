import { Middleware } from '@web/dev-server-core';
import { BrowserLauncher } from '../browser-launcher/BrowserLauncher.js';
import { TestFramework } from '../test-framework/TestFramework.js';
import { Reporter } from '../reporter/Reporter.js';
import { Logger } from '../logger/Logger.js';
import { TestRunnerPlugin } from '../server/TestRunnerPlugin.js';

export interface CoverageThresholdConfig {
  statements: number;
  branches: number;
  functions: number;
  lines: number;
}

export interface CoverageConfig {
  include?: string[];
  exclude?: string[];
  nativeInstrumentation?: boolean;
  threshold?: CoverageThresholdConfig;
  report: boolean;
  reportDir: string;
}

export interface TestRunnerCoreConfig {
  rootDir: string;
  files: string | string[];
  concurrency?: number;

  protocol: string;
  hostname: string;
  port: number;

  browsers: BrowserLauncher[];
  testFramework?: TestFramework;
  logger: Logger;
  reporters: Reporter[];

  testRunnerHtml?: (testRunnerImport: string, config: TestRunnerCoreConfig) => string;
  watch: boolean;

  browserLogs?: boolean;
  filterBrowserLogs?: (log: { type: string; args: any[] }) => boolean;
  coverage?: boolean;
  coverageConfig?: CoverageConfig;

  browserStartTimeout?: number;
  testsStartTimeout?: number;
  testsFinishTimeout?: number;
  staticLogging?: boolean;

  debug?: boolean;
  mimeTypes?: Record<string, string>;
  plugins?: TestRunnerPlugin[];
  middleware?: Middleware[];
}
