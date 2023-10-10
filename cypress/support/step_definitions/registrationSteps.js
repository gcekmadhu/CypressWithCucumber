import {Given,When,Then} from "cypress-cucumber-preprocessor/steps";
import { RegisterPage } from "../pages/registerPage";


const registerObj=new RegisterPage();

Given("User is on Ecommerce Landing page",()=>{
registerObj.openUrl();
})

When("User registers into application",(table)=>{
    table.hashes().forEach(element => {
        registerObj.enterFirstName(element.FirstName);
    registerObj.enterLastName(element.LastName)
    registerObj.enterEmail(element.Email)
    registerObj.enterTelephone(element.Telephone)
    registerObj.enterPassword(element.Password)
    registerObj.enterConfirmPassword(element.Password)
    });;
    
 
})

When("Accepting Privacy policy and hitting continue button",()=>{
    registerObj.confirmPrivacyPolicy();
    registerObj.continue();
})

Then("User is registered with successful message {string}",(message)=>{
    cy.get("[id='content'] > h1").contains(message);
})