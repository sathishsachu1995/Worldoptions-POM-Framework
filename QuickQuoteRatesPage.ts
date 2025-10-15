import { Page,BrowserContext } from "@playwright/test";
import { PlaywrightWrapper } from "../Utils/playwright";
import { log } from "console";

export class QuickQuoteRatesPage extends PlaywrightWrapper{

    constructor(page: Page, context: BrowserContext){
        super(page,context)

    }

    async clickingEmailQuote(firstName: string,emailID: string): Promise<void>{
        await this.clickButton(`//button[text()=' Email Quote ']`,`Email Quote`,`Button`)
        await this.clickButton(`//input[@formcontrolname='FirstName']`,`First name`,`Field`)
        await this.type(`//input[@formcontrolname='FirstName']`,`First name`,firstName)
        await this.clickButton(`//input[@formcontrolname='Email']`,`Email ID`,`Field`)
        await this.type(`//input[@formcontrolname='Email']`,`Email ID`,emailID)
        await this.clickButton(`//button[text()='Submit']`,`Submit`,`Button`)

    }

    async clickingSaveQuote(quoteReference: string): Promise<void>{
        await this.clickButton(`//button[text()=' Email Quote ']/following::button[2]`,`Save Quote`,`Button`)
        await this.type(`//input[@placeholder='Please enter quote reference.']`,`Quote Reference`,quoteReference)
        await this.clickButton(`//button[text()='Submit']`,`Submit`,`Button`)
        await this.getErrorMessage(`#toast-container`)
    
    }

    async clickingEditButton(): Promise<void>{
        await this.clickButton(`//button[text()=' Email Quote ']/following::button[1]`,`Edit`,`Button`)

    }

    async clickingNewButton(): Promise<void>{
        await this.clickButton(`//button[text()='New']`,`New`,`Button`)

    }

    async choosingAlliedExpressCarrier(serviceType: string): Promise<void>{

        await this.clickButton(`//a[text()='View All']`,`View All`,`Button`)
        await this.clickButton(`//span[text()='Allied Express']`,`Allied Express`,`Check Box`)

        if (serviceType == `parcel`)
        {
            const serviceName = await this.getInnerText(`//p[text()='R(Road)']`)
            console.log(`Service name : Allied Express ${serviceName}`);
            const alliedParcelRates = await this.getInnerText(`//div[@class='box-white-section']`)
            console.log(`Allied Express Parcel rates we are getting : ${alliedParcelRates}`);
            await this.clickButton(`//p[text()='R(Road)']/following::button`,`Book now`,`Button`)
            
        } 
        else if (serviceType == `bulk`)
        {
            const serviceName = await this.getInnerText(`//p[text()='R(Road)']`)
            console.log(`Service name : Allied Express ${serviceName}`);
            await this.clickButton(`//span[@class='font-montserrat freightprice']`,`Rates`,`Icon`)
            const alliedPalletRates =  await this.getInnerText(`//app-freight-price-dialog[@class='ng-star-inserted']`)
            console.log(`Allied Express Pallet rates we are getting : ${alliedPalletRates}`);
            await this.clickButton(`//span[text()='Ok']`,`OK`,`Button`)
            await this.clickButton(`//p[text()='R(Road)']/following::button`,`Book now`,`Button`)
            
        }
        

    }

    async choosingBorderExpressCarrier(serviceType: string): Promise<void>{
        await this.clickButton(`//a[text()='View All']`,`View All`,`Button`)
        await this.clickButton(`//span[text()='Border Express']`,`Border Express`,`Check Box`)

        if (serviceType == `parcel`) 
        {
            const serviceName = await this.getInnerText(`//p[text()='Parcel']`)
            console.log(`Service name : Border Express ${serviceName}`);
            const bxParcelRates = await this.getInnerText(`//div[@class='box-white-section']`)
            console.log(`Border Express Parcel rates we are getting : ${bxParcelRates}`);
            await this.clickButton(`//p[text()='Parcel']/following::button`,`Book now`,`Button`)
            
        } 
        else if (serviceType == `bulk`)
        {
            const serviceName = await this.getInnerText(`//p[text()='Bulk']`)
            console.log(`Service name : Border Express ${serviceName}`);
            await this.clickButton(`//span[@class='font-montserrat freightprice']`,`Rates`,`Icon`)
            const bxPalletRates =  await this.getInnerText(`//app-freight-price-dialog[@class='ng-star-inserted']`)
            console.log(`Border Express Pallet rates we are getting : ${bxPalletRates}`);
            await this.clickButton(`//span[text()='Ok']`,`OK`,`Button`)
            await this.clickButton(`//p[text()='Bulk']/following::button`,`Book now`,`Button`)
        }

    }

