
  //------------------
  //Index.js Start
  //Angualr Start
  var a01 = angular.module('iat381-a01', ['ngRoute', 'ngAnimate']);


    a01.config(['$routeProvider',
        function($routeProvider, $rootScope) {
          $routeProvider.

            //Result Router
            when('/result', {
              templateUrl: 'result.html',
              controller: 'resultcontroller'
            }).

             //Hard Result Router
            when('/resulth', {
              templateUrl: 'resulth.html',
              controller: 'resultcontroller'
            }).

            //Easy + Medium Question Router
            when('/questions/:questionId', {
              templateUrl: 'questions.html',
              controller: 'questionscontroller'
            }).

            //Hard Question Router
            when('/imgqquestions/:questionId', {
            templateUrl: 'imgqquestions.html',
            controller: 'questionscontrollerh'
            }).

            //Main View Router
            when('/', {
              templateUrl: 'main.html',
              controller: 'logcontroller'
            }).

            //Difficulty Select Router
            when('/log', {
              templateUrl: 'log.html',
              controller: 'logcontroller',
            }).

            //Hard Question Router
            when('/qh1', {
                redirectTo: '/imgqquestions/0'
            }).

            //Easy - Medium Question Router
            when('/q1', {
                redirectTo: '/questions/0'
            }).

            //Defult Route
            otherwise({
              redirectTo: '/'
            });
        }]);



    a01.config(['$controllerProvider', function($controllerProvider) {
      // this option might be handy for migrating old apps, but please don't use it
      // in new ones!
      $controllerProvider.allowGlobals();
    }]);



    a01.run(function ($rootScope) {
    $rootScope.score = 0;
    //global variable for score
    $rootScope.used = 0;
    $rootScope.pagechange = 0;
    $rootScope.timing = 0;
    //global variable for corrected
    $rootScope.quizset = 0;
    $rootScope.resetcount = 0;
    $rootScope.activeresult = 0;
    $rootScope.questioncount = 0;

    //Global Variables for Hard Question Passthrough for Time + Page Control
    $rootScope.$on('handleEmit_h', function(event, args) {
      $rootScope.$broadcast('handleBroadcast_h', args);
  });

  $rootScope.$on('handleEmit_ha', function(event, args) {
    $rootScope.$broadcast('handleBroadcast_ha', args);
});
  });

    //start of irene testing//
    //ADD any variables you want to access in all controllers to the APP variable

    var APP = {}

    APP.user = {
      name:'',
      age:0
    };

    APP.scores = [];
    //end of irene testing line
    //End Index.js



    //Star Injection
    a01.controller('logcontroller', function($scope, $rootScope) {
    $rootScope.pagechange = 0;
       $rootScope.timing = 0;
       console.log("Time Gentlemen: " + $rootScope.timing + "Page Change: " + $rootScope.pagechange);

         //start of irene testing
         APP.scores=[];
         //end of irene testing line
         console.log("Check Log");
         $rootScope.quizset = Math.floor((Math.random() * 10) + 1);
         console.log("Quiz #: " + $rootScope.quizset);


         //start of irene testing
         $scope.user=APP.user;
         $scope.start=function(){
         APP.user=$scope.user;

         window.location='#/questions/0';


       };

         $scope.rstart=function(){
            APP.scores=[];
            window.location='#/questions/0';
         }
         //end of irene testing line
       });

       //------------------
       //Log In Contrller End

       //------------------
       //Quiz Select
       a01.controller('log_quizselect', function($scope, $rootScope) {

         $scope.easy = function ()
         {

           $rootScope.quizset = 1;

         }
          $scope.med = function ()
         {
              $rootScope.quizset = 2;

         }

           $scope.hard = function ()
         {
           $rootScope.quizset = 3;
         }
     });





    a01.controller('scorebarcontroller', function($scope, $rootScope) {

    $scope.scoring = $rootScope.score;
    $scope.correct = $rootScope.corrected;
    $scope.finalscore = $rootScope.score/100;

     $scope.scoreboardreset = function()
    {
   $rootScope.quizset = Math.floor((Math.random() * 10) + 1);
    console.log("Quiz Reset with #: " + $rootScope.quizset);
    $rootScope.used = 0;
    console.log("Correct Answers at: " + $rootScope.used);
    $rootScope.score = 0;
    console.log("Reset");
    }

  });



  //------------------
