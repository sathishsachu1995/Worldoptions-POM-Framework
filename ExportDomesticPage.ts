import { Page,BrowserContext, expect } from "@playwright/test";
import { PlaywrightWrapper } from "../Utils/playwright";
import { UrlConstants } from "../Constants/urlConstants";
import { log } from "console";

export class ExportDomesticPage extends PlaywrightWrapper{

    static preliveExportUrl = UrlConstants.preliveExportPageUrl

    constructor(page:Page, context: BrowserContext){
        super(page,context)
    }

    async clickingExportPage(): Promise<void>{
        await this.clickButton(`//img[@title='Ship']`,`Ship`,`Button`)
        await this.clickButton(`//a[text()='Export/Domestic']`,`Export/Domestic`,`Button`)
    }

    async enteringCollectionCompanyName(collectionCompany: string): Promise<void>{
        await this.clearAndType(`(//input[@placeholder = 'Company'])[1]`,`Collection Company`,collectionCompany)

    }

    async enteringDeliveryCompanyName(deliveryCompany:string): Promise<void>{
        await this.clearAndType(`(//input[@placeholder = 'Company'])[2]`,`Delivery Company`,deliveryCompany)

    }

    async enteringCollectionContactName(collectionConctact: string): Promise<void>{
        await this.clearAndType(`(//input[@placeholder = 'Contact Name'])[1]`,`Collection Contact`,collectionConctact)

    }

    async enteringDeliveryContactName(deliveryContact:string): Promise<void>{
        await this.clearAndType(`(//input[@placeholder = 'Contact Name'])[2]`,`Delivery Contact`,deliveryContact)

    }

    async enteringCollectionAddress1(collectionAddress1: string): Promise<void>{
        await this.clearAndType(`(//input[@placeholder = 'Address 1'])[1]`,`Collection Address1`,collectionAddress1)

    }

    async enteringDeliveryAddress1(deliveryAddress1:string): Promise<void>{
        await this.clearAndType(`(//input[@placeholder = 'Address 1'])[2]`,`Delivery Address1`,deliveryAddress1)
    
    }

    async enteringCollectionCountry(collectionCountry: string): Promise<void>{
        await this.clickButton(`(//mat-select[@placeholder = 'Select country'])[1]`,`Collection Country`,`Drop Down`)
        await this.locatorChainingClick(`Collection Country`,collectionCountry,`span`)

    }

    async clickingDeliveryCountry(deliveryCountry:string): Promise<void>{
        await this.clickButton(`(//mat-select[@placeholder = 'Select country'])[2]`,`Delivery Country`,`Drop Down`)
        await this.locatorChainingClick('Delivery Country',deliveryCountry,'span')
    }

    async clickingCollectionState(collectionState: string): Promise<void>{
        await this.clickButton(`(//mat-select[@placeholder= 'Select state'])[1]`,`Collection State`,`Drop Down`)
        await this.locatorChainingClick(`Collection State`,collectionState,`span`)

    }

    async clickingDeliveryState(deliveryState:string): Promise<void>{
        await this.clickButton(`(//mat-select[@placeholder= 'Select state'])[2]`,`Delivery State`,`Drop Down`)
        await this.locatorChainingClick('Delivery State',deliveryState,'span')
    }

    async enteringCollectionCity(collectionCity: string): Promise<void>{
        await this.clearAndType(`(//input[@placeholder = 'City'])[1]`,`Collection City`,collectionCity)

    }

    async enteringDeliveryCity(deliveryCity:string): Promise<void>{
        await this.clearAndType(`(//input[@placeholder = 'City'])[2]`,`Delivery City`,deliveryCity)

    }

    async enteringCollectionPostcode(collectionPostcode: string): Promise<void>{
        await this.clearAndType(`(//input[@formcontrolname = 'PostalCode'])[1]`,`Collection Postcode`,collectionPostcode)

    }

    async enteringDeliveryPostcode(deliveryPostcode:string): Promise<void>{
        await this.clearAndType(`(//input[@formcontrolname = 'PostalCode'])[2]`,`Delivery Postcode`,deliveryPostcode)
        
    }

    async enteringCollectionDial(collectionDial: string): Promise<void>{
        await this.clearAndType(`(//input[@placeholder = 'Area'])[1]`,`Collection Dialcode`,collectionDial)

    }

