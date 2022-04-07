const { activities, createNestedArrayFromObject, scrambleWords, convertNestedArrayToObject, makeGameGrid, generateAverages, StaffMember, validateName } = require("../index");

describe('After-school Activities object', () => {
    const propsToCheck = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const values = ['Swimming', 'Book Club', 'Gymnastics', 'Babysitting', 'Debating Society'];
    propsToCheck.forEach(prop => {
        test(`has ${prop} property`, () => {
            expect(activities).toHaveProperty(prop);
        });
    });
    propsToCheck.forEach((prop, index) => {
        const expected = values[index]
        const actual = activities[prop]
        test(`${prop} property has value ${expected}`, () => {
            expect(expected).toBe(actual);
        });
    });
});

describe('createNestedArrayFromObject should', () => {
    test.each`
    input| expected 
    ${{
        "Monday": "Swimming",
        "Tuesday": "Book Club",
        "Wednesday":"Gymnastics",
        "Thursday": "Babysitting",
        "Friday": "Debating Society"
      }} | ${[ ["Monday", "Swimming"],
      ["Tuesday", "Book Club"],
      ["Wednesday", "Gymnastics"],
      ["Thursday", "Babysitting"],
      ["Friday", "Debating Society"]
    ]}
    ${{ "name": "John", "age": 20 }} | ${[["name", "John"], ["age", 20]]}

    `('convert object $input into a nested array with pairs of [property, value]', ({ input, expected }) => {
        expect(createNestedArrayFromObject(input)).toStrictEqual(expected);
    });
});

describe('scrambleWords should', () => {
    test.each`
    input| expected 
    ${"Adnama syas tnahk you for yuor hlep!"} | ${"Amanda says thank you for your help!"}
    ${"Legnor wdros are plbabory hedrar to raed."} | ${"Longer words are probably harder to read."}
    `('reverse all words in $input and restore first and last letters to be $expected', ({ input, expected }) => {
        expect(scrambleWords(input)).toBe(expected);
    });
});

/* @andredci added missing test for convertArraysToObject (Oct 15th 2020)*/
describe('convertNestedArrayToObject should', () => {
    test.each`
    input | expected 
    ${[["Berlin", "Hamburg", "Munich","Stuttgart","Duesseldorf"],["891.68 km2", "755.3 km2","310.7 km2","207.35 km2","217.41 km2"]]} | ${{
        Berlin: '891.68 km2',
        Hamburg: '755.3 km2',
        Munich: '310.7 km2',
        Stuttgart: '207.35 km2',
        Duesseldorf: '217.41 km2'
      }}
    ${[ ["Peter",  "Paul",     "Mary"],
    ["Tennis", "Swimming", "Football"],   
  ]} | ${{ Peter: 'Tennis', Paul: 'Swimming', Mary: 'Football' }}
    `('take a nested array and generate the object $expected', ({ input, expected }) => {
            expect(convertNestedArrayToObject(input)).toStrictEqual(expected);
        });
});

describe('makeGameGrid should', () => {
    test.each`
    dimensions | expected 
    ${{ rows: 0, columns: 0 }}| ${[]}
    ${{ rows: 3, columns: 4 }}| ${[
        [
          "r1c1",
          "r1c2",
          "r1c3",
          "r1c4"
        ],
        [
          "r2c1",
          "r2c2",
          "r2c3",
          "r2c4"
        ],
        [
          "r3c1",
          "r3c2",
          "r3c3",
          "r3c4"
        ]
      ]}
    ${{ rows: 1, columns: 1 }} | ${[["r1c1"]]}
    `('create a grid with dimensions $dimensions and populated with strings of the format "rXcY"', ({ dimensions, expected }) => {
            expect(makeGameGrid(dimensions)).toStrictEqual(expected);
        });
});

describe('generateAverages should', () => {
    test.each`
    input| expected 
    ${{
        "Day 1": [12, 14, 52, 37, 5],
        "Day 2": [15, 17, 50, 40, 35, 11],
        "Day 3": [10, 24, 42, 17]
      }} | ${{
        "Day 1":   24,
        "Day 2":   28,
        "Day 3":   23.25,
        Overall: 25.4
      }}
    `('calculate average of each day, and also overall average in the given object to $expected', ({ input, expected }) => {
            expect(generateAverages(input)).toStrictEqual(expected);
        });
});

