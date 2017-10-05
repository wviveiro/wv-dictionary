# WV Dictionary #

Dictionary feature to be able to translate applications with javascript.

## Getting Started ##

Install dictionary

```
npm install wv-dictionary
```

Import it in your project

```javascript
import wvDictionary from 'wv-dictionary'
```

Setup wvDictionary

```javascript
wvDictionary.setup({
	language: 'en',
	dictionary: objectDictionary
});
```

**language** - Language you want to translate your application (it has to be in your json file)

**dictionary** - [JSON object with translations](#dictionary-object)

## Dictionary object ##

The structure of the dictionary object is as below:

```
{
	"Word or phrase": {
		"language-supported": "Translation of the word or phrase"
	}
}
```

Example:

```
{
	"Hello World!": {
		"pt-br": "Olá Mundo!"
	}
}
```

## How to use it ##

After everything setup, just call the translation function

```javascript
console.log( wvDictionary.translate('Hello World!') );
```

If translation is not found, it will print without translation
