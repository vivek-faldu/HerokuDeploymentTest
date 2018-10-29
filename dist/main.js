(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Components/MovieComponents/movie-card-component/movie-card.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/Components/MovieComponents/movie-card-component/movie-card.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n/* A CSS class for properties of mat-card*/\n.movie-card {\n    max-width: 250px;\n    background: white;\n    text-decoration: none;\n    color: #444;\n    box-shadow: 0 2px 5px rgba(0,0,0,0.1);\n    display: flex;\n    flex-direction: column;\n    min-height: 100%;\n    position: relative;\n    top: 0;\n    transition: all .2s ease-in;\n    \n  }\n.mat-card-header{\n    height: 100px;\n  }\n/*A CSS Class that handles styling of hovered card*/\n.movie-card:hover {\n    top: -10px;\n    box-shadow: 0 4px 5px rgba(0,0,0,0.5)\n  }\n/* A CSS class for each image*/\n.movie-header-image {\n    background-size: cover;\n  }\n\n  \n\n  "

/***/ }),

/***/ "./src/app/Components/MovieComponents/movie-card-component/movie-card.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/Components/MovieComponents/movie-card-component/movie-card.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"movie-card\">\n  <mat-card-header>\n    <div mat-card-avatar class=\"movie-header-image\"></div>\n    <mat-card-title> <strong>{{movie.title}}</strong></mat-card-title>\n    <mat-card-subtitle> {{movie.id}}</mat-card-subtitle>\n  </mat-card-header>\n  <img mat-card-image src= {{movie.poster_path}}  alt=\"Movie Image\">\n  \n  <mat-card-actions>\n    <button class = \"btn btn-success\" (click)=\"getDetails()\">Details</button>\n    <button class = \"btn btn-primary\">Add to Wishlist</button>\n  </mat-card-actions>\n</mat-card>\n\n\n"

/***/ }),

/***/ "./src/app/Components/MovieComponents/movie-card-component/movie-card.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/Components/MovieComponents/movie-card-component/movie-card.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: MovieCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieCardComponent", function() { return MovieCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _movie_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../movie.model */ "./src/app/Components/movie.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MovieCardComponent = /** @class */ (function () {
    function MovieCardComponent(router) {
        this.router = router;
    }
    MovieCardComponent.prototype.ngOnInit = function () {
    };
    MovieCardComponent.prototype.getDetails = function () {
        this.router.navigate(['movie_details', { movie_id: this.movie.id }]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _movie_model__WEBPACK_IMPORTED_MODULE_1__["Movie"])
    ], MovieCardComponent.prototype, "movie", void 0);
    MovieCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-movie-card',
            template: __webpack_require__(/*! ./movie-card.component.html */ "./src/app/Components/MovieComponents/movie-card-component/movie-card.component.html"),
            styles: [__webpack_require__(/*! ./movie-card.component.css */ "./src/app/Components/MovieComponents/movie-card-component/movie-card.component.css")]
        })
        /*
        * A class that acts as controller for movie-card-component.
        * @Author: Sai Saran Kandimalla.
        * @version 1: created on 09/18/2018.
        */
        ,
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MovieCardComponent);
    return MovieCardComponent;
}());



/***/ }),

/***/ "./src/app/Components/MovieComponents/movie-slide/movie-slide.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/Components/MovieComponents/movie-slide/movie-slide.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* the code is referenced from https://www.w3schools.com/howto/howto_js_slideshow.asp */\n* {box-sizing:border-box}\n/* Slideshow container */\n.slideshow-container {\n  max-width: 1100px;\n  position: relative;\n  margin: auto;\n}\n/*css styles for image*/\n.slideshow-container img{\n    height: 420px;\n    width:100%;\n    transition: src 0.6s step-start;\n}\n.mySlides {\n    max-height: 50%;\n}\n/* Next & previous buttons */\n.prev, .next {\n  cursor: pointer;\n  position: absolute;\n  top: 50%;\n  width: auto;\n  margin-top: -22px;\n  padding: 16px;\n  background-color: #f2f2f2;\n  font-weight: bold;\n  font-size: 18px;\n  transition: 0.6s ease;\n  border-radius: 0 3px 3px 0;\n}\n/* Position the \"next button\" to the right */\n.next {\n  right: 0;\n  border-radius: 3px 0 0 3px;\n}\n/* On hover, add a black background color with a little bit see-through */\n.prev:hover, .next:hover {\n  background-color: rgba(252, 250, 250, 0.8);\n}\n/* The dots*/\n.dot {\n  cursor: pointer;\n  margin: auto;\n  position: relative;\n  height: 10px;\n  width: 10px;\n  margin: 0 2px;\n  bottom: 20px;\n  background-color: #bbb;\n  border-radius: 50%;\n  display: inline-block;\n  transition: background-color 0.6s ease-in-out;\n}\n.center-dot {\n justify-content: center; \n}\n@-webkit-keyframes fade {\n  from {opacity: .4} \n  to {opacity: 1}\n}\n@keyframes fade {\n  from {opacity: .4} \n  to {opacity: 1}\n}"

/***/ }),

/***/ "./src/app/Components/MovieComponents/movie-slide/movie-slide.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/Components/MovieComponents/movie-slide/movie-slide.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- The code is referenced from https://www.w3schools.com/howto/howto_js_slideshow.asp -->\n<!-- Slideshow container -->\n<div class=\"slideshow-container\">\n\n  <!-- Full-width images with number and caption text -->\n  <div class=\"mySlides\">\n    <img [(src)]=currentMovie.imageUrl alt=\"slide show\">\n    </div>\n  \n  <!-- Next and previous buttons -->\n  <a class=\"prev\" (click)=\"changeSlide(-1)\">&#10094;</a>\n  <a class=\"next\" (click)=\"changeSlide(1)\">&#10095;</a>\n  \n  <!-- Dots -->\n  <div class=\"container\">\n      <div class=\"row center-dot\">\n        <div  *ngFor=\"let movieId of popularMovies\"  >\n          <span \n          [ngStyle] = \"{'background-color': movieId.sNumber==currentMovie.sNumber?'#717171':'#bbb'}\"\n          class=\"dot\" (click) = \"jumpSlide(movieId.sNumber)\" >\n          </span> \n        </div>\n      </div>\n    </div>\n</div>\n<br>\n\n"

/***/ }),

/***/ "./src/app/Components/MovieComponents/movie-slide/movie-slide.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/Components/MovieComponents/movie-slide/movie-slide.component.ts ***!
  \*********************************************************************************/
