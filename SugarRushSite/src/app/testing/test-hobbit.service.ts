export class TestHobbitService{

   public gameWin: boolean = false;

   getHobbit(index: number){
      return {
            name: "Test Hobbit",
            sugarTolerance: 42,
            sugarIntake: 0
         }
   }

   setTotalSugar(value: number){

   }

   clearAnswers(){}

   setGameWin(value: boolean){
      this.gameWin = value;
   }
}
