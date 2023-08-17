const salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function topSalary(salaries) {
  let maxSalary = 0;
  for (const [name, salary] of Object.entries(salaries)) {
    if (salary > maxSalary) {
      maxSalary = salary;
      person = name;
    }
  }
  return console.log(`${person} has highest salary with ${maxSalary}$ `);
}

topSalary(salaries);