/*! exports provided: MovieSlideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieSlideComponent", function() { return MovieSlideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MovieSlideComponent = /** @class */ (function () {
    function MovieSlideComponent() {
        //array of popular movies that needs to be seen on slider.
        this.popularMovies = [
            { sNumber: 1, imageUrl: "https://3.bp.blogspot.com/-1hXvJeWAWGY/WUDHSFbd4HI/AAAAAAAAAOc/9NvGkXxRGlERV8VSWtw7-CVw-YYTfmsKACLcBGAs/s1600/A153L.jpg" },
            { sNumber: 2, imageUrl: "https://cms-assets.tutsplus.com/uploads/users/166/posts/29098/final_image/Aquaman%20Inspired%20Text%20Effect%20-%20850.jpg" },
            { sNumber: 3, imageUrl: "https://3.bp.blogspot.com/-1hXvJeWAWGY/WUDHSFbd4HI/AAAAAAAAAOc/9NvGkXxRGlERV8VSWtw7-CVw-YYTfmsKACLcBGAs/s1600/A153L.jpg" },
            { sNumber: 4, imageUrl: "https://cms-assets.tutsplus.com/uploads/users/166/posts/29098/final_image/Aquaman%20Inspired%20Text%20Effect%20-%20850.jpg" }
        ];
        this.currentMovie = this.popularMovies.find(function (x) { return x.sNumber === 1; });
    }
    MovieSlideComponent.prototype.ngOnInit = function () {
        this.startSliderInterval();
    };
    /*
    * The method start the interval that traverses between images in regular intervals
    */
    MovieSlideComponent.prototype.startSliderInterval = function () {
        var _this = this;
        this.timeInterval = setInterval(function () {
            if (_this.currentMovie.sNumber == 4) {
                _this.currentMovie = _this.popularMovies.find(function (x) { return x.sNumber === 1; });
            }
            else {
                _this.currentMovie = _this.popularMovies.find(function (x) { return x.sNumber === _this.currentMovie.sNumber + 1; });
            }
        }, 5000);
    };
    /*
    * The method changes slides when "prev", "next" are clicked
    * @param: slideNumber: the sNumber of the image that needs to be displayed
    */
    MovieSlideComponent.prototype.changeSlide = function (slideNumber) {
        var _this = this;
        if (this.currentMovie.sNumber + slideNumber == 0) {
            this.currentMovie = this.popularMovies.find(function (x) { return x.sNumber === 4; });
        }
        else if (this.currentMovie.sNumber + slideNumber == 5) {
            this.currentMovie = this.popularMovies.find(function (x) { return x.sNumber === 1; });
        }
        else {
            this.currentMovie = this.popularMovies.find(function (x) { return x.sNumber === _this.currentMovie.sNumber + slideNumber; });
        }
        //reset slide interval.
        clearInterval(this.timeInterval);
        this.startSliderInterval();
    };
    /*
    * The method changes slides when "dots" are clicked.
    * @param: slideNumber: the sNumber of the image that needs to be displayed
    */
    MovieSlideComponent.prototype.jumpSlide = function (slideNumber) {
        this.currentMovie = this.popularMovies.find(function (x) { return x.sNumber === slideNumber; });
        //reset slide interval.
        clearInterval(this.timeInterval);
        this.startSliderInterval();
    };
    MovieSlideComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-movie-slide',
            template: __webpack_require__(/*! ./movie-slide.component.html */ "./src/app/Components/MovieComponents/movie-slide/movie-slide.component.html"),
            styles: [__webpack_require__(/*! ./movie-slide.component.css */ "./src/app/Components/MovieComponents/movie-slide/movie-slide.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MovieSlideComponent);
    return MovieSlideComponent;
}());



/***/ }),

/***/ "./src/app/Components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/Components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  background-color: black !important;\n  /*text-align: center;*/\n  bottom: 0;\n  width: 100% !important;\n  height: 100%; /* Set the fixed height of the footer here */\n  /*line-height: 80px;  Vertically center the text there */\n  background-color: #f5f5f5;\n}\n\n.logo{\n\tcolor: red;\n\tfont-size: 15px;\n\tfont-weight: bold;\n\tfont-family: \"Times New Roman\", Times, serif;\n}\n\n.logo-footer{\n  margin: auto;\n  width:6%;\n  padding-bottom: 20px;\n}\n\n.rights{\n  padding-top: 1%;\n  float: left;\n\tcolor: white;\n\tfont-size: 12px;\n\tfont-weight: 0;\n\ttext-align: center;\n  width: 100%;\n}\n\n.parallax {\n    /* The image used */\n    background-image: url(\"coke.jpg\");\n\n    /* Set a specific height */\n    min-height: 200px; \n    max-width: 100%;\n\n    /* Create the parallax scrolling effect */\n    background-attachment: fixed;\n    background-position: 50% 85%;\n    background-repeat: no-repeat;\n    background-size: auto;\n}"

/***/ }),

/***/ "./src/app/Components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/Components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<footer class=\"footer\">\n\t<div class=\"parallax\"></div>\n\t<!-- <div class=\"container\"> -->\n\t\t<span class=\"rights\">You are officially findning movies on</span>\n\t\t<div class=\"logo-footer\"><span class=\"logo\">FindMyShow</span></div>\n\t<!-- </div> -->\n</footer>"

/***/ }),

/***/ "./src/app/Components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/Components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/Components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/Components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/Components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/Components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*CSS class to create rows for movie cards*/\n.band {\n    margin: 5px auto;\n    display: -ms-grid;\n    display: grid;\n    -ms-grid-columns: 1fr 1fr 1fr 1fr;\n        grid-template-columns: 1fr 1fr 1fr 1fr;\n    -ms-grid-rows: auto;\n        grid-template-rows: auto;\n    grid-gap: 20px;\n  }"

/***/ }),

