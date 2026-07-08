import { When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CustomWorld } from "../world/CustomWorld";
import { logger } from "../utilities/logger";

When('the user clicks the {string} tab in the table',async function (this:CustomWorld,string) {
    if(string=='Date'){
        await this.cmp.clickDateSort()
    }else if(string=='Client'){
        await this.cmp.clickClientSort()
    }else if(string=='Course Name'){
        await this.cmp.clickCourseSort()
    }
});

Then('the table Should be sorted according to {string}',async function (this:CustomWorld,string) {
    if(string=='Date'){
        const list = await this.cmp.sortedlist(this.cmp.dateList)
        await expect(list).toEqual(list.sort())
    }else if(string=='Client'){
        const list = await this.cmp.sortedlist(this.cmp.clientList)
        await expect(list).toEqual(list.sort())
    }else if(string=='Course Name'){
        const list = await this.cmp.sortedlist(this.cmp.courseList)
        await expect(list).toEqual(list.sort())
    }
});