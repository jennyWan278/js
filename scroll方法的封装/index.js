function scroll(){
	return {
		"top":document.body.scrollTop||document.documentElement.scrollTop||document.pageYOffset,
		"left":document.body.scrollLeft||document.documentElement.scrollLeft||document.pageXOffset
	}
}