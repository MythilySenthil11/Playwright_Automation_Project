import { When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CustomWorld } from "../world/CustomWorld";
import filterData from "../test-data/filterData.json";
import { logger } from "../utilities/logger";

When('I navigate to the Course Management page', async function (this: CustomWorld) {
  logger.info("Navigating to Course Management page");
  await this.adp.clickcoursemanagementlink();
  logger.info("Successfully navigated to Course Management page");
});

When('I click the Filter button', async function (this: CustomWorld) {
  logger.info("Clicking Filter button");
  await this.cmp.clickFilterButton();
  logger.info("Filter panel opened successfully");
});

When('I select Automation Project from the Category dropdown', async function (this: CustomWorld) {
  logger.info(`Selecting category: ${filterData.Category.SelectedCategory}`);
  await this.cmp.selectCategory(filterData.Category.SelectedCategory);
  logger.info(`Category '${filterData.Category.SelectedCategory}' selected successfully`);
});

Then('only courses belonging to the selected category should be displayed', async function (this: CustomWorld) {
  logger.info("Validating filtered course list");

  const courseCategories = await this.cmp.getCourseList();
  const totalCountText = await this.cmp.getTotalCount();

  logger.info(`Displayed Course Count: ${courseCategories.length}`);
  logger.info(`Total Count from UI: ${totalCountText}`);

  expect(courseCategories.length).toBe(parseInt(totalCountText));

  for (const category of courseCategories) {
    logger.info(`Verifying displayed category: ${category}`);
    expect(category.trim()).toBe(filterData.Category.SelectedCategory);
  }

  logger.info("All displayed courses belong to the selected category");
});
When('I select {string} from the level dropdown', async function (this:CustomWorld,string) {
  // Write code here that turns the phrase above into concrete actions
  await this.cmp.selectLevel(string)
});

Then('only {string} courses should be displayed', async function (this: CustomWorld,expectedLevel: string) {
  const levels = await this.cmp.getLevelList();
  expect(levels.length).toBeGreaterThan(0);
  for (const level of levels) {
    expect(level.trim()).toBe(expectedLevel);
  }
  logger.info(`All displayed courses belong to '${expectedLevel}' level`);
});
