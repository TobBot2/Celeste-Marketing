window.onload = function()
{
	// hides ugliness as page loads
	document.getElementById("curtains").style.display = "none";

    /*****************************************************************
        COPIED FROM THE OFFICIAL CELESTE WEBSITE (celestegame.com) 
    *****************************************************************/
	let layers = [];
	let scrollDecal = document.getElementById("scroll-decal");


	scrollDecal.style.height = scrollDecal.clientWidth / 2136 * 1300 + 150 + "px"; // + 150 (apprx) for the cliff image

	// create layer data
	{
		let layerElements = document.getElementsByClassName("layer");
		for (let i = 0; i < layerElements.length; i++)
		{
			layers.push(
			{
				element: layerElements[i],
				scroll: layerElements[i].getAttribute("data-scroll"), // higher = move up faster
				offset: layerElements[i].getAttribute("data-yoffset") // higher = higher on page
			});
		}
		layerElements = null;
	}

	// update a speicifc layer offset
	function updateLayerOffset(scroll, layer)
	{
        let offset = -((scroll * layer.scroll) - layer.offset * (scrollDecal.clientWidth * 2136 / 1300)); /* height / 3680 */
		layer.element.style.transform = `translateY(${ offset }px)`;
	}

	function updateScrollValue()
	{
        let scroll = window.scrollY;
		for (let i = 0; i < layers.length; i ++)
			updateLayerOffset(scroll, layers[i]);
	}

	
    document.addEventListener("scroll", updateScrollValue);
    window.addEventListener("resize", updateScrollValue);
    updateScrollValue();
}