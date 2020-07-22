'use strict';

module.exports = function(Contacts) {
    Contacts.validatesUniquenessOf('number');
};
