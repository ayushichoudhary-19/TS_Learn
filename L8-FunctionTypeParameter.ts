const concat = (firstname:string,lastname:string) => {
    return firstname+' '+lastname;
}

console.log(concat('Ayushi','Choudhary'));

const concat1 = (firstname:string,lastname?:string) => {
    return firstname+' '+lastname;
}

console.log(concat1('Ayushi'));


const concat2 = (firstname:string,lastname:string='N/A') => {
    return firstname+' '+lastname;
}

console.log(concat1('Ayushi'));