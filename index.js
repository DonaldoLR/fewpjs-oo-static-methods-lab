class Formatter {
  static capitalize(string){
    return string[0].toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-\s']+/gi, '');
  }

  static titleize(string){
    const bannedWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'and', 'from']; 

    const stringArray = string.split(' '); 

    stringArray[0] = stringArray[0][0].toUpperCase() + stringArray[0].slice(1);

    for (let i = 1; i<stringArray.length; i++){

      if(!bannedWords.includes(stringArray[i])){
        stringArray[i] = stringArray[i][0].toUpperCase() + stringArray[i].slice(1)
      }
      
    }
    
    
    return stringArray.join(' ');
  }
}
