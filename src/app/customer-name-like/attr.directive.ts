import { Directive, ElementRef, Attribute, Input}
       from "@angular/core";

@Directive({ //請求設定selector屬性CSS選擇器
selector: "[pa-attr]"
})
export class PaAttrDirective {

    constructor(private element: ElementRef ){}

    @Input("pa-attr")
    bgClass: string;

    ngOnInit(){
        this.element.nativeElement.classList.add(this.bgClass || "bg-success","text-white");
    }


   
}