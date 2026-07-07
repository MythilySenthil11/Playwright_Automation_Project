import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import {validdata} from "../test-data/login.json"
import { CustomWorld } from "../world/CustomWorld";
import { TIMEOUTS } from "../constants/timeouts";
Given("the user is on the login page", async function (this: CustomWorld) {
    await this.lp.Navigatepage();
});

When("the user enters valid credentials", async function (this: CustomWorld) {
  await this.lp.enteremail(validdata.email);
  await this.lp.enterPassword(validdata.password);
});
When("the user clicks on the login button", async function (this: CustomWorld) {
    await this.lp.clickLoginButton();
});
Then("the user should be redirected to the dashboard page", async function (this: CustomWorld) {
    await this.adp.profileclick();
await expect(this.adp.getuseremail()).toHaveText(validdata.email, {
    timeout: TIMEOUTS.MEDIUM
});
});