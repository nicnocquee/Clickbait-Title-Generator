"use strict";angular.module("clickbaitApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","angularMoment"]).config(["$routeProvider",function(a){a.when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).when("/",{templateUrl:"views/home.html",controller:"HomeCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("clickbaitApp").controller("MainCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("clickbaitApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("clickbaitApp").controller("HomeCtrl",["$scope","$http",function(a,b){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],a.titles=[],a.poolDisplay=!1,a.buttonDisplay=!1,a.baits=["At first you'll be intrigued. Then you'll be blown away.","I'm still trying to pick my jaw up off the floor.","If You Can Watch This And Not Feel Disgusted, Then You Have No Emotions.","Try Not To Groan When You See It.","You won't believe what happens next.","First you'll be shocked then you'll be inspired.","You won't believe it actually happened.","Just try not to stare at it.","There is no God.","You're gonna weep for the future.","Here's why.","My God, you HAVE to see this.","It just blows my mind.","You will never think the same way again.","I dare you to watch this.","I can't believe what I just read.","I can't believe what I just watched.","I can't believe what I just saw.","You've been doing it wrong all this time.","You think you know it well. But you know nothing, Jon Snow!","You will never see it the same way again.","Forget what you know because you know nothing actually.","Belive it or not, it changed his life.","Belive it or not, it changed her life.","We can close the internet now.","So hilarious you will die.","What happens next is beyond this world.","What happens next is more than what you can imagine."],a.result=function(){return a.who&&a.doing?(a.buttonDisplay=!0,a.who+" "+a.doing+". "+a.bait):(a.buttonDisplay=!1,"")},a.generate=function(){a.bait=a.baits[Math.floor(Math.random()*a.baits.length)]},a.generate(),a.textToTweet=function(){return encodeURIComponent(a.result()+" http://nicnocquee.com/Clickbait-Title-Generator")},a.textToTweetForTitle=function(a){return encodeURIComponent(a+" http://nicnocquee.com/Clickbait-Title-Generator")},a.reloadPool=function(){var c={method:"GET",url:"https://api.parse.com/1/classes/Pool?order=-createdAt&limit=100",headers:{"X-Parse-Application-Id":"gi94Kt6C7BZvtWdu94TOwtwLEl9fT018dye2zJHj","X-Parse-REST-API-Key":"UgdcX3NKVt6r44Kakezy8kPNDPS6V4NAH8vL1n4q","Content-Type":"application/json"}};b(c).success(function(b){var c=b.results;a.titles=c,a.titles.length>0&&(a.poolDisplay=!0)}).error(function(){})},a.reloadPool(),a.submitToPool=function(){var c=a.result(),d={method:"POST",url:"https://api.parse.com/1/classes/Pool",headers:{"X-Parse-Application-Id":"gi94Kt6C7BZvtWdu94TOwtwLEl9fT018dye2zJHj","X-Parse-REST-API-Key":"UgdcX3NKVt6r44Kakezy8kPNDPS6V4NAH8vL1n4q","Content-Type":"application/json"},data:{title:c}};b(d).success(function(){a.reloadPool()}).error(function(){})}}]);