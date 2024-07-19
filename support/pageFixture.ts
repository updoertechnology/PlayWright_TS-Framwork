import { _baseTest } from "playwright/test";

import Wrapper from "./Wrapper";
import { page } from "./hooks";
import LoginPage from "../page-objects/LoginPage";

const test = _baseTest.extend<{

    loginPage: LoginPage

    base: Wrapper
}>({
  loginPage: async ({}, use) => {
    await use(new LoginPage(page));
  },
});

export default test;
export const expect = test.expect;