    async choosingMachshipCarrier(serviceType: string, machshipCarrier: string): Promise<void>{
        await this.clickButton(`//a[text()='View All']`,`View All`,`Button`)
        await this.clickButton(`//span[text()='World Options Australia']`,`World Options Australia`,`Check Box`)

        if (serviceType == `parcel` && machshipCarrier == `Parcel Freight Logistics`)
        {
            const serviceName = await this.getInnerText(`//p[text()='Parcel Freight Logistics : PARCEL']`)
            console.log(`Service name : ${serviceName}`);
            const machshipPFLParcelRates = await this.getInnerText(`//p[text()='Parcel Freight Logistics : PARCEL']//following::div[@class= 'box-white-section'][1]`)
            console.log(`The Machship PFL Parcel rates we are getting : ${machshipPFLParcelRates}`);
            await this.clickButton(`//p[text()='Parcel Freight Logistics : PARCEL']/following::button[1]`,`Book now`,`Button`)
        }
        else if (serviceType == `parcel` && machshipCarrier == `Desingner Transport`)
        {
            const serviceName = await this.getInnerText(`//p[text()='Designer Transport : DTx']`)
            console.log(`Service name : ${serviceName}`);
            const machshipDTXParcelRates = await this.getInnerText(`//p[text()='Designer Transport : DTx']//following::div[@class= 'box-white-section'][1]`)
            console.log(`The Machship DTX Parcel rates we are getting : ${machshipDTXParcelRates}`);
            await this.clickButton(`//p[text()='Designer Transport : DTx']/following::button[1]`,`Book now`,`Button`)
        }
        else if (serviceType == `parcel` && machshipCarrier == `Australia Post Parcel`)
        {
            const serviceName = await this.getInnerText(`//p[text()='Australia Post : PARCEL POST + SIGNATURE']`)
            console.log(`Service name : ${serviceName}`);
            const machshipAUPostParcelRates = await this.getInnerText(`//p[text()='Australia Post : PARCEL POST + SIGNATURE']//following::div[@class= 'box-white-section'][1]`)
            console.log(`The Machship AU Post Parcel rates we are getting : ${machshipAUPostParcelRates}`);
            await this.clickButton(`//p[text()='Australia Post : PARCEL POST + SIGNATURE']/following::button[1]`,`Book now`,`Button`)
        }
        else if (serviceType == `parcel` && machshipCarrier == `Australia Post Express`)
        {
            const serviceName = await this.getInnerText(`//p[text()='Australia Post : EXPRESS POST + SIGNATURE']`)
            console.log(`Service name : ${serviceName}`);
            const machshipAUPostExpressRates = await this.getInnerText(`//p[text()='Australia Post : EXPRESS POST + SIGNATURE']//following::div[@class= 'box-white-section'][1]`)
            console.log(`The Machship AU Post Express rates we are getting : ${machshipAUPostExpressRates}`);
            await this.clickButton(`//p[text()='Australia Post : EXPRESS POST + SIGNATURE']/following::button[1]`,`Book now`,`Button`)
        }
        else if (serviceType == `parcel` && machshipCarrier == `Custom Semi FL`)
        {
            const serviceName = await this.getInnerText(`//p[text()='custm : Semi FL']`)
            console.log(`Service name : ${serviceName}`);
            const machshipCustomSemiFLRates = await this.getInnerText(`//p[text()='custm : Semi FL']//following::div[@class= 'box-white-section'][1]`)
            console.log(`The Machship Custom SEMI FL rates we are getting : ${machshipCustomSemiFLRates}`);
            await this.clickButton(`//p[text()='custm : Semi FL']/following::button[1]`,`Book now`,`Button`)
        }
        else if (serviceType == `parcel` && machshipCarrier == `Custom B-Double FL`)
        {
            const serviceName = await this.getInnerText(`//p[text()='custm : B-Double FL']`)
            console.log(`Service name : ${serviceName}`);
            const machshipCustomBDoubleFLRates = await this.getInnerText(`//p[text()='custm : B-Double FL']//following::div[@class= 'box-white-section'][1]`)
            console.log(`The Machship Custom B Double FL rates we are getting : ${machshipCustomBDoubleFLRates}`);
            await this.clickButton(`//p[text()='custm : B-Double FL']/following::button[1]`,`Book now`,`Button`)
        }
        else if (serviceType == `bulk` && machshipCarrier == `Parcel Freight Logistics`)
        {
            const serviceName = await this.getInnerText(`//p[text()='Parcel Freight Logistics : PARCEL']`)
            console.log(`Service name : ${serviceName}`);
            await this.clickButton(`//p[text()='Parcel Freight Logistics : PARCEL']//following::span[@class='font-montserrat freightprice'][1]`,`Rates`,`Icon`)
            const machshipPFLPalletRates =  await this.getInnerText(`//app-freight-price-dialog[@class='ng-star-inserted']`)
            console.log(`The Machship PFL Pallet rates we are getting : ${machshipPFLPalletRates}`);
            await this.clickButton(`//span[text()='Ok']`,`OK`,`Button`)
            await this.clickButton(`//p[text()='Parcel Freight Logistics : PARCEL']/following::button[1]`,`Book now`,`Button`)
        }
        else if (serviceType == `bulk` && machshipCarrier == `Desingner Transport`)
        {
            const serviceName = await this.getInnerText(`//p[text()='Designer Transport : DTx']`)
            console.log(`Service name : ${serviceName}`);
            await this.clickButton(`//p[text()='Designer Transport : DTx']//following::span[@class='font-montserrat freightprice'][1]`,`Rates`,`Icon`)
            const machshipDTXPalletRates =  await this.getInnerText(`//app-freight-price-dialog[@class='ng-star-inserted']`)
            console.log(`The Machship DTX Pallet rates we are getting : ${machshipDTXPalletRates}`);
            await this.clickButton(`//span[text()='Ok']`,`OK`,`Button`)
            await this.clickButton(`//p[text()='Designer Transport : DTx']/following::button[1]`,`Book now`,`Button`)
        }
        else if (serviceType == `bulk` && machshipCarrier == `Australia Post Parcel`)
        {
            const serviceName = await this.getInnerText(`//p[text()='Australia Post : PARCEL POST + SIGNATURE']`)
            console.log(`Service name : ${serviceName}`);
            await this.clickButton(`//p[text()='Australia Post : PARCEL POST + SIGNATURE']//following::span[@class='font-montserrat freightprice'][1]`,`Rates`,`Icon`)
            const machshipAUPostParcelPalletRates =  await this.getInnerText(`//app-freight-price-dialog[@class='ng-star-inserted']`)
            console.log(`The Machship AU Post Parcel Pallet rates we are getting : ${machshipAUPostParcelPalletRates}`);
            await this.clickButton(`//span[text()='Ok']`,`OK`,`Button`)
            await this.clickButton(`//p[text()='Australia Post : PARCEL POST + SIGNATURE']/following::button[1]`,`Book now`,`Button`)
        }
        else if (serviceType == `bulk` && machshipCarrier == `Australia Post Express`)
        {
            const serviceName = await this.getInnerText(`//p[text()='Australia Post : EXPRESS POST + SIGNATURE']`)
            console.log(`Service name : ${serviceName}`);
            await this.clickButton(`//p[text()='Australia Post : EXPRESS POST + SIGNATURE']//following::span[@class='font-montserrat freightprice'][1]`,`Rates`,`Icon`)
            const machshipAUPostExpressPalletRates =  await this.getInnerText(`//app-freight-price-dialog[@class='ng-star-inserted']`)
            console.log(`The Machship AU Post Express Pallet rates we are getting : ${machshipAUPostExpressPalletRates}`);
            await this.clickButton(`//span[text()='Ok']`,`OK`,`Button`)
            await this.clickButton(`//p[text()='Australia Post : EXPRESS POST + SIGNATURE']/following::button[1]`,`Book now`,`Button`)
        }
        else if (serviceType == `bulk` && machshipCarrier == `Custom Semi FL`)
        {
            const serviceName = await this.getInnerText(`//p[text()='custm : Semi FL']`)
            console.log(`Service name : ${serviceName}`);
            await this.clickButton(`//p[text()='custm : Semi FL']//following::span[@class='font-montserrat freightprice'][1]`,`Rates`,`Icon`)
            const machshipCustomSemiFLPalletRates =  await this.getInnerText(`//app-freight-price-dialog[@class='ng-star-inserted']`)
            console.log(`The Machship Custom SEMI FL Pallet rates we are getting : ${machshipCustomSemiFLPalletRates}`);
            await this.clickButton(`//span[text()='Ok']`,`OK`,`Button`)
            await this.clickButton(`//p[text()='custm : Semi FL']/following::button[1]`,`Book now`,`Button`)
        }
        else if (serviceType == `bulk` && machshipCarrier == `Custom B-Double FL`)
        {
            const serviceName = await this.getInnerText(`//p[text()='custm : B-Double FL']`)
            console.log(`Service name : ${serviceName}`);
            await this.clickButton(`//p[text()='custm : B-Double FL']//following::span[@class='font-montserrat freightprice'][1]`,`Rates`,`Icon`)
            const machshipCustomBDoubleFLPalletRates =  await this.getInnerText(`//app-freight-price-dialog[@class='ng-star-inserted']`)
            console.log(`The Machship Custom B Double FL Pallet rates we are getting : ${machshipCustomBDoubleFLPalletRates}`);
            await this.clickButton(`//span[text()='Ok']`,`OK`,`Button`)
            await this.clickButton(`//p[text()='custm : B-Double FL']/following::button[1]`,`Book now`,`Button`)
        }

    }

