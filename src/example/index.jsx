import { Modal } from "hrnet-wealth-modal";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div className="App">
      <button onClick={openModal}>Click Me</button>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        backgroundColor="#16a92069"
        colorModal="rgba(215, 246, 207, 1)"
        iconModal="success"
        borderModal="40px"
        content="Hello world!"
        contentcolor="green"
        shadowModal="0 5px 16px rgba(18, 39, 3, 1)"
        fontSizeModal="2rem"
      />
    </div>
  );
}

export default App;