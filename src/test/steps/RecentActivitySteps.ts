import { When, Then } from '@cucumber/cucumber';
import { expect } from "@playwright/test";
import { CustomWorld } from "../world/CustomWorld";

Then(`the user should be redirected to the Admin Dashboard page`, async function (this: CustomWorld) {
    await this.adp.adminPagevisible();
});

When(`the user opens the Dynamic Field Settings page`,async function (this: CustomWorld) {
    await this.adp.dynamicFieldManagementClick();
});

When(`the user clicks the left arrow button`,async function (this: CustomWorld) {
    await this.adp.ClickLeftarrow();
});

Then(`the Recent Activities section should be displayed`,async function (this: CustomWorld) {
    expect(await this.adp.RecentActivity()).toBe("Dynamic Field Settings");
});

Then(`the previously visited pages should be listed`,async function (this: CustomWorld) {
    expect(await this.adp.PreviousActivity()).toBe("Admin Dashboard");
});