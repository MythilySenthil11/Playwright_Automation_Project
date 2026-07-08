import { Given, When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../world/CustomWorld';
import {  TIMEOUTS } from '../constants/timeouts';
import {data} from '../test-data/pedagogyData.json'
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
    await this.pdp.enterElementName(data.newelement);
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
        if (name.trim() === data.newelement) {
            isElementFound = true;
            console.log("Element found in the list");
            break;
        }
    }
    if (!isElementFound) {
        throw new Error(`Scenario Failed: Element 'kps' was not found anywhere in the list.`);
    }
});

When('the user Clicks on the edit button', async function (this: CustomWorld) {
  
    await this.pdp.clickEditButton();
});

When('the user edits the content of element name', async function (this: CustomWorld) {
    // You can hardcode a modified string or make this step dynamic by adding {string}
    
    await this.pdp.editElementName(data.editdata);
});

When('the user clicks on the Update Element button', async function (this: CustomWorld) {
    // Triggers the save/update action and waits for structural DOM stability
    await this.pdp.clickUpdateElementButton();
    await this.page.waitForLoadState('networkidle');
});

Then('the user should be able to see the updated element', async function (this: CustomWorld) {
    const expectedUpdatedName = data.editdata;
    

    const elementsList = await this.pdp.getElementNamesFromPage();
    let isElementFound = false;

    for (const name of elementsList) {
        if (name.trim() === expectedUpdatedName) {
            isElementFound = true;
            console.log(`Success: Found the updated element target '${expectedUpdatedName}'`);
            break;
        }
    }
    if (!isElementFound) {
        throw new Error(`Scenario Failed: Updated element text '${expectedUpdatedName}' was missing from the registry view.`);
    }
});