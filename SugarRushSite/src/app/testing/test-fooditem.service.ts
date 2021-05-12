export class TestFoodItemService {

   data: any = {
      subscribe(){
         return [
            {name: "test 1", sugarAmount: 10, meals: [], imagePath: ''},
            {name: "test 2", sugarAmount: 20, meals: [], imagePath: ''},
            {name: "test 3", sugarAmount: 30, meals: [], imagePath: ''},
            {name: "test 4", sugarAmount: 40, meals: [], imagePath: ''}
         ]
      }
   }
   get(){
      return this.data;
   }
}