    async choosingStarTrackCarrier(serviceType: string, serviceName: string): Promise<void>{
        await this.clickButton(`//a[text()='View All']`,`View All`,`Button`)
        await this.clickButton(`//span[text()='StarTrack']`,`StarTrack`,`Check Box`)

        if (serviceType == `parcel` && serviceName == `Road Express`) 
        {
            const serviceName = await this.getInnerText(`//p[text()='Road Express']`)
            console.log(`Service name : StarTrack ${serviceName}`);
            const starTrackRoadExpressParcelRates = await this.getInnerText(`//p[text()='Road Express']//following::div[@class= 'box-white-section'][1]`)
            console.log(`The StarTrack Road Express Parcel rates we are getting : ${starTrackRoadExpressParcelRates}`);
            await this.clickButton(`//p[text()='Road Express']/following::button[1]`,`Book now`,`Button`)
        }
        else if (serviceType == `parcel` && serviceName == `Premium Air Freight`)
        {
            const serviceName = await this.getInnerText(`//p[text()='Premium Air Freight']`)
            console.log(`Service name : StarTrack ${serviceName}`);
            const starTrackPremiumAirFreightParcelRates = await this.getInnerText(`//p[text()='Premium Air Freight']//following::div[@class= 'box-white-section'][1]`)
            console.log(`The StarTrack Premium Air Freight Parcel rates we are getting : ${starTrackPremiumAirFreightParcelRates}`);
            await this.clickButton(`//p[text()='Premium Air Freight']/following::button[1]`,`Book now`,`Button`)
        }
        else if (serviceType == `parcel` && serviceName == `Fixed Price Premium`)
        {
            const serviceName = await this.getInnerText(`//p[text()='Fixed Price Premium']`)
            console.log(`Service name : StarTrack ${serviceName}`);
            const starTrackFixedPricePremiumParcelRates = await this.getInnerText(`//p[text()='Fixed Price Premium']//following::div[@class= 'box-white-section'][1]`)
            console.log(`The StarTrack Fixed Price Premium Parcel rates we are getting : ${starTrackFixedPricePremiumParcelRates}`);
            await this.clickButton(`//p[text()='Fixed Price Premium']/following::button[1]`,`Book now`,`Button`)
        }
        else if (serviceType == `bulk` && serviceName == `Road Express`)
        {
            const serviceName = await this.getInnerText(`//p[text()='Road Express']`)
            console.log(`Service name : StarTrack ${serviceName}`);
            await this.clickButton(`//p[text()='Road Express']//following::span[@class='font-montserrat freightprice'][1]`,`Rates`,`Icon`)
            const starTrackRoadExpressPalletRates =  await this.getInnerText(`//app-freight-price-dialog[@class='ng-star-inserted']`)
            console.log(`The StarTrack Road Express Pallet rates we are getting : ${starTrackRoadExpressPalletRates}`);
            await this.clickButton(`//span[text()='Ok']`,`OK`,`Button`)
            await this.clickButton(`//p[text()='Road Express']/following::button[1]`,`Book now`,`Button`)
        }
        else if (serviceType == `bulk` && serviceName == `Premium Air Freight`)
        {
            const serviceName = await this.getInnerText(`//p[text()='Premium Air Freight']`)
            console.log(`Service name : StarTrack ${serviceName}`);
            await this.clickButton(`//p[text()='Premium Air Freight']//following::span[@class='font-montserrat freightprice'][1]`,`Rates`,`Icon`)
            const starTrackPremiumAirFreightPalletRates =  await this.getInnerText(`//app-freight-price-dialog[@class='ng-star-inserted']`)
            console.log(`The StarTrack Premium Air Freight Pallet rates we are getting : ${starTrackPremiumAirFreightPalletRates}`);
            await this.clickButton(`//span[text()='Ok']`,`OK`,`Button`)
            await this.clickButton(`//p[text()='Premium Air Freight']/following::button[1]`,`Book now`,`Button`)
        }
        else if (serviceType == `bulk` && serviceName == `Fixed Price Premium`)
        {
            const serviceName = await this.getInnerText(`//p[text()='Fixed Price Premium']`)
            console.log(`Service name : StarTrack ${serviceName}`);
            await this.clickButton(`//p[text()='Fixed Price Premium']//following::span[@class='font-montserrat freightprice'][1]`,`Rates`,`Icon`)
            const starTrackFixedPricePremiumPalletRates =  await this.getInnerText(`//app-freight-price-dialog[@class='ng-star-inserted']`)
            console.log(`The StarTrack Fixed Price Premium Pallet rates we are getting : ${starTrackFixedPricePremiumPalletRates}`);
            await this.clickButton(`//span[text()='Ok']`,`OK`,`Button`)
            await this.clickButton(`//p[text()='Fixed Price Premium']/following::button[1]`,`Book now`,`Button`)
        }

    }

