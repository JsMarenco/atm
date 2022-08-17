export const changeTitle = (title: string) => {
  document.title = title
}

export const getKeyPressed = (e: KeyboardEvent) => {
  const numbersCode = [
    { key: "1", code: 49 },
    { key: "2", code: 50 },
    { key: "3", code: 51 },
    { key: "4", code: 52 },
    { key: "5", code: 53 },
    { key: "6", code: 54 },
    { key: "7", code: 55 },
    { key: "8", code: 56 },
    { key: "9", code: 57 },
    { key: "0", code: 48 },
    { key: "1", code: 97 },
    { key: "2", code: 98 },
    { key: "3", code: 99 },
    { key: "4", code: 100 },
    { key: "5", code: 101 },
    { key: "6", code: 102 },
    { key: "7", code: 103 },
    { key: "8", code: 104 },
    { key: "9", code: 105 },
    { key: "0", code: 96 },
  ]

  const enterCode = { key: "Enter", code: 13 }
  const backspaceCode = { key: "Backspace", code: 8 }

  const deleteCode = { key: "Delete", code: 46 }

  const arrowsCode = [
    { key: "ArrowLeft", code: 37 },
    { key: "ArrowRight", code: 39 },
  ]

  const keys = [...numbersCode, enterCode, backspaceCode, deleteCode, ...arrowsCode]

  const keyPressed = keys.find(key => key.code === e.keyCode)

  if (keyPressed) {
    return keyPressed
  }
}

// create a function that avoid that user can go back to previous page
export const preventBack = () => {
  window.history.pushState(null, "", window.location.href)
  window.onpopstate = function () {
    window.history.pushState(null, "", window.location.href)
  }
}

export const randomAccountBalance = () => {
  const random = Math.floor(Math.random() * 100)

  return random
}

export const saveInLocalStorage = (key: string, value: unknown) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const changeBackground = (background: string) => {
  document.body.style.background = background
}

export const generateRandomCardNumber = () => {
  let cardNumer = ""

  for (let i = 0; i < 16; i++) {
    const random = Math.floor(Math.random() * 10)
    cardNumer += random
  }

  // split the string into an array of 4 numbers and add a dash between each number
  const separatedString = cardNumer.split("").map((number, index) => {
    if (index % 4 === 0 && index !== 0) {
      return `-${number}`
    }

    return number
  })

  const finalString = separatedString.join("")

  return finalString
}