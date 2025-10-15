import { test,Page,BrowserContext,expect } from "@playwright/test";
import { TIMEOUT } from "dns";
import path from "path";

export abstract class PlaywrightWrapper{
    readonly page: Page
    readonly context: BrowserContext

    constructor(page:Page,context:BrowserContext){
        this.page = page
        this.context = context
    }

    async loadAppUrl(url:string): Promise<void>{
        try {
           await test.step(`The URL ${url} loaded successfully!`, async () => {
                await this.page.goto(url)
            })
            
        } catch (error) {
            console.error(`The error message received when loading url is ${error}`)
            
        }   
    }

    async type(locator: string, name: string, data: string): Promise<void>{
        try {
            await test.step(`The Textbox ${name} filled with ${data} successfully!`, async () => {
                await this.page.locator(locator).fill(data)
                
            })
            
        } catch (error) {

            console.error(`The Error message received when entering data is ${error}`)    
        }
    }

    async clearAndType(locator:string, name: string, data: string): Promise<void>{
        try {
            await test.step(`The Textbox ${name} filled with ${data} successfully!`,async () => {
                const element =  this.page.locator(locator)
                await element.clear()
                await element.fill(data)
            })
            
        } catch (error) {

            console.error(`The Error message received when entering data is ${error}`)
        }
    }

    async clearAndType2(locator: string, name: string, data: number): Promise<void> {
        try {
            await test.step(`The Textbox ${name} filled with ${data} successfully!`, async () => {
                const element = this.page.locator(locator);
                await element.clear();
                await element.fill(data.toString()); // Convert number to string
            })


        } catch (error) {

            console.error(`The Error message received when entering data is ${error}`);
        }
    }
    

    async typeAndEnter(locator: string, name: string, data: string): Promise<void>{
        try {
            await test.step(`The Textbox ${name} filled with ${data} successfully!`,async () => {
                await this.page.locator(locator).fill(data)
                await this.page.keyboard.press('Enter')
                
            })
            
        } catch (error) {

            console.error(`The Error message received when entering data is ${error}`)    
        }

    }

    async clickButton(locator: string, name: string, type: string): Promise<void>{
        try {
            await test.step(`The ${name} ${type} is clicked successfully!`, async () => {
                await this.page.waitForSelector(locator,{state:'visible',timeout:4000})
                await this.page.locator(locator).click()
                
            })
            
        } catch (error) {

            console.error(`The Error message received when clicking ${name} is ${error}`)
        }

    }

    async forceClick(locator: string, name: string, type: string): Promise<void>{
        try {
            await test.step(`The ${name} ${type} is clicked successfully!`, async () => {
                await this.page.waitForSelector(locator,{state:"visible"})
                await this.page.locator(locator).click({force:true})
                
            })
            
        } catch (error) {

            console.error(`The Error message received when force clicking ${name} is ${error}`)    
        }

    }

    async clickAndType(locator:string, name: string, data: string): Promise<void>{
        try {
            await test.step(`The Textbox ${name} clicked and filled with ${data} successfully!`,async () => {
                const element =  this.page.locator(locator)
                await element.click()
                await element.fill(data)
            })
            
        } catch (error) {

            console.error(`The Error message received when clicking and entering data is ${error}`)
        }
    }

    async storage(path: string): Promise<void>{
        try {
            await this.context.storageState({path})
            
        } catch (error) {
            
        }

    }

    async spin(locator: string){
        const spinner = this.page.locator(locator)
        await expect(spinner,'spinner loading completed').not.toBeVisible({timeout:60000})
    }

    async locatorChainingClick(dropDownName : string ,name: string,tagName: string):Promise<void>{
        try {
            test.step(`The ${dropDownName} ${name} is clicked successfully!`,async () => {
                await this.page.getByRole('option',{name: name,exact:true}).locator(tagName).click({timeout:4000})
                
            })
            
        } catch (error) {

            console.error(`The Error message received when clicking the dropdown is ${error}`)
            
        }
        
    }

    async locatorWithFilter(locator: string,name :string ,text: string,type:string): Promise<void>{
        try {
            test.step(`The ${name} ${text} ${type} is clicked successfully!`,async () => {
                await this.page.locator(locator).filter({hasText:text}).click()
                
            })
            
        } catch (error) {

            console.error(`The Error message received when clicking the ${type} is ${error}`)   
        }   

    }
    async locatingPopup(locator: string):Promise<boolean>{
        try {
            await this.page.waitForSelector(locator,{state:'visible'})
            const element = this.page.locator(locator).first()
            return true
            
        } catch (error) {
            console.error(`Error while locating an element: ${error}`)
            return false    
        }
        
    }

    async getErrorMessage(locator:string): Promise<void>{
        const errorMessage = await this.page.locator(locator).textContent({timeout:3000})
        console.log(`The Message we are getting : ${errorMessage}`);
    }

    async getQuoteMessage(locator:string):Promise<void>{
        const quoteMessage = await this.page.locator(locator).first().innerText()
        console.log(`The Rates we are getting : ${quoteMessage}`);
        
    }

    async getInnerText(locator: string): Promise<string>{
        const textMessage = await this.page.locator(locator).first().innerText()
        return textMessage
        
    }

    async getPageTitle(): Promise<string>{
        const currentPageTitile = await this.page.title()
        return currentPageTitile
    }

    async handlingNewPages(locator: string,docName: string, partialURL: string): Promise<void>{
        try {
            const pagePromise =  this.context.waitForEvent('page',{timeout:60000})
            await this.page.locator(locator).click()
            const newPage = await pagePromise
            await newPage.waitForLoadState('load')
            const newPageUrl = newPage.url()
            expect(newPageUrl).toContain(partialURL)
            console.log(`${docName} has been generated successfully :-)!!`);
            await newPage.close()
            
        } catch (error) {
            console.error(`We are getting error while clicking ${docName} is : ${error}`)   
        }
       
    }

    async handlingLabels(locator: string, docName: string, partialURLs: string[]): Promise<void> {
        try {
            const pagePromise = this.context.waitForEvent('page', { timeout: 60000 });
            await this.page.locator(locator).click();
            const newPage = await pagePromise;
            await newPage.waitForLoadState('load');
            const newPageUrl = newPage.url();
    
            // Log for debugging
            console.log(`New page URL opened: ${newPageUrl}`);
            console.log();
            console.log(`Expected to contain one of: ${partialURLs.join(', ')}`);   //We are joining two URL by using join method join(',') to check we are getting expected URL
    
            // Check if the URL contains at least one of the expected substrings
            const matchFound = partialURLs.some(expected => newPageUrl.includes(expected));  //We are validating if any one of URL contains expected string as per test data
    
            expect(matchFound).toBe(true);
    
            console.log(`${docName} has been generated successfully :-)!!`);
            await newPage.close();
            
        } catch (error) {
            console.error(`We are getting error while clicking ${docName} is : ${error}`);   
        }
    }  
    
    
    async locatingElement(locator: string): Promise<boolean>{
        try {
            await this.page.waitForSelector(locator,{state:'visible'})
            const element = this.page.locator(locator).first()
            return true
            
        } catch (error) {
            console.error(`We are getting error while location element is : ${error}`)
            return false
            
        }
    }

    async mouseHover(locator: string): Promise<void>{
        await this.page.locator(locator).hover()

    }

    async uploadFile(locator: string, path: string): Promise<void>{
        await this.page.setInputFiles(locator,path)

    }

    
}