    async choosingTNTCarrier(serviceType: string, serviceName: string): Promise<void>{
        await this.clickButton(`//a[text()='View All']`,`View All`,`Button`)
        await this.clickButton(`//span[text()='TNT']`,`TNT`,`Check Box`)

        if (serviceType == `parcel` && serviceName == `Domestic Road Express`)
        {
            const serviceName = await this.getInnerText(`//p[text()='Domestic Road Express']`)
            console.log(`Service name : TNT ${serviceName} Parcel`);
            const tntDomesticRoadExpressParcelRates = await this.getInnerText(`//p[text()='Domestic Road Express']//following::div[@class= 'box-white-section'][1]`)
            console.log(`The TNT Domestic Road Express Parcel rates we are getting : ${tntDomesticRoadExpressParcelRates}`);
            await this.clickButton(`//p[text()='Domestic Road Express']/following::button[1]`,`Book now`,`Button`)
        }
        else if (serviceType == `parcel` && serviceName == `Overnight Express`)
        {
            const serviceName = await this.getInnerText(`//p[text()='Overnight Express']`)
            console.log(`Service name : TNT ${serviceName} Parcel`);
            const tntOvernightExpressParcelRates = await this.getInnerText(`//p[text()='Overnight Express']//following::div[@class= 'box-white-section'][1]`)
            console.log(`The TNT Overnight Express Parcel rates we are getting : ${tntOvernightExpressParcelRates}`);
            await this.clickButton(`//p[text()='Overnight Express']/following::button[1]`,`Book now`,`Button`)
        }
        else if (serviceType == `parcel` && serviceName == `Domestic Express 12:00`)
        {
            const serviceName = await this.getInnerText(`//p[text()='Domestic Express 12:00']`)
            console.log(`Service name : TNT ${serviceName} Parcel`);
            const tntDomesticExpress12ParcelRates = await this.getInnerText(`//p[text()='Domestic Express 12:00']//following::div[@class= 'box-white-section'][1]`)
            console.log(`The TNT Domestic Express 12:00 Parcel rates we are getting : ${tntDomesticExpress12ParcelRates}`);
            await this.clickButton(`//p[text()='Domestic Express 12:00']/following::button[1]`,`Book now`,`Button`)
        }
        else if (serviceType == `parcel` && serviceName == `Domestic Express 10:00`)
        {
            const serviceName = await this.getInnerText(`//p[text()='Domestic Express 10:00']`)
            console.log(`Service name : TNT ${serviceName} Parcel`);
            const tntDomesticExpress10ParcelRates = await this.getInnerText(`//p[text()='Domestic Express 10:00']//following::div[@class= 'box-white-section'][1]`)
            console.log(`The TNT Domestic Express 10:00 Parcel rates we are getting : ${tntDomesticExpress10ParcelRates}`);
            await this.clickButton(`//p[text()='Domestic Express 10:00']/following::button[1]`,`Book now`,`Button`)
        }
        else if (serviceType == `parcel` && serviceName == `Domestic Express 09:00`)
        {
            const serviceName = await this.getInnerText(`//p[text()='Domestic Express 09:00']`)
            console.log(`Service name : TNT ${serviceName} Parcel`);
            const tntDomesticExpress09ParcelRates = await this.getInnerText(`//p[text()='Domestic Express 09:00']//following::div[@class= 'box-white-section'][1]`)
            console.log(`The TNT Domestic Express 09:00 Parcel rates we are getting : ${tntDomesticExpress09ParcelRates}`);
            await this.clickButton(`//p[text()='Domestic Express 09:00']/following::button[1]`,`Book now`,`Button`)
        }
        else if (serviceType == `bulk` && serviceName == `Domestic Road Express`)
        {
            const serviceName = await this.getInnerText(`//p[text()='Domestic Road Express']`)
            console.log(`Service name : TNT ${serviceName} Pallet`);
            await this.clickButton(`//p[text()='Domestic Road Express']//following::span[@class='font-montserrat freightprice'][1]`,`Rates`,`Icon`)
            const tntDomesticRoadExpressPalletRates =  await this.getInnerText(`//app-freight-price-dialog[@class='ng-star-inserted']`)
            console.log(`The TNT Domestic Road Express Pallet rates we are getting : ${tntDomesticRoadExpressPalletRates}`);
            await this.clickButton(`//span[text()='Ok']`,`OK`,`Button`)
            await this.clickButton(`//p[text()='Domestic Road Express']/following::button[1]`,`Book now`,`Button`)
        }
        else if (serviceType == `bulk` && serviceName == `Overnight Express`)
        {
            const serviceName = await this.getInnerText(`//p[text()='Overnight Express']`)
            console.log(`Service name : TNT ${serviceName} Pallet`);
            await this.clickButton(`//p[text()='Overnight Express']//following::span[@class='font-montserrat freightprice'][1]`,`Rates`,`Icon`)
            const tntOvernightExpressPalletRates =  await this.getInnerText(`//app-freight-price-dialog[@class='ng-star-inserted']`)
            console.log(`The TNT Overnight Express Pallet rates we are getting : ${tntOvernightExpressPalletRates}`);
            await this.clickButton(`//span[text()='Ok']`,`OK`,`Button`)
            await this.clickButton(`//p[text()='Overnight Express']/following::button[1]`,`Book now`,`Button`)
        }
        else if (serviceType == `bulk` && serviceName == `Domestic Express 12:00`)
        {
            const serviceName = await this.getInnerText(`//p[text()='Domestic Express 12:00']`)
            console.log(`Service name : TNT ${serviceName} Pallet`);
            await this.clickButton(`//p[text()='Domestic Express 12:00']//following::span[@class='font-montserrat freightprice'][1]`,`Rates`,`Icon`)
            const tntDomesticExpress12PalletRates =  await this.getInnerText(`//app-freight-price-dialog[@class='ng-star-inserted']`)
            console.log(`The TNT Domestic Express 12:00 Pallet rates we are getting : ${tntDomesticExpress12PalletRates}`);
            await this.clickButton(`//span[text()='Ok']`,`OK`,`Button`)
            await this.clickButton(`//p[text()='Domestic Express 12:00']/following::button[1]`,`Book now`,`Button`)
        }
        else if (serviceType == `bulk` && serviceName == `Domestic Express 10:00`)
        {
            const serviceName = await this.getInnerText(`//p[text()='Domestic Express 10:00']`)
            console.log(`Service name : TNT ${serviceName} Pallet`);
            await this.clickButton(`//p[text()='Domestic Express 10:00']//following::span[@class='font-montserrat freightprice'][1]`,`Rates`,`Icon`)
            const tntDomesticExpress10PalletRates =  await this.getInnerText(`//app-freight-price-dialog[@class='ng-star-inserted']`)
            console.log(`The TNT Domestic Express 10:00 Pallet rates we are getting : ${tntDomesticExpress10PalletRates}`);
            await this.clickButton(`//span[text()='Ok']`,`OK`,`Button`)
            await this.clickButton(`//p[text()='Domestic Express 10:00']/following::button[1]`,`Book now`,`Button`)
        }
        else if (serviceType == `bulk` && serviceName == `Domestic Express 09:00`)
        {
            const serviceName = await this.getInnerText(`//p[text()='Domestic Express 09:00']`)
            console.log(`Service name : TNT ${serviceName} Pallet`);
            await this.clickButton(`//p[text()='Domestic Express 09:00']//following::span[@class='font-montserrat freightprice'][1]`,`Rates`,`Icon`)
            const tntDomesticExpress09PalletRates =  await this.getInnerText(`//app-freight-price-dialog[@class='ng-star-inserted']`)
            console.log(`The TNT Domestic Express 09:00 Pallet rates we are getting : ${tntDomesticExpress09PalletRates}`);
            await this.clickButton(`//span[text()='Ok']`,`OK`,`Button`)
            await this.clickButton(`//p[text()='Domestic Express 09:00']/following::button[1]`,`Book now`,`Button`)
        }

    }

