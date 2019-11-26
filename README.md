# SocialShareJS

This is a simple libray to make your web page shareable fast and easy.
Its allow to include the social share link of the major social network to your page.

See the demo here: https://assisfery.github.io/SocialShareJS/index.html

CDN repository: https://www.jsdelivr.com/package/gh/assisfery/SocialShareJS

[![](https://data.jsdelivr.com/v1/package/gh/assisfery/SocialShareJS/badge)](https://www.jsdelivr.com/package/gh/assisfery/SocialShareJS)

### Install
Just include the  **social-share.css**  and  **social-share.js**  files.
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/assisfery/SocialShareJS@master/social-share.min.css">
<script src="https://cdn.jsdelivr.net/gh/assisfery/SocialShareJS@master/social-share.min.js"></script>
```

### Dependences
The  **SocialShareJS**  don't dependents of none library, but its uses the **FontAwesome 5** Fonts, so make sure you have included it in your web page.
```html
<script src="https://kit.fontawesome.com/a076d05399.js"></script>
```

### Get Started
To have the social share buttons just put the class  **ss-box**  in one or more of you  **containers**
```html
<div class="ss-box"></div>
```

### Selected Social
If you want to select specifics social share network just add the  **data-ss-social**  attribute in your container.
```html
<div class="ss-box" data-ss-social="facebook, pinterest"></div>
```

### Change Link
For defaults the SocialShareJs put the atual page location as share link but you can change it just including the  **data-ss-link**  attribute in your container.
```html
<div class="ss-box" data-ss-link="https://www.google.com/"></div>
```

### Custom Query String
In some of social network shares you could want to put a query string available just to specific social network, so to do that just include  
**data-ss-_NAME_OF_SOCIAL_MEDIA_  = "key1:value1, key2:value2"** attribute,  
  
for example  
  
include **data-ss-messenger = "app_id:123456"**, so it will include the query string **&app_id=123456** in messenger share link, or  
include **data-ss-email = "subject:SocialShareJS is amazing"**, it will include the query string **&subject=Email Subject** in  
email share link.

```html
<div class="ss-box" data-ss-social="messenger, pinterest, email" data-ss-messenger="app_id: 123456" data-ss-email="subject:SocialShareJS is amazing"></div>
```

### Responsive check
Some of buttons (like: **share native** ,**messenger**, **viber** and **sms**) perhaps not work on desktop OS, but its works in mobile OS like Android and IOS, so may be necessary to show that buttons only in mobile screen.  
  
To solve that problem you could include the class **ss-responsive** on your container.
```html
<div class="ss-box ss-responsive"></div>
```

### Customizations

##### Hide Social Network Name
If you want to show just the icons without the name of Social Network just include **data-ss-content** attribute with value **false**.
```html
<div class="ss-box" data-ss-content="false"></div>
```

##### Rounded buttons
If you want to make button with circle shape just include the class  **ss-circle**  in  **ss-box**  container.
```html
<div class="ss-box ss-circle" data-ss-content="false"></div>
```

##### Flat buttons
If you want to make button without rounded border just include the class  **ss-flat**  in  **ss-box**  container.
```html
<div class="ss-box ss-flat"></div>
```

##### Button with Shadows
If you want to put shadow in button just include the class  **ss-shadow**  in  **ss-box**  container.
```html
<div class="ss-box ss-shadow"></div>
```

##### Just Move On...
If you want to customize the share buttons like you want just do it adding css effect in your code.
```css
.ss-btn {
  /* your code */
}
```
