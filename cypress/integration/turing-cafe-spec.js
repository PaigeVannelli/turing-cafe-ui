describe('Feedback Loop', () => {
    it('should confirm that true equals true', () => {
        expect(true).to.equal(true)
    })
})

describe('Initial Page View', () => {
    beforeEach(() => {
        cy.intercept('http://localhost:3001/api/v1/reservations', { fixture: 'AllReservations.json' })
        cy.visit('http://localhost:3000/')
    })

    it('should display all reservations on page load', () => {
        cy.get('article').first()
        .contains('Christie')
        cy.get('section').children().should('have.length', 3)
    })
})

describe('Reservation Form', () => {
    beforeEach(() => {
        cy.intercept('http://localhost:3001/api/v1/reservations', { fixture: 'AllReservations.json' })
        cy.visit('http://localhost:3000/')
    })

    it('should update form value when inputs are added to form', () => {
        cy.get('input[placeholder="Name"]')
        .type('Paige')
        .should('have.value', 'Paige')
        .get('input[placeholder="Date (mm/dd)"]')
        .type('04/25')
        .should('have.value', '04/25')
        .get('input[placeholder="Time"]')
        .type('7:30')
        .should('have.value', '7:30')
        .get('input[placeholder="Number of guests"]')
        .type('4')
        .should('have.value', '04')
        
    })
})

describe('Adding A Reservation', () => {
    beforeEach(() => {
        cy.intercept('http://localhost:3001/api/v1/reservations', { fixture: 'AllReservations.json' })
        cy.visit('http://localhost:3000/')
    })

    it('should allow users to add a reservation', () => {
        cy.get('input[placeholder="Name"]')
        .type('Paige')
        .get('input[placeholder="Date (mm/dd)"]')
        .type('04/25')
        .get('input[placeholder="Time"]')
        .type('7:30')
        .get('input[placeholder="Number of guests"]')
        .type('4')
        .get('[data-cy=reservation-button]').click()
        cy.get('article').last()
        .contains('Paige')
    })
})