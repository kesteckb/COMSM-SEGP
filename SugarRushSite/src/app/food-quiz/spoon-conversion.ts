export default class SpoonConversion{
   static convertGramsToTsp(grams: number){
      return grams / 4.2;
   }

   static getNumberOfSpoons(grams: number){
      let teaspoons = this.convertGramsToTsp(grams);
      return Math.floor(teaspoons);
   }

   static getNumOfSpoonsRounded(grams: number){
      let teaspoons = this.convertGramsToTsp(grams);
      let spoonCount = Math.floor(teaspoons);
      //Give players extra spoon if the requirement falls on a decimal
      if (teaspoons % 1 > 0.0001){
         spoonCount++;
      }
      return spoonCount;
   }

   static getSpoonRemainder(grams: number){
      let teaspoons = this.convertGramsToTsp(grams);
      //Multiply by 100, round, divide by 100 to maintain only 2 percentage points
      let remainder = Math.round((teaspoons % 1) * 100);
      return remainder + "%";
   }

}
