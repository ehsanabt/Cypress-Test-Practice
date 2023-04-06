/// <reference types="Cypress" />

describe("Automation Test Practice", () => {
    beforeEach(function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    })

    it("Check boxes", () => {
        cy.get('#checkBoxOption1').check().should("be.checked").and("have.value", "option1")
        cy.get('#checkBoxOption1').uncheck()

        cy.get('input[type="checkbox"]').check(["option2", "option3"])

    })
    it("Alert test", () => {
        cy.get('#alertbtn').click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal("Hello , share this practice page and share your knowledge")
        })
    })

    it("Alert test2", () => {
        cy.get('#name').type("Ehsan")
        cy.get('#alertbtn').click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal("Hello Ehsan, share this practice page and share your knowledge")
        })
    })

    it("Dropdown test", () => {
        cy.get('#dropdown-class-example').select("Option2").should(('have.have.value'), "option2")

    })

    it("Dynamic dropdown test", () => {

        cy.get('#autocomplete').type("ind")

        cy.get(".ui-menu-item div").each(($e1, index, $list) => {
            if ($e1.text() === "India") {
                $e1.click()
            }
        })
        cy.get("#autocomplete").should("have.value", "India")
    })

    it("Textbox visibility test", () => {
        cy.get('#displayed-text').should("be.visible")
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should("not.be.visible")
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should("be.visible")
    })

    it("Radiobutton text", () => {
        cy.get('[for="radio1"] > .radioButton').check()
        cy.get('[for="radio1"] > .radioButton').should("be.checked")
    })

    it.only("Open a link in new tab test", () => {
        cy.get('#opentab').click()
        cy.wait(20000)
        cy.window().should((win) => {
            expect(win.windowHandles).to.have.length(1)
        })
    })

    // it.only("Tables value test", () => {

    //     cy.get('fieldset > #product > tbody > :nth-child(9) > :nth-child(2)').should("contain", "Python")

    // })

    it("Mouse over test", () => {
        cy.get("div.mouse-hover-content").invoke("show")
        cy.contains("Top").click()
        cy.url().should("contain", "top")
    })

})