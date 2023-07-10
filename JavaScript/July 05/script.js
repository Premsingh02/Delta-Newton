const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; // need to add /in start and /in end;
console.log(regex.test("test@gmail.com"));