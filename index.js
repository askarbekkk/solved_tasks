
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.on('line', line1 => {
    readline.on('line', line2 => {
        let result = {}
        module.export = function(participants, sports) {
            /**
             * Подобно оператору new создает экземпляр объекта,
             * используя функцию-конструктор и параметры для нее
             */
            function constructFrom (fnConstructor, ...params) {
                const res = {};

                fnConstructor.bind(res).call(this, ...params);

                Object.setPrototypeOf(res, fnConstructor.prototype);

                return res;
            }

            /**
             * Создает пары вида [’вид спорта’, ’имя участника’],
             * где первому виду спорта соответствует последний участник
             */
            function assignParicipants () {
                const participants = this.participants;
                const sports = this.sports;
                const orderIndexes = [];
                let i = sports.length;

                while (i--) {
                    let x = i;
                    orderIndexes.push(function() {
                        return x;
                    });
                }

                return orderIndexes.map(
                    (getSportIndex, i) => [sports[i], participants[getSportIndex()]]
                )
            }

            function Contest (participants, sports) {
                this.participants = participants;
                this.sports = sports;
            }

            Contest.prototype.assignParicipants = assignParicipants;


            const contest = constructFrom(Contest, line1, line2);
            console.log(contest.assignParicipants())
            return contest.assignParicipants()

        }


    })


    readline.close();


});


// for (let i = 0; i < data.length; i++)
//     console.log(parse(data[i]));