    async choosingFedExCarrier(serviceType : string, serviceName : string): Promise<void>{
        await this.clickButton(`//a[text()='View All']`,`View All`,`Button`)
        await this.clickButton(`//span[text()='FEDEX']`,`FedEX`,`Check Box`)

        if(serviceType == `parcel` && serviceName == `International economy`)
        {
            const serviceName = await this.getInnerText(`//p[text()='International Economy']`)
            console.log(`Service name : FedEx ${serviceName} Parcel`);
            const fedEXInternationalEconomyParcelRates = await this.getInnerText(`//p[text()='International Economy']//following::div[@class= 'box-white-section'][1]`)
            console.log(`The FedEX International Economy Parcel rates we are getting : ${fedEXInternationalEconomyParcelRates}`);
            await this.clickButton(`//p[text()='International Economy']/following::button[1]`,`Book now`,`Button`)
        }
        else if (serviceType == `parcel` && serviceName == `International priority`)
        {
            const serviceName = await this.getInnerText(`//p[text()='International Priority']`)
            console.log(`Service name : FedEx ${serviceName} Parcel`);
            const fedEXInternationalPriorityParcelRates = await this.getInnerText(`//p[text()='International Priority']//following::div[@class= 'box-white-section'][1]`)
            console.log(`The FedEX International Priority Parcel rates we are getting : ${fedEXInternationalPriorityParcelRates}`);
            await this.clickButton(`//p[text()='International Priority']/following::button[1]`,`Book now`,`Button`)
        }
        else if (serviceType == `parcel` && serviceName == `International priority express`)
        {
            const serviceName = await this.getInnerText(`//p[text()='International Priority Express']`)
            console.log(`Service name : FedEx ${serviceName} Parcel`);
            const fedEXInternationalPriorityExpressParcelRates = await this.getInnerText(`//p[text()='International Priority Express']//following::div[@class= 'box-white-section'][1]`)
            console.log(`The FedEX International Priority Express Parcel rates we are getting : ${fedEXInternationalPriorityExpressParcelRates}`);
            await this.clickButton(`//p[text()='International Priority Express']/following::button[1]`,`Book now`,`Button`)
        }
        else if (serviceType == `bulk` && serviceName == `International economy`)
        {
            const serviceName = await this.getInnerText(`//p[text()='International Economy']`)
            console.log(`Service name : FedEX ${serviceName} Pallet`);
            await this.clickButton(`//p[text()='International Economy']//following::span[@class='font-montserrat freightprice'][1]`,`Rates`,`Icon`)
            const fedEXInternationalEconomyPalletRates =  await this.getInnerText(`//app-freight-price-dialog[@class='ng-star-inserted']`)
            console.log(`The FedEX International Economy Pallet rates we are getting : ${fedEXInternationalEconomyPalletRates}`);
            await this.clickButton(`//span[text()='Ok']`,`OK`,`Button`)
            await this.clickButton(`//p[text()='International Economy']/following::button[1]`,`Book now`,`Button`)
        }
        else if (serviceType == `bulk` && serviceName == `International priority`)
        {
            const serviceName = await this.getInnerText(`//p[text()='International Priority']`)
            console.log(`Service name : FedEX ${serviceName} Pallet`);
            await this.clickButton(`//p[text()='International Priority']//following::span[@class='font-montserrat freightprice'][1]`,`Rates`,`Icon`)
            const fedEXInternationalPriorityPalletRates =  await this.getInnerText(`//app-freight-price-dialog[@class='ng-star-inserted']`)
            console.log(`The FedEX International Priority Pallet rates we are getting : ${fedEXInternationalPriorityPalletRates}`);
            await this.clickButton(`//span[text()='Ok']`,`OK`,`Button`)
            await this.clickButton(`//p[text()='International Priority']/following::button[1]`,`Book now`,`Button`)
        }
        else if (serviceType == `bulk` && serviceName == `International priority express`)
        {
            const serviceName = await this.getInnerText(`//p[text()='International Priority Express']`)
            console.log(`Service name : FedEX ${serviceName} Pallet`);
            await this.clickButton(`//p[text()='International Priority Express']//following::span[@class='font-montserrat freightprice'][1]`,`Rates`,`Icon`)
            const fedEXInternationalPriorityExpressPalletRates =  await this.getInnerText(`//app-freight-price-dialog[@class='ng-star-inserted']`)
            console.log(`The FedEX International Priority Express Pallet rates we are getting : ${fedEXInternationalPriorityExpressPalletRates}`);
            await this.clickButton(`//span[text()='Ok']`,`OK`,`Button`)
            await this.clickButton(`//p[text()='International Priority Express']/following::button[1]`,`Book now`,`Button`)
        }

    }

