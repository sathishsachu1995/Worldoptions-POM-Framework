// creating ShopifyOrderPage class for to create or edit orders in shopify shopping cart

import { Page,BrowserContext } from "@playwright/test";            // importing page and browser context fixture from playwright/test module
import { PlaywrightWrapper } from "../Utils/playwright";           // importing PlaywrightWrapper class from the Utils folder


export class ShopifyOrderPage extends PlaywrightWrapper{     // creating class called ShopifyOrderPage which is extending base class called PlaywrightWrapper to use those methods
    
    constructor(page:Page,context: BrowserContext){   // Creating constructor for the curren class and passing page and context as a argument.. while creating object for this ShopifyOrderPage class page and context value will be initialized
        super(page,context)                         /* Calling parent class constructor using Super() keyword to ovveride its properties while creating object for ShopifyOrderPage we have to pass Page and Context argument value and 
                                                         it will go to parent class constructor and page,context will be initialized and those page and context will be passed to this current ShopifyOrderPage class */

    }

    // For below method's value's will be implementing from JSON file

    async clickingOrderPage(): Promise<void>{
        await this.clickButton(`(//span[text()='Orders'])[1]`,`Orders`,`Button`)
    }
    async clickingAllOrders():Promise<void>{
        await this.clickButton(`(//span[text()='All'])[2]`,`All Orders`,`Button`)
    }
    async clickingUnfulfilledOrders(): Promise<void>{
        await this.clickButton(`(//span[text()='Unfulfilled'])[2]`,`Unfulfilled Orders`,`Button`)
    }
    async clickingUnpaidOrders(): Promise<void>{
        await this.clickButton(`(//span[text()='Unpaid'])[2]`,`Unpaid Orders`,`Button`)
    }
    async clickingOpenOrders():Promise<void>{
        await this.clickButton(`(//span[text()='Open'])[2]`,`Open Orders`,`Button`)
    }
    async clickingArchieveOrders(): Promise<void>{
        await this.clickButton(`(//span[text()='Archived'])[2]`,`Archieve Orders`,`Button`)
    }
    async creatingNewView(viewName: string): Promise<void>{
        await this.clickButton(`//s-internal-icon[@type='plus']`,`Create View`,`Icon`)
        await this.clearAndType(`.Polaris-TextField`,`New View Name`,viewName)
        await this.clickButton(`//span[text()='Create view']`,`Create View`,`Button`)
    }
    async searchOrders(searchData: string): Promise<void>{
        await this.clickButton(`//button[@aria-label='Search and filter orders']`,`Serach and Filter`,`Button`)
        await this.clearAndType(`//input[@placeholder='Searching all orders']`,`Search Data`,searchData)
        await this.clickButton(`//span[@class='Polaris-Text--root Polaris-Text--semibold']`,`Order ID`,`Link`)
    }
    async clickingCreateOrder(): Promise<void>{
        await this.clickButton(`//span[text()='Create order']`,`Create Order`,`Button`)

    }
    async waitForPageLoad(): Promise<void>{
        await this.spin(`//div[@aria-label= 'Page loading bar']`)

    }



}