/***/ "./src/app/Components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/Components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The division below handles movie slider.-->\n<div *ngIf=\"showSlider\">\n  <app-movie-slide></app-movie-slide>\n</div>\n<br>\n<div class=\"band container\">\n  <div *ngFor=\"let movie of movies\">\n    <app-movie-card [movie]=movie> </app-movie-card>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/Components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/Components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _Services_movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/movie.service */ "./src/app/Services/movie.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(movieService, router, activatedRoute) {
        this.movieService = movieService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.showSlider = true;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.router.url.includes("/search")) {
            this.showSlider = false;
            this.searchMovies();
        }
        else if (this.router.url.includes("/coming_soon")) {
            this.showSlider = false;
            this.upcomingMovies();
        }
        else {
            this.showSlider = true;
            this.movieService.getMovies().subscribe(function (response) {
                _this.movies = response;
            });
        }
    };
    HomeComponent.prototype.searchMovies = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            var movieName = params["name"];
            _this.movieService
                .getSearchedMovieList(movieName)
                .subscribe(function (res) {
                _this.movies = res;
            });
        });
    };
    HomeComponent.prototype.upcomingMovies = function () {
        var _this = this;
        this.movieService.getUpcomingMovieList().subscribe(function (res) {
            _this.movies = res;
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-home",
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/Components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/Components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/Components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/Components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input.ng-invalid.ng-touched {\n    border-color: red;\n}"

/***/ }),

/***/ "./src/app/Components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/Components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <form [formGroup]=\"loginForm\" (ngSubmit)=\"onLoginSubmit()\">\n        \n        <div formGroupName=\"loginData\">\n          \n          <div class=\"form-group\">\n            <label for=\"email\">Email:</label>\n            <input \n            class=\"form-control\" \n            type=\"email\" \n            name=\"email\" \n            id=\"email\" \n            formControlName=\"email\"\n            placeholder=\"{{emailPlaceholder}}\"\n            [(ngModel)]=\"credentials.email\">\n          </div>\n          \n          <span \n          class=\"help-block\"\n          *ngIf=\"!loginForm.get('loginData.email').valid && loginForm.get('loginData.email').touched\">\n          <p style=\"color: red\">\n            please enter valid email!\n          </p>  \n          </span>\n          \n          <div class=\"form-group\">\n            <label for=\"password\">Password:</label>\n            <input \n            class=\"form-control\" \n            type=\"password\" \n            name=\"password\" \n            id=\"password\" \n            formControlName=\"password\"\n            placeholder=\"{{passwordPlaceholder}}\"\n            [(ngModel)]=\"credentials.password\">\n          </div>\n\n          <span \n          class=\"help-block\"\n          *ngIf=\"!loginForm.get('loginData.password').valid && loginForm.get('loginData.password').touched\">\n          <p style=\"color: red\">\n            please enter password!\n          </p>  \n          </span>\n          \n          <button [disabled]=\"!loginForm.valid\" class=\"btn btn-danger\" tpye=\"submit\">Log in</button> \n          <br>\n          <br>\n          <p style=\"color: red\"> {{error}} </p>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/Components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/Components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _Services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/authentication.service */ "./src/app/Services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.error = "";
        this.credentials = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            location: ''
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = new _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'loginData': new _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                'email': new _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
                'password': new _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
            })
        });
        this.emailPlaceholder = "please enter your email here";
        this.passwordPlaceholder = "please enter your password here";
    };
    //method that handles login form submit button.
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        this.authenticationService.login(this.credentials).subscribe(function () {
            _this.router.navigateByUrl('/home');
            _this.authenticationService.getDialogRef().close();
        }, function (error) {
            _this.error = "The username/password is invalid. Please try again";
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/Components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/Components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/Components/movie-details/movie-details.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/Components/movie-details/movie-details.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".td-config{\n    width: 200px;\n    position: relative;\n    top: 0px;\n}\n\n.scroller {\n    overflow: scroll;\n    height: 50px;\n}"

/***/ }),

/***/ "./src/app/Components/movie-details/movie-details.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/Components/movie-details/movie-details.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"display: flex;\">\n    <div><img src={{movie.poster_path}}></div>\n\n    <div style=\"background-color:white;color: black;padding:10px;\">\n        <table>\n            <tr>\n                <td align=\"right\" class=\"td-config\"><b>Movie name :</b></td>\n                <td>\n                    <font color=\"black\">&nbsp;{{movie.original_title}}</font>\n                </td>\n            </tr>\n            <tr *ngIf=\"movie.tagline\">\n                <td align=\"right\" class=\"td-config\"><b>Tag line :</b></td>\n                <td>\n                    <font color=\"black\">&nbsp;{{movie.tagline}}</font>\n                </td>\n            </tr>\n            <tr>\n                <td align=\"right\" class=\"td-config\"><b>Genres :</b></td>\n                <td><span *ngFor=\"let genre of movie.genres; let isLast=last\">\n                        <font color=\"black\">{{genre.name}}{{isLast ? '' : '/'}}</font>\n                    </span>\n                </td>\n            </tr>\n            <tr>\n                <td align=\"right\" class=\"td-config\"><b>Original Language :</b></td>\n                <td>\n                    <font color=\"black\">&nbsp;{{movie.original_language}}</font>\n                </td>\n            </tr>\n            <tr>\n                <td align=\"right\" valign=\"top\" class=\"td-config\"><b>Star Cast :</b></td>\n                <td>\n                    <div class=\"scroller\"><span *ngFor=\"let cast of movie.cast; let isLast=last\">\n                            <font color=\"black\">{{cast.name}}{{isLast ? '' : ', '}}</font>\n                        </span></div>\n                </td>\n            </tr>\n            <tr>\n                <td align=\"right\" valign=\"top\" class=\"td-config\"><b>Producer :</b></td>\n                <td><span *ngFor=\"let crew of movie.crew\">\n                        <font color=\"black\" *ngIf=\"crew.job=='Producer'\">{{crew.name}},</font>\n                    </span>\n                </td>\n            </tr>\n            <tr>\n                <td align=\"right\" valign=\"top\" class=\"td-config\"><b>Director :</b></td>\n                <td><span *ngFor=\"let crew of movie.crew\">\n                        <font color=\"black\" *ngIf=\"crew.job=='Director'\">{{crew.name}},</font>\n                    </span>\n                </td>\n            </tr>\n            <tr>\n                <td align=\"right\" class=\"td-config\"><b>Release Date :</b></td>\n                <td>\n                    <font color=\"black\">&nbsp;{{movie.release_date | date}}</font>\n                </td>\n            </tr>\n            <tr>\n                <td align=\"right\" class=\"td-config\"><b>Vote average :</b></td>\n                <td>\n                    <font color=\"black\">&nbsp;{{movie.vote_average}}</font>\n                </td>\n            </tr>\n            <tr>\n                <td align=\"right\" class=\"td-config\"><b>Vote count :</b></td>\n                <td>\n                    <font color=\"black\">&nbsp;{{movie.vote_count}}</font>\n                </td>\n            </tr>\n        </table>\n        <br>\n        <b>Overview:</b>\n        <p>\n            <font color=\"black\">{{movie.overview}}</font>\n        </p>\n        <div class=\"container row\">\n            <app-time-and-theatre></app-time-and-theatre>\n        </div>\n    </div>\n</div>\n\n<div>\n    <app-similar-movies [movieID]=\"movie_id\"></app-similar-movies>\n</div>"

/***/ }),

/***/ "./src/app/Components/movie-details/movie-details.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/Components/movie-details/movie-details.component.ts ***!
  \*********************************************************************/
/*! exports provided: MovieDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailsComponent", function() { return MovieDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _Services_movie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Services/movie.service */ "./src/app/Services/movie.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MovieDetailsComponent = /** @class */ (function () {
    function MovieDetailsComponent(movieService, route) {
        this.movieService = movieService;
        this.route = route;
    }
    MovieDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) { _this.movie_id = params['movie_id']; });
        this.movieService.getMovieDetails(this.movie_id).subscribe(function (response) {
            _this.movie = response;
        });
    };
    MovieDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-movie-details',
            template: __webpack_require__(/*! ./movie-details.component.html */ "./src/app/Components/movie-details/movie-details.component.html"),
            styles: [__webpack_require__(/*! ./movie-details.component.css */ "./src/app/Components/movie-details/movie-details.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_movie_service__WEBPACK_IMPORTED_MODULE_1__["MovieService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], MovieDetailsComponent);
    return MovieDetailsComponent;
}());



/***/ }),

/***/ "./src/app/Components/movie.model.ts":
/*!*******************************************!*\
  !*** ./src/app/Components/movie.model.ts ***!
  \*******************************************/
/*! exports provided: Movie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Movie", function() { return Movie; });
/*
* A model class for movie.
* @Author: Sai Saran Kandimalla.
* @version 1: created on 09/18/2018.
*/
var Movie = /** @class */ (function () {
    function Movie() {
    }
    return Movie;
}());



/***/ }),