    async choosingUPSCarrier(serviceType : string, serviceName : string): Promise<void>{
        await this.clickButton(`//a[text()='View All']`,`View All`,`Button`)
        await this.clickButton(`//span[text()='UPS']`,`UPS`,`Check Box`)

        if(serviceType == `parcel` && serviceName == `Express saver`)
        {
            const serviceName = await this.getInnerText(`//p[text()='Express Saver']`)
            console.log(`Service name : UPS ${serviceName} Parcel`);
            const upsExpressSaverParcelRates = await this.getInnerText(`//p[text()='Express Saver']//following::div[@class= 'box-white-section'][1]`)
            console.log(`The UPS Express Saver Parcel rates we are getting : ${upsExpressSaverParcelRates}`);
            await this.clickButton(`//p[text()='Express Saver']/following::button[1]`,`Book now`,`Button`)
        }
        else if (serviceType == `parcel` && serviceName == `Express`)
        {
            const serviceName = await this.getInnerText(`(//p[text()='Express'])[2]`)
            console.log(`Service name : UPS ${serviceName} Parcel`);
            const upsExpressParcelRates = await this.getInnerText(`//p[text()='Express']//following::div[@class= 'box-white-section'][2]`)
            console.log(`The UPS Express Parcel rates we are getting : ${upsExpressParcelRates}`);
            await this.clickButton(`//p[text()='Express']/following::button[2]`,`Book now`,`Button`)
        }
        else if (serviceType == `bulk` && serviceName == `Express saver`)
        {
            const serviceName = await this.getInnerText(`//p[text()='Express Saver']`)
            console.log(`Service name : UPS ${serviceName} Pallet`);
            await this.clickButton(`//p[text()='Express Saver']//following::span[@class='font-montserrat freightprice'][1]`,`Rates`,`Icon`)
            const upsExpressSaverPalletRates =  await this.getInnerText(`//app-freight-price-dialog[@class='ng-star-inserted']`)
            console.log(`The UPS Express Saver Pallet rates we are getting : ${upsExpressSaverPalletRates}`);
            await this.clickButton(`//span[text()='Ok']`,`OK`,`Button`)
            await this.clickButton(`//p[text()='Express Saver']/following::button[1]`,`Book now`,`Button`)
        }
        else if (serviceType == `bulk` && serviceName == `Express`)
        {
            const serviceName = await this.getInnerText(`//p[text()='Express']`)
            console.log(`Service name : UPS ${serviceName} Pallet`);
            await this.clickButton(`//p[text()='Express']//following::span[@class='font-montserrat freightprice'][1]`,`Rates`,`Icon`)
            const upsExpressPalletRates =  await this.getInnerText(`//app-freight-price-dialog[@class='ng-star-inserted']`)
            console.log(`The UPS Express Pallet rates we are getting : ${upsExpressPalletRates}`);
            await this.clickButton(`//span[text()='Ok']`,`OK`,`Button`)
            await this.clickButton(`//p[text()='Express']/following::button[1]`,`Book now`,`Button`)
        }

    }

