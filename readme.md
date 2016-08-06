# Igpa - A Pig Latin jQuery plugin
Igpa is a simple jQuery plugin that you can call on a selector to translate to pig latin. 

## Usage

* include jquery and igpa
* call pig()

```javascript 
	<script src="jquery.min.js"></script>
	<script src="igpa.js"></script>
	<script>
	$("p").pig({
		translate: true,
		trunc: "a"
	});
	</script>
```

## Options
* translate: true or false (default true). Indicates if you do or do not translate to pig latin
* trunc: (default 'a') this is the letter you append to the end of each word in your copy. 