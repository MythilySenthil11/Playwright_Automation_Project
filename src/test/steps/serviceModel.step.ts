import {  When, Then } from '@cucumber/cucumber';
import { expect } from "@playwright/test";
import { CustomWorld } from "../world/CustomWorld";
import { createServiceModel } from '../factories/service.factory';

const model = createServiceModel()

When(`the user clicks the service model button`, async function (this:CustomWorld) {
    await this.dfp.clickServiceModel()
});

When(`the user clicks on the add service button`, async function (this:CustomWorld) {
    await this.smp.clickAddService()
});

When(`the user enter the service Name and description`, async function (this:CustomWorld) {
    await this.smp.fillPage(model.serviceName,model.serviceDescription)
});

When(`clicks the create service button`, async function (this:CustomWorld) {
    await this.smp.clickCreateService()
});

Then(`the user searches and viewes the service`, async function (this:CustomWorld) {
    await this.smp.searchService(model.serviceName)
    await expect(this.smp.resultText()).toContain(model.serviceName)
});