//class - method presentValue
describe('StaffMember class should', () => {
    test.each`
    first_name|family_name|partner_name|number_of_children|expected
    ${"Bruce"} | ${"Willis"} | ${"Emma"} | ${5} | ${57}  
    ${"Lisa"} | ${"Kudrow"} | ${"Michael"} | ${1} | ${37}
    ${"Leonardo"} | ${"DiCaprio"} | ${"Camila"} | ${0} | ${32} 
    ${"Diane"} | ${"Keaton"} | ${""} | ${2} | ${35}
    ${"Emma"} | ${"Watson"} | ${""} | ${0} | ${25}
    `('return the value: $expected', ({ first_name, family_name, partner_name, number_of_children, expected }) => {
        expect(new StaffMember(first_name, family_name, partner_name, number_of_children).presentValue()).toStrictEqual(expected);
    });
});

// class - method getMessage
describe('StaffMember class should', () => {
    test.each`
    first_name | family_name | partner_name | number_of_children | expected
    ${"Bruce"} | ${"Willis"} | ${"Emma"} | ${5} | ${"Please buy a present for Bruce Willis. Bruce has a partner called Emma, and 5 children. Pyramid Sales will reimburse your purchase up to a maximum value of €57."} 
    ${"Lisa"} | ${"Kudrow"} | ${"Michael"} | ${1} | ${"Please buy a present for Lisa Kudrow. Lisa has a partner called Michael, and 1 child. Pyramid Sales will reimburse your purchase up to a maximum value of €37."} 
    ${"Leonardo"} | ${"DiCaprio"} | ${"Camila"} | ${0} | ${"Please buy a present for Leonardo DiCaprio. Leonardo has a partner called Camila. Pyramid Sales will reimburse your purchase up to a maximum value of €32."} 
    ${"Diane"} | ${"Keaton"} | ${""} | ${2} | ${"Please buy a present for Diane Keaton. Diane has 2 children. Pyramid Sales will reimburse your purchase up to a maximum value of €35."} 
    ${"Emma"} | ${"Watson"} | ${""} | ${0} | ${"Please buy a present for Emma Watson. Pyramid Sales will reimburse your purchase up to a maximum value of €25."} 
    `('return the description: $expected', ({ first_name, family_name, partner_name, number_of_children, expected }) => {
        expect(new StaffMember(first_name, family_name, partner_name, number_of_children).getMessage()).toStrictEqual(expected);
    });
});

/* Validate name check */
test("both initials and words must be capitalized", () => {
    expect(validateName("H. Wells")).toBe(true);
    expect(validateName("H. G. Wells")).toBe(true);
    expect(validateName("Herbert G. Wells")).toBe(true);
    expect(validateName("Herbert George Wells")).toBe(true);
    expect(validateName("h. Wells")).toBe(false);
    expect(validateName("H. G. wells")).toBe(false);
    expect(validateName("herbert G. Wells")).toBe(false);
    expect(validateName("Herbert george Wells")).toBe(false);
});

test("only first letter should be capitalized", () => {
    expect(validateName("H. G. WELLS")).toBe(false);
    expect(validateName("HERBERT G. We11s")).toBe(false);
})

test("initials must end with a dot", () => {
    expect(validateName("H Wells")).toBe(false);
    expect(validateName("H. G Wells")).toBe(false);
    expect(validateName("Herbert G Wells")).toBe(false);
});

test("only initials can be followed by a dot", () => {
    expect(validateName("Herbert Geo. Wells")).toBe(false);
    expect(validateName("Herb. G. Wells")).toBe(false);
});

test("a name must be either 2 or 3 terms long", () => {
    expect(validateName("Wells")).toBe(false);
    expect(validateName("H.")).toBe(false);
    expect(validateName("Herbert")).toBe(false);
    expect(validateName("Herbert George Meredith Wells")).toBe(false);
});

test("first initial cannot have second name in full", () => {
    expect(validateName("H. George Wells")).toBe(false);
})

test("last name cannot be initial", () => {
    expect(validateName("H. G. W.")).toBe(false);
    expect(validateName("Herbert George W.")).toBe(false);
})

test("only letters, spaces and dots allowed", () => {
    expect(validateName("4. G. Wells")).toBe(false);
    expect(validateName("Herbert George We11s")).toBe(false);
    expect(validateName("Herbert-George We11s")).toBe(false);
})

test("dots are not allowed in the middle of words", () => {
    expect(validateName("H.G. Wells")).toBe(false);
    expect(validateName("H.. G. Wells")).toBe(false);
    expect(validateName("Herbert.George We11s")).toBe(false);
})
