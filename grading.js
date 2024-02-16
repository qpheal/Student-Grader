// Grading system function

function gradingSystem(score){
    if (score >= 80 && score <= 100){
        return "A"
    } else if (score >= 75 && score < 80 ){
        return "B"
    } else if (score >= 60 && score < 75 ){
        return "C"
    } else if (score >= 50 && score < 60 ){
        return "D"
    } else if (score >= 34 && score < 50 ){
        return "E"
    } else if (score >= 0 && score < 34 ){
        return "F"
    } else 
    return "Input Incorrect"
}

const myGrade = gradingSystem(90)
console.log(myGrade) // A

const herGrade = gradingSystem (78.6)
console.log(herGrade) // B

const hisGrade = gradingSystem (60)
console.log(hisGrade) // C

const itsGrade = gradingSystem (54)
console.log(itsGrade) // D

const thierGrade = gradingSystem (34)
console.log(thierGrade) // E

const noOneGrade = gradingSystem (3)
console.log(noOneGrade) // F

const yesOneGrade = gradingSystem (788.6)
console.log(yesOneGrade) // Input Incorrect