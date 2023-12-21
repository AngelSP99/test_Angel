/// <reference types="cypress" />

context('Login Functionality', () => {
  beforeEach(() => {
    // Abrir la página de inicio de sesión antes de cada prueba
    cy.visit('/login');
  });

  it('should log in successfully with valid credentials', () => {
    // Ejecuta el primer escenario
    cy.get('#username').type('tu_usuario');
    cy.get('#password').type('tu_contraseña');
    cy.get('#login-button').click();

    // iniciado sesión correctamente
    cy.url().should('include', '/dashboard');
    cy.get('.welcome-message').should('contain', 'Bienvenido');
  });

  it('should display an error message with incorrect credentials', () => {
    // Ejecuta el segundo escenario
    cy.get('#username').type('usuario_incorrecto');
    cy.get('#password').type('contraseña_incorrecta');
    cy.get('#login-button').click();

    // mostrar un mensaje de error
    cy.get('.error-message').should('be.visible');
  });

  it('should display an error message with empty credentials', () => {
    // Ejecuta el tercer escenario
    cy.get('#login-button').click();

    // mostrar un mensaje de error
    cy.get('.error-message').should('be.visible');
  });
});