    async choosingInternationalCarriers(serviceType : string, serviceName : string): Promise<void>{

        if (serviceType == `parcel` && serviceName == `International economy`)
        {
            const serviceName = await this.getInnerText(`//p[text()='International Economy']`)
            console.log(`Service name : FedEx ${serviceName} Parcel`);
            const fedEXInternationalEconomyParcelRates = await this.getInnerText(`//p[text()='International Economy']//following::div[@class= 'box-white-section'][1]`)
            console.log(`The FedEX International Economy Parcel rates we are getting : ${fedEXInternationalEconomyParcelRates}`);
            await this.clickButton(`//p[text()='International Economy']/following::button[1]`,`Book now`,`Button`)
        }
        else if (serviceType == `parcel` && serviceName == `International priority`)
        {
            const serviceName = await this.getInnerText(`//p[text()='International Priority']`)
            console.log(`Service name : FedEx ${serviceName} Parcel`);
            const fedEXInternationalPriorityParcelRates = await this.getInnerText(`//p[text()='International Priority']//following::div[@class= 'box-white-section'][1]`)
            console.log(`The FedEX International Priority Parcel rates we are getting : ${fedEXInternationalPriorityParcelRates}`);
            await this.clickButton(`//p[text()='International Priority']/following::button[1]`,`Book now`,`Button`)
        }
        else if (serviceType == `parcel` && serviceName == `International priority express`)
        {
            const serviceName = await this.getInnerText(`//p[text()='International Priority Express']`)
            console.log(`Service name : FedEx ${serviceName} Parcel`);
            const fedEXInternationalPriorityExpressParcelRates = await this.getInnerText(`//p[text()='International Priority Express']//following::div[@class= 'box-white-section'][1]`)
            console.log(`The FedEX International Priority Express Parcel rates we are getting : ${fedEXInternationalPriorityExpressParcelRates}`);
            await this.clickButton(`//p[text()='International Priority Express']/following::button[1]`,`Book now`,`Button`)
        }
        else if (serviceType == `bulk` && serviceName == `International economy`)
        {
            const serviceName = await this.getInnerText(`//p[text()='International Economy']`)
            console.log(`Service name : FedEX ${serviceName} Pallet`);
            await this.clickButton(`//p[text()='International Economy']//following::span[@class='font-montserrat freightprice'][1]`,`Rates`,`Icon`)
            const fedEXInternationalEconomyPalletRates =  await this.getInnerText(`//app-freight-price-dialog[@class='ng-star-inserted']`)
            console.log(`The FedEX International Economy Pallet rates we are getting : ${fedEXInternationalEconomyPalletRates}`);
            await this.clickButton(`//span[text()='Ok']`,`OK`,`Button`)
            await this.clickButton(`//p[text()='International Economy']/following::button[1]`,`Book now`,`Button`)
        }
        else if (serviceType == `bulk` && serviceName == `International priority`)
        {
            const serviceName = await this.getInnerText(`//p[text()='International Priority']`)
            console.log(`Service name : FedEX ${serviceName} Pallet`);
            await this.clickButton(`//p[text()='International Priority']//following::span[@class='font-montserrat freightprice'][1]`,`Rates`,`Icon`)
            const fedEXInternationalPriorityPalletRates =  await this.getInnerText(`//app-freight-price-dialog[@class='ng-star-inserted']`)
            console.log(`The FedEX International Priority Pallet rates we are getting : ${fedEXInternationalPriorityPalletRates}`);
            await this.clickButton(`//span[text()='Ok']`,`OK`,`Button`)
            await this.clickButton(`//p[text()='International Priority']/following::button[1]`,`Book now`,`Button`)
        }
        else if (serviceType == `bulk` && serviceName == `International priority express`)
        {
            const serviceName = await this.getInnerText(`//p[text()='International Priority Express']`)
            console.log(`Service name : FedEX ${serviceName} Pallet`);
            await this.clickButton(`//p[text()='International Priority Express']//following::span[@class='font-montserrat freightprice'][1]`,`Rates`,`Icon`)
            const fedEXInternationalPriorityExpressPalletRates =  await this.getInnerText(`//app-freight-price-dialog[@class='ng-star-inserted']`)
            console.log(`The FedEX International Priority Express Pallet rates we are getting : ${fedEXInternationalPriorityExpressPalletRates}`);
            await this.clickButton(`//span[text()='Ok']`,`OK`,`Button`)
            await this.clickButton(`//p[text()='International Priority Express']/following::button[1]`,`Book now`,`Button`)
        }
        else if(serviceType == `parcel` && serviceName == `Express saver`)
        {
            const serviceName = await this.getInnerText(`//p[text()='Express Saver']`)
            console.log(`Service name : UPS ${serviceName} Parcel`);
            const upsExpressSaverParcelRates = await this.getInnerText(`//p[text()='Express Saver']//following::div[@class= 'box-white-section'][1]`)
            console.log(`The UPS Express Saver Parcel rates we are getting : ${upsExpressSaverParcelRates}`);
            await this.clickButton(`//p[text()='Express Saver']/following::button[1]`,`Book now`,`Button`)
        }
        else if (serviceType == `parcel` && serviceName == `Express`)
        {
            const serviceName = await this.getInnerText(`(//p[text()='Express'])[2]`)
            console.log(`Service name : UPS ${serviceName} Parcel`);
            const upsExpressParcelRates = await this.getInnerText(`//p[text()='Express']//following::div[@class= 'box-white-section'][2]`)
            console.log(`The UPS Express Parcel rates we are getting : ${upsExpressParcelRates}`);
            await this.clickButton(`//p[text()='Express']/following::button[2]`,`Book now`,`Button`)
        }
        else if (serviceType == `bulk` && serviceName == `Express saver`)
        {
            const serviceName = await this.getInnerText(`//p[text()='Express Saver']`)
            console.log(`Service name : UPS ${serviceName} Pallet`);
            await this.clickButton(`//p[text()='Express Saver']//following::span[@class='font-montserrat freightprice'][1]`,`Rates`,`Icon`)
            const upsExpressSaverPalletRates =  await this.getInnerText(`//app-freight-price-dialog[@class='ng-star-inserted']`)
            console.log(`The UPS Express Saver Pallet rates we are getting : ${upsExpressSaverPalletRates}`);
            await this.clickButton(`//span[text()='Ok']`,`OK`,`Button`)
            await this.clickButton(`//p[text()='Express Saver']/following::button[1]`,`Book now`,`Button`)
        }
        else if (serviceType == `bulk` && serviceName == `Express`)
        {
            const serviceName = await this.getInnerText(`//p[text()='Express']`)
            console.log(`Service name : UPS ${serviceName} Pallet`);
            await this.clickButton(`//p[text()='Express']//following::span[@class='font-montserrat freightprice'][1]`,`Rates`,`Icon`)
            const upsExpressPalletRates =  await this.getInnerText(`//app-freight-price-dialog[@class='ng-star-inserted']`)
            console.log(`The UPS Express Pallet rates we are getting : ${upsExpressPalletRates}`);
            await this.clickButton(`//span[text()='Ok']`,`OK`,`Button`)
            await this.clickButton(`//p[text()='Express']/following::button[1]`,`Book now`,`Button`)
        }
    }

    async choosingHitransCarrier(serviceName: string): Promise<void>{
        await this.clickButton(`//a[text()='View All']`,`View All`,`Button`)
        await this.clickButton(`//span[text()='HiTrans']`,`Hi-Trans`,`Check Box`)

        if(serviceName == `general`) {

            const service = await this.getInnerText(`//p[text()='General']`)
            console.log(`Service name : Hi-Trans ${service}`);
            await this.clickButton(`(//span[@class='font-montserrat freightprice'])[1]`,`Rates`,`Icon`)
            const hitransGeneralRates = await this.getInnerText(`//app-freight-price-dialog[@class='ng-star-inserted']`)
            console.log(`Hi-trans General rates we are getting : ${hitransGeneralRates}`);
            await this.clickButton(`//span[text()='Ok']`,`OK`,`Button`)
            await this.clickButton(`//p[text()='General']/following::button[1]`,`Book now`,`Button`)
        }
        else if(serviceName == `express`) {

            const service = await this.getInnerText(`//p[text()='Express']`)
            console.log(`Service name : Hi-Trans ${service}`);
            await this.clickButton(`(//span[@class='font-montserrat freightprice'])[2]`,`Rates`,`Icon`)
            const hitransGeneralRates = await this.getInnerText(`//app-freight-price-dialog[@class='ng-star-inserted']`)
            console.log(`Hi-Trans Express rates we are getting : ${hitransGeneralRates}`);
            await this.clickButton(`//span[text()='Ok']`,`OK`,`Button`)
            await this.clickButton(`//p[text()='Express']/following::button[1]`,`Book now`,`Button`)

        }

    }

