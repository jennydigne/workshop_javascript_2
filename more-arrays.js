const months = ["Jon", "Feb", "Mar", "Apr", "Jun", "May", "Jul", "Aug", "Sep", "Oct", "Nov"]

months[0] = "Jan"

// Task 1: Use console.log() to print the months array. Notice how the first month is fixed!
console.log(months);

// Task 2: 
months[4] = "May";
months[5] = "Jun";
console.log(months);

// Task 3: 
console.log(months.length);

// Task 4: 
months.push("Dec");
console.log(months);

// Task 5: 
months.pop();
console.log(months);

// Task 6: 
months.splice(6, 1);
console.log(months); 