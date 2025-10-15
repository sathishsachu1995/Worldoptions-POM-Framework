// creating ShopifyNewOrderCreatePage class for to create orders in shopify shopping cart

import { Page,BrowserContext } from "@playwright/test";            // importing page and browser context fixture from playwright/test module
import { PlaywrightWrapper } from "../Utils/playwright";          // importing PlaywrightWrapper class from the Utils folder

export class ShopifyNewOrderCreatePage extends PlaywrightWrapper{

    constructor(page:Page,context: BrowserContext){
        super(page,context)

    }

    async addingProducts(productName: string): Promise<void>{
        await this.clickButton(`#productPicker`,`Search Products`,`Button`)
        await this.clearAndType(`#productPicker`,`Product Name`,productName)
        await this.clickButton(`(//span[text()= '${productName}'])[3]`,`${productName}`,`Link`)
        await this.clickButton(`//span[text()='Add']`,`Add`,`Button`)
    }

    async choosingCount(count: number): Promise<void>{
        if (count>1) {
            for (let i = 1; i<count ;i++){
                await this.clearAndType2(`(//input[@class='Polaris-TextField__Input'])[2]`,`Number of pieces`,i)
            }
        }

    }

    async choosingCustomer(): Promise<void>{
        await this.clickButton(`//input[@placeholder='Search or create a customer']`,`Choose Customer`,`Button`)
        await this.clickButton(`//span[text()='Sathish Testing']`,`Sathish Testing`,`Button`)

    }
}