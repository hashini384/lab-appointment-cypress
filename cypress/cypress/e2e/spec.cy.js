describe('Lab Appointment System', () => {

  before(() => {
    cy.visit('/login'); // Visit your registration page

    // Fill in the form (adapt field names to match your form)
    cy.get('input[name="username"]').type('boy');
    cy.get('input[name="password"]').type('123456789');
    // ... rest of your fields

    // Submit
    cy.get('.btn-primary').click();
    cy.wait(5000);
    cy.url().should('include','/home');
  });

  it('Registers a new patient', () => {
    cy.get('app-home > app-main-view > .sidebar > nav > .nav-list > :nth-child(2) > .nav-link').click();
    // cy.visit('/patient'); // Visit your registration page

    // Fill in the form (adapt field names to match your form)
    cy.get('#id').type('PAT-123456');
    cy.get('#name').type('Jane Doe');
    cy.get('#contact').type('0774837472');
    cy.get('#email').type('jane.doe@example.com');
    cy.get('#dateOfBirth').click().type('2023-03-26');
    // ... rest of your fields

    // Submit
    cy.get('form').submit();

    // Check success message
    cy.get('.swal2-popup').contains('Patient registered successfully!')
    cy.get('.swal2-confirm').click();
  });

  it('Download Patient Report', () => {
    cy.get(':nth-child(4) > .nav-link').click();
    // cy.visit('/patient'); // Visit your registration page

    // Fill in the form (adapt field names to match your form)
    cy.get('#start-date').click().type('2024-03-16');
    cy.get('#end-date').click().type('2024-03-23');
    // ... rest of your fields

    // Submit
    cy.get('.btn-primary').click();

    // Check success message
    cy.get('.swal2-popup').contains('Downloaded')
  });

});
