// hack for http://zty.pe/
 
var stopHack = false;
 
var createKeyPressEvent = function(key) {
        return {
                target : { type : 1 },
                which: ig.KEY[key],
                preventDefault: function() {}
        };
}
       
var findWords = function() {
        var targets = ig.game.targets, words = [], i;
       
        for (var k in targets){
                if (targets.hasOwnProperty(k)) {
                        if(targets[k].length){
                                words.push(targets[k][0].word);
                        }
                }      
        }
       
        return words;  
}
 
var shootWord = function(word) {
        var i = 0;
        for(i = 0; i < word.length; i++){
                var e = createKeyPressEvent(word[i].toUpperCase());
                ig.game.keydown(e);            
        }
}
 
var hack = function() {
        var i = 0;
        if(ig.game.mode == 1 && !stopHack) {
                var words = findWords();
                var word = words.pop();
                while(typeof word !== 'undefined') {
                        shootWord(word);
                        word = words.pop();
                }
                window.setTimeout(hack, 100);
        } else {
                window.setTimeout(hack, 1000);
        }
}
 
hack();