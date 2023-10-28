import Button from "./components/Button";
import {useState, Children, cloneElement} from "react";

/*
* Используется компонент Button, в который пропсами можно передавать цвет кнопки.
* Один из компонентов мы обернем в HOC ColorClick, который внутри себя использует
* метод getColor, возвращающий случайный цвет из списка. Таким образом при нажатии
* на кнопку цвет компонента будет меняться случайным образом. Вторая кнопка, которую
* мы не обернули, не будет вести себя подобным образом.
* */
function App() {
  return <>
    <ColorClick>
      <Button>Button</Button>
    </ColorClick>
    <Button>Button2</Button>
  </>
}
/*
* getColor вернет случайный цвет из списка
* */
const getColor = () => {
  const colors = [
    'black',
    'white',
    'red',
    'blue',
    'green'
  ]

  return colors[Math.round(Math.random() * (colors.length - 1))]
}
/*
* ColorClick - компонент высшего порядка.
* */
const ColorClick = ({children}) => {
  const [color, colorChange] = useState('')
  const onClick = () => colorChange(getColor())

  return (
    <span onClick={onClick}>
      {
        Children.map(
          children, (child) => cloneElement(child, {
            ...child.props,
            color
          })
        )
      }
    </span>
  )
}
export default App;
