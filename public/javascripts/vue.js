/*global Vue*/
var app = new Vue({
    el: '#app',
    data: {
        img: "../BizPix/White.png"
    },
    methods: {
        white(){
            this.img = '../BizPix/White.png';
            console.log("I made it");
        },
        black(){
            this.img = '../BizPix/Black.png';
        },
        gray(){
            this.img = '../BizPix/Gray.png';
        },
        blue(){
            this.img = '../BizPix/LightBlue.png';
        },
        pink(){
            this.img = '../BizPix/LightPink.png';
        },
        sand(){
            this.img = '../BizPix/Sand.png';
        },
    }
    
});