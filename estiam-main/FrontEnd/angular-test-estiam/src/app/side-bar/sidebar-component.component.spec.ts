import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SidebarComponentComponent } from './sidebar-component.component';

describe('SidebarComponentComponent', () => {
  let component: SidebarComponentComponent;
  let fixture: ComponentFixture<SidebarComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarComponentComponent]
    });
    fixture = TestBed.createComponent(SidebarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
