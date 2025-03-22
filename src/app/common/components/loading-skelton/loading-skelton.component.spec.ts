import { ComponentFixture, TestBed } from "@angular/core/testing";
import { LoadingSkeltonComponent } from "./loading-skelton.component";

describe("LoadingSkeltonComponent", () => {
    let component: LoadingSkeltonComponent;
    let fixture: ComponentFixture<LoadingSkeltonComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [LoadingSkeltonComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(LoadingSkeltonComponent);
        fixture.componentRef.setInput("skeltonType", "rectangle");
        fixture.componentRef.setInput("rows", "1");
        fixture.componentRef.setInput("columns", "1");
        fixture.componentRef.setInput("height", "1");
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });

    it("should calculate columnClass correctly with valid columns value", () => {
        fixture.componentRef.setInput("columns", "3");
        fixture.detectChanges();
        component.ngOnInit();
        expect(component.columnClass).toBe("col-md-4");
    });

    it("should calculate columnClass correctly with invalid columns value", () => {
        fixture.componentRef.setInput("columns", "1");
        fixture.detectChanges();
        component.ngOnInit();
        expect(component.columnClass).toBe("col-md-12");
    });

    it("should generate rowsArray and columnsArray correctly with valid rows and columns values", () => {
        fixture.componentRef.setInput("columns", "3");
        fixture.componentRef.setInput("rows", "2");
        fixture.detectChanges();
        component.ngOnInit();
        expect(component.rowsArray).toEqual([0, 1]);
        expect(component.columnsArray).toEqual([0, 1, 2]);
    });

    it("should generate rowsArray and columnsArray correctly with invalid rows and columns values", () => {
        fixture.componentRef.setInput("columns", "def");
        fixture.componentRef.setInput("rows", "abc");
        fixture.detectChanges();
        component.ngOnInit();
        expect(component.rowsArray).toEqual([]);
        expect(component.columnsArray).toEqual([]);
    });
});