    async enteringDeliveryDial(deliveryDial:string): Promise<void>{
        await this.clearAndType(`(//input[@placeholder = 'Area'])[2]`,`Delivery Dialcode`,deliveryDial)
        
    }

    async enteringCollectionPhone(collectionPhone: string): Promise<void>{
        await this.clearAndType(`(//input[@placeholder = 'Phone number'])[1]`,`Collection Phone`,collectionPhone)

    }

    async enteringDeliveryPhone(deliveryPhone:string): Promise<void>{
        await this.clearAndType(`(//input[@placeholder = 'Phone number'])[2]`,`Delivery Phone`,deliveryPhone)
        
    }

    async enteringCollectionEmailID(collectionEmail: string): Promise<void>{
        await this.clearAndType(`(//input[@placeholder = 'Email address'])[1]`,`Collection Email Address`,collectionEmail)

    }

    async enteringDeliveryEmailID(deliveryEmail:string): Promise<void>{
        await this.clearAndType(`(//input[@placeholder = 'Email address'])[2]`,`Delivery Email Address`,deliveryEmail)
        
    }

    async clickingServiceCompany(carrierName:string): Promise<void>{
        await this.clickButton(`(//mat-select[@placeholder='Select one'])[1]`,`Service Company`,`Drop Down`)
        await this.locatorChainingClick(`Service Company Drop Down`,carrierName,`span`)
    }

    async clickingServiceType(serviceTypeName:string): Promise<void>{
        await this.clickButton(`(//mat-select[@placeholder='Select one'])[2]`,`Service Type`,`Drop Down`)
        await this.locatorChainingClick(`Service Type Drop Down`,serviceTypeName,`span`)
    }

    async clickingPackageType(packageTypeName:string): Promise<void>{
        await this.clickButton(`(//mat-select[@placeholder='Select one'])[3]`,`Package Type`,`Drop Down`)
        await this.locatorChainingClick(`Package Type Drop Down`,packageTypeName,`span`)
    }

    async enteringCustomerRef(customerRef: string): Promise<void>{
        await this.clearAndType(`//input[@formcontrolname ='CustomerReference']`,`Customer Reference`,customerRef)
        
    }

    async enteringTestDescription(description: string): Promise<void>{
        await this.clearAndType(`//textarea[@formcontrolname='Description']`,`Test Description`,description)
    
    }

    async clickingTransitInsurance(insurance: string): Promise<void>{
        await this.locatorWithFilter(`.mat-radio-label-content`,`Transit Insurance`,insurance,`RadioButton`)
    }

    async enteringWeight(unit: number): Promise<void>{
        await this.clearAndType2(`//input[@placeholder='Unit']`,`Weight`,unit)

    }

    async enteringLength(lengthCM: string): Promise<void>{
        await this.clearAndType(`//input[@placeholder='L']`,`Length`,lengthCM)
    
    }

    async enteringWidth(widthCM: string): Promise<void>{
        await this.clearAndType(`//input[@placeholder='W']`,`Width`,widthCM)
        
    }

    async enteringHeight(heightCM:string): Promise<void>{
        await this.clearAndType(`//input[@placeholder='H']`,`Height`,heightCM)
        
    }

    async enteringCustomValue(customValue: number): Promise<void>{
        await this.clearAndType2(`//input[@placeholder='Value']`,`Custom Value`,customValue)

    }

    async choosingCurrencyType(currency: string): Promise<void>{
        await this.clickButton(`//mat-select[@formcontrolname='Currency']`,`Currency`,`Button`)
        await this.clickButton(`(//span[text()='${currency}'])[1]`,`Currency`,`button`)
    }

    async clickingQuoteButton(): Promise<void>{
        await this.clickButton(`//button[text()='Quote']`,`Quote`,`Button`)
    }

    async exportPageSpinner(): Promise<void>{
        await this.spin("//div[@class='la-ball-beat la-2x']")
    }

    async ancillaryChargesValidation(remoteAreaCharge: string): Promise<void> {

    const remoteAreaFee = await this.getInnerText(`//li[strong[contains(text(),' Remote Area Sur. ')]]`);
    const quotePopup = await this.locatingPopup(`#quoteDialog`);
    const exception = await this.locatingPopup(`.cdk-overlay-pane`);

    if (remoteAreaFee == remoteAreaCharge) {
        console.log(`The Remote Area Surcharge we are getting as per the Requirement!!! Expected ${remoteAreaCharge} and the result ${remoteAreaFee}`);                    
        await this.getQuoteMessage(`.service-wrapper`);
    } else {
        throw new Error(`Remote Area Surcharge Mismatch! Expected ${remoteAreaCharge} but found ${remoteAreaFee}`);
    }

    /* if you want, you can uncomment and handle error popups here */
    // else if(exception) {
    //     await this.getErrorMessage(`.cdk-overlay-pane`);
    // } else {
    //     await this.getErrorMessage(`#toast-container`);
    // }
    }

