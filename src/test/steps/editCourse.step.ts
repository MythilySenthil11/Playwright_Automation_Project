import { When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CustomWorld } from "../world/CustomWorld";
import { logger } from "../utilities/logger";
import { CsvReader } from "../utilities/csvReader";
import { CourseData } from "../types/editCourse.types";

const courseData = CsvReader.read<CourseData>("courseData.csv")[0]!;

When('the user clicks the kebab button of a course',async function (this:CustomWorld) {
  await this.cmp.clickKebabButton()
  logger.info("Kebab Menu is Clicked")
});

When('chooses the edit course option',async function (this:CustomWorld) {
    await this.cmp.clickEditCourse()
    logger.info("Edit Course Button is Clicked")
});

When('the user fills the first page of edit course structure form and clicks next button', async function (this:CustomWorld) {
    logger.info("Filling The First Page")
    await this.cmp.fillFirstPage(courseData)
    await this.cmp.clickNext()
    logger.info("clicked next Button")
});

When('fills the second page of edit course structure form and clicks preview & update button', async function (this:CustomWorld) {
    logger.info("Filling the second Page")
    await this.cmp.fillSecondPage(courseData)
    await this.cmp.clickPreview()
    logger.info("clicked preview & update button")
});

When('the user clicks the save course layout button in the course layout preview', async function (this:CustomWorld) {
    await this.cmp.clickSaveLayout()

});

Then('the course updated message should be visible',async function (this:CustomWorld) {
    await expect(this.cmp.tostMsg).toBeVisible()
});