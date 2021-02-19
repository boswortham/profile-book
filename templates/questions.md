
# Questions By Type

## Numerical Input

```
{
  "id" : null,
  "question": "Enter a number.",
  "answer": {
    "type": "number",
    "content": null,
    "limit": [null, null]
}
```

Limit describes the lowest possible choice and highest possible choice.

## String Input

```
{
  "id" : null,
  "question": "Enter a string of text.",
  "answer": {
    "type": "userInput",
    "content": null,
    "limit": null
  }
}
```

Limit defines the maximum number of characters.

## Boolean Input

```
{
  "id" : null,
  "question": "Answer this question true or false.",
  "answer": {
    "type": "trueFalse",
    "content": null
  }
}
```
No limit needed. Only three possible states.

## Radio Button Input

```
{
  "id" : null,
  "question": "Click one choice from this list.",
  "answer": {
    "type": "multiChoice",
    "content": null,
    "choices": []
  }
}
```

Only one choice can be chosen, so no limit. Choices must be defined on object creation.

## Checkbox Input

```
{
  "id" : null,
  "question": "Click multiple choices from this list.",
  "answer": {
    "type": "multiAnswer",
    "content": [],
    "choices": [],
    "limit": [null, null]
  }
}
```

Limit defines the maximum and minimum number of acceptable choices. Choices must be defined on object creation.
