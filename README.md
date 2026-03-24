# 🧪 SauceDemo Automation - Playwright + Cucumber + Allure

Proyecto de automatización de pruebas E2E para la aplicación **SauceDemo**, utilizando **Playwright**, **Cucumber (BDD)** y **Allure Reports**.

---

## 🚀 Tecnologías utilizadas

* Playwright
* Cucumber (BDD)
* TypeScript
* Allure Reports

---

## 📂 Estructura del proyecto

```
src/
 ├── features/       # Escenarios Gherkin
 ├── steps/          # Step Definitions
 ├── pages/          # Page Object Model (POM)
 ├── hooks/          # Hooks (Before / After)
```

---

## 🧠 Patrón de diseño

Se implementa **Page Object Model (POM)** para:

* Mejorar la mantenibilidad
* Reutilizar código
* Separar lógica de pruebas y UI

---

## ▶️ Ejecución de pruebas

```bash
npm test
```

---

## 📊 Reportes con Allure

### Generar reporte:

```bash
npx allure generate allure-results --clean -o allure-report
```

### Abrir reporte:

```bash
npx allure open allure-report
```

---

## 📸 Evidencias

El proyecto incluye:

* Captura automática de screenshots en cada escenario (PASS/FAIL)
* Integración con Allure para visualización de evidencias

---

## 🧪 Escenarios implementados

* Login exitoso
* Login inválido
* Agregar producto al carrito
* Flujo completo de compra

---

## 💡 Buenas prácticas aplicadas

* Uso de hooks (Before / After)
* Manejo de asincronía con async/await
* Separación de responsabilidades
* Código mantenible

---

## 👨‍💻 Autor

**YO, Dilan**
QA Engineer 

---

## ⭐ Objetivo del proyecto

Automatización de pruebas E2E, aplicando buenas prácticas y herramientas usadas en entornos reales.
