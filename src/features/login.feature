Feature: Login en SauceDemo

  Scenario: Login exitoso
    Given el usuario abre la página
    When inicia sesión con usuario "standard_user" y contraseña "secret_sauce"
    Then debería iniciar sesión correctamente

  Scenario: Usuario bloqueado
    Given el usuario abre la página
    When inicia sesión con usuario "locked_out_user" y contraseña "secret_sauce"
    Then debería ver un mensaje de error

  Scenario: Compra básica
    Given el usuario abre la página
    When inicia sesión con usuario "standard_user" y contraseña "secret_sauce"
    And agrega un producto al carrito
    And visualiza el carrito

  Scenario: Compra completa
    Given el usuario abre la página
    When inicia sesión con usuario "standard_user" y contraseña "secret_sauce"
    And agrega un producto al carrito
    And visualiza el carrito
    And completa el proceso de compra
    Then debería ver la confirmación de compra