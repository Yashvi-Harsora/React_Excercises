/**
 * ### Assignment: Student Grade Management System
Create a comprehensive student grade management system using React and `useState`. 
This assignment will test your understanding of state management with different data types,
form handling, and component organization.
**Requirements:**
#### Part 1: Student List Component
1. **Display Students:**
   - Show a list of students with their names, IDs, and average grades
   - Each student should display: Name, Student ID, Average Grade, Grade Letter (A, B, C, D, F)
2. **Add Student:**
   - Form to add new students (Name, Student ID)
   - New students start with no grades
3. **Delete Student:**
   - Remove students from the list
#### Part 2: Grade Management
1. **Add Grades:**
   - For each student, add individual subject grades (Math, Science, English)
   - Grades should be numbers (0-100)
   - Calculate average grade automatically
2. **Update Grades:**
   - Edit existing grades for students
   - Recalculate average when grades change
3. **Grade Statistics:**
   - Display overall class average -- done
   - Show highest and lowest grades
   - Count students in each grade letter category -- done
#### Part 3: Filtering and Sorting
1. **Filter Students:** -- done
   - Filter by name (search functionality) -- done
2. **Sort Students:**
   - Sort by name (A-Z, Z-A)
 */




import React,{useState} from "react";
export default function StudentManagement(){
    const [sList,setsList]=useState([
        {
            id:1,
            name:"yashvi",
            avg_grade:"",
            Math:100,
            Science: 99,
            English:98,
            avg:null

        },
        {
            id:2,
            name:"xyz",
            avg_grade:"",
            Math:70,
            Science: 70,
            English:70,
            avg:null

        },
        {
            id:3,
            name:"hjgd",
            avg_grade:"",
            Math:50,
            Science: 50,
            English:50,
            avg:null

        }
    ]);
    const [searchItem,setSearchItem]=useState("");

    const filteredSearchStudents=sList.filter((students)=>students.name.includes(searchItem));

    const[newName,setNewName]=useState("");
    const [newId, setNewId] = useState("");
    const handleAdd=()=>{
        const newStudent = {
        id: Number(newId),
        name: newName,
        avg_grade: 0
    };
    setsList([...sList,newStudent]);
    setNewName("");
    setNewId("");

    };
    const deleteStudent=(id)=>{
        setsList(sList.filter((students)=>students.id !== id));
    }

    const getGradeLetter = (avg) => {
    if (avg >= 90) return "A";
    if (avg >= 75) return "B";
    if (avg >= 60) return "C";
    if (avg >= 40) return "D";
    return "F";
};
    
    
    const calculateAvg = () => {
    setsList(
        sList.map((student) => {
            const average =
                (student.Math + student.Science + student.English) / 3;

            return {
                ...student,
                avg: average.toFixed(2),
                avg_grade: getGradeLetter(average)
            };
        })
    );
};
//display class avg
const classAvg=()=>{
    let avg;
    let sum=sList.reduce((sum,student)=>{
        sum=sum+Number(student.avg);
        return sum;
    },0 );
    
    avg=(sum/sList.length).toFixed(2);
        return avg;
    
}
//highest of the class
const countHigh=()=>{
    let highest=Math.max(...sList.map(student=>Number(student.avg)))
    return highest;
}

//lowest of the class
const countLow=()=>{
     let lowest=Math.min(...sList.map(student=>Number(student.avg)))
    return lowest;
}

    return(
        <>
        {/* search input box */}
        <div className="input">
            <input type="text" name="name" id={sList.id} placeholder="search by name" onChange={(e)=>setSearchItem(e.target.value)}/>
        </div><br/>
        <hr/>
        {/* display students nd searched items */}
        <div className="display">
            <h2>
                {filteredSearchStudents.length>0?
                (filteredSearchStudents.map((students)=>
                    <div key={students.id}>
                        <p>Name: {students.name} </p>
                        <p>ID: {students.id}</p>
                        <p>Grade: {students.avg_grade}</p>
                        <p>Avg: {students.avg}</p>
                        <span><button onClick={()=>deleteStudent(students.id)}>Delete Student</button></span>
                        <span><button onClick={calculateAvg}>Calculate Average</button>
</span>
                    </div>
                )):(
                    <p>No student found with that name</p>
                )
            }
            </h2>
        </div>
        <hr/>
        <div className="add">
            <h3>Add new Student</h3>
            
            <input type="text" name="newName" value={newName} placeholder="Add name " onChange={(e)=>setNewName(e.target.value)}/>
            <br/><br/>
            <input type="text" name="newId" value={newId} placeholder="Add id" onChange={(e)=>setNewId(e.target.value)}/>
            <br/><br/>
            
            <button onClick={handleAdd}>Add New Student</button>
        </div>
        <hr/>

        <div className="display-overall-class-avg">
            <h3>class average </h3>
            <p>Class Average: {classAvg()}</p>
        </div>
        <div className="display-high-low">
            <h3>Highest & the lowest</h3>
            <p>Highest: {countHigh()}<br/>
               Lowest: {countLow()}
            </p>
        </div>
        
        </>
    )
}