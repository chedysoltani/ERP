import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskEnhancedService } from '../../services/task-enhanced.service';

interface TimeSession {
  id: number;
  task_id: number;
  employee_id: number;
  start_time: string;
  end_time: string | null;
  duration_seconds: number;
  status: 'running' | 'paused' | 'completed';
  description: string;
  employee_name: string;
}

@Component({
  selector: 'app-task-time-tracker',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="time-tracker-container">
      <div class="tracker-header">
        <h3>Time Tracker</h3>
        <div class="current-task" *ngIf="currentTask">
          <span class="task-label">Current Task:</span>
          <span class="task-name">{{ currentTask.title }}</span>
        </div>
      </div>

      <div class="timer-display" *ngIf="activeSession">
        <div class="timer-value">{{ formatTime(elapsedTime) }}</div>
        <div class="timer-status" [ngClass]="'status-' + activeSession.status">
          {{ activeSession.status }}
        </div>
      </div>

      <div class="timer-controls" *ngIf="currentTask">
        <button 
          *ngIf="!activeSession"
          class="btn-start"
          (click)="startSession()">
          <i class="bi bi-play-fill"></i>
          Start
        </button>
        
        <button 
          *ngIf="activeSession && activeSession.status === 'running'"
          class="btn-pause"
          (click)="pauseSession()">
          <i class="bi bi-pause-fill"></i>
          Pause
        </button>
        
        <button 
          *ngIf="activeSession && activeSession.status === 'paused'"
          class="btn-resume"
          (click)="resumeSession()">
          <i class="bi bi-play-fill"></i>
          Resume
        </button>
        
        <button 
          *ngIf="activeSession"
          class="btn-stop"
          (click)="completeSession()">
          <i class="bi bi-stop-fill"></i>
          Finish
        </button>
      </div>

      <div class="session-description" *ngIf="activeSession">
        <textarea 
          [(ngModel)]="sessionDescription"
          placeholder="What are you working on?"
          rows="2"
          class="description-input">
        </textarea>
      </div>

      <div class="sessions-history" *ngIf="sessions.length > 0">
        <h4>Recent Sessions</h4>
        <div class="sessions-list">
          <div *ngFor="let session of sessions" class="session-item">
            <div class="session-info">
              <div class="session-time">{{ formatTime(session.duration_seconds) }}</div>
              <div class="session-date">{{ formatDate(session.start_time) }}</div>
            </div>
            <div class="session-status" [ngClass]="'status-' + session.status">
              {{ session.status }}
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .time-tracker-container {
      background: white;
      border-radius: 12px;
      padding: 20px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }

    .tracker-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      padding-bottom: 12px;
      border-bottom: 1px solid #e0e0e0;
    }

    .tracker-header h3 {
      margin: 0;
      font-size: 18px;
      font-weight: 600;
      color: #333;
    }

    .current-task {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 14px;
    }

    .task-label {
      color: #666;
      font-weight: 500;
    }

    .task-name {
      color: #333;
      font-weight: 600;
    }

    .timer-display {
      text-align: center;
      padding: 24px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 12px;
      margin-bottom: 20px;
      color: white;
    }

    .timer-value {
      font-size: 48px;
      font-weight: 700;
      font-family: 'Courier New', monospace;
      margin-bottom: 8px;
    }

    .timer-status {
      font-size: 14px;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .timer-status.status-running {
      color: #4caf50;
    }

    .timer-status.status-paused {
      color: #ff9800;
    }

    .timer-controls {
      display: flex;
      gap: 12px;
      margin-bottom: 16px;
    }

    .timer-controls button {
      flex: 1;
      padding: 12px 24px;
      border: none;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      transition: all 0.2s;
    }

    .btn-start {
      background: #4caf50;
      color: white;
    }

    .btn-start:hover {
      background: #45a049;
    }

    .btn-pause {
      background: #ff9800;
      color: white;
    }

    .btn-pause:hover {
      background: #f57c00;
    }

    .btn-resume {
      background: #2196f3;
      color: white;
    }

    .btn-resume:hover {
      background: #1976d2;
    }

    .btn-stop {
      background: #f44336;
      color: white;
    }

    .btn-stop:hover {
      background: #d32f2f;
    }

    .session-description {
      margin-bottom: 20px;
    }

    .description-input {
      width: 100%;
      padding: 12px;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      font-size: 14px;
      resize: vertical;
      font-family: inherit;
    }

    .description-input:focus {
      outline: none;
      border-color: #2196f3;
      box-shadow: 0 0 0 3px rgba(33, 150, 243, 0.1);
    }

    .sessions-history h4 {
      margin: 0 0 12px 0;
      font-size: 14px;
      font-weight: 600;
      color: #333;
    }

    .sessions-list {
      max-height: 200px;
      overflow-y: auto;
    }

    .session-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px;
      background: #f9f9f9;
      border-radius: 8px;
      margin-bottom: 8px;
    }

    .session-info {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .session-time {
      font-size: 16px;
      font-weight: 600;
      color: #333;
      font-family: 'Courier New', monospace;
    }

    .session-date {
      font-size: 12px;
      color: #666;
    }

    .session-status {
      padding: 4px 12px;
      border-radius: 12px;
      font-size: 11px;
      font-weight: 600;
      text-transform: uppercase;
    }

    .session-status.status-completed {
      background: #e8f5e9;
      color: #388e3c;
    }

    .session-status.status-paused {
      background: #fff3e0;
      color: #f57c00;
    }

    .session-status.status-running {
      background: #e3f2fd;
      color: #1976d2;
    }
  `]
})
export class TaskTimeTrackerComponent implements OnInit, OnDestroy {
  @Input() taskId!: number;
  @Input() employeeId!: number;
  @Input() currentTask: any;

  activeSession: TimeSession | null = null;
  sessions: TimeSession[] = [];
  elapsedTime: number = 0;
  sessionDescription: string = '';
  private timerInterval: any = null;

  constructor(private taskEnhancedService: TaskEnhancedService) {}

  ngOnInit() {
    if (this.taskId) {
      this.loadSessions();
      this.checkActiveSession();
    }
  }

  ngOnDestroy() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }

  loadSessions() {
    this.taskEnhancedService.getTaskTimeSessions(this.taskId).subscribe({
      next: (response) => {
        this.sessions = response.data || [];
      },
      error: (error) => {
        console.error('Error loading sessions:', error);
      }
    });
  }

  checkActiveSession() {
    const runningSession = this.sessions.find(s => s.status === 'running');
    if (runningSession) {
      this.activeSession = runningSession;
      this.startTimer();
    }
  }

  startSession() {
    this.taskEnhancedService.startTimeSession(this.taskId, this.employeeId, this.sessionDescription).subscribe({
      next: (response) => {
        this.activeSession = {
          id: response.data.sessionId,
          task_id: this.taskId,
          employee_id: this.employeeId,
          start_time: new Date().toISOString(),
          end_time: null,
          duration_seconds: 0,
          status: 'running',
          description: this.sessionDescription,
          employee_name: ''
        };
        this.startTimer();
        this.sessionDescription = '';
      },
      error: (error) => {
        console.error('Error starting session:', error);
      }
    });
  }

  pauseSession() {
    if (this.activeSession) {
      this.taskEnhancedService.pauseTimeSession(this.taskId, this.activeSession.id).subscribe({
        next: (response) => {
          this.activeSession!.status = 'paused';
          this.activeSession!.duration_seconds = response.data.duration;
          this.stopTimer();
          this.loadSessions();
        },
        error: (error) => {
          console.error('Error pausing session:', error);
        }
      });
    }
  }

  resumeSession() {
    if (this.activeSession) {
      this.taskEnhancedService.resumeTimeSession(this.taskId, this.activeSession.id).subscribe({
        next: (response) => {
          this.activeSession!.status = 'running';
          this.startTimer();
        },
        error: (error) => {
          console.error('Error resuming session:', error);
        }
      });
    }
  }

  completeSession() {
    if (this.activeSession) {
      this.taskEnhancedService.completeTimeSession(this.taskId, this.activeSession.id).subscribe({
        next: (response) => {
          this.activeSession = null;
          this.stopTimer();
          this.elapsedTime = 0;
          this.loadSessions();
        },
        error: (error) => {
          console.error('Error completing session:', error);
        }
      });
    }
  }

  startTimer() {
    this.stopTimer();
    this.timerInterval = setInterval(() => {
      if (this.activeSession && this.activeSession.status === 'running') {
        this.elapsedTime++;
      }
    }, 1000);
  }

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  formatTime(seconds: number): string {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }
}