//Quiz Service Start
a01.service('quizservice', function($rootScope) {

  var questions_set1;
  var questions_set2;
  var length12 = 5;

$rootScope.questioncount = length12;

  console.log("Quiz Loaded #" + $rootScope.quizset + "Number of Questons :" +  $rootScope.questioncount);


  //Question Array

  //Set #1 - EASY
  questions_set1 = [
    {
      QuestionId:1,
      Question:"What is the name of the primary continent portrayed in Game of Thrones?",
      CheckId: 1,
      imgsrc: "img/redkeep.jpg",
      Answers: [
        {AnswerId:1, Answer:"Westeros"},
        {AnswerId:2, Answer:"Essos"},
        {AnswerId:3, Answer:"Dorne"},
        {AnswerId:4, Answer:"Valyria"}
      ]},
    {
      QuestionId:2,
      Question:"Which major family is known to always pay their debts?",
      CheckId: 4,
      imgsrc: "img/family.jpg",
      Answers: [
        {AnswerId:1, Answer:"Targaryen"},
        {AnswerId:2, Answer:"Greyjoy"},
        {AnswerId:3, Answer:"Tully"},
        {AnswerId:4, Answer:"Lannister"}
      ]},
           {
      QuestionId:3,
      Question:"Fill in the blank: _______ is coming:",
      CheckId: 4,
      imgsrc: "img/winter.jpg",
      Answers: [
        {AnswerId:1, Answer:"Death"},
        {AnswerId:2, Answer:"Summer"},
        {AnswerId:3, Answer:"Salvation"},
        {AnswerId:4, Answer:"Winter"}
      ]},
           {
      QuestionId:4,
      Question:"What group primarily consists of convicted criminals?",
      CheckId: 3,
      imgsrc: "img/thewall.jpg",
      Answers: [
        {AnswerId:1, Answer:"The Faceless Men"},
        {AnswerId:2, Answer:"The Brotherhood without Banners"},
        {AnswerId:3, Answer:"The Night’s Watch"},
        {AnswerId:4, Answer:"The Golden Company"}
      ]},
           {
      QuestionId:5,
      Question:"Identify the family that uses this sigil:",
      CheckId: 3,
      imgsrc: "img/nightisdark.png",
      Answers: [
        {AnswerId:1, Answer:"Stark"},
        {AnswerId:2, Answer:"Lannister"},
        {AnswerId:3, Answer:"Baratheon"},
        {AnswerId:4, Answer:"Targaryen"}
      ]}
  ]
  //Set #2 - MEDIUM
   questions_set2 = [
    {
      QuestionId:1,
      Question:"Who was proclaimed the “King of the North”?",
      CheckId: 1,
      imgsrc: "img/thenorth.jpg",
      Answers: [
        {AnswerId:1, Answer:"Robb Stark"},
        {AnswerId:2, Answer:"Tyrion Lannister"},
        {AnswerId:3, Answer:"Peter Baelish"},
        {AnswerId:4, Answer:"Mance Rayder"}
      ]},
    {
      QuestionId:2,
      Question:"What is the name of the throne belonging to Balon Greyjoy?",
      CheckId: 1,
      imgsrc: "img/ironislands2.jpg",
      Answers: [
        {AnswerId:1, Answer:"The Seastone Chair"},
        {AnswerId:2, Answer:"The Iron Throne"},
        {AnswerId:3, Answer:"The Throne of Winter"},
        {AnswerId:4, Answer:"The Seat of Dorne"}
      ]},
           {
      QuestionId:3,
      Question:"Which house is identified by a sigil of a flayed man?",
      CheckId: 1,
      imgsrc: "img/bolton.jpg",
      Answers: [
        {AnswerId:1, Answer:"House Bolton"},
        {AnswerId:2, Answer:"House Martell"},
        {AnswerId:3, Answer:"House Tarly"},
        {AnswerId:4, Answer:"House Mormont"}
      ]},
           {
      QuestionId:4,
      Question:"Which of these is not a location in Westeros?",
      CheckId: 4,
      imgsrc: "img/bravos.png",
      Answers: [
        {AnswerId:1, Answer:"Sunspear"},
        {AnswerId:2, Answer:"Highgarden"},
        {AnswerId:3, Answer:"Harrenhal"},
        {AnswerId:4, Answer:"Bravos"}
      ]},
           {
      QuestionId:5,
      Question:"What is Hodor's real name?",
      CheckId: 4,
      imgsrc: "img/hodor.jpg",
      Answers: [
        {AnswerId:1, Answer:"Edmund"},
        {AnswerId:2, Answer:"Gendry"},
        {AnswerId:3, Answer:"Daario Naharis"},
        {AnswerId:4, Answer:"Walder"}
      ]}

  ];

  //Select Quiz and Set Maximum Length
  this.getquestion = function(questionNumber) {


    var numberofquestions;

  if ($rootScope.quizset === 1)
  {
    console.log("Quiz 1");
    numberofquestions = questions_set1.length;


          if (numberofquestions == questionNumber) {
      return null;
    }

    return questions_set1[questionNumber];
  }

  else if ($rootScope.quizset === 2)
  {
    console.log("Quiz 2");
    numberofquestions = questions_set2.length;

          if (numberofquestions == questionNumber) {
      return null;
    }

    return questions_set2[questionNumber];
  }
  };


});
//------------------
//Quiz Service End



  //------------------
  //Questions Controller Start

  a01.controller('questionscontroller', function($scope,$rootScope, $routeParams,$location, quizservice) {

  $rootScope.pagechange = 1;
  $rootScope.timing = 1;
  console.log("Time Gentlemen: " + $rootScope.timing + "Page Change: " + $rootScope.pagechange);

    //irene testing
    $scope.user=APP.user;
    //end of irene testing

    var question = quizservice.getquestion(parseInt($routeParams.questionId));




    if (question === null) {
        $location.path( '/result/' );
    }



    //Change Markup
    $scope.questionnumber = $routeParams.questionId;
    $scope.question_num = question.QuestionId;
    $scope.question = question.Question;
    $scope.answers = question.Answers;
    $scope.check = question.CheckId;
    $scope.deck = question.imgsrc;


    //Change Markup

    $scope.answerquestion = function(answerid, answer, checking) {
      console.log("user answered with: " + answerid);
      console.log("CPU answered with: " + checking);

        //start of irene testing
        var isCorrect=false;

       //end of irene testing line

      //Check Answer
      if (answerid === checking)
      {

        //start of irene testing
        isCorrect=true;

       //end of irene testing line
      console.log("Correct");
      $rootScope.score =  $rootScope.score + 100;
      console.log("Part 2 :" + $rootScope.score);
      $rootScope.used = $rootScope.used + 1;
      }
      else
      {
       console.log("In-Correct");
      $rootScope.score =  $rootScope.score + 0;
      console.log("Part 2 :" + $rootScope.score);
         $rootScope.used = $rootScope.used + 1;
      }
      ///Next Question


      var nextQuestionId = parseInt($routeParams.questionId) + 1;
      $location.path( '/questions/' + nextQuestionId );
      $rootScope.answered = 1;

        //start of irene testing
        APP.scores.push({
          id:answerid, answer:answer, correct:isCorrect
        })

        console.log(APP.scores);

       //end of irene testing line

    };



  });
  //------------------
  //Questions Controller End





  a01.service('quizservicehard', function($rootScope) {

        var length21 = 5;
        $rootScope.questioncount = length21;
        console.log("Quiz Loaded #" + $rootScope.quizset + "Number of Questons :" +  $rootScope.questioncount);

        //Question Array
        //Set #1 - HARD


        questions_set3 = [
          {
            QuestionId:1
          },

            {
            QuestionId:2,

            correct:2
            },

            {
            QuestionId:3
            },

            {
            QuestionId:4
            },

            {
            QuestionId:5
            }
        ];

        //Select Quiz and Set Maximum Length
        this.getquestion = function(questionNumber) {

          var numberofquestions;
          console.log("Quiz 3");
          numberofquestions = questions_set3.length;
                if (numberofquestions == questionNumber) {
            return null;
          }
          return questions_set3[questionNumber];

        };
        //------------------
        //Quiz Service End
     });







      //Slider Inspired by
      //http://onehungrymind.com/build-sweet-photo-slider-angularjs-animate/
      //Build Sweet Photo Slider With AngularJS Aniamte