/***/ "./src/app/Components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/Components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navigation{\n\twidth: 100%;\n\tbackground-color: black;\n\n}\n\n.logo{\n\tcolor: maroon;\n\ttext-align: right;\n\tfont-size: 20px;\n\tfont-weight: bold;\n\tpadding-top: 17%;\n\tcursor: pointer;\n}\n\n.search-box{\n\tpadding-top: 4%;\n\talign-content: center;\n\theight: 0;\n}\n\n.search-button{\n\tbackground-color: maroon;\n\tcursor: pointer;\n\tfont-size: 12px;\n\twidth: 40%;\n\theight: 100%;\n\tborder: 1px solid #8D0707;\n\ttext-align: center;\n}\n\n.search-content{\n\tpadding-top: 2.7%;\n}\n\n.navbar{\n\tfloat: left;\n\tpadding: 0rem 30% !important;\n}\n\n.user-button{\n\tbackground-color: maroon;\n\tfont-size: 10px;\n\tvertical-align: center;\n}\n\n.nav-li {\n\tcolor: maroon;\n\tdisplay: block;\n\tpadding: 0.8rem 0.6rem;\n\tfont-size: 16px;\n}\n\n.navset {\n\tdisplay: flex;\n\tpadding-left: 0;\n\tmargin-bottom: 0;\n\tlist-style: none;\n\tmax-width: auto;\n}\n\n.login-button{\n\tbackground-color: maroon;\n\tcursor: pointer;\n\tfont-size: 9px;\n \tborder: 1px solid black;\n \ttext-align: center;\n \tvertical-align: center;\n }\n\n.log{\n \tpadding-left: 1%;\n \tdisplay: inline;\n }\n\n.caret-text{\n\t margin-left: 10px;\n\t color: maroon;\n }\n\na:not([href]):not([tabindex]) {\n\t color: white;\n }\n\n@media (min-width: 768px) and (max-width: 1199px) { \n\n\t.logo{\n\t\tcolor: maroon;\n\t\ttext-align: right;\n\t\tfont-size: 18px;\n\t\tfont-weight: bold;\n\t\tpadding-top: 17%;\n\t}\n\n\t.search-box{\n\t\tpadding-top: 3%;\n\t\talign-content: center;\n\t\theight: 0;\n\t}\n\n\t.search-button{\n\t\tbackground-color: maroon;\n\t\tfont-size: 10px;\n\t\twidth: 75%;\n\t\theight: 100%;\n\t\tborder: 1px solid #8D0707;\n\t\ttext-align: center;\n\t}\n\n\t.search-content{\n\t\tpadding-top: 2%;\n\t\tpadding-left: 1% !important;\n\t}\n\n    .nav-li{\n    \tcolor: maroon;\n\t\tdisplay: block;\n\t\tpadding: 0.8rem 0.4rem;\n\t\tfont-size: 11px;\n    }\n\n    .navbar{\n\t\tpadding: 0rem 32% !important;\n\t}\n\n\t.login-button{\n\t \tbackground-color: maroon;\n\t \tfont-size: 8px;\n\t \tborder: 1px solid black;\n\t \ttext-align: center;\n\t \tvertical-align: center;\n\t \theight: 2%;\n\t }\n\n\t .signup-button{\n\t\tbackground-color: maroon;\n\t\tfont-size: 8px;\n\t\tborder: 1px solid black;\n\t\ttext-align: center;\n\t\tvertical-align: center;\n\t\theight: 2%;\n\t}\t \n}\n\n@media (max-width: 767px) { \n\n\t.logo{\n\t\tcolor: maroon;\n\t\ttext-align: right;\n\t\tfont-size: 16px;\n\t\tfont-weight: bold;\n\t\tpadding-top: 17%;\n\t}\n\n\t.search-box{\n\t\tpadding-top: 2%;\n\t\talign-content: center;\n\t\theight: 0;\n\t}\n\n\t.search-button{\n\t\tbackground-color: maroon;\n\t\tfont-size: 10px;\n\t\twidth: 75%;\n\t\theight: 100%;\n\t\tborder: 1px solid #8D0707;\n\t\ttext-align: center;\n\t}\n\n\t .search-content{\n\t\tpadding-top: 1.8%;\n\t\tpadding-left: 1% !important;\n\t}\n\n    .nav-li{\n    \tcolor: maroon;\n\t\tdisplay: block;\n\t\tpadding: 0.8rem 0.3rem;\n\t\tfont-size: 9px;\n    }\n\n    .navbar{\n\t\tpadding: 0rem 30% !important;\n\t}\n\n\t.login-button{\n\t \tbackground-color: maroon;\n\t \tfont-size: 7px;\n\t \tborder: 1px solid black;\n\t \ttext-align: center;\n\t \tvertical-align: center;\n\t \theight: 1%;\n\t }\n\n\t .signup-button{\n\t\tbackground-color: maroon;\n\t\tfont-size: 7px;\n\t\tborder: 1px solid black;\n\t\ttext-align: center;\n\t\tvertical-align: center;\n\t\theight: 1%;\n\t}\t \n}\n\n\n\n"

/***/ }),

