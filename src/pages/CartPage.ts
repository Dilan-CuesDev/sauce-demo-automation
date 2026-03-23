import { Page } from "playwright";

export class CartPage {
    constructor(private page: Page) {}

    async clickCheckout() {
        await this.page.click("#checkout"); // Hacer clic en el botón de checkout para iniciar el proceso de compra
    }
}

