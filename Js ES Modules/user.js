export default function user(){
    return "Hello User from other file"
}

export function otheruser(a="Hi other User from other file"){
    console.log(a);
}

export function newUser(a="Hello new user from other file"){
    return a
}

export let UserVariable="Variable";

export class otherClass{
    test(){
        console.log("Class Test function");
    }
}

class UserOtherClass{
    test2(){
        console.log("This is Other class test function");
    }
}
export let UOC=new UserOtherClass();

