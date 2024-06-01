/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

let NFTs = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name, age, income, Dresscode, cityPreference) {
   const objNFT = {
      name: name,
      age: age,
      income: income,
      Dresscode: Dresscode,
      cityPreference: cityPreference,
   }
   NFTs.push(objNFT);
   console.log("Minted Employee: " + name + "!");
}


// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
   for(let i = 0; i < NFTs.length; i++){
      console.log("\nid: \t\t\t\t" + (i+1));
      console.log("Name: \t\t\t\t" + NFTs[i].name);
      console.log("Age:  \t\t\t\t" + NFTs[i].age);
      console.log("Income: \t\t\t" + NFTs[i].income);
      console.log("Dresscode:\t\t\t" + NFTs[i].Dresscode);
      console.log("City Preference:\t" + NFTs[i].cityPreference);
      
   }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
   console.log("\nTotal Supply: " + NFTs.length);

}

// call your functions below this line
mintNFT("James", "23", "25000", "Brown", "New York");
mintNFT("Jane", "25", "30000", "Black", "New York");
mintNFT("Jack", "27", "40000", "White", "New York");
mintNFT("Jill", "29", "50000", "Brown", "New York");
mintNFT("Jake", "31", "60000", "Black", "New York");
mintNFT("Jenny", "33", "70000", "White", "New York");

listNFTs();
getTotalSupply();


