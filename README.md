# Advanced Test - Programming Basics

## Test Instructions
* Work from the `index.js` file provided in this repository.
* Follow all of the instructions below to complete the test.
* **Important**: Make sure that the names of your variables/functions/classes match the names in the instructions below.
* You can check whether your answers pass the unit tests provided. However, do not spend too much time trying to fix your issues to make them pass the tests - move on and try to attempt all questions.
* Most tasks require to write a function. Make sure your function returns the expected results as a value
* Call your functions to test them, and print the return values to the console.
* Make sure to commit and push your test.

---
## Data Structure

### A - Objects 
#### A-1. Key Value Pairs
Evgeniy's daughter's after-school activities timetable looks like this:
* Monday    - Swimming
* Tuesday   - Book Club
* Wednesday - Gymnastics
* Thursday  - Babysitting
* Friday    - Debating Society

Create an object called `activities` to represent these activities. The keys should be the names of the days, and the values should be the activities as strings.

---
#### A-2. Object to Array
Create a function called `createNestedArrayFromObject` that accepts an object like the `activities` object you created above and outputs an array of arrays with the following format:
```javascript
[ ["Monday", "Swimming"],
  ["Tuesday", "Book Club"],
  ["Wednesday", "Gymnastics"],
  ["Thursday", "Babysitting"],
  ["Friday", "Debating Society"]
]
```
Your function will also be called with other objects, which may have a different number of key-value pairs.

---
### B - Arrays 

#### B-1. Data Manipulation
Cna oyu raed tihs?

