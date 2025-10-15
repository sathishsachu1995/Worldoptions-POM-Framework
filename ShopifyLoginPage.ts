// creating LoginPage class for to login to the shopify shopping cart

import { Page,BrowserContext } from "@playwright/test";            // importing page and browser context fixture from playwright/test module
import { PlaywrightWrapper } from "../Utils/playwright";           // importing PlaywrightWrapper class from the Utils folder
import { UrlConstants } from "../Constants/urlConstants";          // importing Enum name -->UrlConstants from the Constants folder

export class ShopifyLoginPage extends PlaywrightWrapper{     // creating class called Shopify login page which is extending base class called PlaywrightWrapper to use those methods
    
    static shopifyLoginPageUrl = UrlConstants.shopifyUrl      // calling Enum string shopifyUrl and store it in a static variable so that we can call this shopifyLoginPageUrl with class name ShopifyLoginPage
    
    constructor(page:Page,context: BrowserContext){   // Creating constructor for the curren class and passing page and context as a argument.. while creating object for this ShopifyLoginPage class page and context value will be initialized
        super(page,context)                         /* Calling parent class constructor using Super() keyword to ovveride its properties while creating object for ShopifyLoginPage we have to pass Page and Context argument value and 
                                                         it will go to parent class constructor and page,context will be initialized and those page and context will be passed to this current ShopifyLoginPage class */

    }

    // For below method's value's will be implementing from JSON file

    async loadingShopifyUrl(): Promise<void>{   // Creating loadingShopifyURL() async function and it will return promise
        await this.loadAppUrl(ShopifyLoginPage.shopifyLoginPageUrl) // Calling loadAppUrl method from the WrapperClass PlaywrightWrapper to load the shopify login Url we have to use 'this' keyword while calling methods from wrapper class this means current class

    }

    async enteringUsername(loginID: string): Promise<void>{  // Creating enteringUsername() async function and passing loginID as an argument

        await this.type(`#account_email`,`UserName`,loginID) // Calling type method from the WrapperClass PlaywrightWrapper to enter username in the username field. Inside method we have to pass 'locator', 'name' of the element and 'value'
        await this.clickButton(`//button[@name='commit']`,`Continue with email`,`Button`) // Calling clickButton method from the WrapperClass PlaywrightWrapper to click the login button. Inside method we have to pass 'locator', 'name' of the button and 'type' of the button
    }

    async enteringPassword(password: string): Promise<void>{  // Creating enteringPassword() async function and passing password as an argument
        await this.type(`#account_password`,`Password`,password)  // Calling type method from the WrapperClass PlaywrightWrapper to enter password in the password field. Inside method we have to pass 'locator', 'name' of the element and 'value'

    }

    async clickingLoginButton(): Promise<void>{  // Creating clickingLoginButton() async function for to click the login button
        await this.clickButton(`//button[@name='commit']`,`Login`,`Button`) // Calling clickButton method from the WrapperClass PlaywrightWrapper to click the login button. Inside method we have to pass 'locator', 'name' of the button and 'type' of the button
        await this.clickButton(`//a[text()='Remind me next time']`,`Remind me next time`,`Link`) // Calling clickButton method from the WrapperClass PlaywrightWrapper to click the Remind me next time hyper link. Inside method we have to pass 'locator', 'name' of the button and 'type' of the button

    }




}