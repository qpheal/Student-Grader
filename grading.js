// Grading system function

function gradingSystem(score){
    if (score >= 90 && score <= 100){
        return "A"
    } else if (score >= 75 && score < 90 ){
        return "B"
    }
}

const myGrade = gradingSystem(90)
console.log(myGrade) // A

const herGrade = gradingSystem (78.6)
console.log(herGrade)