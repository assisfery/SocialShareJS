// GLOBAL NAMESPACE
var SocialShare = {};

// BUTTONS
SocialShare.btns = [
	{
		social: "share",
		link: "",
		iconClass: "fas fa-share-alt",
		content: " Share",
		class: "ss-btn ss-btn-share",
		color: "#444",
	},
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
	{
		social: "messenger",
		link: "fb-messenger://share/?link=",
		iconClass: "fab fa-facebook-messenger",
		content: " Messenger",
		class: "ss-btn ss-btn-messenger",
		color: "#0078FF",
	},
	{
		social: "whatsapp",
		link: "https://wa.me/?text=",
		iconClass: "fab fa-whatsapp",
		content: " WhatsApp",
		class: "ss-btn ss-btn-whatsapp",
		color: "#25d366",
	},
	{
		social: "viber",
		link: "viber://forward?text=",
		iconClass: "fab fa-viber",
		content: " Viber",
		class: "ss-btn ss-btn-viber",
		color: "#665CAC",
	},
	{
		social: "telegram",
		link: "tg://msg?text=",
		iconClass: "fab fa-telegram",
		content: " Telegram",
		class: "ss-btn ss-btn-telegram",
		color: "#0088CC",
	},
	{
		social: "tumblr",
		link: "https://www.tumblr.com/share/link?url=",
		iconClass: "fab fa-tumblr",
		content: " Tumblr",
		class: "ss-btn ss-btn-tumblr",
		color: "#35465d",
	},
	{
		social: "reddit",
		link: "https://reddit.com/submit?url=",
		iconClass: "fab fa-reddit",
		content: " Reddit",
		class: "ss-btn ss-btn-reddit",
		color: "#ff4500",
	},
	{
		social: "pocket",
		link: "https://getpocket.com/save?url=",
		iconClass: "fab fa-get-pocket",
		content: " Pocket",
		class: "ss-btn ss-btn-pocket",
		color: "#ee4056",
	},
	{
		social: "email",
		link: "mailto:?body=",
		iconClass: "fas fa-envelope",
		content: " Email",
		class: "ss-btn ss-btn-email",
		color: "#f04a43",
	},
	{
		social: "sms",
		link: "sms://?body=",
		iconClass: "fas fa-sms",
		content: " SMS",
		class: "ss-btn ss-btn-sms",
		color: "#1ba5e6",
	},
];

