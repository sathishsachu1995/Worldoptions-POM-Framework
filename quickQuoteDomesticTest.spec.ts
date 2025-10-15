import { test } from "@playwright/test";
import { LoginPage } from "../Pages/LoginPage";
import { QuickQuotePage } from "../Pages/QuickQuotePage";
import { QuickQuoteRatesPage } from "../Pages/QuickQuoteRatesPage";
import { ExportDomesticPage } from "../Pages/ExportDomesticPage";
import { CollectionOptionPage } from "../Pages/CollectionOptionPage";
import { LabelsAndDocumentsPage } from "../Pages/LabelsAndDocumentsPage";
import { TrackingHistoryPage } from "../Pages/TrackingHistoryPage";
import quickQuoteTestData from "../Test-data/quickQuoteDomestic.json";

for(const quickQuoteData of quickQuoteTestData){
test.setTimeout(300000)
test(`The test tile ${quickQuoteData.testTitle}`,async ({page,context}) => {

    const login = new LoginPage(page,context)
    const quickQuote = new QuickQuotePage(page,context)
    const quickQuoteRate = new QuickQuoteRatesPage(page,context)
    const exportPage = new ExportDomesticPage(page,context)
    const collectionPage = new CollectionOptionPage(page,context)
    const lablesAndShippingDocs = new LabelsAndDocumentsPage(page,context)
    const trackingHistory = new TrackingHistoryPage(page,context)

    await login.loadingURL()
    //await quickQuote.clickingQuickQuotePage()
    await quickQuote.quickQuoteSpinner()
    await quickQuote.clickingParcelorPallet(quickQuoteData.serviceType)
    await quickQuote.enteringFromPostcode(quickQuoteData.fromPostCode)
    await quickQuote.enteringFromState(quickQuoteData.fromState)
    await quickQuote.enteringFromCity(quickQuoteData.fromCity)
    await quickQuote.enteringDeliveryPostcode(quickQuoteData.toPostCode)
    await quickQuote.enteringDeliveryState(quickQuoteData.toState)
    await quickQuote.enteringDeliveryCity(quickQuoteData.toCity)
    await quickQuote.clickingResidentialCollection(quickQuoteData.residentialCollection)
    await quickQuote.clickingResidentialDelivery(quickQuoteData.residentialDelivery)
    await quickQuote.enteringStreetAddressAllied(quickQuoteData.streetAddress)
    await quickQuote.enteringWeight(quickQuoteData.weight)
    await quickQuote.enteringLength(quickQuoteData.length)
    await quickQuote.enteringWidth(quickQuoteData.width)
    await quickQuote.enteringHeight(quickQuoteData.height)
    await quickQuote.clickingMultiplePieces(quickQuoteData.count)
    //await quickQuote.clickingDangerousGoods()
    await quickQuote.clickingQuoteButton()
    await quickQuote.quickQuoteSpinner()
    await quickQuoteRate.quickQuoteCarrierSpinner()
    await quickQuoteRate.choosingTNTCarrier(quickQuoteData.serviceType,quickQuoteData.serviceName)         //Choosing carrier
    await quickQuoteRate.quickQuoteRatePageSpinner()
    await page.waitForTimeout(3000)
    await exportPage.enteringCollectionCompanyName(quickQuoteData.collectionCompany)
    await exportPage.enteringCollectionContactName(quickQuoteData.collectionConctact)
    await exportPage.enteringCollectionAddress1(quickQuoteData.collectionAddress1)
    await exportPage.enteringCollectionDial(quickQuoteData.collectionDial)
    await exportPage.enteringCollectionPhone(quickQuoteData.collectionPhone)
    await exportPage.enteringCollectionEmailID(quickQuoteData.collectionEmail)
    await exportPage.enteringDeliveryCompanyName(quickQuoteData.deliveryCompany)
    await exportPage.enteringDeliveryContactName(quickQuoteData.deliveryContact)
    await exportPage.enteringDeliveryAddress1(quickQuoteData.deliveryAddress1)
    await exportPage.enteringDeliveryDial(quickQuoteData.deliveryDial)
    await exportPage.enteringDeliveryPhone(quickQuoteData.deliveryPhone)
    await exportPage.enteringDeliveryEmailID(quickQuoteData.deliveryEmail)
    await exportPage.enteringCustomerRef(quickQuoteData.customerRef)
    await exportPage.enteringTestDescription(quickQuoteData.description)
    await exportPage.clickingTransitInsurance(quickQuoteData.insurance)
    await exportPage.clickingQuoteButton()
    await exportPage.exportPageSpinner()
    await exportPage.ancillaryChargesValidation(quickQuoteData.remoteAreaCharge)
    await exportPage.clickingOKButton()
    /*await exportPage.clickingNextButton()
    await exportPage.exportPageSpinner()
    await collectionPage.clickingDropAtDepot()
    await collectionPage.clickingShipButton()
    await collectionPage.collectionPageSpinner()
    await page.waitForTimeout(3000)
    await lablesAndShippingDocs.gettingSuccessMessage()
    const trackingNumber = await lablesAndShippingDocs.gettingTrackingNo()
    await lablesAndShippingDocs.gettingFromAddress()
    await lablesAndShippingDocs.gettingToAddress()
    await lablesAndShippingDocs.clickingViewAndPrintlabel(trackingNumber)
    await page.waitForTimeout(3000)
    await lablesAndShippingDocs.clickingViewReceipt(quickQuoteData.receiptUrl)
    await lablesAndShippingDocs.labelsAndDocumentsPageSpinner()
    await lablesAndShippingDocs.clickingViewAndPrintManifest(quickQuoteData.manifestUrl)
    await lablesAndShippingDocs.labelsAndDocumentsPageSpinner()
    await lablesAndShippingDocs.clickingTrackingHistory()
    await lablesAndShippingDocs.labelsAndDocumentsPageSpinner()
    await trackingHistory.filteringConsingment(quickQuoteData.filterBy,trackingNumber)
    await trackingHistory.clickingRow(trackingNumber)
    await trackingHistory.trackingHistoryPageSpinner()
    await trackingHistory.clickingTrackingAndPOD()
    await trackingHistory.clickShippingDocument(trackingNumber,quickQuoteData.receiptUrl,quickQuoteData.manifestUrl,quickQuoteData.mailTo,quickQuoteData.starTrackManifest,quickQuoteData.filterBy)
    await page.waitForTimeout(6000)
    await trackingHistory.clickingVoidButton()
    await page.waitForTimeout(3000)*/
    
})}