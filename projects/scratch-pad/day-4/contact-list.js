// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
//create contact object with input parameters as properties
let contact = {
    id: id,
    nameFirst: nameFirst,
    nameLast: nameLast,
}
return contact;//return contact object
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;//return number of contacts in the list
        },
        addContact: function(contact) { //takes a contact object to be added to the list
            contacts.push(contact);
        },
        findContact: function(fullName){
           for (let i = 0; i < contacts.length; i++){
            if (fullName === contacts[i].nameFirst + ' ' + contacts[i].nameLast){
                return contacts[i];//returns contact object if full name is a match
            }
            }
            return undefined;//if loop completes without a match, returns undefined
           },
        removeContact: function(contactObj){
            for (let i = 0; i < contacts.length; i++){
                if (contactObj.id === contacts[i].id){
                    contacts.splice(i, 1);
                    return;
                }
            }
            return;
        },
        printAllContactNames: function(){
            let contactList = '';
            for (let i = 0; i < contacts.length; i++){//loop through contacts array
                if (i < contacts.length - 1) {//add formatted full name plus line break, until 
                    contactList += contacts[i].nameFirst + ' ' + contacts[i].nameLast + '\n';
            } else {//last entry, then just add formatted full name
                contactList += contacts[i].nameFirst + ' ' + contacts[i].nameLast;
        }
        }  
        return contactList;
        
    }
    }




// YOUR CODE GOES ABOVE HERE //
}



// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
