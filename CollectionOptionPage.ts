import { Page,BrowserContext } from "@playwright/test";
import { PlaywrightWrapper } from "../Utils/playwright";

export class CollectionOptionPage extends PlaywrightWrapper{

    constructor(page: Page,context : BrowserContext){
        super(page,context)

    }

    async readingQuoteAndPriceDetails(): Promise<void>{
        console.log();
        
        const quoteAndPrice = await this.getInnerText(`(//div[@class='panel-top-border ng-star-inserted'])[2]`)
        console.log(`The Quote & Price Details after choosing invoice type : ${quoteAndPrice}`);
    }

    async clickingDropAtDepot(): Promise<void>{
        await this.clickButton(`//p[text()='Drop at a Depot']/preceding::div[6]`,`Drop At Depot`,`Radio Button`)
    }

    async clickingCollectToday(parcelReadyFrom: string,closeLatestPickup: string, pickupLocation: string, locationDescription: string): Promise<void>{
        await this.clickButton(`//p[text()='Collect Today']/preceding::div[6]`,`Collect Today`,`Radio Button`)
        await this.clickButton(`(//mat-select[@placeholder='Select'])[3]`,`Parcel Ready From Time`,`Drop Down`)
        await this.locatorChainingClick(`Parcel Ready From Time Drop Down`,parcelReadyFrom,`span`)
        await this.clickButton(`(//mat-select[@placeholder='Select'])[4]`,`Close Latest Pickup Time`,`Drop Down`)
        await this.locatorChainingClick(`Close Latest Pickup Time Drop Down`,closeLatestPickup,`span`)
        await this.clickButton(`(//mat-select[@placeholder='Select'])[5]`,`Pickup Location`,`Drop Down`)
        await this.locatorChainingClick(`Pickup Location Drop Down`,pickupLocation,`span`)
        await this.type(`//input[@placeholder='location description']`,`Location Description`,locationDescription)
    }

    async clickingScheduleACollection(date: string, parcelReadyFrom: string, closeLatestPickup: string, pickupLocation: string, locationDescription: string): Promise<void>{
        await this.clickButton(`//p[text()='Schedule a Collection']/preceding::div[6]`,`Schedule A Collection`,`Radio Button`)
        await this.clickButton(`.icon-wo_calender-line`,`Date Of Collection`,`Callendar Icon`)
        await this.clickButton(`//div[text()='${date}']`,`Date ${date} in the `,`Callender Icon`)
        await this.clickButton(`(//mat-select[@placeholder='Select'])[3]`,`Parcel Ready From Time`,`Drop Down`)
        await this.locatorChainingClick(`Parcel Ready From Time Drop Down`,parcelReadyFrom,`span`)
        await this.clickButton(`(//mat-select[@placeholder='Select'])[4]`,`Close Latest Pickup Time`,`Drop Down`)
        await this.clickButton(`//span[text()='${closeLatestPickup}']`,`Close Latest Pickup Time`,`Drop Down`)
        await this.clickButton(`(//mat-select[@placeholder='Select'])[5]`,`Pickup Location`,`Drop Down`)
        await this.locatorChainingClick(`Pickup Location Drop Down`,pickupLocation,`span`)
        await this.type(`//input[@placeholder='location description']`,`Location Description`,locationDescription)
    }

    async clickingAlreadyCollectionScheduled(): Promise<void>{
        await this.clickButton(`//p[text()='I have a Daily Collection or have a Collection Scheduled']/preceding::div[6]`,`Already Collection Scheduled`,`Radio Button`)
    }

    async clickingShipButton(): Promise<void>{
        try {
            await this.clickButton(`(//button[contains(@class, 'btn-primary')])[8]`,`Ship`,`Button`)
             
            const errorMessage = await this.locatingPopup(`#toast-container`)

            if(errorMessage)
            {
                await this.getErrorMessage(`#toast-container`)   
            }

        } catch (error) {
            console.error(`The Error we are getting while clicking Ship Button is ${error}`)
            
        }
        
    }

    async collectionPageSpinner(): Promise<void>{
        await this.spin("//div[@class='la-ball-beat la-2x']")
    }

}