/***/ "./src/app/Components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/Components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid navigation\">\n  <div class=\"row\">\n    <div class=\"col-md-2 col-sm-2\">\n      <div class=\"logo\" (click)=\"navigateToHome()\">FindMyShow</div>\n    </div>\n    <div class=\"col-md-8 col-sm-8\">\n      <div class=\"form-group search-box\">\n        <input type=\"text\" class=\"form-control\" id=\"search_subject\" placeholder=\"Search for movies\" (keyup.enter)=\"searchMovies(seachForm.value)\"\n          [formControl]=\"seachForm\">\n      </div>\n    </div>\n    <div class=\"col-md-2 col-sm-2 search-content\">\n      <a class=\"btn btn-primary search-button\" role=\"button\" (click)=\"searchMovies(seachForm.value)\">Search</a>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"navbar\">\n      <nav class=\"navset\">\n        <a class=\"nav-li\" href=\"/home\">Home</a>\n        <a class=\"nav-li\" href=\"/coming_soon\">Coming Soon</a>\n        <a class=\"nav-li\" href=\"/wish_list\">Wish List</a>\n        <a class=\"nav-li\" href=\"/latest\">Latest</a>\n      </nav>\n      <div class=\"log\" *ngIf=\"!this.authenticationService.isLoggedIn()\">\n        <button class=\"btn btn-primary login-button\" (click)=\"openDialog()\">Log In</button>\n      </div>\n      <div class=\"signup\" *ngIf=\"!this.authenticationService.isLoggedIn()\">\n        <button class=\"btn btn-primary login-button\" (click)=\"openSignUp()\">Sign Up</button>\n      </div>\n      <div class=\"nav dropdown\" *ngIf=\"this.authenticationService.isLoggedIn()\">\n        <button class=\"btn btn-danger user-button dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n          aria-expanded=\"false\" (click)=\"toggleDropdown()\">\n          hi, {{this.authenticationService.getUser().firstName}}!\n        </button>\n        <div class=\"dropdown-menu\" id=\"dropdownMenuButton\">\n          <a class=\"dropdown-item nav-li\" [routerLink]=\"['preferences']\">Set Preferences</a>\n          <a class=\"dropdown-item nav-li\" href=\"#\" (click)=\"logOut()\">Log out</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/Components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/Components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login/login.component */ "./src/app/Components/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../signup/signup.component */ "./src/app/Components/signup/signup.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _Services_movie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Services/movie.service */ "./src/app/Services/movie.service.ts");
/* harmony import */ var _Services_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Services/authentication.service */ "./src/app/Services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(dialog, movieService, router, authenticationService) {
        this.dialog = dialog;
        this.movieService = movieService;
        this.router = router;
        this.authenticationService = authenticationService;
        this.seachForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('');
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    //opens pop up when login is clicked.
    NavbarComponent.prototype.openDialog = function () {
        var dialogReference = this.dialog.open(_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], {
            width: '600px'
        });
        this.authenticationService.setDialogRef(dialogReference);
        return false;
    };
    //opens pop up when sign up button is clicked
    NavbarComponent.prototype.openSignUp = function () {
        var dialogReference = this.dialog.open(_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"], { width: '600px' });
        //action needed after dialog is closed.
        dialogReference.afterClosed().subscribe(function (result) { console.log("dialog was closed"); });
        return false;
    };
    NavbarComponent.prototype.searchMovies = function (movieName) {
        this.router.navigate(['search', { name: movieName }]);
    };
    NavbarComponent.prototype.navigateToHome = function () {
        this.router.navigate(['home']);
    };
    //logs out the user
    NavbarComponent.prototype.logOut = function () {
        this.authenticationService.logout();
    };
    NavbarComponent.prototype.toggleDropdown = function () {
        document.getElementById('dropdownMenuButton').classList.toggle('show');
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/Components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/Components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_node_modules_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _Services_movie_service__WEBPACK_IMPORTED_MODULE_6__["MovieService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _Services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/Components/preference.model.ts":
/*!************************************************!*\
  !*** ./src/app/Components/preference.model.ts ***!
  \************************************************/
/*! exports provided: Preference */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Preference", function() { return Preference; });
var Preference = /** @class */ (function () {
    function Preference() {
    }
    return Preference;
}());



/***/ }),

/***/ "./src/app/Components/preferences/preferences.component.css":
/*!******************************************************************!*\
  !*** ./src/app/Components/preferences/preferences.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".prefer{\n\twidth: 50%;\n}"

/***/ }),

/***/ "./src/app/Components/preferences/preferences.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/Components/preferences/preferences.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container prefer\">\n  <p>Email</p>\n  <input type=\"text\" class=\"form-control\" id=\"email\" required [(ngModel)]=\"preference.email\" name=\"email\"><br>\n  <p>Genre</p>\n\n  <ng-multiselect-dropdown [placeholder]=\"'Select Genres'\" [data]=\"genreList\" [(ngModel)]=\"preference.genreList\"\n    [settings]=\"dropdownSettings\" (onSelect)=\"onItemSelect($event)\" (onSelectAll)=\"onSelectAll($event)\" name=\"genres\"></ng-multiselect-dropdown><br>\n\n  <p>Language</p>\n\n  <ng-multiselect-dropdown [placeholder]=\"'Select Languages'\" [data]=\"languageList\" [(ngModel)]=\"preference.languageList\"\n    [settings]=\"dropdownSettings\" (onSelect)=\"onItemSelect($event)\" (onSelectAll)=\"onSelectAll($event)\" name=\"languages\"></ng-multiselect-dropdown><br>\n\n  <p>Actor</p>\n\n  <ng-multiselect-dropdown [placeholder]=\"'Select Actors'\" [data]=\"actorsList\" [(ngModel)]=\"preference.actorsList\"\n    [settings]=\"dropdownSettings\" (onSelect)=\"onItemSelect($event)\" (onSelectAll)=\"onSelectAll($event)\" name=\"actors\"></ng-multiselect-dropdown><br>\n\n  <button type=\"submit\" class=\"btn btn-success\" (click)=\"submitNewPreference()\">Submit</button><br><br>\n\n</div>"

/***/ }),

/***/ "./src/app/Components/preferences/preferences.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/Components/preferences/preferences.component.ts ***!
  \*****************************************************************/
/*! exports provided: PreferencesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreferencesComponent", function() { return PreferencesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _Services_preference_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Services/preference.service */ "./src/app/Services/preference.service.ts");
/* harmony import */ var _Components_preference_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Components/preference.model */ "./src/app/Components/preference.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PreferencesComponent = /** @class */ (function () {
    function PreferencesComponent(preferenceService, route) {
        this.preferenceService = preferenceService;
        this.route = route;
        this.genreList = [];
        this.languageList = [];
        this.actorsList = [];
        this.dropdownSettings = {};
        this.submitted = false;
    }
    PreferencesComponent.prototype.onSubmit = function () { this.submitted = true; };
    PreferencesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.preference = new _Components_preference_model__WEBPACK_IMPORTED_MODULE_2__["Preference"]();
        this.route.params.subscribe(function (params) { _this.user_id = params['user_id']; });
        this.getPreference();
        this.genreList = [
            { id: 1, item_text: 'Action' },
            { id: 2, item_text: 'Drama' },
            { id: 3, item_text: 'Romance' },
            { id: 4, item_text: 'Thriller' },
            { id: 5, item_text: 'Comedy' }
        ];
        this.languageList = [
            { id: 1, item_text: 'English' },
            { id: 2, item_text: 'Spanish' },
            { id: 3, item_text: 'Hindi' }
        ];
        this.actorsList = [
            { id: 1, item_text: 'Will Smith' },
            { id: 2, item_text: 'Tom Hanks' },
            { id: 3, item_text: 'Angelina Jolie' },
            { id: 4, item_text: 'Tom Cruise' }
        ];
        this.dropdownSettings = {
            singleSelection: false,
            idField: 'id',
            textField: 'item_text',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 3,
            allowSearchFilter: true,
        };
    };
    PreferencesComponent.prototype.onItemSelect = function (item) {
        console.log(item);
    };
    PreferencesComponent.prototype.onSelectAll = function (items) {
        console.log(items);
    };
    Object.defineProperty(PreferencesComponent.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.preference); },
        enumerable: true,
        configurable: true
    });
    PreferencesComponent.prototype.submitPreference = function () {
        this.preferenceService.updatePreferences(this.user_id, this.preference);
    };
    PreferencesComponent.prototype.submitNewPreference = function () {
        this.preferenceService.updateNewPreferences(this.preference);
    };
    PreferencesComponent.prototype.getPreference = function () {
        var _this = this;
        this.preferenceService.getPreferencesById(this.user_id).subscribe(function (response) {
            _this.preference = response;
        });
    };
    PreferencesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-preferences',
            template: __webpack_require__(/*! ./preferences.component.html */ "./src/app/Components/preferences/preferences.component.html"),
            styles: [__webpack_require__(/*! ./preferences.component.css */ "./src/app/Components/preferences/preferences.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_preference_service__WEBPACK_IMPORTED_MODULE_1__["PreferenceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], PreferencesComponent);
    return PreferencesComponent;
}());



/***/ }),

