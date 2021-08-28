let profile = {
    firstName: "Ibrahim",
    otherName: "Adeoye",
    lastName: "Uthman",
    age: 31,
    phoneNumber: "07065439987",

    studentAge: function studentAge (){
        return `${this.age}`;
    },

    StudentFullName: function StudentFullName(){
        return `${this.lastName} ${this.firstName} ${this.otherName}`;
    }

};
console.log(profile.StudentFullName());