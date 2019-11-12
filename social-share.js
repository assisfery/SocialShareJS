// GLOBAL NAMESPACE
var SocialShare = {};

// BUTTONS
SocialShare.btns = [
	{
		social: "facebook",
		link: "https://www.facebook.com/sharer.php?u=",
		iconClass: "fab fa-facebook-square",
		content: " Facebook",
		class: "ss-btn ss-btn-facebook",
		color: "#3b5998",
	},
	{
		social: "twitter",
		link: "https://twitter.com/share?url=",
		iconClass: "fab fa-twitter",
		content: " Twitter",
		class: "ss-btn ss-btn-twitter",
		color: "#1da1f2",
	},
	{
		social: "pinterest",
		link: "https://pinterest.com/pin/create/bookmarklet/?url=",
		iconClass: "fab fa-pinterest",
		content: " Pinterest",
		class: "ss-btn ss-btn-pinterest",
		color: "#bd081c",
	},
	{
		social: "linkedin",
		link: "https://www.linkedin.com/shareArticle?url=",
		iconClass: "fab fa-linkedin-in",
		content: " LinkedIn",
		class: "ss-btn ss-btn-linkedin",
		color: "#007bb5",
	},
];

// SETUP BUTTONS
SocialShare.init = function(){

	SocialShare.boxs = document.querySelectorAll(".ss-box");

	for(var i = 0; i < SocialShare.boxs.length; i++)
	{
		for(var j = 0; j < SocialShare.btns.length; j++)
		{
			var selectedSocial = SocialShare.boxs[i].getAttribute("data-ss-social");
			var selectedLink = SocialShare.boxs[i].getAttribute("data-ss-link");

			var link = window.location.href;

			if(selectedLink)
				link = selectedLink;

			if(!selectedSocial || selectedSocial.includes(SocialShare.btns[j].social))
			{
				var btn =  document.createElement("a");
				btn.setAttribute("class", SocialShare.btns[j].class);
				btn.setAttribute("href", SocialShare.btns[j].link + link);
				btn.setAttribute("target", "_blank");
				btn.style.background = SocialShare.btns[j].color;

				var icon =  document.createElement("i");
				icon.setAttribute("class", SocialShare.btns[j].iconClass);

				btn.appendChild(icon);
				btn.append(SocialShare.btns[j].content);

				SocialShare.boxs[i].appendChild(btn);
			}

		}

	}

}

window.addEventListener('load', function() {
    SocialShare.init();
});