import { When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CustomWorld } from "../world/CustomWorld";
import { paginationData } from "../test-data/pagination.json";

When(`User clicks the Next page button`, async function (this: CustomWorld){
    await this.Pp.clickNxtbtn();
});

Then(`User should be navigated to the next page`, async function (this: CustomWorld){
    expect(await this.Pp.CurrentPage()).toBe("2");
});

When(`User clicks the Previous page button`, async function (this: CustomWorld){
    await this.Pp.clickPrebtn();
});

Then(`User should be navigated to the previous page`, async function (this: CustomWorld){
    expect(await this.Pp.CurrentPage()).toBe("1");
});

When(`User clicks the page number from pagination data`, async function (this: CustomWorld){
    await this.Pp.clickPage(paginationData.pageNumber);
});

Then(`User should be navigated to the selected page`, async function (this: CustomWorld){
    expect(await this.Pp.CurrentPage()).toBe(paginationData.pageNumber);
});