let ul = document.getElementById('ul')
let nextButton = document.getElementById('btnNext');
let quizbox = document.getElementById('questionBox')
let opt1 = document.getElementById('opt1')
let opt2 = document.getElementById('opt2')
let opt3 = document.getElementById('opt3')
let opt4 = document.getElementById('opt4')

let app={
        questions:[
            {
                q:'Dans quel film de Tarantino entend-on cette réplique « C’est à une demi-heure d’ici. J’y suis dans dix minutes » ?',
                options: ['Pulp Fiction', 'Reservoir Dogs', 'Jackie Brown', 'Kill Bill'],
                answer:1
            },
            {
                q:'Dans quel film entend-on cette réplique « J’adore l’odeur du napalm au petit matin » ?',
                options: ['Full Metal Jacket', 'Voyage au bout de l’Enfer', 'Apocalypse Now', 'Les Sentiers de la Gloire'],
                answer:3
            },
            {
                q:' Quel acteur prononce cette phrase dans un film « Quand j’écoute du Wagner, ça me donne envie d’envahir la Pologne » ?',
                options: ['Jack Nicholson', 'Adrian Brody', 'Woody Allen', 'Michael Douglas'],
                answer:3
            },
            {
                q:'Dans quel film d’animation de Hayao Miyazaki, le petit Sosuke découvre-t-il une petite fille poisson rouge ?',
                options: ['Nausicaä de la vallée du vent', 'Les contes de Terremer', 'La colline aux coquelicots', 'Ponyo sur la falaise'],
                answer:4
            },
            {
                q:'Quelle est la couleur du cheval blanc d’Henri IV ?',
                options: ['Gris', 'Blanc', 'Zain', 'Marron'],
                answer:1
            },
            

        ],
        index:0,
        load:function(){
            if(this.index<=this.questions.length-1){
                quizbox.innerHTML=this.index+1 + ". " +this.questions[this.index].q;
                opt1.innerHTML=this.questions[this.index].options[0];
                opt2.innerHTML=this.questions[this.index].options[1];
                opt3.innerHTML=this.questions[this.index].options[2];
                opt4.innerHTML=this.questions[this.index].options[3];
            }
            else {
                quizbox.innerHTML="Quiz fini !";
                ul.style.display="none";
                nextButton.style.display="none";
            }
        },
        next: function(){
            this.index++;
            this.load();
        },
        check: function(ele){
            let id=ele.id.split('');
            if(id[id.length-1]==this.questions[this.index].answer){
                this.score++;
                ele.className="correct";
                this.scoreCard();
            }
            else{
                ele.className="wrong";
            }
        },
        preventClick:function(){
            for(let i=0; i<ul.children.length; i++){
                ul.children[i].style.pointerEvents="none";
            }
        },
        allowClick:function(){
            for(let i=0; i<ul.children.length; i++){
                ul.children[i].style.pointerEvents="auto";
                ul.children[i].className=''
            }
        },
        score:0,
        scoreCard:function(){
            scoreCard.innerHTML=this.score + "/" + this.questions.length;
        }
}

window.load=app.load();

function button(ele){
    app.check(ele);
    app.preventClick();
}

function next(){
    app.next();
    app.allowClick();
}