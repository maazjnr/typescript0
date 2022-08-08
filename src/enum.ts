
enum Role {ADMIN = 34, VALUE, ME};

const personDetails: {
    name: string;
    age: number;
    hobbies: [number, string];
    role: number;

} = {
    name: "Maaz Junior",
    age: 20,
    hobbies: [23, "ys"],
    role: Role.ADMIN
}

if(personDetails.role = Role.ADMIN){
    console.log("yes Admin")
} else{
    console.log("no")
}

