const options = [
  //length //value in m
  {value: 0, text: "Select", type: "length", icon: ""},
  {value: 110, text: "Football Fields", type: "length", icon: "&#127944;"},
  {value: 28.7, text: "Basketball Courts", type: "length", icon: "&#127936;"},
  {value: 105, text: "Soccer Pitches", type: "length", icon: "&#9917;"},
  {value: 2.06, text: "Lebron James", type: "length", icon: "&#9977;"},
  {value: 1.7, text: "Lionel Messi", type: "length", icon: "&#127939;"},
  {value: 10.668, text: "School Buses", type: "length", icon: "&#128652;"},
  {value: 4.4805, text: "Cars", type: "length", icon: "&#128652;"},
  {value: 42.11, text: "Boeing 737s", type: "length", icon: "&#128747;"},
  {value: 300, text: "Eifell Towers", type: "length", icon: "&#128508;"},
  {value: 8848.9, text: "Mt. Everests", type: "length", icon: "&#128507;"},
  {value: 12.192, text: "Palm Trees", type: "length", icon: "&#127796;"},
  {value: 1.106, text: "Guitars", type: "length", icon: "&#127928;"},
  {value: 1.5, text: "Pianos", type: "length", icon: "&#127929;"},
  {value: 1.067, text: "Baseball Bats", type: "length", icon: "&#9918;"}, //
  {value: 0.2032, text: "Bananas", type: "length", icon: "&#127820;"},
  {value: 0.1524, text: "Hot Dogs", type: "length", icon: "&#127789;"},
  {value: .6, text: "Baguettes", type: "length", icon: "&#129366;"},
  {value: .015, text: "Honeybees", type: "length", icon: "&#128029;"},
  {value: 32, text: "Blue Whales", type: "length", icon: "&#128011;"},
  {value: 5.5, text: "Giraffes", type: "length", icon: "&#129426;"},
  {value: 13, text: "T. Rexes (Length)", type: "length", icon: "&#129430;"},

  // mass in kgs
  {value: 0, text: "Select", type: "mass", icon: ""},
  {value: 4.5, text: "Cats", type: "mass", icon: "&#128049;"},
  {value: 30, text: "Golden Retreivers", type: "mass", icon: "&#128021;"},
  {value: 113, text: "Pandas", type: "mass", icon: "&#128060;"},
  {value: 226.8, text: "Gorillas", type: "mass", icon: "&#129421;"},
  {value: 2.58548, text: "Chickens", type: "mass", icon: "&#128020;"},
  {value: 5000, text: "Helicopters", type: "mass", icon: "&#128641;"},
  {value: 1500, text: "Cars", type: "mass", icon: "&#128664;"},
  {value: 18143, text: "Fire Trucks", type: "mass", icon: "&#128658;"}, //
  {value: 12, text: "Watermelons", type: "mass", icon: "&#127817;"},
  {value: .118, text: "Bananas", type: "mass", icon: "&#127820;"},
  {value: .102, text: "Apples", type: "mass", icon: "&#127822;"},
  {value: .952, text: "Pineapples", type: "mass", icon: "&#127821;"},
  {value: 3.9, text: "Gallons of Milk", type: "mass", icon: "&#129371;"},
  {value: 5.972e+24, text: "Earths", type: "mass", icon: "&#127758;"},
  {value: 7.347e+22, text: "Moons", type: "mass", icon: "&#127769;"},
  {value: 2e+30, text: "Suns", type: "mass", icon: "&#127774;"},
  {value: .43, text: "Soccer Balls", type: "mass", icon: "&#9917;"},
  {value: .7, text: "Basketballs", type: "mass", icon: "&#127936;"},
  {value: .275, text: "Xbox Controllers", type: "mass", icon: "&#127918;"},
  {value: .0025, text: "Pennies", type: "mass", icon: "&#128176;"},





  //volume in liters
  {value: 0, text: "Select", type: "volume", icon: ""},
  {value: 7.127, text: "Basketballs", type: "volume", icon: "&#127936;"},
  {value: 6.075, text: "Soccer Balls", type: "volume", icon: "&#9917;"},
  {value: 350, text: "Bathtubs", type: "volume", icon: "&#128705;"},
  {value: 247.936, text: "Shopping Carts", type: "volume", icon: "&#128722;"},
  {value: 2500000, text: "Olympic Swimming Pools", type: "volume", icon: "&#127946;"},
  {value: .473, text: "Starbucks Grande", type: "volume", icon: "&#9749;"},
  {value: .591, text: "Starbucks Venti", type: "volume", icon: "&#9749;"},


]

