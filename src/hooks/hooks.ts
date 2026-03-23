import { Before, After } from "@cucumber/cucumber";
import { chromium, Browser, Page } from "playwright";

let browser: Browser;
let page: Page;

Before(async function () {
  browser = await chromium.launch({ headless: false }); // Lanzar el navegador en modo no headless para ver las acciones
  const context = await browser.newContext();
  page = await browser.newPage();

  this.page = page; // Hacer la página accesible en los pasos (compartir steps)
});

After(async function () {   
    await browser.close();  //Cerrar el navegador después de cada escenario 
});
