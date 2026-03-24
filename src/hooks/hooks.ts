import { Before, After } from "@cucumber/cucumber";
import { constants } from "node:buffer";
import { chromium, Browser, Page } from "playwright";

let browser: Browser;
let page: Page;

Before(async function () {
  browser = await chromium.launch({ headless: false }); // Lanzar el navegador en modo no headless para ver las acciones
  const context = await browser.newContext();
  page = await browser.newPage();

  this.page = page; // Hacer la página accesible en los pasos (compartir steps)
});


After(async function (scenario) {

  const screenshot = await this.page.screenshot(); // Tomar una captura de pantalla después de cada escenario
  const status = scenario.result?.status; // Obtener el estado del escenario (pasado, fallido, etc.)

  await this.attach(screenshot, "image/png"); // Adjunta la captura de pantalla al reporte de Cucumber

  console.log(`Scenario tomado - ${status}`); // Imprimo el estado del escenario en la consola

  await browser.close(); //Cerrar el navegador después de cada escenario 
  
});