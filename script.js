let studentLength = window.prompt("Enter Students Total Class Length:");

for (let i = 1; i <= studentLength; i++) {
  let userName = String(prompt("Enter Student Username:"));
  let subjectOne = Number(prompt("Enter First Subject Marks:"));
  let subjectTwo = Number(prompt("Enter Second Subject Marks:"));
  let subjectThree = Number(prompt("Enter Third Subject Marks:"));
  let subjectFour = Number(prompt("Enter Fourth Subject Marks:"));

  while (
    userName === "" ||
    isNaN(subjectOne) ||
    isNaN(subjectTwo) ||
    isNaN(subjectThree) ||
    isNaN(subjectFour)
  ) {
    alert("Invalid input, please try again.");
    userName = String(prompt("Enter Student Username:"));
    subjectOne = Number(prompt("Enter First Subject Marks:"));
    subjectTwo = Number(prompt("Enter Second Subject Marks:"));
    subjectThree = Number(prompt("Enter Third Subject Marks:"));
    subjectFour = Number(prompt("Enter Fourth Subject Marks:"));
  }

  document.getElementById(
    "text1"
  ).textContent += `${i}. Your Username is: ${userName}.\n You Got ${subjectOne} Marks in Subject First.\n You Got ${subjectTwo} Marks in Subject Second.\n You Got ${subjectThree} Marks in Subject Third.\n You Got ${subjectFour} Marks in Subject Fourth.\n  `;

  let totalMarks = subjectOne + subjectTwo + subjectThree + subjectFour;
  let subjectsPercentage = (totalMarks / 400) * 100;
  document.getElementById(
    "text1"
  ).textContent += `Total of Submited Marks: ${totalMarks}\n`;
  document.getElementById(
    "text1"
  ).textContent += `Percetage of Total Marks Combined: ${subjectsPercentage}\n`;

  if (subjectsPercentage <= 40) {
    document.getElementById(
      "text1"
    ).textContent += `You Have Gotten ${subjectsPercentage.toFixed(2)}% With GRADE F \n`;
    console.log(`You Have Gotten ${subjectsPercentage.toFixed(2)}% With GRADE F `);
  } else if (subjectsPercentage <= 65) {
    document.getElementById(
      "text1"
    ).textContent += `You Have Gotten ${subjectsPercentage.toFixed(2)}% With GRADE F \n`;

    console.log(`You Have Gotten ${subjectsPercentage.toFixed(2)}% With GRADE C`);
  } else if (subjectsPercentage <= 75) {
    document.getElementById(
      "text1"
    ).textContent += `You Have Gotten ${subjectsPercentage.toFixed(2)}% With GRADE F \n`;

    console.log(`You Have Gotten ${subjectsPercentage.toFixed(2)}% With GRADE B`);
  } else {
    document.getElementById(
      "text1"
    ).textContent += `You Have Gotten ${subjectsPercentage.toFixed(2)}% With GRADE F \n`;

    console.log(`You Have ${subjectsPercentage.toFixed(2)}% With GRADE A`);
  }
}
