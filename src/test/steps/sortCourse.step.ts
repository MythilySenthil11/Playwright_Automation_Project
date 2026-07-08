import { When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CustomWorld } from "../world/CustomWorld";
import { logger } from "../utilities/logger";

When('the user clicks the {string} tab in the table', function (this:CustomWorld,string) {
  
});

Then('the table Should be sorted according to {string}', function (this:CustomWorld,string) {

});