/***/ "./src/app/Components/signup/signup.component.css":
/*!********************************************************!*\
  !*** ./src/app/Components/signup/signup.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input.ng-invalid.ng-touched {\n    border-color: red;\n}\n"

/***/ }),

/***/ "./src/app/Components/signup/signup.component.html":
/*!*********************************************************!*\
  !*** ./src/app/Components/signup/signup.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <form [formGroup]=\"signupForm\" (ngSubmit)=\"OnSignup()\" *ngIf = \"!isSignedUp\">\n              \n        <div formGroupName=\"signupData\">\n\n          <div class=\"form-group\">\n          <h3>New User:</h3>\n          </div>\n\n          <div class=\"form-group\">\n          <label for=\"firstname\">First Name:</label>\n          <input class=\"form-control\" \n                 type=\"string\" \n                 name=\"firstname\" \n                 id=\"firstname\" \n                 formControlName=\"firstname\"\n                 placeholder=\"{{fnamePlaceholder}}\"\n                 [(ngModel)]=\"credentials.firstname\">\n          </div>\n          <span class=\"help-block\"                \n                *ngIf=\"!signupForm.get('signupData.firstname').valid && signupForm.get('signupData.firstname').touched\">\n          <p style=\"color: red\">First Name is required</p>  \n          </span>   \n                \n          <div class=\"form-group\">\n          <label for=\"lastname\">Last Name:</label>\n          <input class=\"form-control\" \n                 type=\"string\" \n                 name=\"lastname\" \n                 id=\"lastname\" \n                 formControlName=\"lastname\"\n                 placeholder=\"{{lnamePlaceholder}}\"\n                 [(ngModel)]=\"credentials.lastname\">\n          </div>\n          <span class=\"help-block\"                \n                *ngIf=\"!signupForm.get('signupData.lastname').valid && signupForm.get('signupData.lastname').touched\">\n          <p style=\"color: red\">Last Name is required</p>  \n          </span>                 \n\n          <div class=\"form-group\">\n          <label for=\"email\">Email:</label>\n          <input class=\"form-control\" \n                 type=\"email\" \n                 name=\"email\" \n                 id=\"email\" \n                 formControlName=\"email\"\n                 placeholder=\"{{emailPlaceholder1}}\"\n                [(ngModel)]=\"credentials.email\">\n          </div>             \n          <span class=\"help-block\"\n                *ngIf=\"!signupForm.get('signupData.email').valid && signupForm.get('signupData.email').touched\">          \n          <p style=\"color: red\">Please enter a valid email</p> \n          </span>\n                \n          <div class=\"form-group\">\n          <label for=\"password\">Password:</label>\n          <input class=\"form-control\" \n                 type=\"password\" \n                 name=\"password\" \n                 id=\"password\" \n                 formControlName=\"password\"\n                 placeholder=\"{{passwordPlaceholder1}}\"\n                 [(ngModel)]=\"credentials.password\">\n          </div>\n          <span class=\"help-block\"\n                *ngIf=\"!signupForm.get('signupData.password').valid && signupForm.get('signupData.password').touched\">\n          <p style=\"color: red\">Password is required</p>  \n          </span>\n              \n          <div class=\"form-group\">\n            <label for=\"location\">Location:</label>\n            <select class=\"form-control\"\n                    id=\"location\" \n                    name=\"location\"\n                    [(ngModel)]=\"credentials.location\"\n                    [ngModelOptions]=\"{standalone: true}\">\n                    <option *ngFor=\"let c of cities\" [ngValue]=\"c.id\">{{c.name}}</option>\n            </select>\n          </div>        \n\n          <div class=\"form-group\">                    \n          <input type = \"checkbox\"\n                 name = \"check\"  formControlName = \"check\" id=\"check\">\n              By clicking this checkbox, you agree to our <font color = \"Blue\">Terms & Conditions</font> \n              and <font color = \"Blue\">Privacy Policy </font>                 \n          </div> \n          <span class=\"help-block\"\n          *ngIf=\"!signupForm.get('signupData.check').valid && signupForm.get('signupData.check').touched\">\n          <p style=\"color: red\">Please agree to terms and conditions for sign up</p>  \n          </span>\n              \n          <button [disabled]=\"!signupForm.valid\" class=\"btn btn-danger\" type=\"submit\" >Sign Up</button>         \n        </div> \n        <br><p *ngIf=\"isError\" style=\"color: red\">{{error_msg}}</p>               \n      </form>      \n    </div> \n    <p *ngIf=\"isSignedUp\">{{success_msg}}</p>         \n  </div>\n</div>"

/***/ }),

/***/ "./src/app/Components/signup/signup.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/Components/signup/signup.component.ts ***!
  \*******************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _Services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/authentication.service */ "./src/app/Services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = /** @class */ (function () {
    function SignupComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.credentials = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            location: ''
        };
        this.cities = [
            { id: 1, name: "Tempe" },
            { id: 2, name: "Chandler" },
            { id: 3, name: "Phoenix" },
            { id: 4, name: "Mesa" }
        ];
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.signupForm = new _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'signupData': new _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                'firstname': new _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                'lastname': new _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                'email': new _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
                'password': new _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                'check': new _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
            })
        });
        this.fnamePlaceholder = "Please enter your first name here";
        this.lnamePlaceholder = "Please enter your last name here";
        this.emailPlaceholder1 = "Please enter your email here";
        this.passwordPlaceholder1 = "Please enter your password here";
        this.isSignedUp = false;
        this.isError = false;
        this.error_msg = "User already exist with this email id";
        this.success_msg = "You have registered successfully to FindMyShow application!";
    };
    SignupComponent.prototype.OnSignup = function () {
        var _this = this;
        this.auth.signup(this.credentials).subscribe(function () { _this.isSignedUp = true; }, function (err) { _this.isError = true; });
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/Components/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/Components/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/Components/similar-movies/similar-movies.component.css":
/*!************************************************************************!*\
  !*** ./src/app/Components/similar-movies/similar-movies.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".movie-card {\n  background: white;\n  text-decoration: none;\n  color: #444;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  top: 0;\n  transition: all .2s ease-in;\n}\n\n.image-card {\n  width: 200px;\n  padding: 5px;\n}\n\n.scroll {\n  overflow: scroll;\n  display: flex;\n}\n"

/***/ }),

/***/ "./src/app/Components/similar-movies/similar-movies.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/Components/similar-movies/similar-movies.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<b *ngIf=\"movies != 0\">SIMILAR MOVIES</b>\n<div class=\"scroll\" *ngIf=\"movies != 0\">\n  <mat-card *ngFor=\"let movie of movies\" class=\"movie-card\">\n    <mat-card-header>\n    </mat-card-header>\n\n    <mat-card-content>\n      <img mat-card-image src={{movie.poster_path}} alt=\"Movie Image\" class=\"image-card\">\n    </mat-card-content>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/Components/similar-movies/similar-movies.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/Components/similar-movies/similar-movies.component.ts ***!
  \***********************************************************************/
