import { Given, When } from "@cucumber/cucumber";
import { LoginPage } from "../pages/LoginPage";
import { Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { InventoryPage } from "../pages/InventoryPage"; 
import { CartPage } from "../pages/CartPage";
import { CheckoutPage } from "../pages/checkoutPages";

let loginPage: LoginPage;
let inventoryPage: InventoryPage;
let cartPage: CartPage;
let checkoutPage: CheckoutPage;

// ****LoginPage steps****

Given("el usuario abre la página", async function () {
    loginPage = new LoginPage(this.page);
    await loginPage.goTo();
});

When(
    "inicia sesión con usuario {string} y contraseña {string}", 
    async function (username, password) {
        await loginPage.login(username, password);  
    }
);

Then("debería iniciar sesión correctamente", async function () {
    const result = await loginPage.isLoggedIn();
    expect(result).toBeTruthy();
});

Then("debería ver un mensaje de error", async function () { 
    const error = await loginPage.getErrorMessage();
    expect(error).toContain("Epic sadface");
    }
);


// ****InventoryPage steps****

When("agrega un producto al carrito", async function () {
    inventoryPage = new InventoryPage(this.page);
    await inventoryPage.addProductToCart();
    }
);

When("visualiza el carrito", async function () {
    await inventoryPage.goToCart();
    }
);



// ****CheckoutCart steps****

When("completa el proceso de compra", async function () {
    cartPage = new CartPage(this.page);
    checkoutPage = new CheckoutPage(this.page);

    await cartPage.clickCheckout();
    await checkoutPage.fillInformation();
    await checkoutPage.finishPurchase();
    }
);

Then("debería ver la confirmación de compra", async function () {
    const massage = await checkoutPage.getConfirmationMessage();
    expect(massage).toContain("Thank you for your order!");
    }
);


