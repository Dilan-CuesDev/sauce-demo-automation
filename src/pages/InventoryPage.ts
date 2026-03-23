import { Page } from "playwright";

export class InventoryPage {
    constructor(private page: Page) {}
    
    async addProductToCart() {
        await this.page.click("button[data-test='add-to-cart-sauce-labs-backpack']"); // Hacer clic en el botón de agregar al carrito para el producto "Sauce Labs Backpack"
    }

    async goToCart() {
        await this.page.click(".shopping_cart_link"); // Hacer clic en el enlace del carrito de compras para ir a la página del carrito
    }
}

