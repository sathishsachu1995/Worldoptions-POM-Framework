import { Page,BrowserContext } from "@playwright/test";
import { PlaywrightWrapper } from "../Utils/playwright";

export class QuickQuotePage extends PlaywrightWrapper{

    constructor(page: Page, context: BrowserContext){
        super(page,context)
    }

    async clickingQuickQuotePage(): Promise<void>{
        await this.clickButton(`//p[contains(normalize-space(), 'Quote')]`,`Quote`,`Button`)
        await this.clickButton(`//a[text()='Quick Quote']`,`Quick Quote`,`Button`)

    }

    async clickingParcelorPallet(serviceType: string): Promise<void>{
        if (serviceType == `parcel`) {
            await this.clickButton(`#pills-parcel-docs-tab`,`Parcel & Document`,`Button`)
            
        }
        else if (serviceType == `bulk`) {
            await this.clickButton(`#pills-pallets-freight-tab`,`Pallet & Freight`,`Button`)
            
        }
        

    }


    async clickingFromCountry(fromCountry: string): Promise<void>{
        await this.clickButton(`#dvFlagCollection`,`Collection Country`,`Icon`)
        await this.clickButton(`//div[@class='pcaflagbutton collectionFlag']`,`Collection Change Country`,`Drop Down`)
        await this.clearAndType(`#line1Collection`,`From Country`,fromCountry)
        await this.clickButton(`(//div[text()='${fromCountry}'])[1]`,`Collection Country`,`Button`)
    }

    async clickingToCountry(toCountry: string): Promise<void>{
        await this.clickButton(`#dvFlagDelivery`,`Delivery Country`,`Icon`)
        await this.clickButton(`//div[@class='pcaflagbutton deliveryFlag']`,`Delivery Change Country`,`Drop Down`)
        await this.clearAndType(`#line1Delivery`,`To Country`,toCountry)
        await this.clickButton(`(//div[text()='${toCountry}'])[2]`,`Delivery Country`,`Button`)
    }

    async enteringFromPostcode(fromPostcode: string): Promise<void>{
        await this.clearAndType(`//input[@formcontrolname='collectionPostCode']`,`From postcode`,fromPostcode)

    }

    async enteringFromState(fromState: string): Promise<void>{
        const state = await this.locatingElement(`//mat-select[@formcontrolname='collectionState']`)
        if (state) {
            await this.clickButton(`//mat-select[@formcontrolname='collectionState']`,`From state`,`Drop down`)
            await this.locatorChainingClick(`From State Drop Down`,fromState,`span`)
        }
        
    }

    async enteringFromCity(fromCity: string): Promise<void>{
        await this.clearAndType(`//input[@formcontrolname='collectionCity']`,`From city`,fromCity)

    }

    async enteringDeliveryPostcode(toPostcode: string): Promise<void>{
        await this.type(`//input[@formcontrolname='deliveryPostCode']`,`Delivery postcode`,toPostcode)

    }

    async enteringDeliveryState(toState: string): Promise<void>{
        const state = await this.locatingElement(`//mat-select[@formcontrolname='deliveryState']`)
        if (state) {
            await this.clickButton(`//mat-select[@formcontrolname='deliveryState']`,`Delivery state`,`Drop down`)
            await this.locatorChainingClick(`Delivery State Drop Down`,toState,`span`)
        }
    }

    async enteringDeliveryCity(toCity: string): Promise<void>{
        await this.type(`//input[@formcontrolname='deliveryCity']`,`Delivery city`,toCity)

    }

    async clickingResidentialCollection(residentialCollection : string): Promise<void>{
        if (residentialCollection == `Yes`) {
            await this.clickButton(`//mat-checkbox[@formcontrolname='isCollectionResidential']`,`Residential Collection`,`Check Box`)
        }
    }

    async clickingResidentialDelivery(residentialDelivery : string): Promise<void>{
        if (residentialDelivery == `Yes`) {
            await this.clickButton(`//mat-checkbox[@formcontrolname='isDeliveryResidential']`,`Residential Delivery`,`Check Box`)    
        }
    }

    async enteringStreetAddressAllied(streetAddress: string): Promise<void>{
        await this.type(`//input[@formcontrolname='StreetAddress']`,`Allied express street address`,streetAddress)

    }

    async clickingParcelBoxesButton(): Promise<void>{
        await this.clickButton(`//a[text()='Parcel & Boxes']`,`Parcel&Boxes`,`Button`)

    }

    async clickingDocumentsButton(): Promise<void>{
        await this.clickButton(`//a[text()='Documents']`,`Documents`,`Button`)
    }

    async enteringWeight(weight: number): Promise<void>{
        await this.clearAndType2(`//input[@placeholder='Weight']`,`Weight`,weight)

    }

    async enteringLength(length: string): Promise<void>{
        await this.type(`//input[@placeholder='L']`,`Length`,length)

    }

