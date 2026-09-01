"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getStudentResult = (student) => {
    const totalMarks = student.marks.reduce((acc, item) => acc + item, 0);
    const avg = totalMarks / student.marks.length;
    const result = avg >= 40 ? "Passed" : "Failed";
    return {
        name: student.name,
        avg,
        result
    };
};
console.log(getStudentResult({
    name: "Rafi",
    marks: [80, 75, 90, 85]
}));
//# sourceMappingURL=result.js.map