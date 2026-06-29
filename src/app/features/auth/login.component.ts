import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { NgIf, NgClass } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface TestUser {
  phone: string;
  password: string;
  role: 'CLIENT' | 'AGENT';
  token: string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgClass],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  private readonly fb = inject(FormBuilder);
  private readonly http = inject(HttpClient);
  private readonly router = inject(Router);

  readonly selectedRole = signal<'CLIENT' | 'AGENT' | null>(null);
  readonly loading = signal(false);
  readonly error = signal('');

  readonly form = this.fb.group({
    phone:    ['', Validators.required],
    password: ['', Validators.required],
  });

  readonly testUsers: TestUser[] = [
    { phone: '770000001', password: 'client123', role: 'CLIENT', token: 'test-client-token' },
    { phone: '770000002', password: 'agent123', role: 'AGENT', token: 'test-agent-token' },
  ];

  get roleLabel(): string {
    return this.selectedRole() === 'AGENT' ? 'Agent' : 'Client';
  }

  chooseRole(role: 'CLIENT' | 'AGENT'): void {
    this.selectedRole.set(role);
    this.error.set('');
    this.form.reset();
  }

  goBack(): void {
    this.selectedRole.set(null);
    this.error.set('');
    this.form.reset();
  }

  private findTestUser(phone: string, password: string): TestUser | undefined {
    const normalizedPhone = phone.replace(/\D/g, '');
    return this.testUsers.find(user => user.phone === normalizedPhone && user.password === password);
  }

  submit(): void {
    if (this.form.invalid) return;
    this.loading.set(true);
    this.error.set('');

    const phone = this.form.value.phone ?? '';
    const password = this.form.value.password ?? '';
    const testUser = this.findTestUser(phone, password);

    if (testUser) {
      localStorage.setItem('token', testUser.token);
      localStorage.setItem('role', testUser.role);
      localStorage.setItem('phone', testUser.phone);
      this.router.navigate([testUser.role === 'AGENT' ? '/admin/wallets' : '/dashboard']);
      return;
    }

    this.http.post<{ token: string; role: string; phone: string }>(
      'http://localhost:8080/api/auth/login',
      this.form.value
    ).subscribe({
      next: ({ token, role, phone }) => {
        localStorage.setItem('token', token);
        localStorage.setItem('role', role);
        localStorage.setItem('phone', phone);
        this.router.navigate([role === 'AGENT' ? '/admin/wallets' : '/dashboard']);
      },
      error: () => {
        this.error.set('Identifiants incorrects. Veuillez réessayer.');
        this.loading.set(false);
      },
    });
  }
}
