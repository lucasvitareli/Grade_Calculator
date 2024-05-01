
const form = document.getElementById('form-subjects'); //creating a variable 'form' and linking it to its ID
const imgAproved = '<img src="./images/aprovado.png" alt="Happy emoji" />' // This image is associated to this Variable
const imgNotAproved = '<img src="./images/reprovado.png" alt="Sad emoji" />' // // This image is associated to this Variable
const subjects = []
const grades = []
const spanApproved = '<span class="when-approved">Approved</span'
const spanNotApproved = '<span class="whenNotApproved">Not Approved</span'
const minimumGrade = parseFloat(prompt("Insert the minimum grade"))

let lines = '' 

form.addEventListener('submit', function(e) {   //adding a eventListener to submit 
    e.preventDefault();                         //stoping from updating the page when a function action is activated

    addLine()
    updateTable()
    updateOverallGPA()
})

function addLine() {
    const inputSubjectName = document.getElementById('subject-name') //creating a variable 'inputSubjectName' and linking it to its ID
    const inputSubjectGrade = document.getElementById('subject-grade') //creating a variable 'inputSubjectGrade' and linking it to its ID

    if (subjects.includes(inputSubjectName.value)) {
        alert(`The subject: (${inputSubjectName.value})5 has already been inserted.`)
    }else {

        subjects.push(inputSubjectName.value)
        grades.push(parseFloat(inputSubjectGrade.value))

        let line = '<tr>'; //creates a string variable 'line' and initializes it with an opening table row tag.
        line += `<td>${inputSubjectName.value}</td>` //adds a table data tag with the value of the inputSubjectName field enclosed in it to the 'line' variable.
        line += `<td>${inputSubjectGrade.value}</td>` //adds a table data tag with the value of the inputSubjectGrade field enclosed in it to the 'line' variable.
        line += `<td>${inputSubjectGrade.value >= minimumGrade ? imgAproved : imgNotAproved}</td>`
    line += `</tr>`

        lines += line
    }    

    inputSubjectName.value = ''
    inputSubjectGrade.value = ''
}

function updateTable () {
    const tableBody = document.querySelector('tbody')
    tableBody.innerHTML = lines
}

function updateOverallGPA () {
    const finalGPA = calcOverallGPA()

    document.getElementById('final-GPA-value').innerHTML = finalGPA.toFixed(2)
    document.getElementById('final-GPA-result').innerHTML = finalGPA >= minimumGrade ? spanApproved : spanNotApproved

}

function calcOverallGPA () {
    let totalGrade = 0 

    for (let i = 0; i < grades.length; i++) {
        totalGrade += grades[i]
    }

    return totalGrade / grades.length
}