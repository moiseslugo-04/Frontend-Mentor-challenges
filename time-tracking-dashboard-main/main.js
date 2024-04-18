const buttons = document.querySelectorAll('button')
const cards = document.querySelectorAll('.grid-item')

const data = {
  work: {
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  play: {
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  study: {
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  exercise: {
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  social: {
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  'self-care': {
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
}
const events = { daily, weekly, monthly }

buttons.forEach((btn) => {
  buttons[0].classList.add('focus')
  btn.addEventListener('click', () => {
    buttons.forEach((btn) => btn.classList.remove('focus'))
    btn.classList.add('focus')
    events[btn.getAttribute('data-btn')]()
  })
})
function daily() {
  cards.forEach((card, index) => (index !== 0 ? updateTime(card, 'daily') : ''))
}

function weekly() {
  cards.forEach((card, index) =>
    index !== 0 ? updateTime(card, 'weekly') : ''
  )
}

function monthly() {
  cards.forEach((card, index) =>
    index !== 0 ? updateTime(card, 'monthly') : ''
  )
}

function updateTime(card, time) {
  let name = card.classList.item(1)
  const timeCurrent = card?.querySelector('.current')
  const timePrevious = card?.querySelector('.previous')
  const { current, previous } = data[name].timeframes[time]
  timeCurrent.innerText = current
  timePrevious.innerText = previous
}
