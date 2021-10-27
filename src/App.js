import { useState } from "react";
import './App.css';
import Button from "./components/Button";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";

let currentPath = document.location.pathname;

const menusData = [
  {
    text: "按钮1",
    active: currentPath === '/page1',
    path: '/page1'
  },
  {
    text: "按钮2",
    active: currentPath === '/page2',
    path: '/page2'
  },
  {
    text: "按钮3",
    active: currentPath === '/page3',
    path: '/page3'
  }
]
function App() {
  const [menuList, setMenuList] = useState(menusData);
  // let { id } = useParams()
  const onButtonClicked = (index) => {
    const newMenu = menuList.map((menu, i) => {
      menu.active = index === i
      return menu;
    });
    setMenuList(newMenu)
  }
  const [text, setText] = useState('')
  const onSubmitClick = (value) => {
    // console.log('1')
    setText(value)
  }
  return (
    <Router>
      <div className="App">
        <header>
          <Switch>
            <Route path="/page1">

            </Route>
            <Route path="/page2">

            </Route>
            <Route path="/page3">
              <div className="subHeader">
                {text}
              </div>
            </Route>
          </Switch>
        </header>
        <div className="container">
          <aside>
            {
              menuList.map((menu, index) => {
                return (
                  <Button
                    path={menu.path}
                    key={menu.text}
                    index={index}
                    isActive={menu.active}
                    handleCLick={onButtonClicked}
                  >
                    {menu.text}
                  </Button>
                )
              })
            }
          </aside>
          <main>
            <Switch>
              <Route path="/page1">
                <Page1/>
              </Route>
              <Route path="/page2">
                <Page2/>
              </Route>
              <Route path="/page3">
                <Page3 submitClick={onSubmitClick}/>
              </Route>
            </Switch>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
