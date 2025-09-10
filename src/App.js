import Modal from "./lib/components/Modal";
import { useState } from "react";

function App() {
  //use state true/false show modal
  const [showModal, setShowModal] = useState(false);

  //open modal
  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div className="App">
      <button onClick={openModal}>Click Me</button>
      <Modal
        //show modal
        showModal={showModal}
        //close modal
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