const units = [
  // Mass //standard in kg
  { name: "gram", standard: 0.001, type: "mass" },
  { name: "g", standard: 0.001, type: "mass" },
  { name: "kilogram", standard: 1, type: "mass" },
  { name: "kg", standard: 1, type: "mass" },
  { name: "milligram", standard: 0.000001, type: "mass" },
  { name: "mg", standard: 0.000001, type: "mass" },
  { name: "metric ton", standard: 1000, type: "mass" },
  { name: "pound", standard: 0.453592, type: "mass" },
  { name: "lb", standard: 0.453592, type: "mass" },
  { name: "ounce", standard: 0.0283495, type: "mass" },
  { name: "oz", standard: 0.0283495, type: "mass" },
  { name: "ton", standard: 907.185, type: "mass" },

  // Length //standard in m
  { name: "meter", standard: 1, type: "length" },
  { name: "m", standard: 1, type: "length" },
  { name: "kilometer", standard: 1000, type: "length" },
  { name: "km", standard: 1000, type: "length" },
  { name: "centimeter", standard: 0.01, type: "length" },
  { name: "cm", standard: 0.01, type: "length" },
  { name: "millimeter", standard: 0.001, type: "length" },
  { name: "mm", standard: 0.001, type: "length" },
  { name: "kilometer", standard: 1000, type: "length" },
  { name: "km", standard: 1000, type: "length" },
  { name: "mile", standard: 1609.34, type: "length" },
  { name: "mi", standard: 1609.34, type: "length" },
  { name: "yard", standard: 0.9144, type: "length" },
  { name: "yd", standard: 0.9144, type: "length" },
  { name: "foot", standard: 0.3048, type: "length" },
  { name: "feet", standard: 0.3048, type: "length" },
  { name: "ft", standard: 0.3048, type: "length" },
  { name: "inch", standard: 0.0254, type: "length" },
  { name: "inches", standard: 0.0254, type: "length" },
  { name: "in", standard: 0.0254, type: "length" },

  // Volume // standard in L 
  { name: "liter", standard: 1, type: "volume" },
  { name: "l", standard: 1, type: "volume" },
  { name: "milliliter", standard: 0.001, type: "volume" },
  { name: "ml", standard: 0.001, type: "volume" },
  { name: "gallon", standard: 3.78541, type: "volume" },
  { name: "gal", standard: 3.78541, type: "volume" },
  { name: "fluid ounce", standard: 0.0295735, type: "volume" },
  { name: "fl oz", standard: 0.0295735, type: "volume" },
];

