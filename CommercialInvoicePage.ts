import { Page,BrowserContext } from "@playwright/test";
import { PlaywrightWrapper } from "../Utils/playwright";




export class CommercialInvoicePage extends PlaywrightWrapper{

    constructor(page : Page, context: BrowserContext){
        super(page,context)
    }

    async readingQuoteAndPriceDetails(): Promise<void>{
        console.log();
        
        const quoteAndPrice = await this.getInnerText(`(//div[@class='panel-top-border ng-star-inserted'])[1]`)
        console.log(`The Quote & Price Details we are getting : ${quoteAndPrice}`);
    }

    async choosingCommercialInvoice(invoiceType: string,paperOrDigital: string,eORI: number,tAXID: number,iTNNumber:string,invoiceNo: number,goodsDescription: string,invoiceWeight: number,sourceCountry: string,commodityCode: number,quantity: number,unitPrice: number): Promise<void>{
            
        if (invoiceType == `Help me generate`) {
            await this.clickButton(`(//mat-select[@aria-label='Select country'])[3]`,`Commercial Invoice`,`DropDown`)
            await this.clickButton(`(//span[text()='Help Me Generate'])[2]`,`Help Me Generate`,`Button`)
            if (paperOrDigital == `Paper`) {
                await this.clickButton(`//div[text()=' Paper Commercial Invoice (Attach to box) ']`,`PaperInvoice`,`Radio Button`)
            }
            else if(paperOrDigital == `Digital`)
            {
                await this.clickButton(`//div[text()=' Paperless (automatically transmits/Requires stored signature) ']`,`DigitalInvoice`,`Radio Button`)
            }
            await this.clearAndType2(`//input[@formcontrolname='EORINumber']`,`EORI Number`,eORI)
            await this.clearAndType2(`//input[@formcontrolname='ReceiverTaxId']`,`Tax ID`,tAXID)
            const eEI = await this.locatingElement(`//input[@placeholder='(EEI) ITN Number']`)
            if (eEI && unitPrice>2499) {
                await this.type(`//input[@placeholder='(EEI) ITN Number']`,`ITN Number`,iTNNumber)
                await this.mouseHover(`//input[@placeholder='(EEI) ITN Number']//following::div[@class='tooltip-icon'][1]`)
                const toolTip = await this.getInnerText(`//input[@placeholder='(EEI) ITN Number']//following::div[@class='tooltip-icon'][1]`)
                console.log(`The toolTip message we are getting: ${toolTip}`);
            }
            await this.clearAndType2(`//input[@formcontrolname='InvoiceNumber']`,`Invoice Number`,invoiceNo)
            await this.clearAndType(`(//input[@placeholder='Search/create contact reference'])[3]`,`Goods Description`,goodsDescription)
            await this.clearAndType2(`(//input[@placeholder='Unit'])[2]`,`Weight`,invoiceWeight)
            await this.clickButton(`(//mat-select[@placeholder='Select country'])[4]`,`Source Country`,`DropDown`)
            await this.clickButton(`(//span[text()='${sourceCountry}'])[3]`,`Source Country`,`Button`)
            await this.clearAndType2(`//input[@placeholder='Commodity Code']`,`Commodity Code`,commodityCode)
            await this.clearAndType2(`//input[@placeholder='Quantity']`,`Quantity`,quantity)
            await this.clearAndType2(`//mat-label[text()='Unit Price']//following::input[1]`,`Unit Price`,unitPrice)
            await this.clickButton(`(//button[contains(@class, 'btn-primary')])[6]`,`Next`,`Button`)
            const paperFee = await this.locatingPopup(`//div[@class='cdk-overlay-pane']`)
            const errorMessage = await this.locatingElement(`#toast-container`)

            if (paperFee) {
                const paperFeeMessage = await this.getInnerText(`//div[@class='cdk-overlay-pane']`)
                console.log(`The Paper Fee Message we are getting : ${paperFeeMessage}`);
                await this.clickButton(`//button[text()='CONTINUE']`,`Continue`,`Button`)
                await this.getErrorMessage(`#toast-container`)
            }
            else if(errorMessage){
                await this.getErrorMessage(`#toast-container`)
            }
            else{
                await this.clickButton(`(//button[contains(@class, 'btn-primary')])[6]`,`Next`,`Button`)
            }
            
            
        }
        else if(invoiceType == `I already have one`)
        {
            await this.clickButton(`(//mat-select[@aria-label='Select country'])[3]`,`Commercial Invoice`,`DropDown`)
            await this.clickButton(`//span[text()='I Already Have One']`,`I Already Have One`,`Button`)
            await this.clickButton(`(//button[contains(@class, 'btn-primary')])[6]`,`Next`,`Button`)
            const paperFeeMessage = await this.getInnerText(`//div[@class='cdk-overlay-pane']`)
            console.log(`The Paper Fee Message we are getting : ${paperFeeMessage}`);
            await this.clickButton(`//button[text()='CONTINUE']`,`Continue`,`Button`)

        }
        else if(invoiceType == `Upload own invoice`)
        {
            await this.clickButton(`(//mat-select[@aria-label='Select country'])[3]`,`Commercial Invoice`,`DropDown`)
            await this.clickButton(`//span[text()='Upload your own PDF invoice']`,`Upload Own Invoice`,`Button`)
            await this.uploadFile(`input[type='file']`,`Uploads/sathish.pdf`)
            await this.clickButton(`(//button[contains(@class, 'btn-primary')])[6]`,`Next`,`Button`)
        }

    }

    async commercialInvoicePageSpinner(): Promise<void>{
        await this.spin(`//mat-progress-bar[@mode='indeterminate']`)

    }

}