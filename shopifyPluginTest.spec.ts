import { test } from "@playwright/test";                              //importing test method from the playwright/test module for creating test scripts
import { ShopifyLoginPage  } from "../Pages/ShopifyLoginPage";        //importing ShopifyLoginPage class from the ShopifyLoginPage
import { ShopifyOrderPage } from "../Pages/ShopifyOrderPage";         //importing ShopifyOrderPage class from the ShopifyOrderPage
import { ShopifyNewOrderCreatePage } from "../Pages/ShopifyNewOrderCreatePage";      //importing ShopifyNewOrderCreatePage class from the ShopifyNewOrderCreatePage

test.setTimeout(300000)
test(`Login Test`,async ({page,context}) => {                // Creating test() method and inside we have to pass 2 arguments "test tile" and "Body" of the test method. Here I am creating arrow function and inside that I am passing 'page' and 'context' fixture as an argument.
    const loginPage = new ShopifyLoginPage(page,context)     // Creating Object for the ShopifyLoginPage class and passing 'Page' and 'Context' as an argument so that page and context will be initialized.
    const orderPage = new ShopifyOrderPage(page,context)     // Creating Object for the ShopifyOrderPage class and passing 'Page' and 'Context' as an argument so that page and context will be initialized.
    const newOrderCreate =  new ShopifyNewOrderCreatePage(page,context)

    await loginPage.loadingShopifyUrl() //Calling loadingshopifyUrl() function from the class LoginPage to perform login process
    await orderPage.clickingOrderPage()
    await orderPage.waitForPageLoad()
    await orderPage.clickingCreateOrder()
    await newOrderCreate.addingProducts(`kookoobura bat`)
    await newOrderCreate.choosingCount(2)
    await newOrderCreate.choosingCustomer()
})