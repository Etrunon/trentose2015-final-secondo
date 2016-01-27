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
            if (phrase.indexOf(obj.word) > -1) {
                if (phrase.indexOf(obj.word) == -1) {
                    //nothing
                }
                else {
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
        var newHtml = "Score: " + score;
        $(".answer").html(newHtml);
    }

};

$(document).ready(function () {
    FlirtrModel.init();
});
