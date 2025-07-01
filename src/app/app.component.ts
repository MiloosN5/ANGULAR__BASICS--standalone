import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LoggingService } from '../core/assets/logging.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'ANGULAR__BASICS';
  constructor(private logger: LoggingService) { }

  ngOnInit(): void {
    this.logger.log('AppComponent has been initialized!');
    this.logger.error('Test error log from AppComponent');
  }

}
