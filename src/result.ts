interface Student{
    name:string
    marks:number[]
    

}
interface Result{
    name:string
    avg:number
    result:string
}

const getStudentResult=(student: Student):Result=>{

    const totalMarks:number=student.marks.reduce((acc,item)=>acc+item,0)
    const avg:number=totalMarks/student.marks.length;
    const result=avg>=40?"Passed":"Failed"

    return{
        name:student.name,
        avg,
        result
      }
}
console.log(getStudentResult({
    name: "Rafi",
    marks: [80, 75, 90, 85]
}))