    async gettingRatesOrErrorMessage(): Promise<void>{
        try {
            const quotePopup = await this.locatingPopup(`#quoteDialog`)
            const exception = await this.locatingPopup(`.cdk-overlay-pane`)
            if(quotePopup)
            {
                await this.getQuoteMessage(`.service-wrapper`)   
            }
            else if(exception)
            {
                await this.getErrorMessage(`.cdk-overlay-pane`)
            }
            else
            {
                await this.getErrorMessage(`#toast-container`) 
            }

        } catch (error) {
            console.error(`The error received while getting rates ${error}`)    
        }

    }

    async getCourierRatesORErrorMessage(errorMessage: string): Promise<void>{

        
            const quotePopup = await this.locatingPopup(`#quoteDialog`)
            if(quotePopup)
            {
                await this.getQuoteMessage(`.service-wrapper`)   
            }
            else
            {
                const errorPopup = await this.getInnerText(`#toast-container`)
                expect(errorPopup,`we are getting expected error Message that is : ${errorPopup}`).toContain(errorMessage)
                console.log(`Error message we received : ${errorPopup}`);
                
            }
    }

    async gettingMHFee(): Promise<void>{
        try {
            const manualHandling = await this.locatingPopup(`//strong[text()='Manual Handling Surcharge:']`)
            const manualOversize = await this.locatingPopup(`//strong[text()='ManualHand.-OvermaxSize Sur.:']`)
            if(manualHandling)
            {
                console.log(`Manual Handling fee is visible`)
                await this.getQuoteMessage(`.service-wrapper`)    
            } 
            else if(manualOversize)
            {
                console.log(`Manual Handling Oversize fee is visible`)
                await this.getQuoteMessage(`.service-wrapper`)   
            }
            else if(!manualHandling && !manualOversize)
            {
                await this.getQuoteMessage(`.service-wrapper`)
            }
            
        } catch (error) {
            await this.getErrorMessage(`#toast-container`)
            console.error(`The error received while getting rates ${error}`)
            
        }

    }

    async validatingMHFeeST(): Promise<void>{
        const addtionalHandling = await this.locatingPopup(`//strong[text()='Add. Handling Charge:']`)

        if (addtionalHandling) {
            console.log(`Manual handling or Additional handling fee is getting charged`);

            await this.getQuoteMessage(`.service-wrapper`)    
        }
        else
        {
            await this.getQuoteMessage(`.service-wrapper`)

        }

    }

    async validatingOversizeFeeST(): Promise<void>{
        const overSizeFee = await this.locatingPopup(`//strong[text()='Over Size Charge:']`)

        if (overSizeFee) {
            console.log(`Oversize fee is getting charged`);

            await this.getQuoteMessage(`.service-wrapper`)    
        }

    }

    async chooseMultipleItems(value: string): Promise<void>{

        if (value>"1") 
        {
            await this.clickButton(`//mat-select[@formcontrolname='packageCount']`,`No of Items`,`Drop Down`)
            await this.locatorChainingClick(`No of Items Drop Down`,value,`span`)
            await this.clickButton(`//span[@class='icon-upload-file ng-star-inserted']`,`Copy to All`,`Icon`)
            
        }
        
    }

    async clickingCopytoAllIcon(): Promise<void>{
        await this.clickButton(`//span[@class='icon-upload-file ng-star-inserted']`,`Copy to All`,`Icon`)
    }

    async clickingOKButton(): Promise<void>{
        await this.clickButton(`//span[text()='Ok']`,`Ok Button`,`Button`)
    }

    async clickingNextButton(): Promise<void>{
        await this.clickButton(`(//button[text()='Next'])[1]`,`Next Button`,`Button`)
        const tntPopup = await this.locatingPopup(`.cdk-overlay-pane`)
        if (tntPopup) {
            await this.clickButton(`//button[text()='OK']`,`OK`,`Button`)    
        }
    }
    

}