// SETUP BUTTONS
SocialShare.init = function(_elements){

	// GET SHARE BOXS
	SocialShare.boxs = document.querySelectorAll(_elements);

	// SETUP SHARE BOXS
	for(var i = 0; i < SocialShare.boxs.length; i++)
	{

		// SETUP SHARE BUTTONS
		for(var j = 0; j < SocialShare.btns.length; j++)
		{
			var selectedSocial = SocialShare.boxs[i].getAttribute("data-ss-social");
			var selectedLink = SocialShare.boxs[i].getAttribute("data-ss-link");

			// GET LINK FROM CURRENT LOCATION
			var link = window.location.href;

			// VERIFY IF LINK IS SET IN ATTRIBUTE
			if(selectedLink)
				link = selectedLink;

			// GET QUERY STRING FROM ATTRIBUTE
			var moreQueryString = "";
			
			var selectedQueryString = SocialShare.boxs[i].getAttribute("data-ss-" + SocialShare.btns[j].social);

			if(selectedQueryString)
			{
				var splitedQueryStrings = selectedQueryString.split(",");
				for(var k = 0; k < splitedQueryStrings.length; k++)
				{
					var pairKeyValue = splitedQueryStrings[k].split(":");
					if(pairKeyValue.length > 1)
					{
						moreQueryString += moreQueryString == "" ? "" : "&";
						moreQueryString += pairKeyValue[0].trim() + "=" + encodeURIComponent(pairKeyValue[1].trim());
					}
				}
			}

			if(moreQueryString != "")
				moreQueryString = (SocialShare.btns[j].link.includes("?") ? "&" : "?") + moreQueryString;

			// IF IS NOT SELECTED NONE SOCIAL NETWORK ITS INCLUDE ALL BY DEFAULT
			// ELSE ITS VERIFY IF ITS BUTTON/SOCIAL NETWORK IS INCLUDED

			if(!selectedSocial || selectedSocial.toLowerCase().includes(SocialShare.btns[j].social))
			{
				// CREATE BUTTON
				var btn =  document.createElement("a");
				btn.setAttribute("class", SocialShare.btns[j].class);
				btn.setAttribute("href", SocialShare.btns[j].link + encodeURIComponent(link) + moreQueryString);
				btn.setAttribute("target", "_blank");
				btn.style.background = SocialShare.btns[j].color;

				// SOCIAL NETWORK ICON
				var iconClass = SocialShare.btns[j].iconClass;

				// VERIFY IF ICONS IS CHANGED
				var definedIcons = SocialShare.boxs[i].getAttribute("data-ss-icon-class");

				if(definedIcons)
				{
					var splitedIcons = definedIcons.split(",");

					for(var l = 0; l < splitedIcons.length; l++)
					{
						var pairKeyValue = splitedIcons[l].split(":");

						if(pairKeyValue.length > 1)
						{
							if(pairKeyValue[0].trim().toLowerCase() == SocialShare.btns[j].social)
							{
								iconClass = pairKeyValue[1].trim();
							}
						}

					}

				}

				var icon =  document.createElement("i");
				icon.setAttribute("class", iconClass);

				// VERIFY IF SHOULD SHOW ICON
				var showIcon = true;

				var verifyIfShowIcon = SocialShare.boxs[i].getAttribute("data-ss-icon");

				if(verifyIfShowIcon && verifyIfShowIcon == "false")
					showIcon = false;

				// APPEND ICON
				if(showIcon)
					btn.appendChild(icon);

				// SHOW BUTTON CONTENT/SOCAIL NETWORK NAME
				var showContent = true;

				var verifyIfShowContent = SocialShare.boxs[i].getAttribute("data-ss-content");

				if(verifyIfShowContent && verifyIfShowContent == "false")
					showContent = false;

				// APPEND SOCIAL NAME
				if(showContent)
					btn.append(SocialShare.btns[j].content);

				// APPEND THE CREATED BUTTON TO SOCIAL SHARE BOX AREA
				SocialShare.boxs[i].appendChild(btn);
			}

		}

	}

	// CLICK ON WEB NATIVE SHARE
	SocialShare.btnShares = document.querySelectorAll(".ss-btn-share");
	for(var i = 0; i < SocialShare.btnShares.length; i++)
	{
		var link = decodeURIComponent(SocialShare.btnShares[i].getAttribute("href"));

		SocialShare.btnShares[i].removeAttribute("href");
		SocialShare.btnShares[i].removeAttribute("target");

		SocialShare.btnShares[i].setAttribute("data-ss-link", link);

		SocialShare.btnShares[i].addEventListener("click", function(event){

			if(navigator.share) {

				navigator.share({
					url: this.getAttribute("data-ss-link")
				}).then(() => {
					console.log('Thanks for sharing!');
				})
				.catch(console.error);
			}
			else
			{
				console.log('This brownser dont support native web share!');
			}

		});

	}

}

// SETUP FUNCTION DIRECTLY IN JS
SocialShare.createShareBox = function(_elements, _link = null, _socials =  null, _showIcon = true, _showContent = true, _clearContainer = true) {

	// GET SHARE BOXS
	var newBoxs = document.querySelectorAll(_elements);

	// SETUP SHARE BOXS
	for(var i = 0; i < newBoxs.length; i++)
	{
		if(!newBoxs[i].classList.contains("ss-box"))
			newBoxs[i].classList.add("ss-box");

		if(_link)
			newBoxs[i].setAttribute("data-ss-link", _link);

		if(_socials)
			newBoxs[i].setAttribute("data-ss-social", _socials);

		if(!_showIcon)
			newBoxs[i].setAttribute("data-ss-icon", _showIcon);

		if(!_showContent)
			newBoxs[i].setAttribute("data-ss-content", _showContent);

		if(_clearContainer)
			newBoxs[i].innerHTML = "";
	}

	SocialShare.init(_elements);
}


// ONLOAD
window.addEventListener('load', function() {
	SocialShare.init(".ss-box");
});