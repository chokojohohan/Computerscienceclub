var responsiveImage = [
{ src: 'img/1.png'},
{ src: 'img/2.png'},
{ src: 'img/3.png'},
{ src: 'img/4.png'},
{ src: 'img/5.png'}
];
$('#slider').vegas({
transition: 'blur',
transitionDuration: 2000,
delay: 10000,
animationDuration: 20000,
animation: 'kenburns',
slides: responsiveImage
});