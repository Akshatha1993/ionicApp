import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.scss'],
})

export class ListStudentComponent implements OnInit {
  searchQuery:any;
student:any={rollNo:'', firstName:'', lastName:'',DOB:'', class:'', subject:'', teacher:'', address:''}
  constructor( private studentService : StudentService, private router : Router) { }
public isSearchBarOpened = false;
  ngOnInit() {
this.student = this.studentService.students;
  }
  deleteAllStudents(){
    this.studentService.deleteAllStudents();
    this.studentService.getStudents();
  }
  deleteStudent(s){
    this.studentService.deleteStudent(s);
    this.studentService.getStudents();
  }
  onEdit(rollNo){
    this.router.navigate(['/edit-student/'+rollNo]);
  }
  search(value) { 
    console.log(this.student); 
    if( value == this.student.firstName){
      console.log(this.student.firstName); 
      return this.student;
    }
}

}
