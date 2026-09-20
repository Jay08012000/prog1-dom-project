const studentName = document.getElementById("studentName");
const grade1 = document.getElementById("grade1");
const grade2 = document.getElementById("grade2");
const grade3 = document.getElementById("grade3");

const calculateBtn = document.getElementById("calculateBtn");
const clearBtn = document.getElementById("clearBtn");

const result = document.getElementById("result");

calculateBtn.addEventListener("click", function () {

    let name = studentName.value;
    let g1 = Number(grade1.value);
    let g2 = Number(grade2.value);
    let g3 = Number(grade3.value);

    if (
        name === "" ||
        grade1.value === "" ||
        grade2.value === "" ||
        grade3.value === ""
    ) {
        result.innerHTML = "Please complete all fields.";
        return;
    }

    let average = (g1 + g2 + g3) / 3;

    let status;

    if (average >= 75) {
        status = "PASSED";
    } else {
        status = "FAILED";
    }

    result.innerHTML =
        "<strong>Student Name:</strong> " + name +
        "<br><strong>Average:</strong> " + average.toFixed(2) +
        "<br><strong>Result:</strong> " + status;
});


clearBtn.addEventListener("click", function () {

    studentName.value = "";
    grade1.value = "";
    grade2.value = "";
    grade3.value = "";

    result.innerHTML = "Result will appear here.";
});