a01.controller('questionscontrollerh', function ($scope,$rootScope,$routeParams,$location, quizservicehard) {

        //Timer Style 2
        $rootScope.pagechange = 2;
        $rootScope.timing = 1;
        console.log("Time Gentlemen: " + $rootScope.timing + "Page Change: " + $rootScope.pagechange);
        console.log("Score :" + $rootScope.score);

        //------------------
        //Hard Questions Slider Start
        //Slide Array: Questions + Options

        $scope.slides = [
            {
            image: 'img/hard/hard-tyrion.jpg',         //Image
            question: 'Tyrion Lannister',              //Question
            questionID: 1, //QuestionID
            correct:1, //CorrectID
            answer_a:1, //AnswerID
            answer_d:2, //AnswerID
            answer_ad: "alive", //Answer String
            answer_dd: "dead" //Answer String
            },

            {
            image: 'img/hard/hard-jon.jpg',
            question: 'Jon Snow',
            questionID: 2, //QuestionID
            correct:1, //CorrectID
            answer_a:1, //AnswerID
            answer_d:2, //AnswerID
            answer_ad: "alive", //Answer String
            answer_dd: "dead" //Answer String
            },

            {
            image: 'img/hard/hard-rob.jpg',
            question: 'Rob Stark',
            questionID: 3,
            correct:2, //CorrectID
            answer_a:1, //AnswerID
            answer_d:2, //AnswerID
            answer_ad: "alive", //Answer String
            answer_dd: "dead" //Answer String
          },

            {
            image: 'img/hard/hard-shae.jpg',
            question: 'Shae',
            questionID: 4,
            correct:2, //CorrectID
            answer_a:1, //AnswerID
            answer_d:2, //AnswerID
            answer_ad: "alive", //Answer String
            answer_dd: "dead" //Answer String
          },


            {
            image: 'img/hard/hard-viper.jpg',
            question: 'Oberyn Martell',
            questionID: 5,
            correct:2, //CorrectID
            answer_a:1, //AnswerID
            answer_d:2, //AnswerID
            answer_ad: "alive", //Answer String
            answer_dd: "dead" //Answer String
          },

        ];

          //Defult Location
          $scope.currentIndex = 0;


          //Set ng-Hide
          $scope.setCurrentSlideIndex = function (index) {
              $scope.currentIndex = index;
          };

          //Set ng-Hide
          $scope.isCurrentSlideIndex = function (index) {
              return $scope.currentIndex === index;
          };

          //Slide Control
          $scope.prevSlide = function () {
              $scope.currentIndex = ($scope.currentIndex < $scope.slides.length ) ? ++$scope.currentIndex : 0;
          };

          //Slide Control
          $scope.nextSlide = function () {
              $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
          };

          //------------------
          //Hard Questions Slider End


          //------------------
          //Hard Questions Controller Start


          //irene testing
          $scope.user=APP.user;
          //end of irene testing

          var question = quizservicehard.getquestion(parseInt($routeParams.questionId));

          //Change Markup

          $scope.$on('handleBroadcast_h', function(event, args) {
        if (args.message === 1)
            {

              if ($rootScope.used === 5)
              {
                console.log("Quiz 3 Completed");
                $location.path( '/resulth/' );
                $rootScope.pagechange = 0;
              }
              else
              {
                $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;

                console.log("Swap on Time Out");
                console.log("Swap Count :" + $rootScope.used);
              }

            }



        });






          $scope.answerquestionh = function(answerid, checking) {
          console.log("Hard user answered with: " + answerid);
          console.log("Hard CPU answered with: " + checking);

                    //start of irene testing
                  var isCorrect=false;
                    //end of irene testing line

                  //Check Answer if Correct
                  if (answerid === checking)
                  {

                        //start of irene testing
                        isCorrect=true;
                        //end of irene testing line


                  console.log("Correct");
                  $rootScope.score =  $rootScope.score + 100;
                  console.log("Hard Part 2 :" + $rootScope.score);
                   $rootScope.used = $rootScope.used + 1;
                  if ($rootScope.used === 5){

                    $scope.$emit('handleEmit_h', {message: 1});
                   }
                  }

                  else
                  {
                   console.log("In-Correct");
                  $rootScope.score =  $rootScope.score + 0;
                  console.log("Hard Part 2 :" + $rootScope.score);
                   $rootScope.used = $rootScope.used + 1;
                   if ($rootScope.used === 5){

                    $scope.$emit('handleEmit_h', {message: 1});
                   }





                  }

                  ///Next Question



                  var nextQuestionId = parseInt($routeParams.questionId) + 1;

                  $rootScope.answered = 1;

                  console.log("Swap Count Answered :" + $rootScope.used);
                  $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;

                  console.log("Score Post Answer:" + $rootScope.score);
                  $scope.$emit('handleEmit_ha', {message: 1});


                    //start of irene testing
                    //APP.scores.push({
                    //  id:answerid, answer:answer, correct:isCorrect
                    //})

                    console.log(APP.scores);

                   //end of irene testing line

                };




              //------------------
              //Hard Questions Controller End

    });


