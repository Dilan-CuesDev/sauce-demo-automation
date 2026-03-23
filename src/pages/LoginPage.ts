import { Page } from "playwright";

export class LoginPage {
    constructor(public page: Page) {}

    async goTo() {  
    await this.page.goto("https://www.saucedemo.com/"); // Navegar a la página de Sauce Demo
    console.log("Test ejecutándose correctamente"); 
}

async login(username: string, password: string) {
    await this.page.fill("#user-name", username); // Rellenar el campo de usuario
    await this.page.fill("#password", password); // Rellenar el campo de contraseña
    await this.page.click("#login-button"); // Hacer clic en el botón de inicio de sesión
    }

async isLoggedIn() {
    return this.page.url().includes("inventory.html"); // Verificar si la URL contiene "inventory.html" para confirmar el inicio de sesión exitoso

    }

async getErrorMessage() {   
    return await this.page.locator("[data-test='error']").textContent();
    }   

}
