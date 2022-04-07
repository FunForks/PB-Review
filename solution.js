// Answer Sheet - all answers should go here 

/* 
except for A-1 and C, you will always write a function that returns values

*/

/* A-1
define and fill an object */
const activities = {
  "Monday": "Swimming",
  "Tuesday": "Book Club",
  "Wednesday":"Gymnastics",
  "Thursday": "Babysitting",
  "Friday": "Debating Society"
};

/* A-2 */
function createNestedArrayFromObject(object) {
  return Object.entries(object)
}

/* B-1 */
const scrambleWords = (sentence) => {
  let punctuation = ""

  if (".!?".includes(sentence.substr(-1))) {
    punctuation = sentence.substr(-1)
    sentence = sentence.slice(0, -1)
  }
  
  const words = sentence.split(/\s+/)
  const scrambled = words.map(word => {
    let letters = [...word]
    letters = letters.reverse()
    const first = letters.pop()
    letters.push(letters.shift())
    letters.unshift(first)

    return letters.join("")
  })

  return scrambled.join(" ") + punctuation
};


/* B-2 */
function convertNestedArrayToObject(nestedArray) {
  const [ keys, values ] = nestedArray

  const reducer = ( object, key, index ) => {
    object[[key]] = values[index]
    return object
  }

  return keys.reduce(reducer, {})
};


/* B-3 */
const makeGameGrid = ({ rows, columns }) => {
  const rowArray = new Array(rows).fill(0)
  const grid = rowArray.map((_, row) => {
    const columnArray = new Array(columns).fill(0)
    return columnArray.map((_, column) => {
      return `r${row + 1}c${column + 1}`
    })
  })

  return grid
};


/* B-4 */
const generateAverages = (object) => {
  const entries = Object.entries(object)
  // [[ "Day 1", [12, 14, 52, 37, 5]], ...]

  const sum = (data) => {
    return 
  }
  const reducer = (accumulator, [day, data]) => {
    let { averages, total, count } = accumulator

    const readings = data.length
    const sum = data.reduce((total, reading) => {
      return total + reading
    }, 0)

    total += sum
    count += readings

    averages[day] = sum / readings

    return {
      averages,
      total,
      count
    }
  }
  
  accumulator = { averages: {}, total: 0, count: 0}
  const result = entries.reduce(reducer, accumulator)

  const { averages, total, count } = result
  averages["Overall"] = total / count

  return averages
};


/* C
write a class */
class StaffMember{
  constructor(first_name, family_name, partner_name, number_of_children) {
    this.first_name = first_name
    this.family_name = family_name
    this.partner_name = partner_name
    this.number_of_children = number_of_children
  }

  presentValue() {
    let value = 25
    if (this.partner_name) {
      value += 7
    }
    value += this.number_of_children * 5

    return value
  }

  getStatus() {
    let status = ""
    if (this.partner_name) {
      status += `${this.first_name} has a partner called ${this.partner_name}`
      if (this.number_of_children) {
        status += ( this.number_of_children === 1 )
                  ? ", and 1 child. "
                  : `, and ${this.number_of_children} children. `
      } else {
        status += ". "
      }
    } else if (this.number_of_children) {
      status += ( this.number_of_children === 1 )
                ? `${this.first_name} has 1 child. `
                : `${this.first_name} has ${this.number_of_children} children. `
    }

    return status
  }

  getMessage() {
    return `Please buy a present for ${this.first_name} ${this.family_name}. ${this.getStatus()}Pyramid Sales will reimburse your purchase up to a maximum value of €${this.presentValue()}.`
  }
};


/* D */
const validateName = (name) => {
  const words = name.split(/\s+/)
  const wordCount = words.length
  if (wordCount < 2 || wordCount > 3) {
    return false
  }

  const allCharactersAreValid = (word) => {
    word = word.toLowerCase()
    for (let char of word) {
      if (!("abcdefghijklmnopqrstuvwxyz.".includes(char))) {
        return false
      }
    }

    return true
  }
 
  let isValid = words.every( word => {
    word = word.trim()
    const length = word.length
    const initial = word[0]
    const rest = word.substring(1)
    const last = word[length - 1]

    if (initial === ".") {
      // Words cannot start with a dot
      return false
    } else if (length < 2) {
      // Initials must be followed by a dot
      return false
    } else if (initial !== initial.toUpperCase()) {
      // Initial letters must be capitals
      return false
    } else if (rest !== rest.toLowerCase()) {
      // All other letters must be lowercase
      return false
    } else if (length > 2 && word.includes(".")) {
      // Non-initials must not contain a dot
      return false
    } else if (!allCharactersAreValid(word)) {
      // Word must contain only letters or dots
      return false
    }

    return true
  })

  if (!isValid) {
    return false
  }

  if ( words[0][1] === "."      // first word is an initial
    && wordCount === 3          // there are three words
    && !words[1].includes(".")  // middle name is not an initial
    ) {
    // Middle name cannot be expanded if first is an initial
    return false
  }

  const lastName = words.pop()
  if (lastName.includes(".")) {
    // Last name cannot be an initial
    return false
  }

  return true
};

// Do not edit or answer below this line
// EDITING MODULE EXPORTS WILL RESULT IN AN AUTOMATIC FAIL
module.exports = {activities, createNestedArrayFromObject, scrambleWords, convertNestedArrayToObject, makeGameGrid, generateAverages, StaffMember, validateName};
