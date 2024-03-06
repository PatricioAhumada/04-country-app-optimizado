import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent implements OnInit , OnDestroy{

  private debouncer :  Subject<string> = new Subject<string>();
  private debouncerSuscrption? : Subscription;


  @Input()
  public placeholder: string = '';

  @Input()
  public initialValue : string = '';

  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public onDebounce = new EventEmitter<string>();

  ngOnInit(): void {
    this.debouncerSuscrption = this.debouncer
      .pipe(
        debounceTime(1000)
      )
      .subscribe( value =>{
        //console.log(' debouncer : ', value)
        this.onDebounce.emit( value );
      });
  }

  ngOnDestroy(): void {
    this.debouncerSuscrption?.unsubscribe();
  }

  emitValue( value : string ):void{
    this.onValue.emit( value )
  }

  onKeyPress( searchTerm : string){
    this.debouncer.next( searchTerm);
  }
}
