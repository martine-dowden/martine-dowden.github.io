import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  skills = [
      { name: 'User Experience', value: 4},
      { name: 'Usability', value: 4},
      { name: 'Accessibility', value: 4},
      { name: 'WAI-ARIA', value: 4},
      { name: 'WCAG', value: 4},
      { name: 'Section 508', value: 4},
      { name: 'Git', value: 4},
      { name: 'AngularJS', value: 5},
      { name: 'Angular2', value: 5},
      { name: 'React', value: 2},
      { name: 'HTML5', value: 5},
      { name: 'CSS', value: 5},
      { name: 'LESS & SASS', value: 5},
      { name: 'Bootstrap', value: 4},
      { name: 'Material Design', value: 5},
      { name: 'JavaScript', value: 4},
      { name: 'Typescript', value: 4},
      { name: 'XSLT/XPath', value: 4},
      { name: 'Regex', value: 4},
      { name: 'Ruby', value: 2},
      { name: 'Markdown', value: 4},
      { name: 'NPM', value: 3},
      { name: 'Velocity Templates', value: 3},
      { name: 'dotCMS', value: 3},
      { name: 'WordPress', value: 3},
      { name: 'Joomla', value: 3},
      { name: 'Firebase', value: 4},
      { name: 'Illustrator', value: 5},
      { name: 'InDesign', value: 4},
      { name: 'Photoshop', value: 3},
      { name: 'Illustration', value: 4},
      { name: 'Photography', value: 5},
      { name: 'Research', value: 4},
      { name: 'Statistics', value: 3},
      { name: 'SPSS', value: 3},
      { name: 'Linux', value: 3},
      { name: 'OS X', value: 4},
      { name: 'VS Code', value: 4},
      { name: 'Design', value: 5},
  ];

  ngOnInit() {
  }

  getNum(val) {
    return new Array(val);
  }

}
