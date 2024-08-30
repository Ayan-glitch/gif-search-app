import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifscontainerComponent } from './gifscontainer.component';

describe('GifscontainerComponent', () => {
  let component: GifscontainerComponent;
  let fixture: ComponentFixture<GifscontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GifscontainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GifscontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
