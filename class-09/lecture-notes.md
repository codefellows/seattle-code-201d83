# Class 09 Lecture Notes

## Events

### Browser Events

#### Types

- click
- submit (when form button clicked)
- keypress
- hover
- mouseover
- page load

### JavaScript - Code: Event Listener

- Code that gets triggered when our event has been fired/raised
- Target an HTML element to listen to

```js
   let myContainer = document.getElementById('container');
```

- Specify what type of event to listen: click
- Specify what to do when we hear the event(event handler = callBackFunction)

```js
   myContainer.addEventListener('click', handleClick)
```

### JavaScript - Code: Event Handler

- callback function: function that is entered as an arguement of ANOTHER function/method

```js
  function handleClick(event){
    console.log('i\'ve been clicked!);
  }
```

### Old ways - DONT DO THIS!

```html
   <button onClick="handleClick">Submit</button>
```

```js
  button.onSubmit = handleSubmit;
```

```html
   <button onSubmit="handleSubmit">Submit</button>
```
