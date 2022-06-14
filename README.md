# trim-all

## Remove extra whitespace

JavaScript function that accepts a string. The string is returned with all whitespace runs replaced with a single space and whitespace removed from both ends of the string.

## Example

```javascript
trimAll(`
    Darkwing Duck
                 When there's trouble you
                                         Call DW
`);

// returns "Darkwing Duck When there's trouble you Call DW"
```
