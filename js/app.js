var FlirtrModel = {

    /* It sets the phrase to analyse */
    analyse: function (phrase) {
        var score = this.getScore(phrase);

        this.showValue(score);
    },

    /* Returns the flirting score (number) of the phrase.
     * It is computed by looking for flirting patterns,
     * adding up the individual scores of the matching
     * patterns (unless the pattern neutraliser is found to
     * the right of the matching word)
     */
    getScore: function (phrase) {
        var value = 0;

        patterns.forEach(function (obj) {
            //se trovi la parola
            if (phrase.indexOf(obj.word) > -1) {

                //Se non trovi il neutraliser
                if (phrase.indexOf(obj.neutraliser) > -1) {
                }
                //Se trivi il support
                else if (phrase.indexOf(obj.support) > -1){
                    value += obj.score;
                }
                else{
                    value += obj.score;
                }
            }
        });

        return value;
    },

    init: function () {
        $("#checkBtn").click(function () {
            FlirtrModel.analyse($("#phrase").val());
        });
    },

    showValue: function (score) {
        var newHtml = "Score: ";

        if (score > 0 )
            newHtml += "flirty";
        else if (score == 0 )
            newHtml += "neutral";
        else if (score < 0 )
            newHtml += "friendly";

        $(".answer").html(newHtml);
    }

};

$(document).ready(function () {
    FlirtrModel.init();
});
