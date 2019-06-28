import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {


  constructor(public router: Router, ) { }
  ngOnInit() {
    document.getElementById('theBar').style.width = '100%';
    document.getElementById('theBar').innerHTML = '100%';
    const alertBox = document.getElementById('completed-alert');
    let i = 100;
    const nav = this.router;
    let exit;

    const counterBack = setInterval(function () {
      i--;
      if (i > 0) {
        document.getElementById('theBar').style.width = i + 1 + '%';
        document.getElementById('theBar').innerHTML = i + 1 + '%';
      } else {
        clearTimeout(counterBack);
        alertBox.classList.remove('hide');
        alertBox.classList.add('show');
        exit = setTimeout(function () { nav.navigateByUrl('') }, 2500)
      }

    }, 500);
  }



}