    async enteringWidth(width: string): Promise<void>{
        await this.type(`//input[@placeholder='W']`,`Width`,width)

    }

    async enteringHeight(height: string): Promise<void>{
        await this.type(`//input[@placeholder='H']`,`Height`,height)

    }

    async clickingMultiplePieces(count: number): Promise<void>{

        if (count>1) {
            for(let i =1; i<count;i++){
                await this.clickButton(`//button[text()='Add another unit ']`,`Add Unit`,`Button`)
    
            }
            await this.clickButton(`//span[@title='Copy To All']`,`Copy To All`,`Icon`)   
        }  

    }

    async clickingIncreaseButton(): Promise<void>{
        await this.clickButton(`//div[@id='increase']`,`Increase`,`Button`)

    }

    async clickingDecreaseButton(): Promise<void>{
        await this.clickButton(`//div[@id='decrease']`,`Decrease`,`Button`)

    }

    async clickingAddUnitButton(): Promise<void>{
        await this.clickButton(`//button[text()='Add another unit ']`,`Add Unit`,`Button`)

    }

    async clickingPickupTailLift(tailCollection: string): Promise<void>{
        if (tailCollection == `Yes`) {
            await this.clickButton(`(//span[text()='Tail Lift'])[1]`,`Pickup TailLift`,`Check Box`)    
        }
    }

    async clickingDeliveryTailLift(tailDelivery: string): Promise<void>{
        if (tailDelivery == `Yes`) {
            await this.clickButton(`(//span[text()='Tail Lift'])[2]`,`Delivery TailLift`,`Check Box`)
        }
    }

    async clickingExhibitionDeliveryBX(exhibitionDelivery : string): Promise<void>{
        if (exhibitionDelivery == `Yes`) {
            await this.clickButton(`//mat-checkbox[@formcontrolname='ExhibitionDeliveryRequired']`,`Exhibition Delivery BX`,`Check Box`)
        }
    }

    async clickingPOBoxDeliverySTOnly(poBoxDelivery: string): Promise<void>{
        if (poBoxDelivery == `Yes`) {
            await this.clickButton(`//mat-checkbox[@formcontrolname='POBoxDeliveryRequired']`,`PO Box Delivery ST Only`,`Check Box`)
        }
    }

    async clickingDangerousGoods(dangerousGoods: string): Promise<void>{
        if (dangerousGoods == `Yes`) {
            await this.clickButton(`//mat-checkbox[@formcontrolname='IsDangerousGoods']`,`Dangerous Goods`,`Check Box`)
        }
    }

    async clickingHandUnloadBXOnly(handUnload: string): Promise<void>{
        if (handUnload == `Yes`) {
            await this.clickButton(`//mat-checkbox[@formcontrolname='HandUnloadRequired']`,`HandUnload BX Only`,`Check Box`)
        }
    }

    async clickingMineSiteTollOnly(mineSite: string): Promise<void>{
        if (mineSite == `Yes`) {
            await this.clickButton(`//mat-checkbox[@formcontrolname='MineSiteRequired']`,`MineSite Toll Only`,`Check Box`)
        }
    }

    async clickingTimeSlotTollAndBXOnly(timeSlot: string): Promise<void>{
        if (timeSlot == `Yes`) {
            await this.clickButton(`//mat-checkbox[@formcontrolname='TimeSlotRequired']`,`TimeSlot Toll and BX Only`,`Check Box`)
        }
    }

    async clickingFedExISR(fedExISR : string): Promise<void>{
        if (fedExISR == `Yes`) {
            await this.clickButton(`//mat-checkbox[@formcontrolname='InDirectSignatureRequired']`,`FedEx ISR`,`Check Box`)
        }
    }

    async clickingFedExDSR(fedExDSR : string): Promise<void>{
        if (fedExDSR == `Yes`) {
            await this.clickButton(`//mat-checkbox[@formcontrolname='DirectSignatureRequired']`,`FedEx DSR`,`Check Box`)
        }
    }

    async clickingFedEXASR(fedExASR : string): Promise<void>{
        if (fedExASR == `Yes`) {
            await this.clickButton(`//mat-checkbox[@formcontrolname='AdultSignatureRequired']`,`FedEx ASR`,`Check Box`)
        }
    }

    async clickingQuoteButton(): Promise<void>{
        
        await this.clickButton(`//button[text()=' Quote ']`,`Quote`,`Button`)
        await this.spin(`//div[@class='la-ball-beat la-2x']`)

        const warningMessage = await this.locatingPopup(`.cdk-overlay-pane`)

        if (warningMessage)
        {
            await this.getErrorMessage(`.cdk-overlay-pane`)
        }
    }

    async clickingUpdateButton(): Promise<void>{
        await this.clickButton(`//button[text()=' Update ']`,`Update`,`Button`)

    }

    async quickQuoteSpinner(): Promise<void>{
        await this.spin(`//div[@class='la-ball-beat la-2x']`)

    }
}