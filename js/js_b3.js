if(window.manipal.advantageComponent!=undefined){window.manipal.manipalAdvantage.init()}if(window.manipal.heroCarouselConfig!=undefined){window.manipal.heroCarousel.init()}if(window.manipal.accreditationsConfig!=undefined){window.manipal.accreditationsCarousel.init()}if(window.manipal.mapBasedContentConfig!=undefined){window.manipal.mapbasedcontent.init()}window.manipal.thumbnailCarouselConfig={};$(document).ready(function(){var c=$(".primary-sticky .logo img").attr("src");if(c!=""&&c!=undefined){var d=c.slice(0,c.indexOf(".transform"));var b=d.slice(-3);if(b=="svg"){$(".primary-sticky .logo img").attr("src",d)}}var e=($(".hero-container .slides img, .mobile-hero-content li img").length>1)?$($(".hero-container .slides img, .mobile-hero-content li img")[0]):$(".hero-container .slides img, .mobile-hero-content li img");e.load(function(){var f=new Image();f.src=e.attr("src");var h=f.width;if(h<=640){h=1141}var g=$(window).width();if(g<h){var i=h-g;i=(i/2)*(-1);$(".hero-container .slides img, .mobile-hero-content li img").css("margin-left",i+"px")}});var a=setTimeout(function(){$(".page-container").css("visibility","visible");if($("#clickabel").val()=="clickBanner"){$("#hero-carousel li").css("cursor","pointer").bind("click",function(h){if($(this).hasClass("flex-active-slide")){var g=$("a.hero-go",$(this)).attr("href");if(g){document.location=g}}})}if($("#clickabel").val()=="clickBanner"){$("div.hero-container a.hero-dark-color").css("display","none");var f=$("a.hero-go").attr("href");if(f){$("#list-hero-banner").css("cursor","pointer")}$(".show_in_ie").bind("click",function(g){if(f){document.location=f}})}},1000)});setTimeout(function(){if($("#clickabel").val()=="clickIcon"){$("div#list-hero-banner").css("cursor","default")}else{}},1000);