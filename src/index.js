export default function (Alpine) {
  Alpine.directive('skeleton', (el, { expression }, { evaluateLater, effect }) => {
    if (!document.getElementById("pulse-style")) {
      const style = document.createElement('style')
      style.id = 'pulse-style';
      style.textContent = `
    @keyframes pulse-animation {

        0%,
        100% {
            opacity: 1;
        }

        50% {
            opacity: 0.5;
        }
    }
    `
    }
    document.head.appendChild(style)
    let getValue = evaluateLater(expression)
    effect(() => {
      getValue(value => {
        if (value) {
          el.style.animation = "pulse-animation 2s cubic-bezier(0.2, 0, 0.4, 1) infinite "
          el.style.backgroundColor = "gray"
          el.style.filter = "blur(4px)"
        } else {
          el.style.animation = ""
          el.style.backgroundColor = ""
          el.style.filter = ""
        }
      })

    })
  })
}
