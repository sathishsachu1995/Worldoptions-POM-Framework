import { Page,BrowserContext,expect } from "@playwright/test";
import { PlaywrightWrapper } from "../Utils/playwright";

export class LabelsAndDocumentsPage extends PlaywrightWrapper{

    constructor(page: Page,context: BrowserContext){
        super(page,context)
    }

    async gettingSuccessMessage(): Promise<void>{
        const successMessage = await this.getInnerText(`//p[@class = 'success-heading']`)
        console.log(`Success Message : ${successMessage}`);
    }

    async gettingTrackingNo(): Promise<string>{
        const consignmentNumber = await this.getInnerText(`//p[@class= 'tracking-no']`)
        console.log(`Tracking ID : ${consignmentNumber}`);
        return consignmentNumber
    }

    async gettingFromAddress(): Promise<void>{
        const fromAddress = await this.getInnerText(`//div[@class='from-city-icon']/following::td[1]`)
        console.log(`The Origin : ${fromAddress}`);
    }

    async gettingToAddress(): Promise<void>{
        const toAddress = await this.getInnerText(`//div[@class='location-pin']/following::td[1]`)
        console.log(`The Destination : ${toAddress}`);
    }

    async clickingViewAndPrintlabel(labelurlContains: string[]): Promise<void>{

        try {
            const printLabelButton = await this.locatingElement(`//button[text()=' Click To Print Label ']`)
            if(printLabelButton) 
            {
              await this.clickButton(`//button[text()=' Click To Print Label ']`,`Print label`,`Button`)
              console.log(`Label has been Printed Successfully :-))!!`);
            } 
            else 
            {
                await this.handlingLabels(`//button[text()=' View And Print Label ']`,`Label`,labelurlContains)
            }
            
        } catch (error) {
            console.error(`The Error we are getting while clicking view and print label is ${error}`)
            
        } 
        
    }
    

    async clickingViewReceipt(receipturlContains: string): Promise<void>{
        await this.handlingNewPages(`//button[text()=' VIEW RECEIPT ']`,`Receipt`,receipturlContains)
    }

    async clickingViewAndPrintCommercialInvoice(commercialInvoiceContains: string[]): Promise<void>{
        await this.handlingLabels(`//button[text()=' View And Print Commercial Invoice ']`,`Commercial Invoice`,commercialInvoiceContains)

    }

    async clickingViewAndPrintManifest(manifesturlContains: string): Promise<void>{
        await this.handlingNewPages(`//button[text()=' View And Print Manifest ']`,`Manifest`,manifesturlContains)

    }

    async labelsAndDocumentsPageSpinner(): Promise<void>{
        await this.spin("//div[@class='la-ball-beat la-2x']")
    }

    async clickingBookAnother(): Promise<void>{
        await this.clickButton(`//button[text()='Book Another']`,`Book Another`,`Button`)

    }

    async clickingTrackingHistory(): Promise<void>{
        await this.clickButton(`//button[text()='Tracking History']`,`Tracking History`,`Button`)

    }
    

}