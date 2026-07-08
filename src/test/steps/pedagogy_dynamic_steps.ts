import { Given, When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../world/CustomWorld';
import {  TIMEOUTS } from '../constants/timeouts';

When('the user clicks on the Pedagogy button', async function (this: CustomWorld) {
    this.dfp.ClickPedagogy();
});

When('the user clicks on the Pedagogy view elements button', async function (this: CustomWorld)  {
    await this.pdp.clickPedagogyViewElements();
});
   
When('the user clicks on the Add Element button', async function (this: CustomWorld)  {
    await this.pdp.clickAddElementButton();
});

When('the user enters the element details', async function (this: CustomWorld)  {
    await this.pdp.enterElementName("kps");
});

When('the user clicks on the Create Element button', async function (this: CustomWorld)  {
    await this.pdp.clickCreateElementButton();
});

Then('the user should be able to see the created element in the list of pedagogy elements', async function (this: CustomWorld) {
    await this.pdp.clickNextPageButton()
    await this.page.waitForTimeout(TIMEOUTS.SHORT);
    const elementsList = await this.pdp.getElementNamesFromPage();
    let isElementFound = false;
    for (const name of elementsList) {
        if (name.trim() === "kps") {
            isElementFound = true;
            console.log("Element found in the list");
            break;
        }
    }
    if (!isElementFound) {
        throw new Error(`Scenario Failed: Element 'kps' was not found anywhere in the list.`);
    }
});