import { useEffect, useState } from "react";
function Tabs() {
  const savedTab = localStorage.getItem("activeTab");
  const [toggleTab, setToggleTab] = useState(savedTab ? parseInt(savedTab) : 1);
  useEffect(() => {
    localStorage.setItem("activeTab", toggleTab);
  }, [toggleTab]);
  return (
    <>
      <div id="container">
        <div id="upper">
          <h1 id="title">Tabs Components with React</h1>
          <button
            className={toggleTab === 1 ? "active" : ""}
            onClick={() => setToggleTab(1)}
          >
            TAB1
          </button>
          <button
            className={toggleTab === 2 ? "active" : ""}
            onClick={() => setToggleTab(2)}
          >
            TAB2
          </button>
          <button
            className={toggleTab === 3 ? "active" : ""}
            onClick={() => setToggleTab(3)}
          >
            TAB3
          </button>
          <button
            className={toggleTab === 4 ? "active" : ""}
            onClick={() => setToggleTab(4)}
          >
            TAB4
          </button>
        </div>
        <div id="lower">
          <h2 id="content">Content {toggleTab}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic vitae
            maxime aperiam eum ea necessitatibus deleniti fugiat deserunt, quae
            a eligendi reprehenderit, facere dolorem. Atque quisquam quas
            assumenda voluptates at.
          </p>
        </div>
      </div>
    </>
  );
}
export default Tabs;
