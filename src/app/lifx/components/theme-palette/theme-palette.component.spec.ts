import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemePaletteComponent } from './theme-palette.component';

describe('ThemePaletteComponent', () => {
  let component: ThemePaletteComponent;
  let fixture: ComponentFixture<ThemePaletteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemePaletteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemePaletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
