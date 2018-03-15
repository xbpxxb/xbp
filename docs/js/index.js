$(document).ready(function() {
	$('#fullpage').fullpage({
		//导航
		menu: '#menu',
		lockAnchors: false,
		anchors:['firstPage', 'secondPage','thirdPage','lastPage'],
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['firstPage', 'secondPage','thirdPage','lastPage'],
		showActiveTooltip: false,
		slidesNavigation: false,
		slidesNavPosition: 'bottom',

		//滚动
		css3: true,
		scrollingSpeed: 700,
		autoScrolling: true,
		fitToSection: true,
		fitToSectionDelay: 1000,
		scrollBar: false,
		easing: 'easeInOutCubic',
		easingcss3: 'ease',
		loopBottom: false,
		loopTop: false,
		loopHorizontal: true,
		continuousVertical: false,
		continuousHorizontal: false,
		scrollHorizontally: false,
		interlockedSlides: false,
		dragAndMove: false,
		offsetSections: false,
		resetSliders: false,
		fadingEffect: false,
		normalScrollElements: '#element1, .element2',
		scrollOverflow: false,
		scrollOverflowReset: false,
		scrollOverflowOptions: null,
		touchSensitivity: 15,
		normalScrollElementTouchThreshold: 5,
		bigSectionsDestination: null,

		//可访问
		keyboardScrolling: true,
		animateAnchor: true,
		recordHistory: true,

		//设计
		controlArrows: true,
		verticalCentered: true,
		sectionsColor : [],
		paddingTop: '3em',
		paddingBottom: '10px',
		fixedElements: '#header, .footer',
		responsiveWidth: 0,
		responsiveHeight: 0,
		responsiveSlides: false,
		parallax: false,
		parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

		//自定义选择器
		sectionSelector: '.section',
		slideSelector: '.slide',

		lazyLoading: true,

		//事件
		onLeave: function(index, nextIndex, direction){},
		afterLoad: function(anchorLink, index){
      if(index === 4){
        $('.arrow').hide()
      }else{
        $('.arrow').show()
      }
    },
		afterRender: function(){},
		afterResize: function(){},
		afterResponsive: function(isResponsive){},
		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
	});
});