const unitPattern = /(?:\d+)\s*([a-zA-z]+)/
const numPattern = /\d+/
let unit;
let info;
let num;

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    const a = window.getSelection()
    const select = a.getRangeAt(0)
    const rect = select.getBoundingClientRect()

    const temp = request.message
    const unpacked = temp.match(unitPattern)

    const div = document.createElement("div")
    div.style.width = "275px"
    div.style.height = "160px"
    div.style.boxShadow = "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
    div.style.flexDirection = "column"
    div.style.justifyContent = "space-evenly"
    div.style.alignItems = "center"
    div.style.backgroundColor = "white"
    div.style.opacity = 1
    div.style.zIndex = 9999999999
    div.style.position = "absolute"
    div.style.display = "flex"
    div.id = "visualization-content"
    div.style.top = `${rect.bottom + window.scrollY + 5}px`
    div.style.left = `${rect.right + window.scrollX - 10}px`
    div.tabIndex = 0
    document.body.append(div)

    const header = document.createElement("div")
    header.style.width = "100%"
    header.style.height = "25%"
    header.style.display = "flex"
    header.style.justifyContent = "space-between"
    header.style.alignItems = "center"
    header.style.backgroundColor = "#87CEEB"
    div.appendChild(header)

    const title = document.createElement("p")
    title.textContent = "FOR SCALE"
    title.style.fontSize = "16px"
    title.style.fontFamily = "monospace"
    title.style.margin = 0
    title.style.marginLeft = "15px"
    header.appendChild(title)

    const exit = document.createElement("button")
    exit.innerHTML = "x"
    exit.style.border = 0
    exit.style.marginRight = "10px"
    exit.style.backgroundColor = "#87CEEB"
    exit.style.cursor = "pointer"
    header.appendChild(exit)

    const p = document.createElement("p")
    p.style.textAlign = "center"
    p.style.fontSize = "18px"
    p.style.height = "15%"
    p.style.margin = 0
    p.style.marginTop = "10px"
    p.style.fontFamily = "monospace"
    div.appendChild(p)

    const cont = document.createElement("div")
    div.appendChild(cont)

    const container = document.createElement("div")
    container.style.display = "flex"
    container.style.width = "90%"
    container.style.justifyContent = "space-around"
    container.style.alignItems = "center"
    container.style.height= "40%"

    const number = document.createElement("p")
    number.textContent = "?"
    number.style.fontSize = "20px"
    number.style.alignSelf = "center"
    number.style.width = "100%"
    number.style.height = "35%"
    number.style.margin = 0
    number.style.textAlign = "center"
    number.style.fontWeight = "bold"
    number.style.marginTop = "10px"
    number.style.fontFamily = "monospace"
    div.appendChild(number)

    const dropdown = document.createElement("select") 
    dropdown.style.width = "70%"
    dropdown.style.border = 0
    dropdown.style.borderBottom = "1px solid #add8e6 "
    dropdown.style.fontSize = "18px"
    dropdown.style.textAlign = "center"
    dropdown.style.fontFamily = "monospace"
    dropdown.style.cursor = "pointer"
    dropdown.id = "dropdown"
    div.appendChild(dropdown)

    const iconContainer = document.createElement("div")
    iconContainer.style.width = "70%"
    iconContainer.style.height = "25%"
    iconContainer.style.display = "flex"
    iconContainer.style.justifyContent = "space-evenly"
    iconContainer.style.alignItems = "flex-start"
    div.appendChild(iconContainer)

    const emoji = document.createElement("p")
    emoji.style.textAlign = "center"
    emoji.style.fontSize = "18px"
    emoji.style.margin = 0
    iconContainer.appendChild(emoji)

    const input = document.createElement("input")
    const measure = document.createElement("select")

    if (unpacked != null) {
      unit = unpacked[1].toLowerCase()
      num = Number(temp.match(numPattern))
      p.textContent = `${num}${unit} is:`

      setDropdowns(dropdown)
      div.removeChild(cont)
    } else {
      p.style.fontSize = "14px"
      p.textContent = "Error. Enter manually:"

      cont.style.display = "flex"
      cont.style.width = "60%"
      cont.style.justifyContent = "space-around"
      cont.style.alignItems = "center"
      cont.style.height= "20%"
      cont.style.marginTop = "10px"

      input.style.width = "50%"
      input.style.height = "90%"
      input.placeholder = "Ex: 40"
      input.type = "number"
      input.min = 0
      input.style.textAlign = "center"
      input.style.border = "solid black 1px"
      input.style.fontSize = "14px"
      cont.appendChild(input)

      input.addEventListener("change", () => {
        num = input.value
      })

      measure.style.width = "40%"
      measure.style.height = "100%"
      measure.style.textAlign = "center"
      measure.style.fontSize = "14px"


      cont.appendChild(measure)

      const unitsWithType = [
        { symbol: "g", type: "mass" },
        { symbol: "kg", type: "mass" },
        { symbol: "mg", type: "mass" },
        { symbol: "lb", type: "mass" },
        { symbol: "oz", type: "mass" },
        { symbol: "m", type: "length" },
        { symbol: "km", type: "length" },
        { symbol: "cm", type: "length" },
        { symbol: "mm", type: "length" },
        { symbol: "mi", type: "length" },
        { symbol: "yd", type: "length" },
        { symbol: "ft", type: "length" },
        { symbol: "in", type: "length" },
        { symbol: "l", type: "volume" },
        { symbol: "ml", type: "volume" },
        { symbol: "gal", type: "volume" },
        { symbol: "fl oz", type: "volume" },
      ];

      unitsWithType.forEach(item => {
        const option = document.createElement("option")
        option.text = item.symbol
        option.value = item.symbol
        measure.appendChild(option)
      })

      measure.addEventListener("change", () => {
        const selected = measure.options[measure.selectedIndex]
        const value = selected.value

        unit = value
        setDropdowns(dropdown)
      })
    }

    dropdown.addEventListener("change", () => {
      const selected = dropdown.options[dropdown.selectedIndex]
      const value = selected.value
        
      number.textContent = `~${(num * info.standard / value).toPrecision(2)}`
    
      emoji.innerHTML = selected.title
    })

    const thing = document.getElementById("visualization-content") 

    exit.addEventListener("click", () => {
      document.body.removeChild(thing)
    })

    document.body.addEventListener("click", (event) => {
      if (!thing.contains(event.target)) {
        document.body.removeChild(thing)
      }
    })
  }
);

//mg and lb have give the wrong set of options


const setDropdowns = (select) => {

  while (select.options.length > 0) {
    select.remove(0)
  }

  
  for (var i = 0; i < units.length; i++) {
    if (units[i].name === unit || units[i].name === unit.replace("s", "")) {
      info = units[i]
    }
  }

  options.map(option => {
    if (option.type === info.type) {
      const dropdownOption = document.createElement("option")
      dropdownOption.text = option.text
      dropdownOption.value = option.value
      dropdownOption.title = option.icon
      select.appendChild(dropdownOption)
    }
  })
}


