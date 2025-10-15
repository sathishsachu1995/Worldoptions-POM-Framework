// creating LoginPage class for to login to the prelive WOA customer portal

import { Page,BrowserContext, expect  } from "@playwright/test";  // importing page and browser context fixture from playwright/test module
import { PlaywrightWrapper } from "../Utils/playwright";  // importing PlaywrightWrapper class from the Utils folder
import { UrlConstants } from "../Constants/urlConstants"; // importing Enum name -->UrlConstants from the Constants folder

export class LoginPage extends PlaywrightWrapper{  // creating class called login page which is extending base class called PlaywrightWrapper to use those methods

    static preliveLoginUrl = UrlConstants.preliveExportPageUrl // calling Enum string loginPageUrl and store it in a static variable so that we can call this loginPageUrl with class name LoginPage

    constructor(page:Page,context:BrowserContext){ // Creating constructor for the curren class and passing page and context as a argument.. while creating object for this LoginPage class page and context value will be initialized
        super(page,context)  /* Calling parent class constructor using Super() keyword to ovveride its properties while creating object for LoginPage we have to pass Page and Context argument value and 
                                it will go to parent class constructor and page,context will be initialized and those page and context will be passed to this current LoginPage class */

    }

// For below method's value's will be implementing from JSON file

    async loadingURL(): Promise<void>{  // Creating loadingURL() async function and it will return promise
        await this.loadAppUrl(LoginPage.preliveLoginUrl)  // Calling loadAppUrl method from the WrapperClass PlaywrightWrapper to load the prelive login Url we have to use 'this' keyword while calling methods from wrapper class this means current class
    }

    async choosingAccountCountry(countryDropDownLocator: string): Promise<void>{  // Creating choosingAccountCountry() async function and passing countryDropDownLocator as an string argument and it will return promise
        const countryDropDown = await this.locatingPopup(countryDropDownLocator)  // Calling locatingPopup() function it will found whether any web elements are available in DOM or not. And It will return boolean value and storing it in countryDropDown varaible

        if (countryDropDown)  // If countryDropDown is true control will goes inside the body
        {
            await this.clickButton(`//span[@class='k-widget k-dropdown k-header country-dropdown']`,`Account Country`,`DropDown`) // Calling clickButton() function it will do click action on the element
            await this.clickButton(`(//div[@class='globalLogin-dropdown-item mat-option-text'])[1]`,`Country`,`Button`) // Calling clickButton() function it will do click action on the element
        }   
    }

    async enteringUsername(loginID: string): Promise<void>{  // Creating enteringUsername() async function and passing loginID as an argument
        await this.type("[placeholder='Enter username']","Username",loginID)  // Calling type method from the WrapperClass PlaywrightWrapper to enter username in the username field. Inside method we have to pass 'locator', 'name' of the element and 'value'
    }

    async enteringPassword(pswrd: string): Promise<void>{  // Creating enteringPassword() async function and passing pswrd as an argument
        await this.type("[placeholder='Enter password']","Password",pswrd) // Calling type method from the WrapperClass PlaywrightWrapper to enter password in the password field. Inside method we have to pass 'locator', 'name' of the element and 'value'
    }

    async clickingContinueButton(): Promise<void>{  // Creating clickingContinueButton() async function and it will return promise
        await this.clickButton('text= Continue',"Continue","Button")  // Calling clickButton method from the WrapperClass PlaywrightWrapper to click the login button. Inside method we have to pass 'locator', 'name' of the button and 'type' of the button
    }

    async loginPageSpinner(): Promise<void>{  // Creating loadingSpinner() async function and it will return promise
        await this.spin("//div[@class='la-ball-beat la-2x']")  // Calling spin method from the WrapperClass Playwrightwrapper to wait for the spinner to be completed. Inside the spin method we have to pass the locator of the spinner
    }

}