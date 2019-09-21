var RandomNames = {
    firstNames: [
        'Slimeface',
        'Taco',
        'Fishface',
        'BoBo',
        'Dave',
        'James',
        'Spot',
        'Bubbles',
        'Sparky',
        'Magikarp',
        'Slippery',
        'Stinky',
        'BigJoe',
        'Whatever',
        'Whatshisface',
        'Swim Shady',
        'Bigmouth Billy Bass',
        'Slimy Steve',
        'Puckerface Jones',
        'Squirtle',
        'SelFish',
        'Stanley',
        'Captain',
        'Goober',
        'Cheeto'
    ],
    lastNames: [
        'Swede',
        'Aqua Bob SquarePants',
        'Ying Yang',
        'Sushi',
        'Bait',
        'Fish Sticks',
        'McFish',
        'Puff Daddy',
        'Floater',
        'Wave',
        'Chips',
        'Bob',
        'Flotsam',
        'Miso',
        'Cod',
        'Pond',
        'Finley',
        'Finneus',
        'Larry',
        'Salmon',
        'Sea Beast',
        'Otto',
        'Sardine',
        'Pirate',
        'Robocod',
        'Captain Jack Sparrow',
        'Long John Silver',
        'Bubba Gump'
    ],
    generate:function(quantity){
      var maxNames = this.firstNames.length * this.lastNames.length;
      if (quantity > maxNames) {
        throw "Quantity greater than possible matches. Possible matches: "+maxNames;
      }
      var names = [];
      while ( names.length < quantity ) {
        var name = "";
        var first = Math.floor( Math.random() * this.firstNames.length );
        name+= this.firstNames[first];
        var last = Math.floor( Math.random() * this.lastNames.length );
        name+= " "+this.lastNames[last];
        
        if (names.indexOf(name)==-1) {
          names.push(name);
        }
      }
      return names;
    }
  };
  
  /*
  try {
      var names = RandomNames.generate(150);
      for (var i=0; i<names.length; i++) {
          document.write(names[i]+'<br/>');
        }
        document.write('<br /><strong>Total names:</strong> '+names.length);
    } catch (e) {
        document.write(e);
    }
  */