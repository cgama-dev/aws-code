export default class User {
    constructor(readonly name){}
    getName(){
        console.log(this.name)
    }
}

const user = new User('Cleyton');
user.getName()