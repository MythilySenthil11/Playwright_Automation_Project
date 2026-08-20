import { Given, When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../world/CustomWorld';
import {  TIMEOUTS } from '../constants/timeouts';
import {data} from '../test-data/pedagogyData.json'
import { expect } from '@playwright/test'; 
import { CsvReader } from '../utilities/csvReader';
import {PedagogySearchData} from "../types/pedagogySearch.types"

const SearchData = CsvReader.read<PedagogySearchData>("PedogogySearchData.csv")
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

When('the user enters an existing element name', async function (this: CustomWorld) {
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

Then('the user should see a duplicate element validation message', async function (this: CustomWorld) {
    const validationMessage = this.pdp.getDuplicateElementValidationMessage();

    if (!(await validationMessage.isVisible().catch(() => false))) {
        throw new Error(
            `Duplicate element validation message was not displayed for '${data.newelement}'. ` +
            'The application allowed the duplicate element to be created.'
        );
    }
});

When('the user Clicks on the edit button', async function (this: CustomWorld) {
  
        await this.pdp.clickNextPageButton();

    await this.page.waitForTimeout(TIMEOUTS.SHORT);

    const elementsList = await this.pdp.getElementNamesFromPage();
 const index = elementsList.length - 1;
  await this.pdp.clickEditButton(index)

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
    await this.pdp.clickNextPageButton();
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

When("the user Clicks on the delete button", async function (this: CustomWorld) {
    await this.pdp.clickNextPageButton();

    await this.page.waitForTimeout(TIMEOUTS.SHORT);

    const elementsList = await this.pdp.getElementNamesFromPage();

    const index = elementsList.length - 1;
    this.selectedPedagogyElementName = elementsList[index]?.trim();

    if (!this.selectedPedagogyElementName) {
        throw new Error('No pedagogy element was found before clicking the delete button.');
    }

    await this.pdp.clickDeletesvgButton(index);


});

When("the user clicks on the delete confirmation button", async function (this: CustomWorld) {
     await this.pdp.clickDeleteConfirmationButton()
});

When("the user clicks on the cancel confirmation button", async function (this: CustomWorld) {
    await this.pdp.clickCancelDeleteConfirmationButton();
});

Then(
    "the user should be able to see the deleted element is not present in the list of pedagogy elements",
    async function (this: CustomWorld) {
        const elementsList = await this.pdp.getElementNamesFromPage();

        await expect(elementsList, 
            `Deleted element '${data.editdata}' should not be present in the pedagogy elements list`
        ).not.toContain(data.editdata);

        console.log(`Success: Element '${data.editdata}' was deleted successfully`);
    }
);

Then("the user should be able to see the element in the list of pedagogy elements", async function (this: CustomWorld) {
    const elementsList = await this.pdp.getElementNamesFromPage();
    const expectedElementName = this.selectedPedagogyElementName;

    if (!expectedElementName) {
        throw new Error('The deleted element name was not captured before the cancel action.');
    }

    await expect(
        elementsList,
        `Element '${expectedElementName}' should remain in the pedagogy elements list after deletion is cancelled`
    ).toContain(expectedElementName);
});
let expectedResult = "";

When("the user enters the {string} in pedagogy activities search bar", async function (this: CustomWorld, dataType: string) {

        const row = SearchData.find(
            x => x.datatype.trim().toLowerCase() === dataType.trim().toLowerCase()
        );

        if (!row) {
            throw new Error(`No matching test data found for datatype: ${dataType}`);
        }

        expectedResult = row.result;

        await this.pdp.searchPedagogyActivity(row.data);
    }
);

Then( "the user should be able to see the corresponding activity", async function (this: CustomWorld) {

        const actualResult = await this.pdp.getSearchResult();

        expect(actualResult.trim()).toBe(expectedResult.trim());
    }
);