Amanda has found an [article](https://science.howstuffworks.com/life/inside-the-mind/human-brain/you-can-read-scrambled-words-certain-conditions.htm) that describes how putting the letters of a word in a different order affects how quickly we can read them. She decides to run an experiment for her school Science Fair project. She wants to rearrange the letters of every word in a piece of text, according to the following rules:

* The first and last letters should remain in their original place
* All letters in between should be reversed
* Words of three letters or fewer will not be affected

For example: `"Longer words are probably harder to read."` should become: `"Legnor wdros are plbabory hedrar to raed."`

* Create a function  called `scrambleWords`.
* It should take a string as an argument.
* The string may include several words.
* The string may end with a punctuation mark such as `!`, `?` or  `.`
* The string will not contain any other punctuation.
* For all words of four letters or more:
  - Reverse the word
  - Return the first and last letters to their original place
* The `scrambleWords` function should return the sentence with the altered words.

Amanda says thank you for your help!

Adnama syas tnahk you for yuor hlep!

(Hint: this is a question about arrays.)

---
#### B-2. Data Conversion
Data from a simple spreadsheet is exported as an object with the following format:
```javascript
[ ["Peter",  "Paul",     "Mary"],
  ["Tennis", "Swimming", "Football"],   
]
```
* Create a function `convertNestedArrayToObject`. 
* It should take a nested array with a format similar to the example. There will always be two sub-arrays, and each sub-array in any given input array will have the same number of items. However, the number of items in the sub-arrays may be different from one input array to another.
* Your function should return an object with a structure like this:
```javascript
{ Peter: "Tennis",
  Paul:  "Swimming",
  Mary:  "Football"
}
```
In other words, your function should take the keys from the first sub-array and pair them with the values taken from the second sub-array.

---
#### B-3. Create Grid
Dmitri is planning to create his own version of [Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life). As a first step, he wants to create a nested array that represents a 2D grid, with an arbitrary size. (Later, he plans to add code to change the values in the grid according to the rules of the Game of Life.)

* Create a function called `makeGameGrid`
* It should accept an object with a format like this: 

  `{ rows: 3, columns: 4 }`
* It should return a nested array representing a 2D grid. like this:
```javascript
  [ [ "r1c1" "r1c2", "r1c3" "r1c4" ],
    [ "r2c1" "r2c2", "r2c3" "r2c4" ],
    [ "r3c1" "r3c2", "r3c3" "r3c4" ]
  ]
```
**Note**: the array above has been arranged neatly in rows, so that it is easy for you to read. Your array does not need to be formatted like this.
* The output array should contain as many sub-arrays as are defined by the value for `row`
* Each sub-array should contain the number of items that is defined by the value for `column`
* Each entry in each sub-array should be of the format `"rXcY"` where `X` represents the row number and `Y` represents the column number. For example, the first entry in the first sub-array should be `"r1c1"`

---
#### B-4. Statistics Tool
Kinjal has collected data from an experiment. Her detector takes a reading each time a specific event occurs, so she may get a different number of values every day. For her statistical analysis, she wants to calculate the average value for each day, and also calculate the overall average of all readings.

For example: here are the readings for the first three days:

> `Day 1: 12, 14, 52, 37, 5       (average: 24)`  
> `Day 2: 15, 17, 50, 40, 35, 11  (average: 28)`  
> `Day 3: 10, 24, 42, 17          (average: 23.25)`
> 
> `Average of all readings: 25.4`

**Note that this is the average of *all* readings, not the average of the daily averages.**

Kinjal has arranged her data into an object in [JSON format](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON). After the first three days, her data looks like this:

```javascript
const experimental_data = {
  "Day 1": [12, 14, 52, 37, 5],
  "Day 2": [15, 17, 50, 40, 35, 11],
  "Day 3": [10, 24, 42, 17]
}
```

She has asked you to create a new object which will have the format:

```javascript
{
  "Day 1":   24,
  "Day 2":   28,
  "Day 3":   23.25,
  Overall: 25.4
}
```

* Create a function `generateAverages`.
* It should take an object with a format similar to `experimental_data` above
* The number of key-value pairs will be greater than 3
* Use array methods to calculate the averages and return an object with a format similar to the `averages` shown above
* The output object should include the overall average
* **Important**: Do **not** use a loop to complete this task.

### C - Classes
Pyramid Sales is organizing a Christmas party with a Secret Santa activity. Each member of staff will be invited to buy a present for another member of staff, chosen at random. Because business has been good, Pyramid Sales will pay for all the presents, up to a maximum value. Presents for staff members with partners and/or children can be more expensive than presents for staff members who are single.

Each member of staff will receive an email about the person for whom they are to buy a gift. The email message should look something like this:

`Please buy a present for José Rodriguez. José has a partner called Maria, and 2 children. Pyramid Sales will reimburse your purchase up to a maximum value of €42.`

* If José had no spouse or children, the second sentence would have be omitted.
* If he had a spouse but no children, then the second sentence would not have included the section after the comma (`, and 2 children`).
* If José had children but no partner, the second sentence would have read `José has 2 children`.

To calculate the value of the present:
* Everyone can get a present worth up to €25
* If the person has a partner, add €7
* For each child, add €5

José (€25) has a partner (+ €7) and two children (+ 2 * €5 = €10), so his present can be worth up to €42.

***Instructions***
* Create a class called `StaffMember` to represent a staff member
* Add a constructor to initialize instance properties from parameters in the order given below.
* The instance should have the properties: 
    * `first_name` as a string
    * `family_name` as a string
    * `partner_name` as a string (this may be an empty string)
    * `number_of_children` as an integer
* Create the following class methods:
    * `presentValue`: to calculate how much Pyramid Sales is willing to pay for the present (see explanation above)
    * `getMessage`: to return the message that will be sent in the email.This will fill in the values for `first_name`, `last_name`, `partner_name` and `number_of_children` from the properties of the class instance. It should use the instance's `presentValue` method to calculate the maximum value to be mentioned in the message.
  
 **Note**: You can look in the file `testing/test.js` to see exactly what message should be returned for each person, according to their family situation. Remember that there may be several *children* or only one *child*.

  **Example of how your class will be used**

  ```javascript
  > const recipient = new StaffMember("Leonardo", "DiCaprio", "Camila", 0)

  > console.log(recipient.presentValue());
  32

  > console.log(recipient.getMessage());
  Please buy a present for Leonardo DiCaprio. Leonardo has a partner called Camila. Pyramid Sales will reimburse your purchase up to a maximum value of €32.
  ```
---
### D - Problem Solving 
Credit: [Original exercise](https://edabit.com/challenge/xPBFGvKQfRFEyy4vx) created by [Helen Yu](https://edabit.com/user/mNMQvcxKSSvqqMYCH).

For this exercise, keep in mind the following definitions:

A *term* is either an initials or word.  
*initials* = 1 character  
*words* = 2+ characters (no dots allowed)  
A *valid name* is a name written in one of the following ways:

* H. Wells
* H. G. Wells
* Herbert G. Wells
* Herbert George Wells
  
The following names are *invalid*:

- `Herbert` or `Wells` (single names not allowed)
- `H Wells` or `H. G Wells` (initials must end with dot)
- `h. Wells` or `H. wells` or `h. g. Wells` or  `H. G. WELLS` (incorrect capitalization)
- `H. George Wells` (middle name expanded, while first still left as initial)
- `H. G. W`. (last name is not a word)
- `Herb. G. Wells` (dot only allowed after initial, not word)
 
**Rules**
1. The first letter of both initials and words must be capitalized.
2. The other letters in a word must be in lowercase.
3. Initials must end with a dot.
4. Dots must be followed by a space.
5. A name must be either 2 or 3 terms long.
6. If the name is 3 words long, the first and middle name can be expanded, or only the first name only may be expanded. You cannot keep the first name as an initial and expand the middle name only.
7. The last name must be a word (not an initial).

***Instructions***

Your task is to write a function called `validateName` that determines whether a name is valid or not. Return `true` if the name is valid, `false` otherwise.

**Examples**
```javascript
`validName("H. Wells")` ➞ true

`validName("H. G. Wells")` ➞ true

`validName("Herbert G. Wells")` ➞ true

`validName("Herbert")` ➞ false
// Must be 2 or 3 words

`validName("h. Wells")` ➞ false
// Incorrect capitalization

`validName("H Wells")` ➞ false
// Missing dot after initial

`validName("H. George Wells")` ➞ false
// Cannot have: initial first name + word middle name

`validName("H. George W.")` ➞ false
// Last name cannot be initial

`validName("Herb. George Wells")` ➞ false
// Words cannot end with a dot (only initials can)
```


## **Testing with Jest**
* Jest is a node package to provide simple unit tests.

* The `test.js` file and `package.json` file have been provided for you.

* Firstly, run the following command in the appropriate folder to install and save jest as a dependency.
    ```
    npm install --save-dev jest
    ```
* Run the following command in order to run the test. The script has already been added to the `package.json` file.
    ```
    npm run test
    ```
* For more information, you can refer to Jest's [documentation](https://jestjs.io/docs/en/getting-started). If interested read this in detail **after taking the test**.
