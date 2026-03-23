import { get } from "node:http";
import { Page } from "playwright";

export class CheckoutPage {
    constructor(private page: Page) { }


    async fillInformation() {
        await this.page.fill("#first-name", "Dilan"); // Rellenar el campo de nombre
        await this.page.fill("#last-name", "QE"); // Rellenar el campo de apellido
        await this.page.fill("#postal-code", "12345"); // Rellenar el campo de código postal
        await this.page.click("#continue"); // Hacer clic en el botón de continuar para avanzar al siguiente paso del checkout  
    }

    async finishPurchase() {
        await this.page.click("#finish"); // Hacer clic en el botón de finalizar para completar la compra   
    }

    async getConfirmationMessage() {
        return await this.page.locator(".complete-header").textContent(); // Obtener el mensaje de confirmación después de finalizar la compra
    }

}