/*! exports provided: SimilarMoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimilarMoviesComponent", function() { return SimilarMoviesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _Services_movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/movie.service */ "./src/app/Services/movie.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SimilarMoviesComponent = /** @class */ (function () {
    function SimilarMoviesComponent(movieService, router) {
        this.movieService = movieService;
        this.router = router;
    }
    SimilarMoviesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.movieService
            .getSimilarMovies(this.movieID)
            .subscribe(function (response) {
            _this.movies = response;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], SimilarMoviesComponent.prototype, "movieID", void 0);
    SimilarMoviesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-similar-movies",
            template: __webpack_require__(/*! ./similar-movies.component.html */ "./src/app/Components/similar-movies/similar-movies.component.html"),
            styles: [__webpack_require__(/*! ./similar-movies.component.css */ "./src/app/Components/similar-movies/similar-movies.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SimilarMoviesComponent);
    return SimilarMoviesComponent;
}());



/***/ }),

/***/ "./src/app/Components/time-and-theatre/time-and-theatre.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/Components/time-and-theatre/time-and-theatre.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".timings{\n\tpadding-left: 10px;\n}\n\n.scroller {\n    overflow: scroll;\n    height: 250px;\n}\n\na {\n    color: maroon;\n}"

/***/ }),

/***/ "./src/app/Components/time-and-theatre/time-and-theatre.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/Components/time-and-theatre/time-and-theatre.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <mat-tab-group>\n  <mat-tab label=\"Today\">\n    <br>\n    <div class=\"row container scroller\">\n    \t<div class=\"col-6 row\" *ngFor=\"let day of day1\">\n    \t\t <h6>{{ day.theatre }} </h6>\n          <div class=\"row container\">\n            <p class=\"timings\" *ngFor=\"let showTime of day['times']\">\n             {{ showTime.time }}\n            </p>\n          </div>\n          <a class=\"maroon row container\" href= \"{{day.movie_link}}\" >Book Tickets</a>\n    \t</div>\n    </div>\n  </mat-tab>\n  <mat-tab label=\"Tomorrow\">\n    <br>\n    <div class=\"row container\">\n    \t<div class=\"col-md-3\" *ngFor=\"let day of day2\">\n    \t\t{{ day.time }} {{ day.theatre }}\n    \t</div>\n    </div>\n  </mat-tab>\n  <mat-tab label=\"Day After\">\n    <br>\n    <div class=\"row container\">\n    \t<div class=\"col-md-3\" *ngFor=\"let day of day3\">\n    \t\t{{ day.time }} {{ day.theatre }}\n    \t</div>\n    </div>\n  </mat-tab>\n</mat-tab-group></div>"

/***/ }),

/***/ "./src/app/Components/time-and-theatre/time-and-theatre.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/Components/time-and-theatre/time-and-theatre.component.ts ***!
  \***************************************************************************/
/*! exports provided: TimeAndTheatreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeAndTheatreComponent", function() { return TimeAndTheatreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../movie-details/movie-details.component */ "./src/app/Components/movie-details/movie-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TimeAndTheatreComponent = /** @class */ (function () {
    function TimeAndTheatreComponent(movieDetails) {
        this.movieDetails = movieDetails;
        this.day1 = [];
        this.day2 = [];
        this.day3 = [];
        this.tempTimes = [];
    }
    TimeAndTheatreComponent.prototype.ngOnInit = function () {
        this.attachCinema();
    };
    TimeAndTheatreComponent.prototype.attachCinema = function () {
        this.movie = this.movieDetails.movie;
        for (var _i = 0, _a = this.movie["cinema_detail"]; _i < _a.length; _i++) {
            var cinema = _a[_i];
            this.tempTimes = [];
            for (var _b = 0, _c = this.movie["show_detail"]; _b < _c.length; _b++) {
                var show = _c[_b];
                if (cinema["id"] == show["cinema_id"]) {
                    var x = show["time"].split("-");
                    var y = x[2].split("T");
                    var z = y[1].split(":");
                    var actualTime = z[0] + ":" + z[1];
                    this.link = show["booking_link"];
                    this.tempTimes.push({
                        time: actualTime
                    });
                }
            }
            this.day1.push({
                theatre: cinema["name"],
                movie_link: this.link,
                times: this.tempTimes
            });
        }
    };
    TimeAndTheatreComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-time-and-theatre',
            template: __webpack_require__(/*! ./time-and-theatre.component.html */ "./src/app/Components/time-and-theatre/time-and-theatre.component.html"),
            styles: [__webpack_require__(/*! ./time-and-theatre.component.css */ "./src/app/Components/time-and-theatre/time-and-theatre.component.css")]
        }),
        __metadata("design:paramtypes", [_movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_1__["MovieDetailsComponent"]])
    ], TimeAndTheatreComponent);
    return TimeAndTheatreComponent;
}());



/***/ }),

/***/ "./src/app/Services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/Services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var rxjs_operators_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators/map */ "./node_modules/rxjs/_esm5/operators/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(httpClient, router) {
        this.httpClient = httpClient;
        this.router = router;
    }
    //method to save token in localStorage.
    AuthenticationService.prototype.saveToken = function (token) {
        localStorage.setItem('token', token);
        this.token = token;
    };
    //method to retrieve token. 
    AuthenticationService.prototype.getToken = function () {
        if (!this.token) {
            this.token = localStorage.getItem('token');
        }
        return this.token;
    };
    //logout method.
    AuthenticationService.prototype.logout = function () {
        this.token = "";
        window.localStorage.removeItem('token');
        this.router.navigateByUrl("/home");
    };
    //method to parse user details from JWT token.
    AuthenticationService.prototype.getUser = function () {
        var token = this.getToken();
        var payLoad;
        if (token) {
            payLoad = token.split('.')[1];
            payLoad = window.atob(payLoad);
            return JSON.parse(payLoad);
        }
        else {
            return null;
        }
    };
    //check whether the user is logged in
    AuthenticationService.prototype.isLoggedIn = function () {
        var user = this.getUser();
        if (user) {
            return user.exp > Date.now() / 1000;
        }
        else {
            return false;
        }
    };
    //generalized method to make http requests to server
    AuthenticationService.prototype.request = function (method, type, user) {
        var _this = this;
        var base;
        if (method === 'post' && type === 'login') {
            base = this.httpClient.post("/auth/", user);
        }
        else if (method === 'post' && type === 'signup') {
            base = this.httpClient.post("/users/", user);
        }
        else {
            base = this.httpClient.get("/auth/${type}", { headers: { Authorization: "Bearer " + this.getToken() } });
        }
        var request = base.pipe(Object(rxjs_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            if (data.token) {
                _this.saveToken(data.token);
            }
            return data;
        }));
        return request;
    };
    //login method
    AuthenticationService.prototype.login = function (user) {
        return this.request('post', 'login', user);
    };
    //signup method
    AuthenticationService.prototype.signup = function (user) {
        return this.request('post', 'signup', user);
    };
    //setter method for dialog reference
    AuthenticationService.prototype.setDialogRef = function (dialogRef) {
        this.dialogRef = dialogRef;
    };
    //getter method for dialog reference
    AuthenticationService.prototype.getDialogRef = function () {
        return this.dialogRef;
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/Services/movie.service.ts":
/*!*******************************************!*\
  !*** ./src/app/Services/movie.service.ts ***!
  \*******************************************/
/*! exports provided: MovieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieService", function() { return MovieService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { timingSafeEqual } from 'crypto';
/*
* A service Class that acts as centralized repository for handling movie data.
* @Author: Sai Saran Kandimalla.
* @Author: Shilpa Bhat
* @version 1: created on 09/18/2018.
*/
var MovieService = /** @class */ (function () {
    function MovieService(http) {
        this.http = http;
        //Sample data for movies.
        this.movies = [];
    }
    /* A getter method to get movies.
      * @returns movies: Movie[].
      */
    MovieService.prototype.getMovies = function () {
        return this.http.get("/movies", { responseType: "json" });
    };
    /* A getter method to get movie details */
    MovieService.prototype.getMovieDetails = function (id) {
        return this.http.get("/movies/" + id, {
            responseType: "json"
        });
    };
    MovieService.prototype.getSearchedMovieList = function (movieName) {
        return this.http.get("/movies/?type=search&name=" + movieName);
    };
    MovieService.prototype.getUpcomingMovieList = function () {
        return this.http.get("/movies/?type=upcoming", {
            responseType: "json"
        });
    };
    MovieService.prototype.getSimilarMovies = function (id) {
        return this.http.get("/movies/" + id + "/?type=similar", {
            responseType: "json"
        });
    };
    MovieService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MovieService);
    return MovieService;
}());



