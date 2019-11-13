# SocialShareJS

This is a simple libray to make your web page shareable fast and easy.
Its allow to include the social share link of the major social network to your page.

See the demo here: https://assisfery.github.io/SocialShareJS/index.html

### Install
Just include the  **social-share.css**  and  **social-share.js**  files.
```
<link rel="stylesheet" href="social-share.css">
<script src="social-share.js"></script>

```
### Dependences
The  **SocialShareJS**  don't dependents of none library, but its uses the FontAwesome Fonts, so take shore you have include it in your web page.
```
<script src="https://kit.fontawesome.com/a076d05399.js"></script>
```

### Get Started
To have the social share buttons just put the class  **ss-box**  in one or more of you  **containers**
```
<div class="ss-box"></div>
```

### Selected Social
If you want to select specifics social share network just add the  **data-ss-social**  attribute in your container.
```
<div class="ss-box" data-ss-social="facebook, pinterest"></div>
```

### Change Link
For defaults the SocialShareJs put the atual page location as share link but you can change it just including the  **data-ss-link**  attribute in your container.
```
<div class="ss-box" data-ss-link="https://www.google.com/"></div>
```