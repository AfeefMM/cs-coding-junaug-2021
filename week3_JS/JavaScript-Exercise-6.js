let accounts = [
    'jon.doe@gmail.com',
    'hana142@live.com',
    'mumbojumbo@yahoo.com',
    'rafik666@mail.ru',
    'brucelee@kung.fu',
    'jackiechan@gmail.com'
]
let account1=[
    'jon.de@gmail.com',
    'hana142@live.com',
    'mumbojumbo@yahoo.com',
    'rafik66@mail.ru',
    'brucelee@kung.fu',
    'jackiechn@gmail.com'
]
function accountSearch() {

    for(i in account1){
        // (1) Format the entered email address
        // Deal with extra spaces
        //email = email.trim();
        let email = account1[i];
         email= email.trim();

        // Deal with letter casing
        //email = email.toLowerCase();
         email = email.toLowerCase();

        // (2.a) If match found,
        if(accounts.includes(email)) {
            // (3) Return 'account found'
           // return 'account found';
           alert('account  found');
           console.log('account  found');
        }
        // (2.b) If no match found,
        else {
            // (4) Return 'no account found'
           console.log('account not found');
        }
    }

}

console.log( accountSearch() )