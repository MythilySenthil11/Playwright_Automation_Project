import {When, Then} from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../world/CustomWorld';
import { CourseData } from './../types/courseData.types';
import { CsvReader } from '../utilities/csvReader';

const courseName = CsvReader.read<CourseData>("CourseData.csv");

When('the user navigates to the Course Management page', async function (this: CustomWorld) {
  // Write code here that turns the phrase above into concrete actions
  await this.adp.clickcoursemanagementlink();
});

When('the user searches for a course name', async function (this: CustomWorld) {
  // Write code here that turns the phrase above into concrete actions
  await this.cmp.EnterSearch(courseName[0]!.coursename);
});

When('the user clicks the Three dots button of a course', async function (this: CustomWorld) {
  // Write code here that turns the phrase above into concrete actions
  await this.cmp.clickThreeDots();
});

When('the user clicks the View Details option', async function (this: CustomWorld) {
  // Write code here that turns the phrase above into concrete actions
  await this.cmp.clickViewDetails();
});

Then('the user should see the course details page', async function (this: CustomWorld) {
  // Write code here that turns the phrase above into concrete actions
    const courseName = await this.cmp.getCourseNameDetails();
    expect(courseName).toContain(courseName);

});
When('the user clicks the view details button of a course structure', async function (this: CustomWorld) {
  // Write code here that turns the phrase above into concrete actions
  await this.cmp.clickCourseStructureViewButton();
});

Then('the user should see the course structure page', async function (this: CustomWorld) {
  // Write code here that turns the phrase above into concrete actions
  const courseStructure = await this.cmp.getCourseStructureDetails();
  expect(courseStructure).toContain("Course Structure");
});

When('the user clicks the View pedagogy button of a course', async function (this: CustomWorld) {
  // Write code here that turns the phrase above into concrete actions
  await this.cmp.clickCoursePedagogyViewButton();
});

Then('the user should see the pedagogy details page', async function (this: CustomWorld) {
  // Write code here that turns the phrase above into concrete actions
  const coursePedagogy = await this.cmp.getCoursePedagogyDetails();
  expect(coursePedagogy).toContain("Pedagogy");
});