interface UserInterface{
    name: string;
    email: string;
    age: number;
    register();
    payInvoice();
}

class User implements UserInterface{
    name: string;
    email: string;
    age: number;

    constructor(name: string, email: string, age: number) {
        this.name = name;
        this.email = email;
        this.age = age;

        console.log('User created: ' + this.name)
    }
    register() {
        console.log(this.name+ ' is registered ')
    }
    payInvoice() {
        console.log(this.name+ ' Paid invoice')
    }
}
class Member extends User {
    id: number;

    constructor(id: number, name: string, email: string, age: number) {
        super(name, email, age)
        this.id = id
    }

    payInvoice() {
        super.payInvoice();
    }
}
//let user = new User('Johnson & Janet', 'jj@gmail.com', 6)

//user.register();
let mike: User = new Member(1, 'Mike smith', 'smith@gmail.com', 33)
mike.payInvoice();
