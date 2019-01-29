import { Component, OnInit , EventEmitter , Output} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
	@Output() eventAddIngredient = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }
  addIngredient(nameInput,AmountInput){
  
  	this.eventAddIngredient.emit(new Ingredient(nameInput.value,AmountInput.value))
  }
}
