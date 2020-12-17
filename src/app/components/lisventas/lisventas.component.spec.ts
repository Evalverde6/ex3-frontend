import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LisventasComponent } from './lisventas.component';

describe('LisventasComponent', () => {
  let component: LisventasComponent;
  let fixture: ComponentFixture<LisventasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LisventasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LisventasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