//End Slide Control for Hard Questions



    //------------------
    //Result Controller

    a01.controller('resultcontroller', function($scope, $rootScope) {



       //irene testing
      $scope.user=APP.user;
      //end of irene testing

            //start of irene testing
                    //show scores

            $scope.scores = APP.scores;


         //end of irene testing line



    console.log("End of the Road");
    $rootScope.pagechange = 0;
    $rootScope.timing = 0;
    console.log("Time Gentlemen: " + $rootScope.timing + "Page Change: " + $rootScope.pagechange);


    $scope.rs = function()
    {

    console.log("Quiz Reset with #: " + $rootScope.quizset);
    $rootScope.used = 0;
    console.log("Correct Answers at: " + $rootScope.used);
    $rootScope.score = 0;
    console.log("Reset");
    }

  })


//----------------
//Easy Medium Time Controller
   a01.controller('timerctrl',
   function($scope,$timeout, $rootScope, $routeParams,$location, quizservice) {

     var timesup;
    if ($rootScope.pagechange === 0)
    {
        console.log("New View at 0");
    } //Timer Disabled

    //Time Control Q Easy and Medium
    else if ($rootScope.pagechange === 1)
    {
        startclock();
        $scope.counter = 5;



    $scope.onTimeout = function()
    {

    $scope.counter--;
    mytimeout = $timeout($scope.onTimeout,1000);
    }

    var mycountdown =  $timeout($scope.onTimeout,1000);


  }//Time Enabled for Easy and Medium



    function startclock()
       {
           console.log("Start Clock");
           timesup = setTimeout(callTimeout, 5000);
           console.log(timesup);
       }


    function callTimeout() {
   console.log("Timeout : Question Incorrect");
var question = quizservice.getquestion(parseInt($routeParams.questionId));

var nextQuestionId = parseInt($routeParams.questionId) + 1;
$rootScope.used = $rootScope.used + 1;

$scope.$apply(function() {
$location.path( '/questions/' + nextQuestionId );
});



if ($rootScope.used === 5)
{
  $timeout.cancel(timesup);
}
else
{
  console.log("Cleared");
  $timeout.cancel(timesup);
}

    }
 });
 //End Easy Medium Time Controller
 //----------------



 //----------------
 //Hard Time Controller
    a01.controller('timerctrlh',
    function($scope,$timeout, $rootScope, $routeParams,$location, quizservicehard) {
    var doubleswap = 0;
    var timesup;
     if ($rootScope.pagechange === 0)
     {
         console.log("New View at 0");
     } //Timer Disabled


     else if ($rootScope.pagechange === 2)
     {
         startclockh();


     $scope.onTimeouth = function()
     {

       $scope.counterh--;
     mytimeouth = $timeout($scope.onTimeouth,1000);

     }

     var mycountdownh =  $timeout($scope.onTimeouth,1000);



     }



     function startclockh()
        {
            console.log("Start Clock");
            timesuph = setTimeout(callTimeouth, 10000);
            console.log(timesuph);
            $scope.counterh = 10;

        }




     function callTimeouth()
     {
     console.log("Hard Timeout : Question Incorrect");

     $rootScope.used = 5;
       if ($rootScope.used === 5 && doubleswap === 0)
       {
         $scope.$emit('handleEmit_h', {message: 1});
         console.log("You Ran out of Time");
         $timeout.cancel(timesuph);
       }
       else
       {
         $scope.$emit('handleEmit_h', {message: 1});
         console.log("Cleared");
         $timeout.cancel(timesuph);
         startclockh();
       }

     }
  });
  //End Easy Medium Time Controller
  //----------------