    async choosingTollCarrier(serviceType : string, serviceName : string): Promise<void>{

        if (serviceType == `parcel` && serviceName == `IPEC`) {
            await this.clickButton(`//a[text()='View All']`,`View All`,`Button`)
            await this.clickButton(`//span[text()='IPEC']`,`IPEC`,`Check Box`)
            const service = await this.getInnerText(`//p[text()='Road Express']`)
            console.log(`Service name : Toll IPEC ${service}`);
            const tollIPECRoadExpressRates = await this.getInnerText(`(//div[@class='box-white-section'])`)
            console.log(`Toll IPEC Road Express rates we are getting : ${tollIPECRoadExpressRates}`);
            await this.clickButton(`//p[text()='Road Express']/following::button`,`Book now`,`Button`)      
        }
        else if (serviceType == `parcel` && serviceName == `Priority`){
            await this.clickButton(`//a[text()='View All']`,`View All`,`Button`)
            await this.clickButton(`//span[text()='Priority (Aus)']`,`Priority AUS`,`Check Box`)
            const service = await this.getInnerText(`//p[text()='Parcels - Overnight']`)
            console.log(`Service name : Toll Priority AUS ${service}`);
            const tollPriorityAUSRates = await this.getInnerText(`(//div[@class='box-white-section'])`)
            console.log(`Toll Priority AUS rates we are getting : ${tollPriorityAUSRates}`);
            await this.clickButton(`//p[text()='Parcels - Overnight']/following::button`,`Book now`,`Button`)
        }
        else if (serviceType == `bulk` && serviceName == `Intermodal`){
            await this.clickButton(`//a[text()='View All']`,`View All`,`Button`)
            await this.clickButton(`//span[text()='Intermodal & Specialised']`,`Toll Intermodal`,`Check Box`)
            const serviceType = await this.getInnerText(`//p[text()='Express']`)
            console.log(`Service name : Toll Intermodal ${serviceType}`);
            await this.clickButton(`//span[@class='font-montserrat freightprice']`,`Rates`,`Icon`)
            const tollIntermodalRates = await this.getInnerText(`//app-freight-price-dialog[@class='ng-star-inserted']`)
            console.log(`Toll Intermodal rates we are getting : ${tollIntermodalRates}`);
            await this.clickButton(`//span[text()='Ok']`,`OK`,`Button`)
            await this.clickButton(`//p[text()='Express']/following::button`,`Book now`,`Button`)
        }    
    }

    async choosingCourierPleaseCarrier(weight: number,count: number): Promise<void>{
        await this.clickButton(`//a[text()='View All']`,`View All`,`Button`)
        await this.clickButton(`//span[text()='Couriers Please']`,`Courier Please`,`Check Box`)

        if (weight>0 && weight<=0.25) {
            const serviceName = await this.getInnerText(`//p[text()='250gm Satchel']`)
            console.log(`Service name : Courier Please ${serviceName}`);
            const satchel250GMRates = await this.getInnerText(`(//div[@class='box-white-section'])[1]`)
            console.log(`Courier Please 250GM Satchel rates we are getting : ${satchel250GMRates}`);
            await this.clickButton(`//p[text()='250gm Satchel']/following::button[1]`,`Book now`,`Button`)   
        }
        else if(weight>0.25 && weight<=0.50) {
            const serviceName = await this.getInnerText(`//p[text()='500gm Satchel']`)
            console.log(`Service name : Courier Please ${serviceName}`);
            const satchel500GMRates = await this.getInnerText(`(//div[@class='box-white-section'])[1]`)
            console.log(`Courier Please 500GM Satchel rates we are getting : ${satchel500GMRates}`);
            await this.clickButton(`//p[text()='500gm Satchel']/following::button[1]`,`Book now`,`Button`)
        }
        else if(weight>0.50 && weight<=1) {
            const serviceName = await this.getInnerText(`//p[text()='1kg Satchel']`)
            console.log(`Service name : Courier Please ${serviceName}`);
            const satchel1KGRates = await this.getInnerText(`(//div[@class='box-white-section'])[1]`)
            console.log(`Courier Please 1KG Satchel rates we are getting : ${satchel1KGRates}`);
            await this.clickButton(`//p[text()='1kg Satchel']/following::button[1]`,`Book now`,`Button`)
        }
        else if(weight>1 && weight<=3) {
            const serviceName = await this.getInnerText(`//p[text()='3kg Satchel']`)
            console.log(`Service name : Courier Please ${serviceName}`);            
            const satchel3KGRates = await this.getInnerText(`(//div[@class='box-white-section'])[1]`)
            console.log(`Courier Please 3KG Satchel rates we are getting : ${satchel3KGRates}`);
            await this.clickButton(`//p[text()='3kg Satchel']/following::button[1]`,`Book now`,`Button`)
        }
        else if(weight>3 && weight<=5) {
            const serviceName = await this.getInnerText(`//p[text()='5kg Satchel']`)
            console.log(`Service name : Courier Please ${serviceName}`);
            const satchel5KGRates = await this.getInnerText(`(//div[@class='box-white-section'])[1]`)
            console.log(`Courier Please 5KG Satchel rates we are getting : ${satchel5KGRates}`);
            await this.clickButton(`//p[text()='5kg Satchel']/following::button[1]`,`Book now`,`Button`)
        }
        else if(count>1) {
            const serviceName = await this.getInnerText(`//p[text()='Road Express  (Multiple Carton)']`)
            console.log(`Service name : Courier Please ${serviceName}`);
            const roadExpressMultipleCartonRates = await this.getInnerText(`(//div[@class='box-white-section'])`)
            console.log(`Courier Please Multiple Carton rates we are getting : ${roadExpressMultipleCartonRates}`);
            await this.clickButton(`//p[text()='Road Express  (Multiple Carton)']/following::button`,`Book now`,`Button`)  
        }
        else{
            const serviceName = await this.getInnerText(`//p[text()='Road Express  (Single Carton)']`)
            console.log(`Service name : Courier Please ${serviceName}`);
            const roadExpressSingleCartonRates = await this.getInnerText(`(//div[@class='box-white-section'])`)
            console.log(`Courier Please Single Carton rates we are getting : ${roadExpressSingleCartonRates}`);
            await this.clickButton(`//p[text()='Road Express  (Single Carton)']/following::button`,`Book now`,`Button`)  
        }

    }

    async quickQuoteRatePageSpinner(): Promise<void>{
        await this.spin(`//div[@class='la-ball-beat la-2x']`)

    }

    async quickQuoteCarrierSpinner(): Promise<void>{
        await this.spin(`//mat-progress-bar[@mode='indeterminate']`)

    }
}