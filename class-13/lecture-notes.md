# Class 13 Lecture Notes

## Data Persistance

- Local Storage
  - its an object in stored in browser application on your computer
  - local storage is specific to the one computer
  - no expiration - clears when you clear it

- Database
  - SQL - postgres(401)
  - NoSQL - mongodb(301)

## Why

- So users can retain data between page refreshes or accessing different parts of the application

## Local Storage

### How it is stored

- JSON - JavaScript Object Notation
- key: value pair
- to stringify our objects using a method `JSON.stringify()`
  - object to stringify

### Methods on our Local Storage Object

- `getItem(key)`
- `setItem(key, value)`
- `clear()`
- `removeItem(key)`

- `localStorage.getItem(key)`

### Steps

- to put something into storage
  - `let stringifiedItems = JSON.stringify(myObj)`;
    - when we stringify the object/data, it changes, it strip any reference to our constructor away
  - `localStorage.setItem('myStuff', stringifiedItems);`
- to get it out of local storage
  - `let stuffImGettingOut = localStorage.getItem('myStuff');`
  - `let parsedStuff = JSON.parse(stuffImGettingOut);`  - parse so our code can read it again
