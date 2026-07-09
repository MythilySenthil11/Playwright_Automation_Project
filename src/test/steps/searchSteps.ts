import { When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CustomWorld } from "../world/CustomWorld";

When('User enters {string} in the search box', async function (this: CustomWorld, searchTxt: string) {
  await this.cmp.EnterSearch(searchTxt);
});

Then('User should see {string}', async function (this: CustomWorld, expectedResult: string) {
  if (expectedResult === "No users found") {
        expect(await this.cmp.NoUserTxt()).toBe(expectedResult);
    } else {
        expect(await this.cmp.GetSearchResult()).toContain(expectedResult);
    }
});