/***/ }),

/***/ "./src/app/Services/preference.service.ts":
/*!************************************************!*\
  !*** ./src/app/Services/preference.service.ts ***!
  \************************************************/
/*! exports provided: PreferenceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreferenceService", function() { return PreferenceService; });
/* harmony import */ var _node_modules_angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/@angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { timingSafeEqual } from 'crypto';
var httpOptions = {
    headers: new _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};
var PreferenceService = /** @class */ (function () {
    function PreferenceService(http) {
        this.http = http;
    }
    PreferenceService.prototype.getPreferencesById = function (id) {
        return this.http.get("/preferences/" + id, {
            responseType: "json"
        });
    };
    PreferenceService.prototype.getPreferencesByEmail = function () {
        return this.http.get("/preferences/", {
            responseType: "json"
        });
    };
    PreferenceService.prototype.updatePreferences = function (id, preferences) {
        var _this = this;
        this.http.put("/preferences/" + id, preferences, httpOptions).subscribe(function (results) { return _this.var = results; });
    };
    PreferenceService.prototype.updateNewPreferences = function (preferences) {
        var _this = this;
        this.http.post("/preferences/", preferences, httpOptions)
            .subscribe(function (results) { return _this.var = results; });
    };
    PreferenceService = __decorate([
        Object(_node_modules_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PreferenceService);
    return PreferenceService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The division below handles navigation bar.-->\n<app-navbar></app-navbar>\n<br>\n<!--The division below handles approutes.-->\n<router-outlet></router-outlet>\n<!--The division below handles footer-->\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../node_modules/@angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _Components_MovieComponents_movie_card_component_movie_card_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Components/MovieComponents/movie-card-component/movie-card.component */ "./src/app/Components/MovieComponents/movie-card-component/movie-card.component.ts");
/* harmony import */ var _Components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Components/navbar/navbar.component */ "./src/app/Components/navbar/navbar.component.ts");
/* harmony import */ var _Components_home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Components/home/home.component */ "./src/app/Components/home/home.component.ts");
/* harmony import */ var _Components_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Components/footer/footer.component */ "./src/app/Components/footer/footer.component.ts");
/* harmony import */ var _Components_movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Components/movie-details/movie-details.component */ "./src/app/Components/movie-details/movie-details.component.ts");
/* harmony import */ var _Components_MovieComponents_movie_slide_movie_slide_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Components/MovieComponents/movie-slide/movie-slide.component */ "./src/app/Components/MovieComponents/movie-slide/movie-slide.component.ts");
/* harmony import */ var _Components_login_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Components/login/login.component */ "./src/app/Components/login/login.component.ts");
/* harmony import */ var _Services_movie_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Services/movie.service */ "./src/app/Services/movie.service.ts");
/* harmony import */ var _Services_authentication_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Services/authentication.service */ "./src/app/Services/authentication.service.ts");
/* harmony import */ var _Components_signup_signup_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Components/signup/signup.component */ "./src/app/Components/signup/signup.component.ts");
/* harmony import */ var _Components_preferences_preferences_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Components/preferences/preferences.component */ "./src/app/Components/preferences/preferences.component.ts");
/* harmony import */ var _Components_similar_movies_similar_movies_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Components/similar-movies/similar-movies.component */ "./src/app/Components/similar-movies/similar-movies.component.ts");
/* harmony import */ var _Components_time_and_theatre_time_and_theatre_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Components/time-and-theatre/time-and-theatre.component */ "./src/app/Components/time-and-theatre/time-and-theatre.component.ts");
/* harmony import */ var _Services_preference_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Services/preference.service */ "./src/app/Services/preference.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var routes = [
    { path: 'coming_soon', component: _Components_home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"] },
    { path: 'wish_list/:id', component: _Components_home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"] },
    { path: 'latest', component: _Components_home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"] },
    { path: 'home', component: _Components_home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"] },
    { path: 'movie_details', component: _Components_movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_16__["MovieDetailsComponent"] },
    { path: 'search', component: _Components_home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"] },
    { path: 'preferences', component: _Components_preferences_preferences_component__WEBPACK_IMPORTED_MODULE_22__["PreferencesComponent"] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            entryComponents: [
                _Components_login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"],
                _Components_signup_signup_component__WEBPACK_IMPORTED_MODULE_21__["SignupComponent"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                _Components_MovieComponents_movie_card_component_movie_card_component__WEBPACK_IMPORTED_MODULE_12__["MovieCardComponent"],
                _Components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__["NavbarComponent"],
                _Components_home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
                _Components_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"],
                _Components_movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_16__["MovieDetailsComponent"],
                _Components_MovieComponents_movie_slide_movie_slide_component__WEBPACK_IMPORTED_MODULE_17__["MovieSlideComponent"],
                _Components_login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"],
                _Components_signup_signup_component__WEBPACK_IMPORTED_MODULE_21__["SignupComponent"],
                _Components_preferences_preferences_component__WEBPACK_IMPORTED_MODULE_22__["PreferencesComponent"],
                _Components_similar_movies_similar_movies_component__WEBPACK_IMPORTED_MODULE_23__["SimilarMoviesComponent"],
                _Components_time_and_theatre_time_and_theatre_component__WEBPACK_IMPORTED_MODULE_24__["TimeAndTheatreComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes, { useHash: true }),
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_9__["NgMultiSelectDropDownModule"].forRoot(),
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"]
            ],
            providers: [_Services_movie_service__WEBPACK_IMPORTED_MODULE_19__["MovieService"], _Services_authentication_service__WEBPACK_IMPORTED_MODULE_20__["AuthenticationService"], _Services_preference_service__WEBPACK_IMPORTED_MODULE_25__["PreferenceService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/vivek/SER515_VIVEK/SER515_TeamDexter/Client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map