$(document).ready(function(){
            $('#main-screen').fadeIn(1500);
            $('.sidenav').sidenav({
                draggable:true,
                inDuration: 600,
                outDuration:500
            });
            $('.tooltipped').tooltip();
            $('.parallax').parallax();
            $('.materialboxed').materialbox();
             typeWriter();
            document.querySelector('#loader').classList.remove("loader");
            $('.tooltipped').tooltip();
            get_theme();


});
      //LOAD ABOUT
      for(a = 0; a <= about.length - 1;a++){
        $('#profile_info').append('<p class="flow-text"><b>'+ about[a][0]+'</b>&nbsp;'+ about[a][1] +'</p>');
      }

      //LOAD TECH STACK
      for(t = 0; t <= tech_stack.length - 1;t++){
        $('#tech_stack').append('<div class="col l2 m2 s2">'+
                                '<img src="'+tech_stack[t]+'"  class="responsive-img" id="skill_icon">'+
                                '</div>');
      }
       
      //LOAD SERVICES
      for(s = 0; s <= services.length - 1;s++){
        $('#services_content').append('<div class="col l4 m4 s12" style="text-align: center;height:40vh;">'+
                '<img src="'+services[s][0]+'" alt="" style="width:30%;">'+
                '<p style="font-weight: bold;">'+services[s][1]+'</p>'+
                '<p>'+services[s][2]+'</p>'+
            '</div>');
      }



        // TYPEWRITER EFFECT
        var i = 0;
        var txt = 'WEB DEVELOPMENT/ APPLICATION SUPPORT/ IT OPERATIONS/ COMPUTER NETWORKS/';
        var speed = 50;
        function typeWriter() {
        if (i < txt.length) {
            document.getElementById("title").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
            }
        }
        const get_theme =()=>{
          localStorage.getItem("theme");
          var theme = localStorage.theme;
          console.log(theme);
          if(theme == 'dark'){
            $('#theme_button').html('Light Mode<i class="material-icons white-text">brightness_5<i>');
            $('#theme_button_nav').html('<i class="material-icons white-text">brightness_5<i>');
            $('nav').removeClass('white');
            $('nav').addClass('#212121 grey darken-4');
            $('nav a').addClass('white-text');
            $('.brand-logo').addClass('white-text');
            $('.sidenav-trigger').addClass('white-text');
            $('.sidenav').addClass('#212121 grey darken-4');
            $('.sidenav a').addClass('white-text');
            $('body').addClass('#212121 grey darken-4');
            $('body').addClass('white-text');
            $('#work .card').addClass('N/A transparent');
            $('#title').removeClass('grey-text text-darken-3 lighten-3');
            $('#title').addClass('white-text');
            $('#bktotopbtn').addClass('white black-text');
          }else{
            $('#theme_button').html('Dark Mode<i class="material-icons black-text">brightness_2<i>');
            $('#theme_button_nav').html('<i class="material-icons black-text">brightness_2<i>');
            $('nav').addClass('white');
            $('nav').removeClass('#212121 grey darken-4');
            $('nav a').removeClass('white-text');
            $('nav a').addClass('black-text');
            $('.brand-logo').removeClass('white-text');
            $('.sidenav-trigger').removeClass('white-text');
            $('.sidenav').removeClass('#212121 grey darken-4');
            $('.sidenav a').removeClass('white-text');
            $('body').removeClass('#212121 grey darken-4');
            $('body').removeClass('white-text');
            $('#work .card').removeClass('N/A transparent');
            $('#title').addClass('grey-text text-darken-3 lighten-3');
            $('#title').removeClass('white-text');
            $('#bktotopbtn').removeClass('white black-text');
          }
        }

        // TOGGLE LIGHT MODE AND DARK MODE
        $('#theme_button').click(function(){
          if(localStorage.getItem("theme") == '' || localStorage.getItem("theme") == undefined || localStorage.getItem("theme") == 'light'){
            localStorage.setItem("theme","dark");
          }else{
            localStorage.setItem("theme","light");
          }
          get_theme();
        });

        $('#theme_button_nav').click(function(){
          if(localStorage.getItem("theme") == '' || localStorage.getItem("theme") == undefined || localStorage.getItem("theme") == 'light'){
            localStorage.setItem("theme","dark");
          }else{
            localStorage.setItem("theme","light");
          }
          get_theme();
        });
